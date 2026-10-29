import test from "node:test";
import assert from "node:assert/strict";
import {
  chooseActivity,
  findIslandPath,
  routeBetweenIslands,
  createResidentLife,
  PARK,
} from "../src/resident-life.js";
const nodes = [
  { id: "home", x: 0, z: 0 },
  { id: "todo", x: -13.8, z: 0 },
  { id: "note", x: -6.912, z: -12.12 },
  { id: "friends", x: 6.912, z: -12.12 },
  { id: "memories", x: 13.8, z: 0 },
  PARK,
];
const links = [
  ["home", "todo"],
  ["home", "note"],
  ["home", "friends"],
  ["home", "memories"],
  ["note", "friends"],
  ["home", "park"],
];

test("a refresh always chooses a different activity from the previous visit", () => {
  for (const previous of ["wander", "swing", "play"])
    for (const draw of [0, 0.2, 0.51, 0.999]) {
      const mode = chooseActivity(previous, () => draw);
      assert.notEqual(mode, previous);
      assert.ok(["wander", "swing", "play"].includes(mode));
    }
});
test("all islands have connected walking routes that cross the existing bridge centers", () => {
  for (const a of nodes)
    for (const b of nodes) {
      const path = findIslandPath(a.id, b.id, links);
      assert.equal(path[0], a.id);
      assert.equal(path.at(-1), b.id);
      const start = { x: a.x, z: a.z + 1.6 },
        end = { x: b.x, z: b.z + 1.6 };
      const route = routeBetweenIslands(a.id, b.id, nodes, links, start, end);
      assert.deepEqual(route[0], start);
      assert.deepEqual(route.at(-1), end);
      for (let i = 0; i < path.length - 1; i++) {
        const from = nodes.find((n) => n.id === path[i]),
          to = nodes.find((n) => n.id === path[i + 1]);
        const center = { x: (from.x + to.x) / 2, z: (from.z + to.z) / 2 };
        assert.ok(
          route.some(
            (p, j) =>
              j + 1 < route.length &&
              Math.abs((p.x + route[j + 1].x) / 2 - center.x) < 0.001 &&
              Math.abs((p.z + route[j + 1].z) / 2 - center.z) < 0.001,
          ),
        );
      }
    }
});
test("walking residents move continuously and actually arrive on another island", () => {
  const life = createResidentLife({ nodes, links, random: () => 0.1 });
  assert.equal(life.mode, "wander");
  assert.equal(life.actors.length, 4);
  const starts = life.actors.map((a) => a.node);
  let arrived = false;
  for (let step = 0; step < 450; step++) {
    const before = life.actors.map((a) => ({ x: a.x, z: a.z }));
    life.update(0.1);
    life.actors.forEach((a, i) => {
      assert.ok(Number.isFinite(a.x) && Number.isFinite(a.z));
      assert.ok(Math.hypot(a.x - before[i].x, a.z - before[i].z) <= 0.096);
      if (a.node !== starts[i]) arrived = true;
    });
  }
  assert.ok(
    arrived,
    "at least one resident must finish crossing to another island",
  );
});
test("two residents ride the swings together while two friends join them", () => {
  const life = createResidentLife({
    nodes,
    links,
    previous: "wander",
    random: () => 0.1,
  });
  assert.equal(life.mode, "swing");
  life.update(0.5);
  const riders = life.actors.filter((a) => a.state === "swinging");
  assert.equal(riders.length, 2);
  assert.equal(life.actors.filter((a) => a.state === "pushing").length, 2);
  for (const rider of riders) {
    assert.notEqual(rider.swingAngle, 0);
    assert.ok(rider.yOffset > 0);
    assert.equal(
      rider.z,
      PARK.z + PARK.seats[rider.slot].z + Math.sin(rider.swingAngle) * 1.75,
    );
  }
});
test("playing residents move together on the park lawn instead of staying fixed", () => {
  const life = createResidentLife({
    nodes,
    links,
    previous: "swing",
    random: () => 0.99,
  });
  assert.equal(life.mode, "play");
  const before = life.actors.map((a) => ({ x: a.x, z: a.z }));
  life.update(0.8);
  for (const [i, a] of life.actors.entries()) {
    assert.equal(a.state, "playing");
    assert.ok(Math.hypot(a.x - before[i].x, a.z - before[i].z) > 0.1);
    assert.ok(
      Math.abs(
        Math.hypot(a.x - PARK.x - PARK.play.x, a.z - PARK.z - PARK.play.z) -
          1.2,
      ) < 0.001,
    );
  }
});
