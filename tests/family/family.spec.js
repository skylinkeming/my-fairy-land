import {test,expect} from '@playwright/test';
import {FAMILY_A,FAMILY_B,installBackend,openFamily,signIn,users,session} from './backend-fixture.js';
test.beforeEach(async({page})=>{await page.emulateMedia({reducedMotion:'reduce'});});

test('registration requires email verification and does not pretend the account is signed in',async({page})=>{
  const backend=await installBackend(page);await page.goto('/');const panel=await openFamily(page);
  await panel.getByRole('button',{name:'建立帳號',exact:true}).click();
  await panel.getByLabel('你的稱呼').fill('新家人');await panel.getByLabel('Email',{exact:true}).fill('new@example.test');await panel.getByLabel('密碼',{exact:true}).fill('password123');
  await panel.getByRole('button',{name:'註冊帳號',exact:true}).click();
  await expect(panel.getByRole('status')).toContainText('驗證信已寄出');
  await expect(panel.getByLabel('密碼',{exact:true})).toHaveValue('');
  expect(backend.requests.find(request=>request.path==='/auth/v1/signup').body.data.display_name).toBe('新家人');
  await expect(panel.getByRole('button',{name:'登出',exact:true})).toHaveCount(0);
});

test('login errors are clear, and a signed-in user can create their first family',async({page})=>{
  await installBackend(page);await page.goto('/');let panel=await signIn(page,'a@example.test','wrong');
  await expect(panel.getByRole('alert')).toContainText('Email 或密碼不正確');
  panel=await signIn(page);await expect(panel.getByRole('button',{name:'登出',exact:true})).toBeVisible();
  await panel.getByLabel('家庭名稱',{exact:true}).fill('我們的小窩');await panel.getByRole('button',{name:'建立我們的家庭'}).click();
  await expect(panel.getByLabel('目前家庭')).toContainText('我們的小窩');
  await expect(panel.locator('.family-members')).toContainText('家人 A（你）');
  await expect(panel.getByRole('button',{name:'產生邀請碼'})).toBeVisible();
});

test('an owner issues a one-use invite; a joining family member cannot manage owner settings',async({page})=>{
  const backend=await installBackend(page,{families:true});await page.goto('/');let panel=await signIn(page);
  await panel.getByRole('button',{name:'產生邀請碼'}).click();
  const code=await panel.getByLabel('家庭邀請碼',{exact:true}).inputValue();expect(code).toMatch(/^[a-f0-9]{64}$/);
  await panel.getByRole('button',{name:'登出',exact:true}).click();panel=await signIn(page,'b@example.test');
  await panel.getByRole('button',{name:'加入家庭',exact:true}).click();await panel.getByLabel('家庭邀請碼',{exact:true}).fill(code);await panel.getByRole('button',{name:'使用邀請碼加入'}).click();
  await expect(panel.getByLabel('目前家庭')).toContainText('溫暖的小家');await expect(panel.locator('.family-members')).toContainText('家人 B（你）');
  await expect(panel.getByRole('button',{name:'產生邀請碼'})).toHaveCount(0);await expect(panel.getByLabel('新的家庭名稱')).toHaveCount(0);
  expect(backend.members.find(member=>member.user_id===users['b@example.test'].id).role).toBe('member');
  await panel.getByRole('button',{name:'登出',exact:true}).click();panel=await signIn(page,'c@example.test');await panel.getByRole('button',{name:'加入家庭',exact:true}).click();
  await panel.getByLabel('家庭邀請碼',{exact:true}).fill(code);await panel.getByRole('button',{name:'使用邀請碼加入'}).click();
  await expect(panel.getByRole('alert')).toContainText('邀請碼無效');
});

test('owner can rename family, revoke an invite, and explicitly remove a member',async({page})=>{
  const backend=await installBackend(page,{families:true,member:true});await page.goto('/');const panel=await signIn(page);
  await panel.getByLabel('新的家庭名稱').fill('幸福的小家');await panel.getByRole('button',{name:'儲存家庭名稱'}).click();await expect(panel.getByLabel('目前家庭')).toContainText('幸福的小家');
  await panel.getByRole('button',{name:'產生邀請碼'}).click();await expect(panel.getByLabel('家庭邀請碼',{exact:true})).toBeVisible();
  await panel.getByRole('button',{name:'撤銷',exact:true}).click();await expect(panel.getByLabel('家庭邀請碼',{exact:true})).toHaveCount(0);expect(backend.invites[0].revoked_at).not.toBeNull();
  await panel.locator('.family-members li').filter({hasText:'家人 B'}).getByRole('button',{name:'移除',exact:true}).click();
  await panel.getByRole('button',{name:'確認移除',exact:true}).click();await expect(panel.locator('.family-members')).not.toContainText('家人 B');
});

test('family switches and logout isolate local journals and preserve the guest island',async({page})=>{
  await installBackend(page,{families:true,twoFamilies:true});
  await page.addInitScript(()=>{if(!localStorage.getItem('little-island-v1'))localStorage.setItem('little-island-v1',JSON.stringify({todos:[{id:'guest',text:'訪客自己的便條',date:'2026-10-30',created:Date.now(),done:false}],notes:[],memories:[],residents:[]}));});
  await page.goto('/');const panel=await signIn(page);await expect(panel.getByLabel('目前家庭')).toBeVisible();
  await panel.getByRole('button',{name:'關閉家庭空間'}).click();await page.locator('.island-card[data-open="todo"]').click();
  await expect(page.locator('.todo-row')).toHaveCount(0);await page.locator('#todo-text').fill('只屬於第一個家庭的本機事項');await page.getByRole('button',{name:'新增',exact:true}).click();await expect(page.locator('.todo-row')).toContainText('第一個家庭');
  await openFamily(page);await panel.getByLabel('目前家庭').selectOption(FAMILY_B);await panel.getByRole('button',{name:'關閉家庭空間'}).click();await page.locator('.island-card[data-open="todo"]').click();await expect(page.locator('.todo-row')).toHaveCount(0);
  await openFamily(page);await panel.getByLabel('目前家庭').selectOption(FAMILY_A);await panel.getByRole('button',{name:'關閉家庭空間'}).click();await page.locator('.island-card[data-open="todo"]').click();await expect(page.locator('.todo-row')).toContainText('第一個家庭');
  await openFamily(page);await panel.getByRole('button',{name:'登出',exact:true}).click();await expect(panel.getByLabel('Email',{exact:true})).toBeVisible();await panel.getByRole('button',{name:'關閉家庭空間'}).click();
  await page.locator('.island-card[data-open="todo"]').click();await expect(page.locator('.todo-row')).toContainText('訪客自己的便條');await expect(page.locator('.todo-row')).not.toContainText('第一個家庭');
});

test('password reset sends a recovery email, and recovery links open the new password form',async({page})=>{
  const backend=await installBackend(page,{families:true});await page.goto('/');const panel=await openFamily(page);
  await panel.getByRole('button',{name:'忘記密碼？'}).click();await panel.getByLabel('Email',{exact:true}).fill('a@example.test');await panel.getByRole('button',{name:'寄送重設密碼信'}).click();await expect(panel.getByRole('status')).toContainText('收到重設密碼');
  expect(backend.requests.some(request=>request.path==='/auth/v1/recover')).toBe(true);
  const token=session(users['a@example.test']);await page.goto(`/#access_token=${token.access_token}&refresh_token=${token.refresh_token}&type=recovery&expires_in=3600&token_type=bearer`);await page.reload();
  await expect(page.getByRole('dialog',{name:'設定新密碼'})).toBeVisible();await page.getByLabel('新密碼',{exact:true}).fill('new-password123');await page.getByRole('button',{name:'設定新密碼',exact:true}).click();await expect(page.getByRole('dialog',{name:'我們的家庭空間'})).toBeVisible();
});

test('a removed member loses the selected family on refresh',async({page})=>{
  const backend=await installBackend(page,{families:true,member:true});await page.goto('/');const panel=await signIn(page,'b@example.test');await expect(panel.getByLabel('目前家庭')).toBeVisible();
  backend.members=backend.members.filter(member=>member.user_id!==users['b@example.test'].id);
  await panel.getByRole('button',{name:'重新整理家庭列表'}).click();await expect(panel.getByLabel('目前家庭')).toHaveCount(0);await expect(panel.getByRole('button',{name:'建立我們的家庭'})).toBeVisible();
});

test('account and family forms fit a phone and close with Escape',async({page})=>{
  await page.setViewportSize({width:390,height:844});await installBackend(page,{families:true});await page.goto('/');const panel=await signIn(page);await expect(panel.getByRole('button',{name:'產生邀請碼'})).toBeVisible();
  const bounds=await panel.boundingBox();expect(bounds.x).toBeGreaterThanOrEqual(0);expect(bounds.x+bounds.width).toBeLessThanOrEqual(390);
  await page.keyboard.press('Escape');await expect(panel).toHaveCount(0);await expect(page.locator('#family-account')).toBeFocused();
});
