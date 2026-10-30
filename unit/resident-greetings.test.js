import test from 'node:test';
import assert from 'node:assert/strict';
import {chooseResidentGreeting} from '../src/residents.js';
test('each greeting is complete, supports resident names, and never repeats the previous visit',()=>{
  assert.ok(chooseResidentGreeting('呱呱',4,null,()=>0).includes('呱呱'));
  for(let index=0;index<6;index++) {
    let previous=null;const seen=new Set();
    for(let visit=0;visit<30;visit++) {
      const greeting=chooseResidentGreeting('小夥伴',index,previous,()=>visit%3*.4);
      assert.ok(typeof greeting==='string' && greeting.length>3);
      assert.notEqual(greeting,previous);assert.ok(!greeting.includes('undefined'));
      seen.add(greeting);previous=greeting;
    }
    assert.ok(seen.size>2);
  }
});
