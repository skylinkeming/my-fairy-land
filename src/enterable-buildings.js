import * as T from 'three';

import {roomContains} from './building-space.js';
export {roomContains} from './building-space.js';

export function buildEnterableBuilding({id,island,type='home',name='小島的家',parent,x=0,z=0,baseY=0,heading=0,
  width=5.8,depth=4.8,color='#b78c7e',box,ball,cyl,batchRoot=false}) {
  const root=new T.Group();root.name=batchRoot?'enterable-core-building':`building-${id}`;
  root.position.set(x,baseY,z);root.rotation.y=heading;root.userData.enterableBuilding=id;parent.add(root);
  const b=(w,h,d,c,px=0,py=0,pz=0,p=root)=>box(w,h,d,c,px,py,pz,p);
  const c=(r,rb,h,color,px=0,py=0,pz=0,p=root,n=12)=>cyl(r,rb,h,color,px,py,pz,p,n);
  const floor=b(width+.14,.07,depth+.14,'#d9c7a4',0,.025);floor.userData.walkThrough=true;
  const upper=new T.Group();upper.name='cutaway-upper-walls';upper.userData.walkThrough=true;upper.userData.sceneryAnimated=true;root.add(upper);
  const wallColor=type==='cafe'?'#eedbcf':'#eee4cd',wallHeight=2.6,doorWidth=2.7;
  function wall(w,d,px,pz) {
    const base=b(w,.58,d,wallColor,px,.35,pz);base.userData.walkObstacle=true;
    b(w,wallHeight-.58,d,wallColor,px,.64+(wallHeight-.58)/2,pz,upper);
  }
  wall(width,.17,0,-depth/2);wall(.17,depth,-width/2,0);wall(.17,depth,width/2,0);
  const side=(width-doorWidth)/2;
  wall(side,.17,-(doorWidth+side)/2,depth/2);wall(side,.17,(doorWidth+side)/2,depth/2);
  b(doorWidth,.32,.18,wallColor,0,2.48,depth/2,upper);
  // The opening is physically clear; trim and a lintel make its scale readable.
  for(const sign of [-1,1]) b(.09,2.28,.22,'#a98c68',sign*(doorWidth/2+.03),1.15,depth/2+.03,upper);
  b(doorWidth+.22,.1,.23,'#a98c68',0,2.29,depth/2+.03,upper);
  for(const sign of [-1,1]) {
    b(.78,.87,.05,'#a8c7c0',sign*(width/2-.68),1.57,depth/2+.12,upper);
    b(.82,.05,.08,'#f7efdc',sign*(width/2-.68),1.57,depth/2+.16,upper);
    b(.05,.9,.08,'#f7efdc',sign*(width/2-.68),1.57,depth/2+.16,upper);
  }
  const roof=new T.Group();roof.name='cutaway-roof';roof.userData.walkThrough=true;roof.userData.sceneryAnimated=true;root.add(roof);
  const slope=Math.atan2(1.15,width/2+.24),roofWidth=Math.hypot(width/2+.24,1.15);
  for(const sign of [-1,1]) {
    const piece=b(roofWidth,.15,depth+.55,color,sign*(width/4+.12),2.75+.575,0,roof);
    piece.rotation.z=-sign*slope;
  }
  b(.24,.55,.3,'#aba896',width*.31,3.33,-depth*.23,roof);
  // A small service counter leaves the central aisle and both chair approaches open.
  const counter=new T.Group();counter.userData.walkObstacle=true;counter.position.set(0,0,-depth/2+.35);root.add(counter);
  b(width-1.2,.83,.5,type==='cafe'?'#ae8d78':'#a1ad91',0,.48,0,counter);
  b(width-1.1,.07,.6,'#e6d8bb',0,.93,0,counter);
  for(let i=0;i<4;i++) b(.16,.32,.22,['#a68a74','#839e97','#c4af89'][i%3],-.55+i*.35,1.12,0,counter);
  const table=new T.Group();table.userData.walkObstacle=true;table.position.set(0,0,-.65);root.add(table);
  c(.57,.57,.09,'#c8b38e',0,.85,0,table);c(.075,.16,.73,'#9b8465',0,.45,0,table);
  c(.1,.085,.16,'#f1e6d3',-.17,.99,.03,table);c(.1,.085,.16,'#a8c0b5',.17,.99,.03,table);
  const seatRecords=[];
  for(const sign of [-1,1]) {
    const chair=new T.Group();chair.position.set(sign*1.42,0,-.65);chair.rotation.y=-sign*Math.PI/2;
    chair.userData.walkObstacle=true;chair.userData.obstacleId=`${id}-seat-${sign<0?0:1}`;root.add(chair);
    b(.82,.1,.73,'#b79b77',0,.51,0,chair);b(.82,.68,.08,'#b79b77',0,.86,-.33,chair);
    for(const sx of [-.3,.3]) for(const sz of [-.25,.25]) b(.06,.47,.06,'#917f63',sx,.26,sz,chair);
    seatRecords.push({object:chair,id:chair.userData.obstacleId,heading:heading-sign*Math.PI/2,
      localPoint:new T.Vector3(sign*1.42,0,-.65),localApproach:new T.Vector3(sign*1.42,0,.7)});
  }
  // A floor rug and little wall prints are decoration, not invisible obstacles.
  const rug=b(2.6,.012,1.35,type==='cafe'?'#c5a69a':'#afba9e',0,.068,1.2);rug.userData.walkThrough=true;
  const record={id,island,type,name,root,roof,upper};
  record.describe=()=>{
    root.updateWorldMatrix(true,true);
    const transform=vector=>{const p=vector.clone().applyMatrix4(root.matrixWorld);return {x:p.x,z:p.z};};
    const center=transform(new T.Vector3());
    const worldHeading=Math.atan2(root.matrixWorld.elements[8],root.matrixWorld.elements[10]);
    const floorY=new T.Vector3(0,.062,0).applyMatrix4(root.matrixWorld).y;
    return {id,island,type,name,center,heading:worldHeading,width,depth,floorY,
      entry:transform(new T.Vector3(0,0,depth/2-.45)),exit:transform(new T.Vector3(0,0,depth/2+1.25)),
      seats:seatRecords.map(seat=>({id:seat.id,point:transform(seat.localPoint),approach:transform(seat.localApproach),
        heading:worldHeading+(seat.heading-heading),height:new T.Vector3(0,.56,0).applyMatrix4(root.matrixWorld).y})),
    };
  };
  return record;
}

// Clear the former miniature gardens out of the newly enlarged rooms and doors.
// Building interiors keep their own walls and furniture; fixed park activities stay separate.
export function clearBuildingFootprints(groups, records, protectedObjects=[]) {
  const rooms=records.map(record=>record.describe());
  for(const [island,group] of Object.entries(groups)) {
    group.updateWorldMatrix(true,true);
    for(const child of [...group.children]) {
      if(child.userData.enterableBuilding || protectedObjects.includes(child) || child.name==='expanded-island-dressing' ||
        child.name==='winding-river' || child.name==='park-swings' || child.name==='riverside-watermill') continue;
      // Flat terrain and ground paths remain underneath the buildings.
      const bounds=new T.Box3().setFromObject(child);
      if(bounds.isEmpty() || bounds.max.y-bounds.min.y<=.19 || bounds.max.y<.85) continue;
      const matching=rooms.filter(room=>room.island===island);
      const center=bounds.getCenter(new T.Vector3());
      if(matching.some(room=>roomContains(room,{x:center.x,z:center.z},.65) ||
        Math.hypot(center.x-room.exit.x,center.z-room.exit.z)<1.6)) {
        group.remove(child);
        child.traverse(object=>object.geometry?.dispose());
      }
    }
  }
}
