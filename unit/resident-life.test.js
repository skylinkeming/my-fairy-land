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
  assert.equal(life.actors.length, 6);
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
test("two residents ride the swings together while four friends join them", () => {
  const life = createResidentLife({
    nodes,
    links,
    previous: "wander",
    random: () => 0.1,
  });
  assert.equal(life.mode, "swing");
  life.update(0);
  assert.ok(life.actors.filter(actor => actor.state === "swinging").every(actor => actor.yOffset > 0));
  life.update(0.5);
  const riders = life.actors.filter((a) => a.state === "swinging");
  assert.equal(riders.length, 2);
  assert.equal(life.actors.filter((a) => a.state === "pushing").length, 4);
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

test("head-on walkers pass without overlapping or teleporting", () => {
  const life = createResidentLife({nodes,links,random:()=>.1,count:2});
  for (const [i,actor] of life.actors.entries()) {
    actor.x = i ? 2 : -2; actor.z = 2;
    actor.state = "walking"; actor.goalMode = "wander";
    actor.route = [{x:actor.x,z:2},{x:-actor.x,z:2}]; actor.routeIndex=1;
    actor.target = {node:"home",point:actor.route[1],state:"waiting"};
  }
  for (let i=0;i<150;i++) {
    const before=life.actors.map(actor=>({x:actor.x,z:actor.z}));
    life.update(.05);
    const [a,b]=life.actors;
    assert.ok(Math.hypot(a.x-b.x,a.z-b.z)>=1.18-1e-6);
    life.actors.forEach((actor,index)=>assert.ok(Math.hypot(actor.x-before[index].x,actor.z-before[index].z)<=.0476));
  }
  assert.ok(life.actors[0].x>1 && life.actors[1].x< -1,"both dolls must pass and continue");
});

test("nearby approaching walkers randomly turn apart before touching", () => {
  const headings = [];
  for (const draw of [.1, .9]) {
    const life = createResidentLife({nodes, links, random: () => draw, count: 2});
    for (const [i, actor] of life.actors.entries()) {
      actor.x = i ? .9 : -.9; actor.z = 2;
      actor.node = "home"; actor.state = "walking"; actor.goalMode = life.mode;
      actor.route = [{x: actor.x, z: 2}, {x: i ? -3 : 3, z: 2}];
      actor.routeIndex = 1;
      actor.target = {node: "home", point: actor.route[1], state: "waiting"};
    }
    life.update(.1);
    const [a, b] = life.actors;
    assert.ok(a.detour && b.detour, "both walkers should choose an escape direction");
    assert.ok(a.x < -.9 && b.x > .9, "walk away from each other before reaching minimum spacing");
    assert.ok(Math.cos(a.heading - b.heading) < -.4, "escape headings should point apart");
    headings.push(a.heading);
    life.update(.8);
    assert.ok(Math.hypot(a.x - b.x, a.z - b.z) > 3, "keep walking away rather than turn back immediately");
    life.update(1.2);
    assert.ok(!a.detour && !b.detour, "resume the existing route after the escape");
  }
  assert.ok(Math.abs(headings[0] - headings[1]) > .5, "random draws should produce different turns");
});

test("walking dolls stay separated through crowded activity transitions", () => {
  for (let seed=1;seed<=20;seed++) {
    let state=seed;
    const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
    const life=createResidentLife({nodes,links,random});
    for (let frame=0;frame<6000;frame++) {
      life.update(.05);
      for(let i=0;i<life.actors.length;i++) for(let j=i+1;j<life.actors.length;j++) {
        const a=life.actors[i],b=life.actors[j];
        if(a.state!=="walking" && b.state!=="walking") continue;
        assert.ok(Math.hypot(a.x-b.x,a.z-b.z)>=1.18-1e-5,`seed ${seed}, frame ${frame}: ${a.id}/${b.id} overlap`);
      }
    }
  }
});

test("opposite walkers take turns on a narrow bridge and both finish crossing", () => {
  const life=createResidentLife({nodes,links,random:()=>.1,count:2});
  const [a,b]=life.actors;
  for(const [actor,start,end,node] of [[a,-3,-10.8,"todo"],[b,-10.8,-3,"home"]]) {
    actor.x=start;actor.z=0;actor.state="walking";actor.goalMode="wander";
    actor.route=[{x:start,z:0},{x:end,z:0}];actor.routeIndex=1;
    actor.target={node,point:{x:end,z:0},state:"waiting"};
  }
  let first=false,second=false;
  for(let i=0;i<1200;i++) {
    life.update(.025);
    assert.ok(Math.hypot(a.x-b.x,a.z-b.z)>=1.18-1e-6);
    if(a.node==="todo")first=true;
    if(b.node==="home")second=true;
  }
  assert.ok(first&&second,"neither walker should get stuck at a bridge entrance");
});
