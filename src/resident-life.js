// Activity and navigation logic is independent of the renderer so routes can be validated.
export const ACTIVITY_LABELS = {
  wander: "娃娃們正在各個小島之間散步",
  swing: "娃娃們在河畔公園一起盪鞦韆",
  play: "娃娃們在公園追球、一起玩耍",
};
export function chooseActivity(previous, random = Math.random) {
  const choices = Object.keys(ACTIVITY_LABELS).filter(
    (mode) => mode !== previous,
  );
  return choices[
    Math.min(choices.length - 1, Math.floor(random() * choices.length))
  ];
}
export function findIslandPath(from, to, links) {
  const queue = [[from]],
    visited = new Set([from]);
  while (queue.length) {
    const path = queue.shift(),
      node = path.at(-1);
    if (node === to) return path;
    for (const [a, b] of links) {
      const next = a === node ? b : b === node ? a : null;
      if (next && !visited.has(next)) {
        visited.add(next);
        queue.push([...path, next]);
      }
    }
  }
  throw new Error(`No walking path between ${from} and ${to}`);
}
export const RESIDENT_SPACING = 1.18;
export const PARK = {
  id: "park",
  x: 0,
  z: 14.8,
  seats: [
    { x: 1.45, z: 3.8 },
    { x: 2.95, z: 3.8 },
  ],
  pusher: { x: 2.2, z: 5.1 },
  play: { x: -0.7, z: 3.7 },
};
export function routeBetweenIslands(
  from,
  to,
  nodes,
  links,
  start,
  destination,
) {
  const islandPath = findIslandPath(from, to, links),
    points = [start];
  const hub = (node) => ({ x: node.x, z: node.z + 1.6 });
  for (let i = 0; i < islandPath.length - 1; i++) {
    const a = nodes.find((n) => n.id === islandPath[i]),
      b = nodes.find((n) => n.id === islandPath[i + 1]);
    const dx = b.x - a.x,
      dz = b.z - a.z,
      d = Math.hypot(dx, dz),
      edge = 5.64;
    points.push(hub(a));
    // Avoid the cottages at each island's center when approaching northern bridges.
    if (dz < -1) {
      if (a.id === "park")
        points.push({ x: a.x + 0.45, z: a.z + 1.1 }, { x: a.x, z: a.z - 2 });
      else
        points.push(
          { x: a.x + 2.4, z: a.z + 1.4 },
          { x: a.x + 2.4, z: a.z - 2.1 },
        );
    }
    points.push(
      { x: a.x + (dx / d) * edge, z: a.z + (dz / d) * edge },
      { x: b.x - (dx / d) * edge, z: b.z - (dz / d) * edge },
    );
    if (dz > 1) {
      if (b.id === "park")
        points.push({ x: b.x, z: b.z - 2 }, { x: b.x + 0.45, z: b.z + 1.1 });
      else
        points.push(
          { x: b.x + 2.4, z: b.z - 2.1 },
          { x: b.x + 2.4, z: b.z + 1.4 },
        );
    }
    points.push(hub(b));
  }
  points.push(destination);
  return points.filter(
    (p, i) =>
      i === 0 ||
      Math.hypot(p.x - points[i - 1].x, p.z - points[i - 1].z) > 0.001,
  );
}
export function createResidentLife({
  nodes,
  links,
  previous,
  random = Math.random,
  count = 6,
}) {
  const indices = Array.from({ length: count }, (_, i) => i);
  const order = [...indices].sort(() => random() - 0.5);
  let mode = chooseActivity(previous, random),
    elapsed = 0,
    nextChange = 55 + random() * 15;
  const initialMode = mode;
  const park = nodes.find((n) => n.id === "park");
  const randomIsland = (except) => {
    const available = nodes.filter((n) => n.id !== except);
    return available[
      Math.floor(random() * available.length) % available.length
    ];
  };
  const actors = indices.map((i) => ({
    id: i,
    slot: order[i],
    phase: random() * Math.PI * 2,
    x: 0,
    z: 0,
    yOffset: 0,
    heading: 0,
    node: "park",
    state: "waiting",
    goalMode: mode,
    walkTime: 0,
    playTime: 0,
    swingTime: 2,
    wait: 0,
  }));
  function goal(actor) {
    if (mode === "wander") {
      const n = randomIsland(actor.node);
      const angle = actor.slot * Math.PI * 2 / count;
      return { node: n.id, point: {
        x: n.x + Math.sin(angle) * 1.35,
        z: n.z + 1.6 + Math.cos(angle) * 1.35,
      }, state: "waiting" };
    }
    if (mode === "swing") {
      const point = actor.slot < 2 ? PARK.seats[actor.slot] : {
        x: PARK.pusher.x - 3.9 + (actor.slot - 2 - (count - 3) / 2) * 1.25,
        z: PARK.pusher.z - .6,
      };
      return {
        node: "park",
        point: { x: park.x + point.x, z: park.z + point.z },
        state: actor.slot < 2 ? "swinging" : "pushing",
      };
    }
    const a = (actor.slot * Math.PI * 2) / count;
    return {
      node: "park",
      point: {
        x: park.x + PARK.play.x + Math.cos(a) * 1.2,
        z: park.z + PARK.play.z + Math.sin(a) * 1.2,
      },
      state: "playing",
    };
  }
  function begin(actor) {
    const target = goal(actor);
    actor.goalMode = mode;
    actor.target = target;
    actor.route = routeBetweenIslands(
      actor.node,
      target.node,
      nodes,
      links,
      { x: actor.x, z: actor.z },
      target.point,
    );
    actor.routeIndex = 1;
    actor.state = "walking";
    actor.yOffset = 0;
    actor.swingAngle = 0;
    actor.playTime = 0;
    actor.swingTime = 0;
  }
  for (const actor of actors) {
    if (mode === "wander") {
      // Unique starting islands prevent dolls from spawning inside one another.
      const n = nodes[actor.slot % nodes.length];
      actor.node = n.id;
      actor.x = n.x;
      actor.z = n.z + 1.6;
      begin(actor);
    } else {
      const target = goal(actor);
      actor.node = target.node;
      actor.x = target.point.x;
      actor.z = target.point.z;
      actor.state = target.state;
      actor.target = target;
    }
  }
  const bridges = links.map(([aId, bId]) => {
    const a = nodes.find(node => node.id === aId), b = nodes.find(node => node.id === bId);
    const length = Math.hypot(b.x - a.x, b.z - a.z);
    const dx = (b.x - a.x) / length, dz = (b.z - a.z) / length;
    return { x: a.x + dx * 5.64, z: a.z + dz * 5.64, dx, dz,
      length: Math.max(.01, length - 11.28), owner: null };
  });
  function inBridge(point, bridge, margin = 0, width = .36) {
    const x = point.x - bridge.x, z = point.z - bridge.z;
    const along = x * bridge.dx + z * bridge.dz;
    return along >= -margin && along <= bridge.length + margin &&
      Math.abs(x * bridge.dz - z * bridge.dx) <= width;
  }
  function onGround(point) {
    return nodes.some(node => Math.hypot(point.x - node.x, point.z - node.z) <= 6) ||
      bridges.some(bridge => inBridge(point, bridge));
  }
  function safeStep(actor, destination) {
    if (!onGround(destination)) return false;
    if (actors.some(other => other !== actor &&
      Math.hypot(destination.x - other.x, destination.z - other.z) < RESIDENT_SPACING - 1e-8))
      return false;
    return bridges.every(bridge => !inBridge(destination, bridge, 1.25, .75) ||
      bridge.owner === null || bridge.owner === actor.id);
  }
  function moveWalker(actor, next, distance) {
    const dx = next.x - actor.x, dz = next.z - actor.z, remaining = Math.hypot(dx, dz);
    if (remaining < 1e-6) return true;
    const step = Math.min(distance, remaining), heading = Math.atan2(dx, dz);
    // Right-first sidesteps are reciprocal: approaching dolls choose opposite sides.
    for (const turn of [0, .5, -.5, 1, -1, Math.PI / 2, -Math.PI / 2, 2.2, -2.2, Math.PI]) {
      const candidate = turn === 0 && remaining <= distance ? {x: next.x, z: next.z} : {
        x: actor.x + Math.sin(heading + turn) * step,
        z: actor.z + Math.cos(heading + turn) * step,
      };
      if (!safeStep(actor, candidate)) continue;
      actor.x = candidate.x; actor.z = candidate.z;
      actor.heading = heading + turn;
      actor.walkTime += distance / .95;
      actor.yielding = turn !== 0;
      for (const bridge of bridges) if (inBridge(actor, bridge, 1.25, .75)) bridge.owner = actor.id;
      return turn === 0 && remaining <= distance;
    }
    actor.yielding = true;
    return false;
  }
  function step(dt) {

    elapsed += dt;
    if (elapsed >= nextChange) {
      mode = chooseActivity(mode, random);
      nextChange = elapsed + 55 + random() * 15;
    }
    for (const bridge of bridges) {
      const owner = actors.find(actor => actor.id === bridge.owner);
      if (!owner || !inBridge(owner, bridge, 1.4, .85)) bridge.owner = null;
    }
    for (const actor of [...actors].sort((a, b) => Number(a.state === "walking") - Number(b.state === "walking"))) {
      const before = {x: actor.x, z: actor.z, yOffset: actor.yOffset,
        heading: actor.heading, swingAngle: actor.swingAngle,
        swingTime: actor.swingTime, playTime: actor.playTime};
      actor.yOffset = 0;
      actor.swingAngle = 0;
      if (actor.state !== "walking" && actor.goalMode !== mode) begin(actor);
      if (actor.state === "walking") {
        const next = actor.route[actor.routeIndex];
        if (next && moveWalker(actor, next, dt * .95)) actor.routeIndex++;
        actor.yOffset = Math.abs(Math.sin(actor.walkTime * 8)) * 0.04;
        if (actor.routeIndex >= actor.route.length) {
          actor.node = actor.target.node;
          actor.state = actor.target.state;
          actor.wait = 1.5 + random() * 3;
          actor.playTime = 0;
        }
      } else if (actor.state === "waiting") {
        actor.wait -= dt;
        if (actor.wait <= 0) begin(actor);
      } else if (actor.state === "swinging") {
        actor.swingTime += dt;
        actor.swingAngle =
          Math.sin(actor.swingTime * 1.7 + actor.slot * 0.65) *
          0.4 *
          Math.min(1, actor.swingTime / 1.5);
        actor.x = park.x + PARK.seats[actor.slot].x;
        actor.z =
          park.z + PARK.seats[actor.slot].z + Math.sin(actor.swingAngle) * 1.75;
        actor.yOffset = 2.8 - Math.cos(actor.swingAngle) * 1.75 - 0.1;
        actor.heading = 0;
      } else if (actor.state === "pushing") {
        actor.heading = Math.atan2(park.x + 2.2 - actor.x, park.z + 3.8 - actor.z);
        actor.yOffset = Math.max(0, Math.sin(elapsed * 1.7)) * 0.04;
      } else if (actor.state === "playing") {
        actor.playTime += dt;
        const a = actor.playTime * 0.62 + (actor.slot * Math.PI * 2) / count;
        actor.x = park.x + PARK.play.x + Math.cos(a) * 1.2;
        actor.z = park.z + PARK.play.z + Math.sin(a) * 1.2;
        actor.heading = -a;
        actor.yOffset =
          Math.abs(Math.sin(actor.playTime * 5 + actor.slot)) * 0.17;
      }
      // A moving swing or playmate also yields to a walker crossing nearby.
      // Roll back its activity clock too, keeping the swing rig in sync.
      if (actor.state !== "walking" && actors.some(other => other !== actor &&
        Math.hypot(actor.x - other.x, actor.z - other.z) < RESIDENT_SPACING - 1e-8))
        Object.assign(actor, before);
    }
  }
  function update(dt) {
    // Small steps prevent a delayed frame from tunnelling through another doll.
    let remaining = Math.max(0, dt);
    if (remaining === 0) step(0);
    while (remaining > 1e-9) {
      const slice = Math.min(.025, remaining);
      step(slice);
      remaining -= slice;
    }
  }
  function descriptions() {
    return actors.map((actor) => ({
      state: actor.state,
      label: {
        walking: "跨島散步中",
        waiting: "在島上看風景",
        swinging: "在公園盪鞦韆",
        pushing: "陪朋友一起盪鞦韆",
        playing: "在公園一起玩球",
      }[actor.state],
    }));
  }
  return {
    actors,
    update,
    descriptions,
    initialMode,
    get mode() {
      return mode;
    },
    get elapsed() {
      return elapsed;
    },
  };
}
