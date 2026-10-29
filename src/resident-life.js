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
  count = 5,
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
      return { node: n.id, point: { x: n.x, z: n.z + 1.6 }, state: "waiting" };
    }
    if (mode === "swing") {
      const point = actor.slot < 2 ? PARK.seats[actor.slot] : {
        x: PARK.pusher.x + (actor.slot - 2 - (count - 3) / 2) * 1.5,
        z: PARK.pusher.z + .3,
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
      const n =
        nodes[
          (actor.slot + Math.floor(random() * nodes.length)) % nodes.length
        ];
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
  function update(dt) {
    elapsed += dt;
    if (elapsed >= nextChange) {
      mode = chooseActivity(mode, random);
      nextChange = elapsed + 55 + random() * 15;
    }
    for (const actor of actors) {
      actor.yOffset = 0;
      actor.swingAngle = 0;
      if (actor.state !== "walking" && actor.goalMode !== mode) begin(actor);
      if (actor.state === "walking") {
        let distance = dt * 0.95;
        actor.walkTime += dt;
        while (distance > 0 && actor.routeIndex < actor.route.length) {
          const next = actor.route[actor.routeIndex],
            dx = next.x - actor.x,
            dz = next.z - actor.z,
            d = Math.hypot(dx, dz);
          actor.heading = Math.atan2(dx, dz);
          if (d <= distance) {
            actor.x = next.x;
            actor.z = next.z;
            distance -= d;
            actor.routeIndex++;
          } else {
            actor.x += (dx / d) * distance;
            actor.z += (dz / d) * distance;
            distance = 0;
          }
        }
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
        actor.heading = Math.PI;
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
