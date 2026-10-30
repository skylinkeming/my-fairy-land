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
  const vx = (otherDirection.x - direction.x) * .95;
  const vz = (otherDirection.z - direction.z) * .95;
  const speed2 = vx * vx + vz * vz;
  const time = speed2 > .0001 ? Math.max(0, Math.min(3, -(px * vx + pz * vz) / speed2)) : 0;
  return Math.hypot(px + vx * time, pz + vz * time) < 1.45;
}

export function steerRight(actor, actors, direction) {
  let encounter = actor.avoidance;
  if (encounter) {
    const other = actors.find(other => other.id === encounter.other);
    const ahead = other && (other.x - actor.x) * encounter.x + (other.z - actor.z) * encounter.z;
    if (!other || distance(actor, other) > 5 || (ahead < -.3 && distance(actor, other) > 1.4)) {
      actor.avoidance = null;
      encounter = null;
    }
  }
  if (!encounter) {
    const other = actors.filter(other => other !== actor && other.id !== actor.partner && distance(actor, other) < 5)
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
