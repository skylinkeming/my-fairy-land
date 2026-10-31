const fields=['text','date','time','done'];
export function todoChanges(before,after) {
  const previous=new Map(before.map(todo=>[todo.id,todo]));
  const next=new Map(after.map(todo=>[todo.id,todo]));
  const changes=[];
  for(const todo of after) {
    const old=previous.get(todo.id);
    if(!old || fields.some(key=>old[key]!==todo[key])) {
      changes.push({id:todo.id,version:old ? todo.version : null,...Object.fromEntries(fields.map(key=>[key,todo[key]??'']))});
    }
  }
  for(const todo of before)if(!next.has(todo.id))changes.push({id:todo.id,version:todo.version,delete:true});
  return changes;
}
export const readTodo=row=>({id:row.id,text:row.text,date:row.due_date,time:row.due_time?.slice(0,5)||'',done:row.done,created:Date.parse(row.created_at),version:row.version});
export function createTodosApi(client,familyId) {
  const result=async request=>{const {data,error}=await request;if(error)throw error;return (data||[]).map(readTodo);};
  const pageSize=500;
  const list=async()=>{
    const todos=new Map();
    for(let offset=0;;offset+=pageSize) {
      const page=await result(client.rpc('island_list_todos',{p_family_id:familyId}).range(offset,offset+pageSize-1));
      for(const todo of page)todos.set(todo.id,todo);
      if(page.length<pageSize)return [...todos.values()];
    }
  };
  return {
    list,
    async save(changes) {
      const todos=await result(client.rpc('island_change_todos',{p_family_id:familyId,p_changes:changes}));
      return todos.length>=pageSize ? list() : todos;
    },
  };
}
export function todoError(error) {
  if(String(error?.message).includes('todo_conflict'))return '這件待辦已被家人更新或刪除。請重新開啟編輯，確認最新內容後再試。';
  if(String(error?.message).includes('family_access_denied')||error?.code==='42501')return '目前無法存取這個家庭，請重新整理家庭列表。';
  return '待辦尚未同步成功，請檢查網路後重試。未送出的內容會保留在表單中。';
}
