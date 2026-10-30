import test from "node:test";
import assert from "node:assert/strict";
import * as T from "three";
import { createResidentNavigation } from "../src/resident-navigation.js";
import { collectSceneryNavigation } from "../src/scenery-navigation.js";
import { createResidentLife } from "../src/resident-life.js";
const nodes = [{ id: "home", x: 0, z: 0 }];
const house = { id: "house", minX: -1, maxX: 1, minZ: -1, maxZ: 1 };
test("planned routes detour around scenery with clearance and never cut across it", () => {
  const nav = createResidentNavigation({
    nodes,
    links: [],
    obstacles: [house],
  });
  const path = nav.route({ x: -4, z: 0 }, { x: 4, z: 0 });
  assert.ok(path?.length > 2, "must plan a real detour, not a straight line");
  assert.ok(path.some((point) => Math.abs(point.z) > 1.45));
  for (let i = 1; i < path.length; i++)
    assert.ok(nav.clearSegment(path[i - 1], path[i]));
  assert.equal(
    nav.route({ x: -4, z: 0 }, { x: 0, z: 0 }),
    null,
    "blocked goals must not fall back to walking through a house",
  );
  assert.ok(nav.walkable(nav.nearest({ x: 0, z: 0 }, "home")));
});
test("residents actually finish a planned scenery detour without teleporting or penetrating", () => {
  const life = createResidentLife({
    nodes,
    links: [],
    obstacles: [house],
    count: 1,
    random: () => 0.1,
  });
  const actor = life.actors[0],
    goal = { x: 3, z: 0 };
  Object.assign(actor, {
    x: -3,
    z: 0,
    state: "walking",
    route: life.navigation.route({ x: -3, z: 0 }, goal),
    routeIndex: 1,
    target: { node: "home", point: goal, state: "waiting" },
  });
  let arrived = false;
  for (let i = 0; i < 300; i++) {
    const before = { x: actor.x, z: actor.z };
    life.update(0.05);
    assert.ok(life.navigation.walkable(actor));
    assert.ok(Math.hypot(actor.x - before.x, actor.z - before.z) <= 0.0476);
    if (Math.hypot(actor.x - goal.x, actor.z - goal.z) < 0.05) {
      arrived = true;
      break;
    }
  }
  assert.ok(
    arrived,
    "avoidance must make progress rather than freeze at the obstacle",
  );
});
test("rivers can only be crossed using the actual footbridge corridor", () => {
  const nav = createResidentNavigation({
    nodes,
    links: [],
    obstacles: [
      {
        id: "river",
        kind: "river",
        radius: 0.5,
        points: [
          { x: -6, z: 0 },
          { x: 6, z: 0 },
        ],
      },
    ],
    crossings: [{ island: "home", a: { x: 0, z: -1.5 }, b: { x: 0, z: 1.5 } }],
  });
  assert.equal(nav.walkable({ x: 3, z: 0 }), false);
  assert.equal(nav.walkable({ x: 0, z: 0 }), true);
  const path = nav.route({ x: -3, z: -2 }, { x: 3, z: 2 });
  assert.ok(path);
  for (let i = 1; i < path.length; i++)
    assert.ok(nav.clearSegment(path[i - 1], path[i]));
});
test("scene footprints follow translated, rotated and scaled geometry", () => {
  const island = new T.Group();
  island.position.set(12, 0, 4);
  const building = new T.Group();
  building.position.set(2, 0, -1);
  building.rotation.y = Math.PI / 4;
  building.scale.setScalar(1.5);
  building.userData.walkObstacle = true;
  const mesh = new T.Mesh(
    new T.BoxGeometry(2, 2, 1),
    new T.MeshBasicMaterial(),
  );
  mesh.position.y = 1;
  building.add(mesh);
  island.add(building);
  const { obstacles } = collectSceneryNavigation(
    { home: island },
    [],
    [],
    0.67,
  );
  assert.equal(obstacles.length, 1);
  assert.ok(obstacles[0].minX < 14 && obstacles[0].maxX > 14);
  assert.ok(obstacles[0].minZ < 3 && obstacles[0].maxZ > 3);
  const nav = createResidentNavigation({
    nodes: [{ id: "home", x: 12, z: 4 }],
    links: [],
    obstacles,
  });
  assert.equal(nav.walkable({ x: 14, z: 3 }), false);
  assert.equal(nav.walkable({ x: 10, z: 6 }), true);
  mesh.geometry.dispose();
  mesh.material.dispose();
});

test('a blocked walker waits three seconds before rerouting and retains its goal', () => {
  const life = createResidentLife({nodes, links: [], obstacles: [house], count: 1, random: () => .1});
  const actor = life.actors[0], goal = {x: 3, z: 0};
  Object.assign(actor, {x: -3, z: 0, state: 'walking', activity: 'wander',
    route: [goal], routeIndex: 0, target: {node: 'home', point: goal, state: 'waiting'}});
  let firstBlocked = null, replanned = false, arrived = false;
  for (let frame = 0; frame < 500; frame++) {
    life.update(.05);
    assert.ok(life.navigation.walkable(actor));
    if (actor.yielding && firstBlocked === null) firstBlocked = life.elapsed;
    if (actor.route.length > 1 && !replanned) {
      assert.ok(life.elapsed - firstBlocked >= 2.95, 'do not reroute during a brief pause');
      assert.deepEqual(actor.target.point, goal, 'keep the original destination');
      replanned = true;
    }
    if (Math.hypot(actor.x - goal.x, actor.z - goal.z) < .05) { arrived = true; break; }
  }
  assert.ok(replanned && arrived, 'a sustained stall must produce a usable detour');
});
