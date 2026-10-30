import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {buildEnterableBuilding,roomContains} from '../src/enterable-buildings.js';
import {collectSceneryNavigation} from '../src/scenery-navigation.js';
import {createResidentLife} from '../src/resident-life.js';

function fixture(count=1,heading=0) {
  const island=new T.Group(),material=new T.MeshBasicMaterial();
  const add=(geometry,x,y,z,parent)=>{const mesh=new T.Mesh(geometry,material);mesh.position.set(x,y,z);parent.add(mesh);return mesh;};
  const art={
    box:(w,h,d,color,x,y,z,parent)=>add(new T.BoxGeometry(w,h,d),x,y,z,parent),
    cyl:(r,rb,h,color,x,y,z,parent,n=12)=>add(new T.CylinderGeometry(r,rb,h,n),x,y,z,parent),
    ball:(r,color,x,y,z,parent)=>add(new T.SphereGeometry(r,8,6),x,y,z,parent),
  };
  const building=buildEnterableBuilding({id:'test-cafe',type:'cafe',name:'測試咖啡廳',island:'home',parent:island,baseY:.67,heading,...art});
  const room=building.describe();
  const data=collectSceneryNavigation({home:island},[],[],.67);
  const options={nodes:[{id:'home',x:0,z:0,walkRadius:12}],links:[],...data,buildings:[room],count,random:()=>.1};
  return {building,room,life:createResidentLife(options),options};
}
function placeOutside(life) {
  life.actors.forEach((actor,i)=>Object.assign(actor,{x:(i-(life.actors.length-1)/2)*1.4,z:5,
    state:'waiting',wait:20,activity:'wander',partner:null,departure:null,exitObstacle:null}));
}
function ignore(actor) {return actor.exitObstacle?.id || (actor.target?.ignore && (actor.state==='indoors'||actor.routeIndex===actor.route.length-1) ? actor.target.ignore : null);}

test('rooms have physical walls, a doll-sized doorway, and reachable interior chairs',()=>{
  const {room,life}=fixture();
  assert.ok(room.width>=5.8 && room.depth>=4.8);
  assert.equal(life.navigation.clearSegment({x:0,z:5},{x:0,z:1}),true,'door opening has no blocking slab');
  assert.equal(life.navigation.clearSegment({x:5,z:0},{x:0,z:0}),false,'walls remain solid');
  assert.ok(room.seats.every(seat=>life.navigation.route(room.exit,seat.approach)));
  assert.ok(life.actors.every(actor=>!roomContains(room,actor)),'residents initially spawn outside buildings');
});

test('a resident walks through the door, sits for coffee, and walks outside again without teleporting',()=>{
  const {room,life}=fixture();placeOutside(life);
  const actor=life.actors[0];
  assert.equal(life.visitBuilding(0,'cafe'),true);
  let inside=false,seated=false,left=false;
  for(let frame=0;frame<2200;frame++) {
    const before={x:actor.x,z:actor.z};life.update(.05);
    assert.ok(Math.hypot(actor.x-before.x,actor.z-before.z)<=.0476);
    assert.ok(life.navigation.walkable(actor,ignore(actor)),'never cross walls or other furniture');
    if(roomContains(room,actor)) inside=true;
    if(actor.state==='indoors') {
      seated=true;assert.ok(roomContains(room,actor));
      assert.ok(life.descriptions()[0].label.includes('咖啡'));
      assert.equal(actor.target.seatHeight,1.23);
    }
    if(seated && !roomContains(room,actor) && !actor.manualIndoor) {left=true;break;}
  }
  assert.ok(inside && seated && left,'complete entry, seated stay, and exit');
});

test('two visitors reserve different chairs, and a full cafe does not stack another resident on a seat',()=>{
  const {room,life}=fixture(3);placeOutside(life);
  assert.equal(life.visitBuilding(0,'cafe'),true);
  assert.equal(life.visitBuilding(1,'cafe'),true);
  assert.notEqual(life.actors[0].target.ignore,life.actors[1].target.ignore);
  assert.equal(life.visitBuilding(2,'cafe'),false);
  let together=false;
  for(let frame=0;frame<700;frame++) {
    life.update(.05);
    for(let i=0;i<3;i++) for(let j=i+1;j<3;j++) assert.ok(Math.hypot(life.actors[i].x-life.actors[j].x,life.actors[i].z-life.actors[j].z)>=1.18-1e-6);
    if(life.actors.slice(0,2).every(actor=>actor.state==='indoors')) {together=true;break;}
  }
  assert.ok(together,'both booked visitors can reach their different indoor seats');
});

test('visiting a seated resident freezes sipping and the stay timer; resume continues the stay',()=>{
  const {life}=fixture();placeOutside(life);life.visitBuilding(0,'cafe');
  for(let i=0;i<500 && life.actors[0].state!=='indoors';i++) life.update(.05);
  assert.equal(life.actors[0].state,'indoors');
  life.pause(0);const frozen=structuredClone(life.actors[0]);life.update(20);
  assert.deepEqual(life.actors[0],frozen);
  life.resume(0);life.update(.2);assert.ok(life.actors[0].sipTime>frozen.sipTime);
});

test('manual reduced-motion travel advances only the invited resident',()=>{
  const {life}=fixture(2);placeOutside(life);life.visitBuilding(0,'cafe');
  const other=structuredClone(life.actors[1]);life.update(.5,true);
  assert.deepEqual(life.actors[1],other);
  assert.ok(life.actors[0].walkTime>0);
});

test('turned buildings keep their doors and indoor seats aligned with the actual geometry',()=>{
  const {room,life}=fixture(1,Math.PI/2);
  assert.ok(Math.abs(room.exit.x-3.65)<1e-6);
  assert.ok(life.navigation.route({x:6,z:0},room.seats[0].approach));
  assert.ok(roomContains(room,room.seats[0].point));
});

test('residents independently enter available buildings and can share a coffee table',()=>{
  const {life}=fixture(2);placeOutside(life);
  let shared=false;
  for(let frame=0;frame<1600;frame++) {
    life.update(.05);
    assert.ok(life.actors.filter(actor=>actor.target?.roomId).length<=2);
    if(life.actors.every(actor=>actor.state==='indoors')) {shared=true;break;}
  }
  assert.ok(shared,'indoor visits happen without pressing a button');
});
