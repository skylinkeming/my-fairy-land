import {test,expect} from '@playwright/test';
import {installBackend,signIn,FAMILY_A} from './backend-fixture.js';

async function guest(page) {
  await installBackend(page);
  await page.addInitScript(()=>{
    const date=new Date(),today=`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
    localStorage.setItem('little-island-v1',JSON.stringify({todos:[
      {id:'old',text:'去年買過的 Coffee 咖啡豆',date:`${date.getFullYear()-1}-08-15`,time:'',done:true,created:Date.now()-400*86400000},
      {id:'recent',text:'今天一起散步',date:today,time:'09:30',done:false,created:Date.now()},
      {id:'other',text:'今天準備晚餐',date:today,time:'',done:false,created:Date.now()-1000},
    ],notes:[],memories:[],residents:[]}));
  });
  await page.goto('/');await page.locator('.island-card[data-open="todo"]').click();
}

test('keyword search finds historical completed todos regardless of the current time filter',async({page})=>{
  await guest(page);await expect(page.locator('.todo-row')).toHaveCount(2);
  await page.locator('[data-todo-scope=upcoming]').click();
  await page.getByLabel('搜尋所有待辦',{exact:true}).fill('  ＣＯＦＦＥＥ  ');
  await expect(page.locator('.todo-row')).toHaveCount(1);
  await expect(page.locator('.todo-row')).toContainText('去年買過');
  await expect(page.locator('.todo-row input[type=checkbox]')).toBeChecked();
  await page.getByLabel('搜尋所有待辦',{exact:true}).fill('不存在的關鍵字');
  await expect(page.getByText('找不到符合的待辦',{exact:true})).toBeVisible();
  await page.getByRole('button',{name:'清除搜尋',exact:true}).click();
  await expect(page.locator('.todo-row')).toHaveCount(2);
});

test('calendar shows read-only details below the grid, with explicit edit, cancel and save',async({page})=>{
  await page.setViewportSize({width:390,height:844});await guest(page);
  await page.locator('[data-view=calendar]').click();
  await page.getByRole('button',{name:'查看 今天一起散步',exact:true}).click();
  const detail=page.getByRole('region',{name:'待辦詳情'});
  await expect(detail).toContainText('今天一起散步');await expect(detail).toContainText('09:30');
  await expect(detail.locator('input,textarea')).toHaveCount(0);
  expect(await page.evaluate(()=>document.querySelector('#todo-detail').getBoundingClientRect().top>=document.querySelector('.calendar-grid').getBoundingClientRect().bottom)).toBe(true);
  await detail.getByRole('button',{name:'編輯',exact:true}).click();
  await expect(detail.locator('#edit-todo-text')).toHaveJSProperty('tagName','INPUT');
  await detail.locator('#edit-todo-text').fill('取消的草稿');
  await detail.getByRole('button',{name:'取消編輯'}).click();
  await expect(detail.locator('input')).toHaveCount(0);await expect(detail).toContainText('今天一起散步');
  await detail.getByRole('button',{name:'編輯',exact:true}).click();
  await detail.locator('#edit-todo-text').fill('更新後的散步');await detail.locator('#edit-todo-time').fill('');
  await detail.getByRole('button',{name:'儲存修改'}).click();
  await expect(detail.locator('input')).toHaveCount(0);await expect(detail).toContainText('更新後的散步');await expect(detail).toContainText('未設定');
  await expect(page.locator('[data-todo-check=recent]')).not.toBeChecked();
  await page.locator('[data-todo-check=recent]').click();await expect(detail).toContainText('已完成');
  await page.getByRole('button',{name:'查看 今天準備晚餐',exact:true}).click();await expect(detail).toContainText('今天準備晚餐');
  await page.getByRole('button',{name:'下一個月'}).click();await expect(detail).toHaveCount(0);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});

test('family search includes old server todos and edits calendar details through the shared API',async({page})=>{
  const db=await installBackend(page,{families:true});
  const now=new Date(),date=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  db.todos.push(...Array.from({length:1000},(_,index)=>({id:`older-${index}`,family_id:FAMILY_A,text:`歷史紀錄 ${index}`,due_date:`${now.getFullYear()-1}-01-01`,due_time:null,done:true,created_at:new Date(Date.now()-100*86400000).toISOString(),version:1})));
  db.todos.push({id:'eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee',family_id:FAMILY_A,text:'以前全家的旅行計畫',due_date:date,due_time:null,done:true,created_at:new Date(Date.now()-90*86400000).toISOString(),version:1});
  await page.goto('/');await signIn(page);await page.getByRole('button',{name:'關閉家庭空間'}).click();await page.locator('.island-card[data-open="todo"]').click();
  await expect(page.locator('.todo-sync')).toContainText('家庭共享待辦');
  await expect(page.locator('.todo-row')).toHaveCount(0);
  await page.getByLabel('搜尋所有待辦',{exact:true}).fill('旅行');await expect(page.locator('.todo-row')).toHaveCount(1);
  await page.locator('[data-view=calendar]').click();await page.getByRole('button',{name:'查看 以前全家的旅行計畫',exact:true}).click();
  await expect(page.locator('#todo-detail input')).toHaveCount(0);
  await page.locator('#todo-detail').getByRole('button',{name:'編輯',exact:true}).click();await page.locator('#edit-todo-text').fill('家庭旅行已更新');await page.getByRole('button',{name:'儲存修改'}).click();
  await expect(page.locator('#todo-detail')).toContainText('家庭旅行已更新');expect(db.todos.at(-1).text).toBe('家庭旅行已更新');
});
