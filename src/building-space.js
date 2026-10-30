export function roomContains(room, point, margin = 0) {
  const x=point.x-room.center.x,z=point.z-room.center.z;
  const localX=x*Math.cos(room.heading)-z*Math.sin(room.heading);
  const localZ=x*Math.sin(room.heading)+z*Math.cos(room.heading);
  return Math.abs(localX)<room.width/2+margin && Math.abs(localZ)<room.depth/2+margin;
}

