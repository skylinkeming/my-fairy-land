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

test('batching static scenery preserves world bounds and collected collision footprints', async () => {
  const {batchExpandedScenery} = await import('../src/expanded-scenery.js');
  const scene = new T.Scene(), island = new T.Group(), dressing = new T.Group();
  island.position.set(15, 0, -7); island.rotation.y = .3;
  dressing.name = 'expanded-island-dressing';
  scene.add(island); island.add(dressing);
  const material = new T.MeshBasicMaterial({color: '#b38c60'});
  for (let i = 0; i < 4; i++) {
    const prop = new T.Mesh(new T.BoxGeometry(1, 2, 1), material);
    prop.position.set(i * 2, 1, i % 2); prop.rotation.y = i * .2;
    prop.userData.walkObstacle = true;
    dressing.add(prop);
  }
  const data = collectSceneryNavigation({home: island}, [], [], 0);
  const before = new T.Box3().setFromObject(dressing, true);
  batchExpandedScenery(scene);
  const after = new T.Box3().setFromObject(dressing, true);
  assert.ok(before.min.distanceTo(after.min) < .00001 && before.max.distanceTo(after.max) < .00001);
  assert.equal(dressing.children.length, 1, 'same-material props share one draw call');
  assert.equal(data.obstacles.length, 4, 'individual collision footprints survive in navigation data');
});

test('natural scenery fills different depths while preserving bridge corridors and prop spacing', async () => {
  const {createNaturalLayout} = await import('../src/scenery-layout.js');
  const home = {id: 'home', x: 0, z: 0}, todo = {id: 'todo', x: -25, z: 0};
  const options = {id: 'home', node: home, nodes: [home, todo], obstacles: [house],
    crossings: [{a:{x:0,z:2},b:{x:0,z:5}}]};
  const plan = createNaturalLayout(options);
  assert.equal(plan.pockets.length, 8);
  assert.ok(plan.landmark, 'reserve a distinct main scene');
  assert.ok(plan.groves.length<=24,'woodland stays local instead of filling the whole island');
  assert.ok(plan.groves.every(tree=>Math.hypot(tree.x-plan.landmark.x,tree.z-plan.landmark.z)>=plan.landmark.radius+1.1),'trees do not cover the main scene');
  assert.deepEqual(plan.pockets, createNaturalLayout(options).pockets, 'landscape does not reshuffle on every refresh');
  const radii = plan.pockets.map(point => Math.hypot(point.x,point.z));
  assert.ok(Math.max(...radii)-Math.min(...radii)>2, 'avoid placing every prop on one circular perimeter');
  for(const point of [...plan.pockets,...plan.groves]) {
    assert.ok(!plan.nearExit(point.x,point.z), 'keep a broad, continuous bridge approach');
    assert.ok(Math.hypot(point.x,Math.max(2-point.z,0,point.z-5))>=1.3, 'keep footbridge endpoints and crossing corridors free of trees');
    assert.ok(Math.hypot(point.x,point.z)<10.66);
  }
  for(let i=0;i<plan.pockets.length;i++) for(let j=i+1;j<plan.pockets.length;j++) {
    assert.ok(Math.hypot(plan.pockets[i].x-plan.pockets[j].x,plan.pockets[i].z-plan.pockets[j].z)>3.25);
  }
});

test('dense woodland blocks tree trunks while leaving space below the crowns walkable', () => {
  const island = new T.Group(), tree = new T.Group();
  tree.userData.walkObstacle = true; tree.userData.walkObstacleRadius = .22;
  tree.position.set(2, 0, 1); tree.scale.setScalar(1.2);
  island.add(tree);
  const crown = new T.Mesh(new T.SphereGeometry(2),new T.MeshBasicMaterial());
  crown.position.y = 2; tree.add(crown);
  const data = collectSceneryNavigation({home: island}, [], [], 0);
  assert.equal(data.obstacles.length, 1);
  assert.ok(Math.abs(data.obstacles[0].radius-.264)<1e-6);
  const navigation = createResidentNavigation({nodes, links: [], ...data});
  assert.equal(navigation.walkable({x: 2, z: 1}), false);
  assert.equal(navigation.walkable({x: 3.1, z: 1}), true, 'tree canopy does not become an invisible wall');
});

test('static scenery batching preserves animated landmarks and their world-space pivots', async () => {
  const {batchExpandedScenery} = await import('../src/expanded-scenery.js');
  const scene=new T.Scene(),island=new T.Group(),dressing=new T.Group(),rotor=new T.Group();
  island.position.set(15,0,-7);island.rotation.y=.3;scene.add(island);
  dressing.name='expanded-island-dressing';island.add(dressing);
  const landmark=new T.Group();landmark.position.set(5,.67,3);dressing.add(landmark);
  rotor.position.set(0,2.65,.78);rotor.userData.sceneryAnimated=true;landmark.add(rotor);
  const blade=new T.Mesh(new T.BoxGeometry(.1,2,.1),new T.MeshBasicMaterial());
  blade.position.y=1;rotor.add(blade);
  const before=rotor.getWorldPosition(new T.Vector3());
  batchExpandedScenery(scene);
  assert.equal(rotor.parent,dressing);
  assert.ok(before.distanceTo(rotor.getWorldPosition(new T.Vector3()))<1e-6);
  assert.equal(rotor.children[0],blade,'animated geometry stays separate from static batches');
  rotor.rotation.z=.5;
  assert.ok(before.distanceTo(rotor.getWorldPosition(new T.Vector3()))<1e-6,'rotation does not move the windmill pivot');
});

test('the park lake has a real walkable flower bridge instead of a water shortcut', async () => {
  const {buildIslandLandmark} = await import('../src/island-landmarks.js');
  const island=new T.Group(),rivers=[],footbridges=[];
  const material=new T.MeshBasicMaterial();
  const add=(geometry,x,y,z,parent)=>{const mesh=new T.Mesh(geometry,material);mesh.position.set(x,y,z);parent.add(mesh);return mesh;};
  const art={
    box:(w,h,d,color,x,y,z,parent)=>add(new T.BoxGeometry(w,h,d),x,y,z,parent),
    cyl:(r,rb,h,color,x,y,z,parent,n=12)=>add(new T.CylinderGeometry(r,rb,h,n),x,y,z,parent),
    ball:(r,color,x,y,z,parent,scale=[1,1,1])=>{const mesh=add(new T.SphereGeometry(r,8,6),x,y,z,parent);mesh.scale.set(...scale);return mesh;},
  };
  buildIslandLandmark({id:'park',point:{x:0,z:0},parent:island,top:.67,rivers,footbridges,...art});
  const data=collectSceneryNavigation({park:island},rivers,footbridges,.67);
  const nav=createResidentNavigation({nodes:[{id:'park',x:0,z:0}],links:[],...data});
  assert.equal(data.obstacles.find(obstacle=>obstacle.kind==='river').coastal,false,'the lake is distinct from rivers flowing into the sea');
  assert.equal(data.obstacles.find(obstacle=>obstacle.kind==='river').island,'park');
  assert.equal(data.crossings[0].deckHalfLength,2.15);
  assert.ok(nav.clearSegment({x:0,z:-3.5},{x:0,z:3.5}),'the bridge connects both banks');
  assert.equal(nav.walkable({x:1.5,z:0}),false,'dolls cannot walk across the lake water');
});
