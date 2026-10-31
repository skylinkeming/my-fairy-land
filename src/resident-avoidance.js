const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
export function walkingDirection(actor) {
  if (actor.state !== 'walking' || actor.paused) return {x: 0, z: 0};
  const next = actor.departure ? {
    x: actor.x + Math.sin(actor.departure.heading),
    z: actor.z + Math.cos(actor.departure.heading),
  } : actor.route?.[actor.routeIndex];
  const length = next ? distance(actor, next) : 0;
  return length > .001 ? {x: (next.x - actor.x) / length, z: (next.z - actor.z) / length} : {x: 0, z: 0};
}

// Closest approach over the next three seconds, using desired walking velocities.
export function predictsCollision(actor, other, direction, otherDirection) {
  const px = other.x - actor.x, pz = other.z - actor.z;
  if (px * direction.x + pz * direction.z < -.25) return false;
  const stoppingTime=walker=>{
    const last=walker.route?.at(-1);
    return !walker.departure && last && walker.routeIndex===walker.route.length-1 ? Math.min(3,distance(walker,last)/.95) : 3;
  };
  const stop=stoppingTime(actor),otherStop=stoppingTime(other);
  // A resident stops at its final seat/pose. Predicting motion beyond the goal
  // made neighbours avoid imaginary collisions and circle around a gathering.
  const boundaries=[...new Set([0,stop,otherStop,3])].sort((a,b)=>a-b);
  for(let i=0;i<boundaries.length-1;i++) {
    const from=boundaries[i],until=boundaries[i+1];
    const x=px+otherDirection.x*.95*Math.min(from,otherStop)-direction.x*.95*Math.min(from,stop);
    const z=pz+otherDirection.z*.95*Math.min(from,otherStop)-direction.z*.95*Math.min(from,stop);
    const vx=((from<otherStop?otherDirection.x:0)-(from<stop?direction.x:0))*.95;
    const vz=((from<otherStop?otherDirection.z:0)-(from<stop?direction.z:0))*.95;
    const speed2=vx*vx+vz*vz,time=speed2>.0001?Math.max(0,Math.min(until-from,-(x*vx+z*vz)/speed2)):0;
    if(Math.hypot(x+vx*time,z+vz*time)<1.45)return true;
  }
  return false;
}

export function steerRight(actor, actors, direction) {
  let encounter = actor.avoidance;
  if (encounter) {
    const other = actors.find(other => other.id === encounter.other);
    const ahead = other && (other.x - actor.x) * encounter.x + (other.z - actor.z) * encounter.z;
    if (!other || (actor.target?.roomId && actor.target.roomId===other.target?.roomId) || distance(actor, other) > 5 || (ahead < -.3 && distance(actor, other) > 1.4)) {
      actor.avoidance = null;
      encounter = null;
    }
  }
  if (!encounter) {
    const other = actors.filter(other => other !== actor && other.id !== actor.partner && !(actor.target?.roomId && actor.target.roomId===other.target?.roomId) && distance(actor, other) < 5)
      .sort((a, b) => distance(actor, a) - distance(actor, b))
      .find(other => predictsCollision(actor, other, direction, walkingDirection(other)));
    if (other) encounter = actor.avoidance = {other: other.id, ...direction};
  }
  if (!encounter) return direction;
  // Hold the original right side until the encounter ends, avoiding left/right oscillation.
  const other = actors.find(other => other.id === encounter.other);
  const lateral = (other.x - actor.x) * encounter.z - (other.z - actor.z) * encounter.x;
  const side = lateral < -1.45 ? 0 : .85;
  const x = encounter.x * .7 + encounter.z * side;
  const z = encounter.z * .7 - encounter.x * side;
  const length = Math.hypot(x, z);
  return {x: x / length, z: z / length};
}
