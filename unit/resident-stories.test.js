import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createResidentLife} from '../src/resident-life.js';
import {createIslandWeather} from '../src/island-weather.js';
import {weightedResident} from '../src/resident-preferences.js';
const sites=[
 {id:'wildlife',kind:'wildlife',node:'home',center:{x:-4,z:-4},points:[{x:-4,z:-4},{x:-2.2,z:-4}],heading:0},
 {id:'ball',kind:'ball',node:'home',center:{x:4,z:4},points:[{x:3.1,z:4},{x:4.9,z:4}],heading:0},
 {id:'pond',kind:'pond',node:'home',center:{x:6,z:-5},points:[{x:6,z:-5}],heading:0},
 {id:'gift',kind:'gift',node:'home',center:{x:-5,z:4},points:[{x:-5,z:4}],heading:0},
 {id:'rainwalk',kind:'rainwalk',node:'home',center:{x:0,z:-3},points:[{x:-.9,z:-3},{x:.9,z:-3}],ends:[{x:-.9,z:-.6},{x:.9,z:-.6}],heading:0},
 {id:'shade',kind:'shade',node:'home',center:{x:7,z:5},points:[{x:7,z:5}],heading:0},
 {id:'shelter',kind:'shelter',node:'home',center:{x:-7,z:0},points:[{x:-7,z:0},{x:-5.2,z:0}],heading:0},
];
function setup(random=()=>.1){
 const life=createResidentLife({nodes:[{id:'home',x:0,z:0,walkRadius:14}],links:[],count:6,leisureAutomatic:false,leisureSites:sites,random});
 const starts=[[-8,-6],[-6,-6],[-6,3],[8,0],[4,-7],[6,7]];
 life.actors.forEach((actor,i)=>Object.assign(actor,{x:starts[i][0],z:starts[i][1],state:'waiting',wait:1000,node:'home'}));return life;
}
function step(life,seconds,check=()=>{}){
 for(let i=0;i<seconds/.05;i++){
  const before=life.actors.map(a=>({x:a.x,z:a.z}));life.update(.05,true);
  for(const a of life.actors){assert.ok(life.navigation.walkable(a));assert.ok(Math.hypot(a.x-before[a.id].x,a.z-before[a.id].z)<=.047501);
   for(const b of life.actors)if(a.id<b.id)assert.ok(Math.hypot(a.x-b.x,a.z-b.z)>=1.18-1e-6);}
  check();
 }
}
test('weather has a cloud transition before rain and can be switched explicitly',()=>{
 const weather=createIslandWeather();assert.equal(weather.state,'sunny');weather.update(100);assert.equal(weather.state,'cloudy');weather.update(16);assert.equal(weather.state,'rainy');
 assert.equal(weather.set('sunny'),true);assert.equal(weather.set('invalid'),false);
 const frozen=createIslandWeather({automatic:false});frozen.update(1000);assert.equal(frozen.state,'sunny');
});
test('preferences favour each character while retaining all other activity choices',()=>{
 let seed=9;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const actors=[{type:'bear'},{type:'rabbit'},{type:'frog'},{type:'dinosaur'}];
 for(const [kind,index] of [['picnic',0],['garden',1],['pond',2],['ball',3]]){
  const counts=[0,0,0,0];for(let i=0;i<3000;i++)counts[actors.indexOf(weightedResident(actors,kind,random))]++;
  assert.ok(counts[index]>1800);assert.ok(counts.every(count=>count>100),'all residents can try this activity');
 }
});
test('rabbit chases in short safe walks while frog can observe the pond',()=>{
 const life=setup();assert.ok(life.requestLeisure(1,'wildlife'));assert.ok(life.requestLeisure(4,'pond'));
 let watching=false,chasing=false,pond=false;
 step(life,40,()=>{const rabbit=life.actors[1];if(rabbit.state==='watching')watching=true;if(watching&&rabbit.state==='walking'&&rabbit.target?.leisureKind==='wildlife')chasing=true;if(life.actors[4].state==='pond-watching')pond=true;});
 assert.ok(watching&&chasing&&pond);assert.ok(life.actors[1].leisureCompleted>=1);
});
test('dinosaur chases the ball through more than one stopping point',()=>{
 const life=setup();assert.ok(life.requestLeisure(5,'ball'));const stops=new Set();
 step(life,36,()=>{const actor=life.actors[5];if(actor.state==='playing-ball')stops.add(`${actor.x.toFixed(1)}:${actor.z.toFixed(1)}`);});assert.ok(stops.size>=2);
});
test('gifts are picked up, carried to a waiting friend, received once and stored',()=>{
 for(const value of [.1,.5,.9]){
  const life=setup(()=>value);assert.ok(life.requestLeisure(0,'gift'));const ids=life.leisure.active[0].ids,[giver,receiver]=ids.map(id=>life.actors[id]);
  const phases=new Set();step(life,70,()=>{phases.add(giver.giftPhase);});
  assert.ok(phases.has('picking')&&phases.has('carrying')&&phases.has('given'));
  assert.deepEqual(receiver.receivedGifts,[['flower','shell','leaf'][Math.floor(value*3)]]);assert.equal(giver.giftPhase,null);assert.equal(receiver.giftPhase,null);
 }
});
test('rain companions gather, walk together under one umbrella and release the pair',()=>{
 const life=setup();assert.equal(life.requestLeisure(0,'rainwalk'),false);assert.equal(life.leisure.lastRequest.status,'weather');life.weather.set('rainy');
 assert.ok(life.requestLeisure(0,'rainwalk'));const ids=life.leisure.active[0].ids;let gathered=false,moved=false;
 step(life,65,()=>{const pair=ids.map(id=>life.actors[id]);if(life.leisure.active.some(record=>record.kind==='rainwalk'&&record.phase==='walking'))gathered=true;
  if(gathered&&pair.some(a=>a.state==='walking'&&a.target?.leisureKind==='rainwalk'))moved=true;});
 assert.ok(gathered&&moved);assert.ok(ids.every(id=>life.actors[id].umbrellaPartner==null));
 assert.ok(life.requestLeisure(0,'shelter'));step(life,30);assert.ok(life.actors[0].leisureCompleted>=2);
});

test('greeting a rain companion pauses both, then sunshine releases rain activities',()=>{
 const life=setup();life.weather.set('rainy');assert.ok(life.requestLeisure(0,'rainwalk'));
 const ids=life.leisure.active[0].ids;life.pause(ids[0]);const before=ids.map(id=>({x:life.actors[id].x,z:life.actors[id].z}));
 step(life,2);assert.deepEqual(ids.map(id=>({x:life.actors[id].x,z:life.actors[id].z})),before);
 life.resume(ids[0]);assert.ok(ids.every(id=>!life.isPaused(id)));life.weather.set('sunny');life.update(.05,true);
 assert.equal(life.leisure.active.length,0);assert.ok(ids.every(id=>life.actors[id].umbrellaPartner==null));
});
