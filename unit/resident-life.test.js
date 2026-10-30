import test from "node:test";
import assert from "node:assert/strict";
import {
  chooseActivity,
  chooseDeparture,
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
  const life = createResidentLife({ nodes, links, random: () => 0.1, count: 1 });
  assert.equal(life.mode, "wander");
  assert.equal(life.actors.length, 1);
  // Validate an uninterrupted crossing. Meeting a friend may now intentionally
  // replace a walker's destination rather than eventually resume this journey.
  const walker = life.actors.find(actor => actor.activity === "wander");
  const start = {x: 0, z: 1.6}, end = {x: -13.8, z: 1.6};
  Object.assign(walker, {node: "home", x: start.x, z: start.z,
    route: routeBetweenIslands("home", "todo", nodes, links, start, end),
    routeIndex: 1, target: {node: "todo", point: end, state: "waiting"}});
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
test("residents start on separate random islands and explore independently", () => {
  const starts = [];
  for (const draw of [.1, .7]) {
    const life = createResidentLife({nodes, links, random: () => draw});
    assert.equal(new Set(life.actors.map(actor => actor.node)).size, 6);
    assert.ok(life.actors.every(actor => actor.activity === 'wander' && actor.state === 'walking'));
    assert.ok(life.actors.every(actor => life.navigation.walkable(actor)));
    starts.push(life.actors.map(actor => actor.node).join(','));
    const before = life.actors.map(actor => ({x: actor.x, z: actor.z}));
    life.update(.8);
    assert.ok(life.actors.every((actor, i) => Math.hypot(actor.x - before[i].x, actor.z - before[i].z) > .1));
  }
  assert.notEqual(starts[0], starts[1], 'the island assignments should vary with the random draw');
});

test("only a pair occasionally meets while other residents continue their own activities", () => {
  const life = createResidentLife({nodes, links, random: () => .1});
  let met = false, dispersed = false;
  for (let frame = 0; frame < 4000; frame++) {
    life.update(.05);
    const social = life.actors.filter(actor => ['swinging', 'playing', 'chatting'].includes(actor.state));
    assert.ok(social.length <= 2, 'do not schedule the whole household on the park');
    if (social.length === 2) {
      met = true;
      assert.equal(social[0].partner, social[1].id);
      assert.ok(life.actors.some(actor => actor.node !== social[0].node), 'others must remain on other islands');
    }
    if (new Set(life.actors.map(actor => actor.node)).size >= 4) dispersed = true;
  }
  assert.ok(met, 'the pair must actually arrive and play, chat or swing');
  assert.ok(dispersed, 'independent residents must not all converge on one island');
});

test("head-on walkers separate and continue away without overlapping or teleporting", () => {
  const life = createResidentLife({nodes,links,random:()=>.1,count:2});
  for (const [i,actor] of life.actors.entries()) {
    actor.x = i ? 2 : -2; actor.z = 2;
    actor.state = "walking"; actor.goalMode = "wander"; actor.activity = "wander"; actor.partner = null;
    actor.route = [{x:actor.x,z:2},{x:-actor.x,z:2}]; actor.routeIndex=1;
    actor.target = {node:"home",point:actor.route[1],state:"waiting"};
  }
  for (let i=0;i<60;i++) {
    const before=life.actors.map(actor=>({x:actor.x,z:actor.z}));
    life.update(.05);
    const [a,b]=life.actors;
    assert.ok(Math.hypot(a.x-b.x,a.z-b.z)>=1.18-1e-6);
    life.actors.forEach((actor,index)=>assert.ok(Math.hypot(actor.x-before[index].x,actor.z-before[index].z)<=.0476));
  }
  assert.ok(life.actors[0].x< -1 && life.actors[1].x>1,"both dolls must keep walking in their new directions");
});

test("nearby approaching walkers randomly turn apart before touching", () => {
  const headings = [];
  for (const draw of [.1, .9]) {
    const life = createResidentLife({nodes, links, random: () => draw, count: 2});
    for (const [i, actor] of life.actors.entries()) {
      actor.x = i ? .9 : -.9; actor.z = 2;
      actor.node = "home"; actor.state = "walking"; actor.goalMode = life.mode; actor.activity = "wander"; actor.partner = null;
      actor.route = [{x: actor.x, z: 2}, {x: i ? -3 : 3, z: 2}];
      actor.routeIndex = 1;
      actor.target = {node: "home", point: actor.route[1], state: "waiting"};
    }
    life.update(.1);
    const [a, b] = life.actors;
    assert.ok(a.departure && b.departure, "both walkers should choose a new walking direction");
    assert.equal(a.target, null, "discard the old destination rather than resume it");
    assert.equal(b.target, null);
    assert.deepEqual(a.route, []);
    assert.deepEqual(b.route, []);
    assert.ok(a.x < -.9 && b.x > .9, "walk away from each other before reaching minimum spacing");
    assert.ok(Math.cos(a.heading - b.heading) < -.4, "escape headings should point apart");
    headings.push(a.heading);
    life.update(.8);
    assert.ok(Math.hypot(a.x - b.x, a.z - b.z) > 3, "keep walking away rather than turn back immediately");
    const positions = [a, b].map(actor => ({x: actor.x, z: actor.z, heading: actor.heading}));
    life.update(2.2);
    [a, b].forEach((actor, i) => {
      const before = positions[i];
      const forward = (actor.x - before.x) * Math.sin(before.heading) +
        (actor.z - before.z) * Math.cos(before.heading);
      assert.ok(forward > 1.9, "continue forward beyond the former 1.8-second detour timeout");
      assert.ok(actor.departure, "do not fall back to the old route");
    });
  }
  assert.ok(Math.abs(headings[0] - headings[1]) > .5, "random draws should produce different turns");
});

test("visiting one doll freezes its walk until released while the others carry on", () => {
  const life = createResidentLife({nodes, links, random: () => .1, count: 2});
  life.actors.forEach((actor, i) => {
    const x = i ? 3 : -3;
    Object.assign(actor, {x, z: 2, node: "home", state: "walking", activity: "wander", partner: null,
      route: [{x, z: 2}, {x: i ? 4 : -4, z: 2}], routeIndex: 1,
      target: {node: "home", point: {x: i ? 4 : -4, z: 2}, state: "waiting"}});
  });
  life.update(.2);
  const [visitor, other] = life.actors;
  life.pause(visitor.id);
  const frozen = structuredClone(visitor), otherWalkTime = other.walkTime;
  life.update(60);
  assert.deepEqual(visitor, frozen, "position, direction and animation clocks remain fixed through a long visit");
  assert.ok(other.walkTime > otherWalkTime, "other residents must remain active");
  assert.equal(life.descriptions()[visitor.id].label, "停下來和你打招呼");
  assert.equal(life.mode, "wander", "do not swap the visitor's activity during inspection");
  life.resume(visitor.id);
  life.update(.2);
  assert.equal(life.isPaused(visitor.id), false);
  assert.ok(visitor.walkTime > frozen.walkTime, "walking resumes after saying goodbye");
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
        if(![a.state,b.state].some(state => ["walking", "strolling"].includes(state))) continue;
        assert.ok(Math.hypot(a.x-b.x,a.z-b.z)>=1.18-1e-5,`seed ${seed}, frame ${frame}: ${a.id}/${b.id} overlap`);
      }
    }
  }
});

test("opposite walkers take turns on a narrow bridge and both finish crossing", () => {
  const life=createResidentLife({nodes,links,random:()=>.1,count:2});
  const [a,b]=life.actors;
  for(const [actor,start,end,node] of [[a,-3,-10.8,"todo"],[b,-10.8,-3,"home"]]) {
    actor.x=start;actor.z=0;actor.state="walking";actor.goalMode="wander";actor.activity="wander";actor.partner=null;
    actor.node = node === "todo" ? "home" : "todo";
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

test('occasional walking companions meet and keep moving without gathering everyone', () => {
  let walkedTogether = false;
  // Fixed scenario includes a completed meeting under history-aware avoidance.
  for (const seed of [11]) {
    let value = seed;
    const random = () => {value = (Math.imul(value, 1664525) + 1013904223) >>> 0; return value / 4294967296;};
    const life = createResidentLife({nodes, links, random});
    for (let frame = 0; frame < 4000; frame++) {
      const before = life.actors.map(actor => actor.walkTime);
      life.update(.08);
      const pair = life.actors.filter(actor => actor.activity === 'pairwalk');
      if (pair.length === 2 && pair[0].node === pair[1].node && Math.hypot(pair[0].x - pair[1].x, pair[0].z - pair[1].z) < 3 && pair.every(actor => actor.walkTime > before[actor.id])) {
        assert.equal(pair[0].partner, pair[1].id);
        assert.ok(life.actors.some(actor => actor.node !== pair[0].node));
        walkedTogether = true; break;
      }
    }
  }
  assert.ok(walkedTogether, 'retain the ability to occasionally go for a walk as a pair');
});

test("encounters remember the last ten attempted world directions, including blocked ones", () => {
  const actor = {turnHistory: []}, attempts = [];
  for (let encounter = 0; encounter < 40; encounter++) {
    let checked = 0;
    const heading = chooseDeparture(actor, Math.PI / 2, () => .1, candidate => {
      const sector = ((Math.round(candidate * 96 / (Math.PI * 2)) % 96) + 96) % 96;
      assert.ok(!attempts.slice(-10).includes(sector), "never retry any of the last ten attempts");
      attempts.push(sector);
      return ++checked === 2; // Remember blocked candidates as well as successful departures.
    });
    assert.notEqual(heading, null);
    assert.equal(actor.turnHistory.length, Math.min(10, attempts.length));
    assert.deepEqual(actor.turnHistory, attempts.slice(-10));
  }
});
