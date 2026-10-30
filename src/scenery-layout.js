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
export function createNaturalLayout({id, node, nodes, obstacles = []}) {
  const random = sceneryRandom(id);
  const exits = LINKS.filter(link => link.includes(id)).map(link => nodes.find(other => other.id === link.find(value => value !== id))).filter(Boolean);
  const nearExit = (x,z,margin=1.9) => exits.some(other => {
    const dx=other.x-node.x,dz=other.z-node.z,length=Math.hypot(dx,dz);
    return x*dx+z*dz>0 && Math.abs(x*dz-z*dx)/length<margin;
  });
  const free = (point, clearance=1.5) => {
    if (Math.hypot(point.x,point.z)>10.65 || nearExit(point.x,point.z)) return false;
    const world = {x:node.x+point.x,z:node.z+point.z};
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
  const pockets = [];
  // Different seeds and asymmetric focus points keep each island distinct.
  const rotation=random()*Math.PI*2;
  const anchors = [[-4.5,-3.8],[6.8,-5.6],[5.4,5.4],[-6.7,7.4],[-2.5,-8.1],[9.1,1.1],[-8.6,-.8],[.8,5.8]]
    .map(([x,z])=>({x:x*Math.cos(rotation)-z*Math.sin(rotation),z:x*Math.sin(rotation)+z*Math.cos(rotation)}));
  for (const anchor of anchors) {
    const candidate = candidates.filter(point=>pockets.every(other=>Math.hypot(point.x-other.x,point.z-other.z)>3.25))
      .sort((a,b)=>Math.hypot(a.x-anchor.x,a.z-anchor.z)-Math.hypot(b.x-anchor.x,b.z-anchor.z))[0];
    if(candidate) pockets.push({...candidate,heading:(random()-.5)*1.5});
  }
  const groves = [];
  const treeCount = id==='todo'?18:id==='note'?7:12;
  for(let attempt=0; attempt<900 && groves.length<treeCount; attempt++) {
    const anchor=anchors[attempt%3],angle=random()*Math.PI*2,radius=Math.sqrt(random())*3.8;
    const point={x:anchor.x+Math.cos(angle)*radius,z:anchor.z+Math.sin(angle)*radius};
    if(!free(point,1.05) || pockets.some(other=>Math.hypot(point.x-other.x,point.z-other.z)<2.25) || groves.some(other=>Math.hypot(point.x-other.x,point.z-other.z)<1.55)) continue;
    groves.push({...point,scale:.55+random()*.4,type:id==='home'?2:random()<.5?1:0});
  }
  return {pockets,groves,anchors,nearExit};
}
