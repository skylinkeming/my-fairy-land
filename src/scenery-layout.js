const LINKS = [['home','todo'], ['home','note'], ['home','friends'], ['home','memories'], ['note','friends'], ['home','park']];
export function sceneryRandom(id) {
  let state = [...id].reduce((seed, character) => (Math.imul(seed, 31) + character.charCodeAt(0)) >>> 0, 741);
  return () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296; };
}
function segmentDistance(point, a, b) {
  const dx = b.x - a.x, dz = b.z - a.z;
  const t = Math.max(0, Math.min(1, ((point.x-a.x)*dx + (point.z-a.z)*dz)/(dx*dx+dz*dz || 1)));
  return Math.hypot(point.x-a.x-dx*t, point.z-a.z-dz*t);
}

// A reproducible landscape plan with irregular clearings, clustered planting,
// and broad, unobstructed routes from the center to each bridge landing.
export function createNaturalLayout({id, node, nodes, obstacles = [], crossings = []}) {
  const random = sceneryRandom(id);
  const exits = LINKS.filter(link => link.includes(id)).map(link => nodes.find(other => other.id === link.find(value => value !== id))).filter(Boolean);
  const nearExit = (x,z,margin=1.9) => exits.some(other => {
    const dx=other.x-node.x,dz=other.z-node.z,length=Math.hypot(dx,dz);
    return x*dx+z*dz>0 && Math.abs(x*dz-z*dx)/length<margin;
  });
  const free = (point, clearance=1.5) => {
    if (Math.hypot(point.x,point.z)>10.65 || nearExit(point.x,point.z,Math.max(1.9,clearance+.8))) return false;
    const world = {x:node.x+point.x,z:node.z+point.z};
    if (crossings.some(crossing => segmentDistance(world,crossing.a,crossing.b) < clearance+.65)) return false;
    return obstacles.every(obstacle => {
      if(obstacle.kind === 'river') return !obstacle.points.some((p,i) => i && segmentDistance(world,obstacle.points[i-1],p)<obstacle.radius+clearance);
      if(obstacle.radius !== undefined) return Math.hypot(world.x-obstacle.x,world.z-obstacle.z)>obstacle.radius+clearance;
      return Math.hypot(Math.max(obstacle.minX-world.x,0,world.x-obstacle.maxX),Math.max(obstacle.minZ-world.z,0,world.z-obstacle.maxZ))>clearance;
    });
  };
  const candidates = Array.from({length:1400},()=>{
    const angle=random()*Math.PI*2,radius=Math.sqrt(random())*10.65;
    return {x:Math.cos(angle)*radius,z:Math.sin(angle)*radius};
  }).filter(point=>free(point));
  const focus = {home:[6,-4],todo:[-4,4],note:[-2,5.5],friends:[-5,3],memories:[5,5],park:[6.8,6.3]}[id] || [5,5];
  const landmarkPoint = candidates.filter(point=>free(point,2.3) && Math.hypot(point.x,point.z)<9.5)
    .sort((a,b)=>Math.hypot(a.x-focus[0],a.z-focus[1])-Math.hypot(b.x-focus[0],b.z-focus[1]))[0];
  const landmark = landmarkPoint ? {...landmarkPoint, radius:id==='park'?2.7:2.3, heading:0} : null;
  const pockets = [];
  // Different seeds and asymmetric focus points keep each island distinct.
  const rotation=random()*Math.PI*2;
  const anchors = [[-4.5,-3.8],[6.8,-5.6],[5.4,5.4],[-6.7,7.4],[-2.5,-8.1],[9.1,1.1],[-8.6,-.8],[.8,5.8]]
    .map(([x,z])=>({x:x*Math.cos(rotation)-z*Math.sin(rotation),z:x*Math.sin(rotation)+z*Math.cos(rotation)}));
  for (const anchor of anchors) {
    const candidate = candidates.filter(point=>(!landmark || Math.hypot(point.x-landmark.x,point.z-landmark.z)>landmark.radius+1.65) && pockets.every(other=>Math.hypot(point.x-other.x,point.z-other.z)>3.25))
      .sort((a,b)=>Math.hypot(a.x-anchor.x,a.z-anchor.z)-Math.hypot(b.x-anchor.x,b.z-anchor.z))[0];
    if(candidate) pockets.push({...candidate,heading:(random()-.5)*1.5});
  }
  const groves = [];
  const treeCount = {home:12,todo:22,note:10,friends:9,memories:10,park:12}[id] || 12;
  const woodland = {home:[[-7,-6],[-8,-3]],todo:[[-7,-6],[-8,1]],note:[[-5,-7],[6,-7]],friends:[[-6,-6],[6,-6]],memories:[[-7,-5],[5,-7]],park:[[-6,-6],[5,-6]]}[id] || [[-7,-6]];
  for(let attempt=0; attempt<6000 && groves.length<treeCount; attempt++) {
    const anchor=woodland[attempt%woodland.length],angle=random()*Math.PI*2,radius=Math.sqrt(random())*2.8;
    const point={x:anchor[0]+Math.cos(angle)*radius,z:anchor[1]+Math.sin(angle)*radius};
    if(!free(point,.65) || (landmark && Math.hypot(point.x-landmark.x,point.z-landmark.z)<landmark.radius+1.1) || pockets.some(other=>Math.hypot(point.x-other.x,point.z-other.z)<1.8) || groves.some(other=>Math.hypot(point.x-other.x,point.z-other.z)<1.35)) continue;
    groves.push({...point,scale:.65+random()*.32,type:id==='home'?2:random()<.5?1:0});
  }
  return {pockets,groves,anchors,nearExit,landmark};
}
