import {test,expect} from '@playwright/test';
import {installBackend,signIn,openFamily,FAMILY_A,FAMILY_B,users} from './backend-fixture.js';

async function openTodos(page) {
  if(await page.locator('.family-panel').isVisible())await page.getByRole('button',{name:'關閉家庭空間'}).click();
  await page.locator('.island-card[data-open="todo"]').click();
  await expect(page.locator('.todo-sync')).toContainText('家庭共享待辦');
}
async function addTodo(page,text) {
  await page.locator('#todo-text').fill(text);
  await page.getByRole('button',{name:'新增',exact:true}).click();
  await expect(page.locator('.todo-row').filter({hasText:text})).toBeVisible();
}

test('two separate browsers share create, edit, completion and deletion without local copies',async({browser,page})=>{
  const db=await installBackend(page,{families:true,member:true});
  const other=await browser.newContext(),member=await other.newPage();
  try {
    await installBackend(member,{sharedDb:db});
    await page.goto('/');await signIn(page);await openTodos(page);
    await member.goto('/');await signIn(member,'b@example.test');await openTodos(member);
    await addTodo(page,'家人一起散步');
    // Returning to the second device refreshes the shared server data.
    await member.bringToFront();
    await member.evaluate(()=>window.dispatchEvent(new Event('focus')));
    await expect(member.locator('.todo-row')).toContainText('家人一起散步',{timeout:15000});
    await member.locator('[data-edit-todo]').click();
    await member.locator('#edit-todo-text').fill('一起去公園');
    await member.locator('#edit-todo-time').fill('09:30');
    await member.getByRole('button',{name:'儲存修改'}).click();
    await expect(member.locator('#todo-edit-form')).toHaveCount(0);
    await page.getByRole('button',{name:'重新同步',exact:true}).click();
    await expect(page.locator('.todo-row')).toContainText('一起去公園');
    await expect(page.locator('.todo-row time')).toHaveText('09:30');
    await page.locator('[data-todo-check]').click();
    await expect(page.locator('.todo-row')).toHaveClass(/done/);
    await member.getByRole('button',{name:'重新同步',exact:true}).click();
    await expect(member.locator('[data-todo-check]')).toBeChecked();
    await member.locator('[data-delete-todo]').click();
    await expect(member.locator('.todo-row')).toHaveCount(0);
    await page.evaluate(()=>window.dispatchEvent(new Event('focus')));
    await expect(page.locator('.todo-row')).toHaveCount(0);
    for(const device of [page,member]) {
      const saved=await device.evaluate(()=>Object.entries(localStorage).filter(([key])=>key.startsWith('little-island-private-v1:')).map(([,value])=>JSON.parse(value)));
      expect(saved.every(value=>value.todos.length===0)).toBe(true);
    }
  } finally {await other.close();}
});

test('failed writes retain input, conflicts preserve editor drafts and revoked membership clears rows',async({page})=>{
  const db=await installBackend(page,{families:true,member:true});
  await page.goto('/');await signIn(page,'b@example.test');await openTodos(page);
  db.todoFailure=true;
  await page.locator('#todo-text').fill('不要遺失這件事');await page.getByRole('button',{name:'新增',exact:true}).click();
  await expect(page.locator('.todo-sync [role=alert]')).toContainText('尚未同步');
  await expect(page.locator('#todo-text')).toHaveValue('不要遺失這件事');
  expect(db.todos).toHaveLength(0);db.todoFailure=false;
  await page.getByRole('button',{name:'新增',exact:true}).click();await expect(page.locator('.todo-row')).toHaveCount(1);
  await page.locator('[data-edit-todo]').click();await page.locator('#edit-todo-text').fill('我的草稿');
  db.todos[0]={...db.todos[0],text:'另一位家人已更新',version:2};
  await page.getByRole('button',{name:'重新同步',exact:true}).click();
  await expect.poll(()=>page.locator('.todo-sync').textContent()).toContain('家庭共享');
  await page.getByRole('button',{name:'儲存修改'}).click();
  await expect(page.locator('.todo-sync [role=alert]')).toContainText('已被家人更新');
  await expect(page.locator('#edit-todo-text')).toHaveValue('我的草稿');
  expect(db.todos[0].text).toBe('另一位家人已更新');
  await page.getByRole('button',{name:'取消編輯'}).click();
  await expect(page.locator('.todo-row')).toContainText('另一位家人已更新');
  await page.locator('[data-edit-todo]').click();await page.locator('#edit-todo-text').fill('刪除後仍保留的草稿');
  db.todos=[];await page.getByRole('button',{name:'重新同步',exact:true}).click();
  await expect(page.locator('.todo-row')).toHaveCount(0);
  await page.getByRole('button',{name:'儲存修改'}).click();
  await expect(page.locator('#todo-edit-form')).toContainText('儲存修改');
  await expect(page.locator('#edit-todo-text')).toHaveValue('刪除後仍保留的草稿');
  await expect(page.locator('#toast')).toContainText('已被家人刪除');expect(db.todos).toHaveLength(0);
  await page.getByRole('button',{name:'取消編輯'}).click();
  db.members=db.members.filter(row=>row.user_id!==users['b@example.test'].id);
  await page.getByRole('button',{name:'重新同步',exact:true}).click();
  await expect(page.locator('.todo-sync [role=alert]')).toContainText('無法存取');
  await expect(page.locator('.todo-row')).toHaveCount(0);await expect(page.locator('#todo-text')).toBeDisabled();
});

test('family switches preserve old local todos without automatically uploading them',async({page})=>{
  const db=await installBackend(page,{families:true,twoFamilies:true});
  await page.addInitScript(({family,user})=>localStorage.setItem(`little-island-private-v1:${user}:${family}`,JSON.stringify({todos:[{id:'local',text:'舊裝置私人的事項',date:'2026-10-31',done:false,created:Date.now()}],notes:[],memories:[],residents:[]})),{family:FAMILY_A,user:users['a@example.test'].id});
  await page.goto('/');await signIn(page);await openTodos(page);
  await expect(page.locator('.todo-row')).toHaveCount(0);
  await addTodo(page,'共享事項');
  await openFamily(page);await page.getByLabel('目前家庭').selectOption(FAMILY_B);await openTodos(page);
  await expect(page.locator('.todo-row')).toHaveCount(0);
  await openFamily(page);await page.getByLabel('目前家庭').selectOption(FAMILY_A);await openTodos(page);
  await expect(page.locator('.todo-row')).toContainText('共享事項');
  expect(db.todos).toHaveLength(1);
  expect(await page.evaluate(({family,user})=>JSON.parse(localStorage.getItem(`little-island-private-v1:${user}:${family}`)).todos[0].text,{family:FAMILY_A,user:users['a@example.test'].id})).toBe('舊裝置私人的事項');
});

test('retrying a create after a committed response was lost does not duplicate the todo',async({page})=>{
  const db=await installBackend(page,{families:true});
  await page.goto('/');await signIn(page);await openTodos(page);
  db.todoResponseFailure=true;
  await page.locator('#todo-text').fill('只新增一次');await page.getByRole('button',{name:'新增',exact:true}).click();
  await expect(page.locator('.todo-sync [role=alert]')).toContainText('尚未同步');
  await expect(page.locator('#todo-text')).toHaveValue('只新增一次');expect(db.todos).toHaveLength(1);
  await page.getByRole('button',{name:'新增',exact:true}).click();
  await expect(page.locator('#todo-text')).toHaveValue('');await expect(page.locator('.todo-row')).toHaveCount(1);expect(db.todos).toHaveLength(1);
});

test('guest todos retain local editing, calendar completion and deletion',async({page})=>{
  const db=await installBackend(page);
  await page.addInitScript(()=>{
    if(!localStorage.getItem('little-island-v1'))localStorage.setItem('little-island-v1',JSON.stringify({todos:[],notes:[],memories:[],residents:[]}));
  });
  await page.goto('/');await page.locator('.island-card[data-open="todo"]').click();
  await expect(page.locator('.todo-sync')).toHaveCount(0);
  await addTodo(page,'訪客本機事項');await page.locator('[data-edit-todo]').click();
  await page.locator('#edit-todo-text').fill('訪客已修改');await page.locator('#edit-todo-time').fill('10:15');
  await page.getByRole('button',{name:'儲存修改'}).click();
  await expect(page.locator('.todo-row')).toContainText('訪客已修改');
  await page.reload();await page.locator('.island-card[data-open="todo"]').click();
  await expect(page.locator('.todo-row time')).toHaveText('10:15');
  await page.locator('[data-view=calendar]').click();await page.locator('[data-todo-check]').click();
  await expect(page.locator('[data-todo-check]')).toBeChecked();
  page.once('dialog',dialog=>dialog.accept());await page.locator('#delete-completed').click();
  await expect(page.locator('[data-todo-check]')).toHaveCount(0);
  expect(await page.evaluate(()=>JSON.parse(localStorage.getItem('little-island-v1')).todos)).toEqual([]);
  expect(db.requests.filter(request=>request.path.includes('island_change_todos'))).toHaveLength(0);
});

test('foreground polling reloads remote changes and late old-family reads cannot cross family boundaries',async({page})=>{
  const db=await installBackend(page,{families:true,twoFamilies:true});
  await page.clock.install();
  await page.goto('/');await signIn(page);await openTodos(page);
  db.todos.push({id:'eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee',family_id:FAMILY_A,text:'遠端新增的事情',due_date:new Date().toISOString().slice(0,10),due_time:null,done:false,created_at:new Date().toISOString(),version:1});
  await expect(page.locator('.todo-row')).toHaveCount(0);
  await page.clock.fastForward(10001);
  await expect(page.locator('.todo-row')).toContainText('遠端新增的事情');
  let release;db.deferTodoList=new Promise(resolve=>{release=resolve;});
  const reads=db.requests.filter(request=>request.path.endsWith('island_list_todos')).length;
  const response=page.waitForResponse(value=>new URL(value.url()).pathname.endsWith('/rpc/island_list_todos')&&value.request().postDataJSON().p_family_id===FAMILY_A);
  await page.getByRole('button',{name:'重新同步',exact:true}).click();
  await expect.poll(()=>db.requests.filter(request=>request.path.endsWith('island_list_todos')).length).toBeGreaterThan(reads);
  await openFamily(page);await page.getByLabel('目前家庭').selectOption(FAMILY_B);await openTodos(page);
  await expect(page.locator('.todo-row')).toHaveCount(0);
  release();await (await response).finished();
  await page.evaluate(()=>Promise.resolve());
  await expect(page.locator('.todo-row')).toHaveCount(0);
});
