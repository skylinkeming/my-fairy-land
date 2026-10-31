import {createLeisureSites,createLeisureController,LEISURE_LABELS} from './resident-leisure.js';
import {roomContains} from './building-space.js';
import { steerRight, walkingDirection } from "./resident-avoidance.js";
import { createResidentNavigation } from "./resident-navigation.js";
// Activity and navigation logic is independent of the renderer so routes can be validated.
export const ACTIVITY_LABELS = {
  wander: "娃娃們分散在不同小島，各自散步、探索與看風景",
  swing: "各自探索小島，偶爾相約盪鞦韆或坐下聊天",
  play: "在不同島上自由散步，偶爾結伴玩球",
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
// Store attempted world directions, including blocked candidates, across encounters.
export function chooseDeparture(actor, away, random, canDepart, spread = .55) {
  const history = actor.turnHistory ||= [];
  const directions = Array.from({ length: 96 }, (_, sector) => ({
    sector, heading: sector * Math.PI * 2 / 96,
  })).filter(({ heading }) => Math.cos(heading - away) >= Math.cos(spread));
  const preferred = away + (random() - .5) * 1.1;
  const angleDistance = heading => Math.abs(Math.atan2(Math.sin(heading - preferred), Math.cos(heading - preferred)));
  directions.sort((a, b) => angleDistance(a.heading) - angleDistance(b.heading));
  directions.unshift({heading: preferred,
    sector: ((Math.round(preferred * 96 / (Math.PI * 2)) % 96) + 96) % 96});
  while (directions.length) {
    const candidate = directions.shift();
    if (history.includes(candidate.sector)) continue;
    history.push(candidate.sector);
    if (history.length > 10) history.shift();
    if (canDepart(candidate.heading)) return candidate.heading;
  }
  return null;
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
  chatBench: { x: 2.8, z: -2.3, heading: -0.3, width: 2.9, height: 0.4 },
  stroll: { x: -1.8, near: -1.8, far: -4.5, spacing: 1.4 },
  forest: { x: -4.6, z: -2.25 },
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
const EMPTY_SCENERY = Object.freeze([]);
const navigationCache = new WeakMap();
function sharedNavigation(nodes, links, obstacles, crossings) {
  const cached = navigationCache.get(nodes);
  if (
    cached &&
    cached.links === links &&
    cached.obstacles === obstacles &&
    cached.crossings === crossings
  )
    return cached.value;
  const value = createResidentNavigation({
    nodes,
    links,
    obstacles,
    crossings,
  });
  navigationCache.set(nodes, { links, obstacles, crossings, value });
  return value;
}
export function createResidentLife({
  nodes,
  links,
  previous,
  random = Math.random,
  count = 6,
  obstacles = EMPTY_SCENERY,
  crossings = EMPTY_SCENERY,
  buildings = EMPTY_SCENERY,
  leisure = false,
  leisureSites = null,
  leisureAutomatic = true,
}) {
  const navigation = sharedNavigation(nodes, links, obstacles, crossings);
  const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
  function shuffled(values) {
    const result = [...values];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.min(i, Math.floor(random() * (i + 1)));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  let mode = chooseActivity(previous, random),
    elapsed = 0,
    nextChange = 50 + random() * 25;
  const initialMode = mode,
    park = nodes.find((node) => node.id === "park"),
    paused = new Set();
  const islands = shuffled(
    nodes.filter((node) => navigation.islandCounts[node.id]),
  );
  if (!islands.length)
    throw new Error("No collision-free walking area exists in the scene");
  const actors = [];
  for (let id = 0; id < count; id++) {
    const node = islands[id % islands.length],
      point = navigation.sample(node.id, random, actors,point=>!buildings.some(room=>roomContains(room,point,.2)));
    if (!point) throw new Error(`No safe resident spawn on ${node.id}`);
    actors.push({
      id,
      slot: id,
      phase: random() * Math.PI * 2,
      x: point.x,
      z: point.z,
      node: node.id,
      yOffset: 0,
      heading: 0,
      state: "waiting",
      activity: "wander",
      partner: null,
      goalMode: mode,
      walkTime: 0,
      playTime: 0,
      swingTime: 0,
      swingAngle: 0,
      wait: 0,
      blockedTime: 0,
      turnHistory: [],
      nextIndoorVisit: 20 + id * 13,
      sipTime: 0,
      manualIndoor: false,
    });
  }
  const bridges = links.map(([aId, bId]) => {
    const a = nodes.find((node) => node.id === aId),
      b = nodes.find((node) => node.id === bId);
    const length = distance(a, b),
      dx = (b.x - a.x) / length,
      dz = (b.z - a.z) / length;
    return {
      from: a,
      to: b,
      x: a.x + dx * (a.walkRadius || 6) * .94,
      z: a.z + dz * (a.walkRadius || 6) * .94,
      halfWidth: Math.min(a.bridgeHalfWidth ?? .18, b.bridgeHalfWidth ?? .18),
      dx,
      dz,
      length: Math.max(0.01, length - ((a.walkRadius || 6) + (b.walkRadius || 6)) * .94),
      owner: null,
    };
  });
  function inBridge(point, bridge, margin = 0, width = 0.36) {
    const x = point.x - bridge.x,
      z = point.z - bridge.z,
      along = x * bridge.dx + z * bridge.dz;
    return (
      along >= -margin &&
      along <= bridge.length + margin &&
      Math.abs(x * bridge.dz - z * bridge.dx) <= width
    );
  }
  let gathering = null;
  const seatOwners=new Map();
  let coffeeGatherings=0;
  const protectedVisit=actor=>Boolean(actor.target?.roomId || actor.target?.leavingRoom || actor.target?.leisureSite);
  function occupancy(id) {
    return actors.filter(
      (actor) => actor.node === id || actor.target?.node === id,
    ).length;
  }
  function indoorGoal(actor,type=null,manual=false) {
    if(!manual && actors.filter(other=>other.target?.roomId || other.target?.leavingRoom).length>=2) return null;
    const origin=navigation.walkable(actor)?actor:actor.target?.approach || actor;
    const rooms=buildings.filter(room=>!type || room.type===type)
      .sort((a,b)=>(a.island===actor.node?-20:0)+distance(a.center,actor)-((b.island===actor.node?-20:0)+distance(b.center,actor)));
    for(const room of rooms) for(const seat of room.seats) {
      if(seatOwners.has(seat.id) && seatOwners.get(seat.id)!==actor.id) continue;
      if(!navigation.route(origin,seat.approach) || !navigation.clearSegment(seat.approach,seat.point,seat.id)) continue;
      seatOwners.set(seat.id,actor.id);
      return {node:room.island,point:seat.point,approach:seat.approach,ignore:seat.id,state:'indoors',
        roomId:room.id,roomType:room.type,roomName:room.name,seatHeading:seat.heading,seatHeight:seat.height};
    }
    return null;
  }
  function requestIndoor(actor,type=null,manual=false) {
    const target=indoorGoal(actor,type,manual);
    if(!target) return false;
    if(gathering?.ids.includes(actor.id)) {
      const companions=gathering.ids.map(id=>actors[id]).filter(other=>other!==actor);
      gathering=null;
      for(const other of companions) {other.activity='wander';other.partner=null;if(!paused.has(other.id))begin(other);}
    }
    actor.activity='wander';actor.partner=null;actor.coffeeWith=null;actor.coffeeStarted=false;actor.requestedIndoor=target;
    actor.manualIndoor=manual;actor.nextIndoorVisit=elapsed+90+random()*30;
    begin(actor);
    return actor.target?.roomId===target.roomId;
  }
  function wanderGoal(actor) {
    const current = nodes.find((node) => node.id === actor.node);
    const other = shuffled(
      nodes.filter(
        (node) =>
          navigation.islandCounts[node.id] &&
          node.id !== actor.node &&
          occupancy(node.id) < 3,
      ),
    );
    const destination =
      random() < 0.55 && current ? current : other[0] || current || islands[0];
    const avoid = actors.filter((other) => other !== actor);
    if (destination.id === actor.node) avoid.push(actor);
    const point =
      navigation.sample(destination.id, random, avoid,point=>!buildings.some(room=>roomContains(room,point,.2))) ||
      navigation.nearest(destination, destination.id);
    return { node: destination.id, point, state: "waiting" };
  }
  function goal(actor) {
    if (actor.activity === "wander") return wanderGoal(actor);
    if (actor.activity === "daydream") {
      const node = nodes.find((node) => node.id === actor.node);
      const point = navigation.nearest(
        { x: node.x - 3.5, z: node.z + 1 },
        node.id,
        actors.filter((other) => other !== actor),
      );
      return { node: node.id, point, state: "daydreaming" };
    }
    if (actor.activity === "swing") {
      const seat = PARK.seats[actor.slot];
      return {
        node: "park",
        point: { x: park.x + seat.x, z: park.z + seat.z },
        state: "swinging",
      };
    }
    if (actor.activity === "chat") {
      const bench = PARK.chatBench,
        offset = actor.slot ? 0.7 : -0.7;
      const point = {
        x:
          park.x +
          bench.x +
          Math.cos(bench.heading) * offset +
          Math.sin(bench.heading) * 0.13,
        z:
          park.z +
          bench.z -
          Math.sin(bench.heading) * offset +
          Math.cos(bench.heading) * 0.13,
      };
      const approach = navigation.nearest(
        {
          x: point.x + Math.sin(bench.heading) * 1.25,
          z: point.z + Math.cos(bench.heading) * 1.25,
        },
        "park",
      );
      return {
        node: "park",
        point,
        approach,
        ignore: "park-chat-bench",
        state: "chatting",
      };
    }
    return {
      node: gathering.node,
      point: gathering.points[actor.slot],
      state: actor.activity === "pairwalk" ? "pair-waiting" : "playing",
    };
  }
  function begin(actor) {
    const oldTarget = actor.target;
    if (oldTarget?.ignore && oldTarget.approach && !navigation.walkable(actor))
      actor.exitObstacle = { id: oldTarget.ignore, point: oldTarget.approach };
    const origin = actor.exitObstacle?.point || actor;
    let target = actor.requestedIndoor || actor.requestedLeisure || goal(actor),
      route =
        target.point &&
        navigation.route(origin, target.approach || target.point);
    actor.requestedIndoor=null;actor.requestedLeisure=null;
    if(oldTarget?.ignore && oldTarget.ignore!==target.ignore && seatOwners.get(oldTarget.ignore)===actor.id) seatOwners.delete(oldTarget.ignore);
    if (route && target.approach) {
      if (navigation.clearSegment(target.approach, target.point, target.ignore))
        route.push(target.point);
      else route = null;
    }
    if (!route) {
      if(target.roomId && seatOwners.get(target.ignore)===actor.id) seatOwners.delete(target.ignore);
      actor.manualIndoor=false;
      actor.activity = "wander";
      actor.partner = null;
      target = wanderGoal(actor);
      route = target.point && navigation.route(origin, target.point);
    }
    if (route && actor.exitObstacle) route.unshift({ x: actor.x, z: actor.z });
    actor.departure = null;
    actor.trafficRoute=false;actor.leisureStall=0;actor.progressWaypoint=null;
    actor.avoidance = null;
    actor.bridgeLane = null;
    actor.bridgeYield = null;
    actor.goalMode = mode;
    actor.target = target;
    if(!target.leisureSite)actor.manualLeisure=false;
    actor.route = route || [{ x: actor.x, z: actor.z }];
    actor.routeIndex = 1;
    actor.state = route ? "walking" : "waiting";
    actor.wait = 2;
    actor.yOffset = 0;
    actor.swingAngle = 0;
    actor.swingTime = 0;
    actor.playTime = 0;
    actor.sipTime = 0;
  }
  function planGathering() {
    const available=actors.filter(actor=>!protectedVisit(actor));
    available.forEach((actor) => {
      actor.activity = "wander";
      actor.partner = null;
    });
    gathering = null;
    if (mode === "wander" || available.length < 2) return;
    const cafe=buildings.find(room=>room.type==='cafe');
    if(cafe && (coffeeGatherings===0 || (mode==='play' && random()<.45))) {
      const existing=actors.filter(actor=>actor.target?.roomId===cafe.id && !paused.has(actor.id));
      const companions=[...available].filter(actor=>!paused.has(actor.id))
        .sort((a,b)=>distance(a,cafe.center)-distance(b,cafe.center));
      const pair=[...existing,...companions].slice(0,2);
      if(pair.length===2) {
        let planned=0;
        for(const actor of pair) {
          if(actor.target?.roomId===cafe.id || requestIndoor(actor,'cafe',true)) {
            actor.manualIndoor=false;planned++;
          }
        }
        if(planned===2) {
          pair.forEach((actor,index)=>{actor.coffeeWith=pair[1-index].id;actor.coffeeStarted=false;actor.roomEnteredAt=elapsed;});
          coffeeGatherings++;
        }
        if(planned) return;
      }
    }
    let pair = shuffled(available).slice(0, 2);
    let activity =
      mode === "swing"
        ? random() < 0.5
          ? "swing"
          : "chat"
        : random() < 0.3
          ? "pairwalk"
          : "play";
    if(!park && (activity==="swing" || activity==="chat"))activity="play";
    const localPair = activity === "play" || activity === "pairwalk";
    if (localPair)
      pair[1] = [...available]
        .filter((actor) => actor !== pair[0])
        .sort((a, b) => distance(a, pair[0]) - distance(b, pair[0]))[0];
    else
      pair = [...available]
        .sort((a, b) => distance(a, park) - distance(b, park))
        .slice(0, 2);
    const meetingNode = localPair ? pair[0].node : "park";
    const angle = random() * Math.PI * 2;
    const first = localPair
      ? navigation.nearest(
          {
            x: pair[0].x + Math.sin(angle) * 1.5,
            z: pair[0].z + Math.cos(angle) * 1.5,
          },
          meetingNode,
        )
      : navigation.sample(meetingNode, random);
    let second = null;
    if (localPair && first)
      for (let i = 0; i < 32; i++) {
        const angle = random() * Math.PI * 2 + i * 2.4;
        const candidate = navigation.nearest(
          {
            x: first.x + Math.sin(angle) * 1.8,
            z: first.z + Math.cos(angle) * 1.8,
          },
          meetingNode,
          [first],
        );
        if (
          candidate &&
          distance(first, candidate) <= 2.5 &&
          navigation.clearSegment(first, candidate)
        ) {
          second = candidate;
          break;
        }
      }
    if (localPair && !second) return;
    gathering = {
      ids: pair.map((actor) => actor.id),
      node: meetingNode,
      points: [first, second],
      until: null,
    };
    pair.forEach((actor, slot) => {
      actor.activity = activity;
      actor.slot = slot;
      actor.partner = pair[1 - slot].id;
    });
    const quiet = available.find((actor) => !pair.includes(actor));
    if (quiet) quiet.activity = "daydream";
  }
  actors.forEach(begin);
  const sites=leisureSites ? leisureSites.map(site=>({...site,center:{...site.center},points:site.points.map(point=>({...point})),growth:0})) : (leisure?createLeisureSites({nodes,navigation,crossings,allow:point=>!buildings.some(room=>roomContains(room,point,.5))}):[]);
  const leisureController=createLeisureController({actors,navigation,sites,random,automatic:leisureAutomatic,isPaused:id=>paused.has(id),
    start(actor,target,manual) {
      if(gathering?.ids.includes(actor.id)) {
        const companions=gathering.ids.map(id=>actors[id]).filter(other=>other!==actor);gathering=null;
        for(const other of companions){other.activity='wander';other.partner=null;if(!paused.has(other.id))begin(other);}
      }
      actor.requestedLeisure=target;actor.requestedIndoor=null;actor.activity='leisure';actor.partner=null;
      actor.coffeeWith=null;actor.manualIndoor=false;actor.nextIndoorVisit=elapsed+60;
      begin(actor);actor.manualLeisure=Boolean(manual&&actor.target?.leisureSite);
    },
    finish(actor) {
      actor.activity='wander';actor.partner=null;actor.manualLeisure=false;
      actor.nextIndoorVisit=elapsed+25+random()*30;actor.leisureCompleted=(actor.leisureCompleted||0)+1;begin(actor);
    }});

  function ignoredObstacle(actor) {
    if (actor.exitObstacle) return actor.exitObstacle.id;
    return actor.target?.ignore &&
      (actor.state === "chatting" || actor.state === "indoors" ||
        actor.routeIndex === actor.route.length - 1)
      ? actor.target.ignore
      : null;
  }
  function safeStep(actor, destination) {
    if (!navigation.clearSegment(actor, destination, ignoredObstacle(actor)))
      return false;
    if (
      actors.some(
        (other) =>
          other !== actor &&
          distance(destination, other) < RESIDENT_SPACING - 1e-8,
      )
    )
      return false;
    return bridges.every((bridge) => {
      if (bridge.halfWidth >= .8) return true;
      if (
        !inBridge(destination, bridge, 0.3, 0.3) ||
        bridge.owner === null ||
        bridge.owner === actor.id
      )
        return true;
      const along = (point) =>
        (point.x - bridge.x) * bridge.dx + (point.z - bridge.z) * bridge.dz;
      const lateral = (point) =>
        (point.x - bridge.x) * bridge.dz - (point.z - bridge.z) * bridge.dx;
      const position = along(actor),
        next = along(destination);
      // A doll waiting at a landing must be able to step back or aside so the
      // bridge owner can exit; the reservation must never imprison its queue.
      if (position < -0.02 || position > bridge.length + 0.02) {
        return (
          Math.abs(next - bridge.length / 2) >
            Math.abs(position - bridge.length / 2) ||
          Math.abs(lateral(destination)) > Math.abs(lateral(actor)) + 1e-8
        );
      }
      return false;
    });
  }
  function moveWalker(actor, next, amount) {
    const remaining = distance(actor, next);
    if (remaining < 1e-6) return true;
    const step = Math.min(amount, remaining);
    const desired = {x: (next.x - actor.x) / remaining, z: (next.z - actor.z) / remaining};
    const narrow = bridges.some(bridge => bridge.halfWidth < .8 && inBridge(actor, bridge, 2, 1.5));
    let direction = narrow || actor.trafficRoute ? desired : steerRight(actor, actors, desired), aligning = false;
    for (const bridge of bridges) {
      if (!inBridge(actor, bridge, .8, bridge.halfWidth + .2)) continue;
      if (bridge.halfWidth >= .8) {
        const along = point => (point.x - bridge.x) * bridge.dx + (point.z - bridge.z) * bridge.dz;
        const position = along(actor), waypoint = along(next);
        // Once both walker and goal are on the same landing, follow the island
        // route directly. Lane steering here would prevent turning off the bridge.
        if ((position < 0 && waypoint < 0) || (position > bridge.length && waypoint > bridge.length)) continue;
        // The circular shoreline overlaps the bridge ends. An island turn can
        // start within that overlap, before passing the bridge's end plane.
        if (!inBridge(next, bridge, 0, bridge.halfWidth + .2) &&
            [bridge.from, bridge.to].some(node => distance(actor, node) <= (node.walkRadius || 6) && distance(next, node) <= (node.walkRadius || 6))) continue;
        // A waypoint on the opposite lane is reached by longitudinal progress,
        // not by crossing back over traffic to its original lateral position.
        // Final destinations still require reaching their exact position.
        if (next !== actor.route.at(-1) && !actor.bridgeYield && !actor.departure &&
            inBridge(next, bridge, 0, bridge.halfWidth + .2) && Math.abs(waypoint - position) < .12) return true;
        if (next === actor.route.at(-1) && inBridge(next, bridge, 0, bridge.halfWidth + .2)) continue;
        const travel = desired.x * bridge.dx + desired.z * bridge.dz >= 0 ? 1 : -1;
        const lateral = (actor.x - bridge.x) * bridge.dz - (actor.z - bridge.z) * bridge.dx;
        const nearby = actors.filter(other => other !== actor && distance(actor, other) < 5);
        const opposing = nearby.some(other => {
          const intent = walkingDirection(other);
          return (intent.x * bridge.dx + intent.z * bridge.dz) * travel < -.3;
        });
        const sideBySide = nearby.some(other => {
          const intent = walkingDirection(other);
          return (intent.x * bridge.dx + intent.z * bridge.dz) * travel > .7;
        });
        const bridgeIndex = bridges.indexOf(bridge);
        if (actor.bridgeLane?.bridge !== bridgeIndex)
          actor.bridgeLane = {bridge: bridgeIndex, side: sideBySide && Math.abs(lateral) > .35 ? Math.sign(lateral) : travel};
        if (opposing) actor.bridgeLane.side = travel;
        const correction = Math.max(-1, Math.min(1, (actor.bridgeLane.side * .68 - lateral) * 2));
        const x = bridge.dx * travel + bridge.dz * correction;
        const z = bridge.dz * travel - bridge.dx * correction;
        const length = Math.hypot(x, z);
        direction = {x: x / length, z: z / length};
        aligning = true;
      } else {
        actor.avoidance = null;
        const lateral = (actor.x - bridge.x) * bridge.dz - (actor.z - bridge.z) * bridge.dx;
        if (Math.abs(lateral) > .12) {
          const length = Math.abs(lateral);
          direction = {x: -lateral * bridge.dz / length, z: lateral * bridge.dx / length};
          aligning = true;
        }
      }
      break;
    }
    if (actor.avoidance && !aligning && !narrow) {
      const lookAhead = {x: actor.x + direction.x * 1.2, z: actor.z + direction.z * 1.2};
      if (!navigation.clearSegment(actor, lookAhead, ignoredObstacle(actor))) {
        const peer = actors.find(other => other.id === actor.avoidance.other);
        if (peer && peer.state === 'walking' && !paused.has(peer.id)) {
          // Stable priority in a tight passage: one continues, the other waits
          // or backs into free space, rather than both switching sides.
          actor.waitingFor = actor.id > peer.id ? peer.id : null;
          if (actor.waitingFor !== null) {
            if (distance(actor, peer) > 2.3) { actor.yielding = true; return false; }
            direction = {x: -desired.x, z: -desired.z};
          } else direction = desired;
        }
      } else actor.waitingFor = null;
    } else actor.waitingFor = null;
    const heading = Math.atan2(direction.x, direction.z);
    const avoiding = Boolean(actor.avoidance) || aligning;
    // A blocked crowd yields instead of trying arbitrary left/right turns each frame.
    for (const turn of narrow ? [0, .45, -.45, .9, -.9, Math.PI / 2, -Math.PI / 2, Math.PI] : [0]) {
      const point =
        !avoiding && turn === 0 && remaining <= amount
          ? next
          : {
              x: actor.x + Math.sin(heading + turn) * step,
              z: actor.z + Math.cos(heading + turn) * step,
            };
      if (!safeStep(actor, point)) continue;
      actor.x = point.x;
      actor.z = point.z;
      actor.heading = heading + turn;
      actor.walkTime += step / 0.95;
      actor.yielding = turn !== 0;
      const island = nodes.find((node) => distance(actor, node) <= (node.walkRadius || 6));
      if (island) actor.node = island.id;
      for (const bridge of bridges)
        if (
          bridge.halfWidth < .8 && inBridge(actor, bridge, 0.25, 0.3) &&
          (bridge.owner === null || bridge.owner === actor.id)
        )
          bridge.owner = actor.id;
      return !avoiding && turn === 0 && remaining <= amount;
    }
    actor.yielding = true;
    return false;
  }
  function step(dt) {
    elapsed += dt;
    if(sites.length)leisureController.update(dt);
    if (paused.size) nextChange += dt;
    if (elapsed >= nextChange) {
      mode = chooseActivity(mode, random);
      planGathering();
      nextChange = elapsed + (mode === "wander" ? 80 : 110) + random() * 30;
      actors.forEach((actor) => {
        if (!paused.has(actor.id) && !protectedVisit(actor)) begin(actor);
      });
    }
    if (gathering && !paused.size) {
      const pair = gathering.ids.map((id) => actors[id]);
      if (
        pair.some((actor) => actor.departure || actor.activity === "wander")
      ) {
        for (const actor of pair) {
          actor.activity = "wander";
          actor.partner = null;
          if (!actor.departure) begin(actor);
        }
        gathering = null;
        nextChange = Math.min(nextChange, elapsed + 20 + random() * 15);
      }
      if (gathering) {
        if (
          !gathering.until &&
          pair.every((actor) =>
            ["playing", "swinging", "chatting", "pair-waiting"].includes(
              actor.state,
            ),
          )
        )
          gathering.until = elapsed + 30 + random() * 15;
        if (
          pair.every((actor) => actor.state === "pair-waiting") &&
          elapsed >= (gathering.nextWalkTry || 0)
        ) {
          gathering.nextWalkTry = elapsed + 1;
          const first = navigation.sample(gathering.node, random, pair);
          if (first)
            for (let i = 0; i < 16; i++) {
              const angle = random() * Math.PI * 2 + i * 2.4;
              const second = navigation.nearest(
                {
                  x: first.x + Math.sin(angle) * 1.6,
                  z: first.z + Math.cos(angle) * 1.6,
                },
                gathering.node,
                [first],
              );
              if (
                !second ||
                distance(first, second) > 2.5 ||
                !navigation.clearSegment(first, second)
              )
                continue;
              if (
                !navigation.route(pair[0], first) ||
                !navigation.route(pair[1], second)
              )
                continue;
              gathering.points = [first, second];
              pair.forEach(begin);
              break;
            }
        }
        if (gathering.until && elapsed > gathering.until) {
          pair.forEach((actor) => {
            actor.activity = "wander";
            actor.partner = null;
            begin(actor);
          });
          gathering = null;
        }
      }
    }
    for (const bridge of bridges) {
      const owner = actors.find((actor) => actor.id === bridge.owner);
      if (!owner || !inBridge(owner, bridge, 0.35, 0.35)) bridge.owner = null;
    }
    // Queue on the island, not on the narrow landing: leave room for the owner
    // to exit before trying to cross in the opposite direction.
    for (const actor of actors) {
      if (
        paused.has(actor.id) ||
        actor.state !== "walking" ||
        actor.bridgeYield
      )
        continue;
      for (let index = 0; index < bridges.length; index++) {
        const bridge = bridges[index];
        if (
          bridge.halfWidth >= .8 ||
          bridge.owner === null ||
          bridge.owner === actor.id ||
          !inBridge(actor, bridge, 1, 0.65)
        )
          continue;
        const along =
          (actor.x - bridge.x) * bridge.dx + (actor.z - bridge.z) * bridge.dz;
        if (along >= 0 && along <= bridge.length) continue;
        const side = along < 0 ? -1 : 1;
        const endpoint =
          side < 0
            ? { x: bridge.x, z: bridge.z }
            : {
                x: bridge.x + bridge.dx * bridge.length,
                z: bridge.z + bridge.dz * bridge.length,
              };
        const island = nodes.find((node) => distance(actor, node) <= (node.walkRadius || 6));
        if (!island) continue;
        for (const lateral of [1.4, -1.4]) {
          const desired = {
            x: endpoint.x + bridge.dx * side * 1.6 + bridge.dz * lateral,
            z: endpoint.z + bridge.dz * side * 1.6 - bridge.dx * lateral,
          };
          const point = navigation.nearest(
            desired,
            island.id,
            actors.filter((other) => other !== actor),
          );
          const route = point && navigation.route(actor, point);
          if (route) {
            actor.bridgeYield = { bridge: index, route, index: 1 };
            break;
          }
        }
        if (actor.bridgeYield) break;
      }
    }
    for (const actor of actors) {
      if (paused.has(actor.id)) continue;
      if(buildings.length && elapsed>=actor.nextIndoorVisit && !protectedVisit(actor) && !actor.exitObstacle &&
        actor.activity==='wander' && actor.partner===null) {
        actor.nextIndoorVisit=elapsed+12;
        requestIndoor(actor);
      }
      if (actor.exitObstacle && navigation.walkable(actor))
        actor.exitObstacle = null;
      const previousPose = {
        x: actor.x,
        z: actor.z,
        yOffset: actor.yOffset,
        heading: actor.heading,
        swingAngle: actor.swingAngle,
        swingTime: actor.swingTime,
      };
      actor.yOffset = 0;
      actor.swingAngle = 0;
      if (actor.state === "walking") {
        if (actor.bridgeYield) {
          const queue = actor.bridgeYield,
            next = queue.route[queue.index];
          if (next && moveWalker(actor, next, dt * 0.95)) queue.index++;
          if (
            queue.index >= queue.route.length &&
            bridges[queue.bridge].owner === null
          ) {
            actor.bridgeYield = null;
            if (actor.target) {
              const route = navigation.route(
                actor,
                actor.target.approach || actor.target.point,
              );
              if (route) {
                if (actor.target.approach) route.push(actor.target.point);
                actor.route = route;
                actor.routeIndex = 1;
              }
            }
          }
        } else if (actor.departure) {
          const heading = actor.departure.heading;
          moveWalker(
            actor,
            { x: actor.x + Math.sin(heading), z: actor.z + Math.cos(heading) },
            dt * 0.95,
          );
          actor.departure.heading = actor.heading;
        } else {
          const next = actor.route[actor.routeIndex];
          if(next&&actor.target?.leisureSite) {
            const remaining=distance(actor,next);
            if(actor.progressWaypoint!==next||remaining<actor.progressDistance-.04) {
              actor.progressWaypoint=next;actor.progressDistance=remaining;actor.leisureStall=0;
            } else actor.leisureStall+=dt;
          }
          if (next && moveWalker(actor, next, dt * 0.95)) actor.routeIndex++;
          if (actor.routeIndex >= actor.route.length) {
            actor.state = actor.target.state;
            actor.node = actor.target.node;
            actor.wait = actor.state === "indoors" ? 28 + random()*20 :
              actor.state === "daydreaming"
                ? 20 + random() * 15
                : 2 + random() * 5;
            actor.playTime = 0;
            if(actor.state==='indoors') actor.roomEnteredAt=elapsed;
            if(actor.target.leavingRoom) {actor.manualIndoor=false;actor.nextIndoorVisit=elapsed+90+random()*40;}
          } else if (
            next && (actor.yielding || actor.leisureStall>3)
          ) {
            actor.blockedTime += dt;
            if (actor.blockedTime > 3 || actor.leisureStall>3) {
              const target = actor.target.approach || actor.target.point;
              const heading = chooseDeparture(actor, actor.heading, random, heading => {
                const point = {x: actor.x + Math.sin(heading) * 2, z: actor.z + Math.cos(heading) * 2};
                return navigation.clearSegment(actor, point, ignoredObstacle(actor)) &&
                  actors.every(other => other === actor || distance(point, other) >= RESIDENT_SPACING);
              }, Math.PI);
              let path = actor.target?.leisureSite && !actor.exitObstacle ? navigation.route(actor,target,{avoid:actors.filter(other=>other!==actor)}) : null;
              actor.trafficRoute=Boolean(path);
              if (!path && heading !== null) {
                const via = {x: actor.x + Math.sin(heading) * 2, z: actor.z + Math.cos(heading) * 2};
                const remainder = navigation.route(via, target);
                if (remainder) path = [{x: actor.x, z: actor.z}, ...remainder];
              }
              path ||= actor.exitObstacle ? null : navigation.route(actor, target);
              if (path) {
                if (actor.target.approach) path.push(actor.target.point);
                actor.route = path;
                actor.routeIndex = 1;
                actor.avoidance = null;
              }
              actor.blockedTime = 0;actor.leisureStall=0;
            }
          } else actor.blockedTime = 0;
        }
        actor.yOffset = Math.abs(Math.sin(actor.walkTime * 8)) * 0.04;
      } else if (actor.state === "waiting" || actor.state === "daydreaming") {
        actor.wait -= dt;
        if (actor.state === "daydreaming") {
          actor.heading += Math.sin(elapsed * 0.2 + actor.phase) * dt * 0.04;
          if (actor.wait <= 0) actor.activity = "wander";
        }
        if (actor.wait <= 0) begin(actor);
      } else if (actor.state === 'indoors') {
        actor.heading=actor.target.seatHeading;
        actor.sipTime+=dt;
        const companion=actors[actor.coffeeWith];
        if(actor.coffeeWith!=null && !actor.coffeeStarted && companion?.state==='indoors' && companion.target?.roomId===actor.target.roomId) {
          actor.coffeeStarted=true;companion.coffeeStarted=true;actor.wait=35;companion.wait=35;
        }
        const waitingForCoffeeFriend=actor.coffeeWith!=null && !actor.coffeeStarted && companion?.target?.roomId===actor.target.roomId && elapsed-(actor.roomEnteredAt||elapsed)<90;
        if(!waitingForCoffeeFriend) actor.wait-=dt;
        if(actor.wait<=0) {
          const room=buildings.find(room=>room.id===actor.target.roomId);
          if(room) {
            actor.requestedIndoor={node:room.island,point:room.exit,state:'waiting',leavingRoom:room.id};
            actor.activity='wander';actor.partner=null;begin(actor);
          }
        }
      } else if (actor.state === "chatting") {
        actor.yOffset = 0; // The renderer aligns each shaped torso with the seat surface.
        actor.heading =
          PARK.chatBench.heading +
          (actor.slot ? -0.22 : 0.22) +
          Math.sin(elapsed * 0.65 + actor.phase) * 0.06;
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
        if (
          !navigation.walkable(actor) ||
          actors.some(
            (other) =>
              other !== actor && distance(actor, other) < RESIDENT_SPACING,
          )
        )
          Object.assign(actor, previousPose);
      } else if (actor.state === "playing") {
        actor.playTime += dt;
        const partner = actors[actor.partner];
        if (partner)
          actor.heading = Math.atan2(partner.x - actor.x, partner.z - actor.z);
        actor.yOffset =
          Math.abs(Math.sin(actor.playTime * 3 + actor.phase)) * 0.08;
      }
    }
  }
  function update(dt,manualOnly=false) {
    const frozen=[];
    if(manualOnly) for(const actor of actors) if(!actor.manualIndoor && !actor.manualLeisure && !paused.has(actor.id)) {frozen.push([actor,actor.paused]);paused.add(actor.id);actor.paused=true;}
    let remaining = Math.max(0, dt);
    if (!remaining) step(0);
    while (remaining > 1e-9) {
      const slice = Math.min(0.025, remaining);
      step(slice);
      remaining -= slice;
    }
    for(const [actor,previous] of frozen) {paused.delete(actor.id);if(previous===undefined)delete actor.paused;else actor.paused=previous;}
  }
  return {
    actors,
    navigation,
    update,
    initialMode,
    visitBuilding(index,type=null) {return Boolean(actors[index] && requestIndoor(actors[index],type,true));},
    get hasManualVisits() {return actors.some(actor=>(actor.manualIndoor || actor.manualLeisure) && !paused.has(actor.id));},
    leisure:leisureController,
    requestLeisure(index,kind){return leisureController.request(index,kind);},
    pause(index) {
      if (actors[index]) { paused.add(index); actors[index].paused = true; }
    },
    resume(index) {
      if (actors[index]) { paused.delete(index); actors[index].paused = false; }
    },
    isPaused(index) {
      return paused.has(index);
    },
    descriptions() {
      return actors.map((actor) => ({
        state: actor.state,
        island: actor.node,
        building:actor.target?.roomId || actor.target?.leavingRoom || null,
        label: paused.has(actor.id)
          ? "停下來和你打招呼"
          : {
              fishing: `在碼頭釣魚${actor.leisureResult?({fish:' · 釣到小魚！',seaweed:' · 釣到海草',boot:' · 居然是舊靴子！'}[actor.leisureResult]):'，等魚上鉤'}` ,
              picnicking: actor.leisureTime<3?'鋪好野餐墊，等朋友一起吃點心':actor.leisureTime>23?'一起收拾野餐籃':'和朋友分享餅乾、享受野餐',
              gardening: actor.leisureTime<6?'在花園播種':actor.leisureTime<20?'替小花澆水':'蹲下欣賞開花的小花園',
              photographing: '拿著相機拍風景、查看照片',
              'photo-posing': actor.target?.leisureKind==='photo'?'和朋友擺好姿勢拍照':'和家人排好隊，準備拍合照',
              walking: actor.target?.leisureSite ? `正在去${LEISURE_LABELS[actor.target.leisureKind] || '集合拍合照'}` : actor.target?.roomId ? `走進${actor.target.roomName}找座位` : actor.target?.leavingRoom ? "喝完茶，走出屋子繼續散步" :
                actor.departure || actor.activity === "wander"
                  ? "自在散步、探索小島中"
                  : actor.activity === "pairwalk"
                    ? "和朋友兩兩散步中"
                    : "去找朋友一起玩",
              waiting: "在島上看風景",
              "pair-waiting": "等朋友一起散步",
              daydreaming: "獨自在樹林裡發呆",
              chatting: "坐在公園椅子上聊天",
              indoors: actor.target?.roomType==='cafe'?"坐在咖啡廳裡喝咖啡":`在${actor.target?.roomName || "屋子"}裡喝茶休息`,
              swinging: "在公園盪鞦韆",
              playing: "和朋友一起玩球",
            }[actor.state],
      }));
    },
    get mode() {
      return mode;
    },
    get elapsed() {
      return elapsed;
    },
  };
}
