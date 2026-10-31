import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createShapesApi,shapeRows,shapeError} from '../src/family/shapes.js';
import {normalizeShape} from '../src/resident-shape.js';

test('cloud shape rows retain per-resident versions and normalize every supported appearance control',()=>{
  const result=shapeRows([{resident_id:'guagua',shape:{bodyWidth:1.42,eyeY:.05},version:3},{resident_id:'unknown',shape:{},version:1}]);
  assert.deepEqual(result,{settings:{guagua:normalizeShape({bodyWidth:1.42,eyeY:.05})},versions:{guagua:3}});
});
test('saving one resident sends its original version without overwriting other residents',async()=>{
  let captured;
  const api=createShapesApi({rpc:async(name,args)=>{
    captured={name,args};return {data:[{resident_id:'guagua',shape:{bodyWidth:1.4},version:5},{resident_id:'pink-dinosaur',shape:{tailSize:1.5},version:2}]};
  }},'family');
  const result=await api.save({guagua:{bodyWidth:1.4}},{guagua:4,'pink-dinosaur':2});
  assert.equal(captured.name,'island_save_resident_shapes');
  assert.equal(captured.args.p_family_id,'family');
  assert.deepEqual(captured.args.p_changes,[{resident_id:'guagua',shape:normalizeShape({bodyWidth:1.4}),version:4}]);
  assert.equal(result.settings['pink-dinosaur'].tailSize,1.5);
  assert.equal(result.versions.guagua,5);
});
test('missing schema, conflicts and network failures have distinct actionable messages',()=>{
  assert.match(shapeError({code:'PGRST202'}),/資料庫更新/);
  assert.match(shapeError({message:'shape_conflict'}),/已被家人更新/);
  assert.match(shapeError({message:'network'}),/雲端儲存未完成/);
});
