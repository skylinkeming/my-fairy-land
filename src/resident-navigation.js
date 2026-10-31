// Renderer-independent navigation. Obstacle footprints come from the actual scene.
export const WALK_CLEARANCE = 0.46;
const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
function segmentDistance(point, a, b) {
  const dx = b.x - a.x,
    dz = b.z - a.z,
    t = Math.max(
      0,
      Math.min(
        1,
        ((point.x - a.x) * dx + (point.z - a.z) * dz) /
          (dx * dx + dz * dz || 1),
      ),
    );
  return Math.hypot(point.x - a.x - dx * t, point.z - a.z - dz * t);
}
export function createResidentNavigation({
  nodes,
  links,
  obstacles = [],
  crossings = [],
  clearance = WALK_CLEARANCE,
}) {
  const bridges = links.map(([a, b]) => {
    const from = nodes.find((node) => node.id === a),
      to = nodes.find((node) => node.id === b);
    const length = distance(from, to),
      dx = (to.x - from.x) / length,
      dz = (to.z - from.z) / length;
    return {
      from,
      to,
      halfWidth: Math.min(from.bridgeHalfWidth ?? .18, to.bridgeHalfWidth ?? .18),
      a: { x: from.x + dx * (from.walkRadius || 6) * .94, z: from.z + dz * (from.walkRadius || 6) * .94 },
      b: { x: to.x - dx * (to.walkRadius || 6) * .94, z: to.z - dz * (to.walkRadius || 6) * .94 },
    };
  });
  function onGround(point) {
    return (
      nodes.some((node) => distance(point, node) <= (node.walkRadius || 6)) ||
      crossings.some(crossing=>crossing.coastalDeck && segmentDistance(point,crossing.a,crossing.b)<=crossing.halfWidth) ||
      bridges.some(
        (bridge) => segmentDistance(point, bridge.a, bridge.b) <= bridge.halfWidth,
      )
    );
  }
  function blocked(point, ignore = null) {
    for (const obstacle of obstacles) {
      if (obstacle.id === ignore) continue;
      if (obstacle.kind === "river") {
        if (
          crossings.some(
            (crossing) => segmentDistance(point, crossing.a, crossing.b) < (crossing.halfWidth ?? .15),
          )
        )
          continue;
        if (
          obstacle.points.some(
            (p, i) =>
              i &&
              segmentDistance(point, obstacle.points[i - 1], p) <
                obstacle.radius + clearance,
          )
        )
          return true;
      } else if (obstacle.radius !== undefined) {
        if (distance(point, obstacle) < obstacle.radius + clearance - 1e-7)
          return true;
      } else {
        const dx = Math.max(
          obstacle.minX - point.x,
          0,
          point.x - obstacle.maxX,
        );
        const dz = Math.max(
          obstacle.minZ - point.z,
          0,
          point.z - obstacle.maxZ,
        );
        if (Math.hypot(dx, dz) < clearance - 1e-7) return true;
      }
    }
    return false;
  }
  const walkable = (point, ignore) =>
    onGround(point) && !blocked(point, ignore);
  function clearSegment(a, b, ignore = null) {
    // Sampling can miss a shallow graze of a small round obstacle. Check its
    // full swept segment so the planned route is also safe for each tiny step.
    if(obstacles.some(obstacle=>obstacle.id!==ignore&&obstacle.kind!=='river'&&obstacle.radius!==undefined&&
      segmentDistance(obstacle,a,b)<obstacle.radius+clearance-1e-7))return false;
    const length = distance(a, b),
      steps = Math.max(1, Math.ceil(length / 0.1));
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      if (
        !walkable(
          { x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t },
          ignore,
        )
      )
        return false;
    }
    return true;
  }
  const points = [],
    edges = [],
    byIsland = new Map();
  function add(point, island) {
    const index = points.length;
    points.push({ ...point, island });
    edges.push([]);
    return index;
  }
  function connect(a, b) {
    const cost = distance(points[a], points[b]);
    edges[a].push([b, cost]);
    edges[b].push([a, cost]);
  }
  for (const node of nodes) {
    const grid = new Map(),
      indices = [];
    const spacing = .2 * (node.walkRadius || 6) / 6;
    for (let x = -30; x <= 30; x++)
      for (let z = -30; z <= 30; z++) {
        const point = { x: node.x + x * spacing, z: node.z + z * spacing };
        if (distance(point, node) > (node.walkRadius || 6) || !walkable(point)) continue;
        const index = add(point, node.id);
        grid.set(`${x},${z}`, index);
        indices.push(index);
      }
    for (let x = -30; x <= 30; x++)
      for (let z = -30; z <= 30; z++) {
        const a = grid.get(`${x},${z}`);
        if (a === undefined) continue;
        for (const [dx, dz] of [
          [1, 0],
          [0, 1],
          [1, 1],
          [1, -1],
        ]) {
          const b = grid.get(`${x + dx},${z + dz}`);
          if (b !== undefined && clearSegment(points[a], points[b]))
            connect(a, b);
        }
      }
    byIsland.set(node.id, indices);
  }
  function attach(point, island) {
    if (!walkable(point)) return null;
    const index = add(point, island);
    const nearest = [...(byIsland.get(island) || [])].sort(
      (a, b) => distance(point, points[a]) - distance(point, points[b]),
    );
    let found = 0;
    for (const other of nearest) {
      if (distance(point, points[other]) > 2 && found) break;
      if (clearSegment(point, points[other])) {
        connect(index, other);
        if (++found === 10) break;
      }
    }
    return index;
  }
  for (const crossing of crossings) {
    const a = attach(crossing.a, crossing.island),
      b = attach(crossing.b, crossing.island);
    if (a !== null && b !== null && clearSegment(crossing.a, crossing.b))
      connect(a, b);
  }
  for (const bridge of bridges) {
    const length = distance(bridge.a, bridge.b),
      dx = (bridge.b.x - bridge.a.x) / length,
      dz = (bridge.b.z - bridge.a.z) / length;
    for (const offset of bridge.halfWidth >= .8 ? [-.68, 0, .68] : [0]) {
      const start = {x: bridge.a.x + dz * offset, z: bridge.a.z - dx * offset};
      const end = {x: bridge.b.x + dz * offset, z: bridge.b.z - dx * offset};
      const a = attach(start, bridge.from.id), b = attach(end, bridge.to.id);
      if (a !== null && b !== null && clearSegment(start, end)) connect(a, b);
    }
  }
  // Only spawn or choose destinations in the main connected walking network.
  const seen = new Set(),
    components = [];
  for (let i = 0; i < points.length; i++) {
    if (seen.has(i)) continue;
    const component = [],
      stack = [i];
    seen.add(i);
    while (stack.length) {
      const current = stack.pop();
      component.push(current);
      for (const [next] of edges[current])
        if (!seen.has(next)) {
          seen.add(next);
          stack.push(next);
        }
    }
    components.push(component);
  }
  components.sort((a, b) => b.length - a.length);
  const connected = new Set(components[0] || []);
  const candidates = (island) =>
    (byIsland.get(island) || []).filter((index) => connected.has(index));
  function nearest(point, island, avoid = []) {
    const available = candidates(island).filter((index) =>
      avoid.every((other) => distance(points[index], other) >= 1.25),
    );
    available.sort(
      (a, b) => distance(point, points[a]) - distance(point, points[b]),
    );
    return available.length ? { ...points[available[0]] } : null;
  }
  function sample(island, random, avoid = [], allow = () => true) {
    const available = candidates(island).filter((index) =>
      allow(points[index]) && avoid.every((other) => distance(points[index], other) >= 1.4),
    );
    return available.length
      ? {
          ...points[
            available[
              Math.min(
                available.length - 1,
                Math.floor(random() * available.length),
              )
            ]
          ],
        }
      : null;
  }
  function route(start, goal, {avoid=[],spacing=1.24}={}) {
    start = { x: start.x, z: start.z };
    goal = { x: goal.x, z: goal.z };
    if (!walkable(start) || !walkable(goal)) return null;
    const margins=avoid.map(other=>Math.min(spacing,distance(start,other))-1e-7);
    const trafficClear=(a,b)=>avoid.every((other,i)=>segmentDistance(other,a,b)>=margins[i]);
    const clear=(a,b)=>clearSegment(a,b)&&trafficClear(a,b);
    if (clear(start, goal)) return [{ ...start }, { ...goal }];
    const neighbors = (point) => {
      const nearby = [...connected]
        .filter((index) => distance(points[index], point) <= 3)
        .sort(
          (a, b) => distance(point, points[a]) - distance(point, points[b]),
        );
      const visible = [];
      for (const index of nearby)
        if (clear(point, points[index])) {
          visible.push(index);
          if (visible.length === 16) break;
        }
      return visible;
    };
    const starts = neighbors(start),
      ends = new Set(neighbors(goal));
    if (!starts.length || !ends.size) return null;
    const scores = new Map(),
      previous = new Map(),
      heap = [];
    function push(index, cost) {
      const entry = { index, cost, rank: cost + distance(points[index], goal) };
      let i = heap.length;
      heap.push(entry);
      while (i) {
        const parent = (i - 1) >> 1;
        if (heap[parent].rank <= entry.rank) break;
        heap[i] = heap[parent];
        i = parent;
      }
      heap[i] = entry;
    }
    function pop() {
      const first = heap[0],
        last = heap.pop();
      if (heap.length) {
        let i = 0;
        while (i * 2 + 1 < heap.length) {
          let child = i * 2 + 1;
          if (
            child + 1 < heap.length &&
            heap[child + 1].rank < heap[child].rank
          )
            child++;
          if (last.rank <= heap[child].rank) break;
          heap[i] = heap[child];
          i = child;
        }
        heap[i] = last;
      }
      return first;
    }
    for (const index of starts) {
      const cost = distance(start, points[index]);
      scores.set(index, cost);
      push(index, cost);
    }
    let finish = null;
    while (heap.length) {
      const entry = pop(),
        current = entry.index;
      if (entry.cost !== scores.get(current)) continue;
      if (ends.has(current)) {
        finish = current;
        break;
      }
      for (const [next, cost] of edges[current]) {
        if(avoid.length && !trafficClear(points[current],points[next]))continue;
        const score = scores.get(current) + cost;
        if (score >= (scores.get(next) ?? Infinity)) continue;
        scores.set(next, score);
        previous.set(next, current);
        push(next, score);
      }
    }
    if (finish === null) return null;
    const path = [goal];
    for (let index = finish; index !== undefined; index = previous.get(index))
      path.unshift(points[index]);
    path.unshift(start);
    const smooth = [path[0]];
    for (let i = 0; i < path.length - 1; ) {
      let next = path.length - 1;
      while (next > i + 1 && !clear(path[i], path[next])) next--;
      smooth.push({ ...path[next] });
      i = next;
    }
    return smooth;
  }
  return {
    walkable,
    blocked,
    onGround,
    clearSegment,
    route,
    nearest,
    sample,
    islandCounts: Object.fromEntries(
      nodes.map((node) => [node.id, candidates(node.id).length]),
    ),
    obstacles,
    crossings,
  };
}
