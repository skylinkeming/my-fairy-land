import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createResidentLife} from '../src/resident-life.js';
import {predictsCollision} from '../src/resident-avoidance.js';
const nodes=[{id:'home',x:0,z:0,walkRadius:12,bridgeHalfWidth:.94}];
const sites=[
  {id:'fish',kind:'fishing',node:'home',center:{x:6,z:0},points:[{x:6,z:0}],heading:Math.PI/2},
  {id:'picnic',kind:'picnic',node:'home',center:{x:-3,z:3},points:[{x:-4,z:3},{x:-2,z:3}],heading:0},
  {id:'garden',kind:'garden',node:'home',center:{x:4,z:4},points:[{x:4,z:4}],heading:0,growth:0},
  {id:'photo',kind:'photo',node:'home',center:{x:0,z:0},points:[-2,0,2].flatMap(x=>[-1,1].map(z=>({x,z}))),heading:0},
];
function setup() {
  const life=createResidentLife({nodes,links:[],leisureSites:sites,leisureAutomatic:false,count:6,random:()=>.1});
  const starts=[{x:6,z:-3},{x:-6,z:3},{x:-2,z:6},{x:4,z:7},{x:-4,z:-4},{x:0,z:-5}];
  life.actors.forEach((actor,i)=>Object.assign(actor,{...starts[i],node:'home',state:'waiting',activity:'wander',partner:null,wait:1000}));
  return life;
}
function tick(life,seconds,check=()=>{}) {
  for(let i=0;i<seconds/.05;i++) {
    const before=life.actors.map(actor=>({x:actor.x,z:actor.z}));life.update(.05);
    for(const actor of life.actors) {
      assert.ok(life.navigation.walkable(actor),'stay on the walking network');
      assert.ok(Math.hypot(actor.x-before[actor.id].x,actor.z-before[actor.id].z)<=.047501,'never teleport');
      for(const other of life.actors)if(other.id>actor.id)assert.ok(Math.hypot(actor.x-other.x,actor.z-other.z)>=1.18-1e-6,'keep collision spacing');
    }
    check();
  }
}
test('fishing travels to its spot, cycles through catches, pauses and eventually leaves',()=>{
  const life=setup();assert.equal(life.requestLeisure(0,'fishing'),true);
  for(let i=0;i<400&&life.actors[0].state!=='fishing';i++)life.update(.05);
  assert.equal(life.actors[0].state,'fishing');
  const actor=life.actors[0],time=actor.leisureTime;
  life.pause(0);tick(life,2);assert.equal(actor.leisureTime,time);life.resume(0);
  const catches=new Set();tick(life,43,()=>{if(actor.leisureResult)catches.add(actor.leisureResult);});
  assert.deepEqual([...catches],['fish','seaweed','boot']);assert.ok(actor.leisureCompleted>=1);
});
test('picnic waits for both residents, shares time and packs up before returning to walks',()=>{
  const life=setup();assert.equal(life.requestLeisure(0,'picnic'),true);
  const active=life.leisure.active[0];assert.equal(active.ids.length,2);
  let together=false;tick(life,45,()=>{
    const pair=active.ids.map(id=>life.actors[id]);
    if(pair.every(actor=>actor.state==='picnicking')){together=true;assert.equal(pair[0].leisureTime,pair[1].leisureTime);}
  });
  assert.ok(together);assert.ok(active.ids.every(id=>life.actors[id].leisureCompleted>=1));
});
test('garden watering grows flowers and photography takes several scenic shots',()=>{
  const life=setup();assert.equal(life.requestLeisure(0,'garden'),true);assert.equal(life.requestLeisure(5,'photo'),true);
  tick(life,50);
  assert.equal(life.leisure.sites.find(site=>site.kind==='garden').growth,1);
  assert.ok(life.actors[0].leisureCompleted>=1);assert.ok(life.actors[5].photosTaken>=2);
});
test('group photo gathers all residents safely, supports cancellation and releases after the shot',()=>{
  const life=setup();assert.equal(life.leisure.groupPhoto(),true);
  assert.equal(life.hasManualVisits,true);
  tick(life,30);assert.equal(life.leisure.photo.phase,'ready');
  assert.ok(life.actors.every(actor=>actor.state==='photo-posing'));
  life.leisure.releasePhoto();assert.equal(life.leisure.photo.phase,'finished');
  assert.ok(life.actors.every(actor=>actor.state==='walking'&&!actor.manualLeisure));
  assert.equal(life.leisure.groupPhoto(),true);assert.equal(life.leisure.cancelPhoto(),true);
  assert.ok(life.actors.every(actor=>actor.target.leisureSite!=='group-photo'));
});
test('reduced motion advances only an explicitly invited activity, and automatic activities vary',()=>{
  const life=setup();assert.equal(life.requestLeisure(0,'garden'),true);
  const frozen=life.actors.slice(1).map(actor=>({x:actor.x,z:actor.z}));
  for(let i=0;i<400;i++)life.update(.05,true);
  assert.deepEqual(life.actors.slice(1).map(actor=>({x:actor.x,z:actor.z})),frozen);
  let seed=7;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  const automatic=createResidentLife({nodes,links:[],leisureSites:sites,count:6,random}),seen=new Set();
  for(let i=0;i<3200;i++){automatic.update(.05);for(const record of automatic.leisure.active)seen.add(record.kind);}
  assert.deepEqual([...seen].sort(),['fishing','garden','photo','picnic']);
});

test('invited residents route around stationary neighbours instead of circling forever',()=>{
  const life=setup();life.actors.forEach((actor,i)=>Object.assign(actor,{x:-5+i*2,z:-5}));
  assert.equal(life.requestLeisure(0,'fishing'),true);
  for(let i=0;i<800&&life.actors[0].state!=='fishing';i++)life.update(.05,true);
  assert.equal(life.actors[0].state,'fishing');
});

test('collision prediction stops at a final pose but still detects an incoming walker',()=>{
  const actor={x:0,z:0,route:[{x:0,z:1}],routeIndex:0};
  assert.equal(predictsCollision(actor,{x:0,z:3},{x:0,z:1},{x:0,z:0}),false);
  assert.equal(predictsCollision(actor,{x:0,z:4,route:[{x:0,z:-4}],routeIndex:0},{x:0,z:1},{x:0,z:-1}),true);
});
