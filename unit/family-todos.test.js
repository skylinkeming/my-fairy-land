import {test} from 'node:test';
import assert from 'node:assert/strict';
import {todoChanges,readTodo,createTodosApi} from '../src/family/todos.js';
const todo={id:'a',text:'散步',date:'2026-10-31',time:'',done:false,version:3,created:10};
test('shared changes affect only changed rows and keep the edited snapshot version',()=>{
  const another={...todo,id:'b'};
  assert.deepEqual(todoChanges([todo,another],[{...todo,text:'喝茶',version:2},another]),[{id:'a',version:2,text:'喝茶',date:'2026-10-31',time:'',done:false}]);
  assert.deepEqual(todoChanges([todo],[todo,{...todo,id:'new',version:undefined}]),[{id:'new',version:null,text:'散步',date:'2026-10-31',time:'',done:false}]);
  assert.deepEqual(todoChanges([todo,another],[another]),[{id:'a',version:3,delete:true}]);
  assert.deepEqual(todoChanges([todo],[{...todo,created:20}]),[]);
});
test('server timestamps determine ordering and SQL time preserves an optional minute value',()=>{
  const row={id:'a',text:'散步',due_date:'2026-10-31',due_time:'09:30:00',done:true,created_at:'2026-10-31T00:00:00Z',version:4};
  assert.deepEqual(readTodo(row),{id:'a',text:'散步',date:'2026-10-31',time:'09:30',done:true,created:Date.parse(row.created_at),version:4});
  assert.equal(readTodo({...row,due_time:null}).time,'');
});

test('history loading and a large mutation response include todos beyond the server row limit',async()=>{
  const rows=Array.from({length:1001},(_,id)=>({id:String(id),text:`歷史待辦 ${id}`,due_date:'2026-10-31',due_time:null,done:true,created_at:'2026-10-31T00:00:00Z',version:1}));
  const api=createTodosApi({rpc(name){
    if(name==='island_change_todos')return Promise.resolve({data:rows.slice(0,1000)});
    return {range:(start,end)=>Promise.resolve({data:rows.slice(start,end+1)})};
  }},'family');
  assert.equal((await api.list()).at(-1).text,'歷史待辦 1000');
  assert.equal((await api.save([])).length,1001);
});
