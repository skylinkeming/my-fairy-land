const A='11111111-1111-4111-8111-111111111111',B='22222222-2222-4222-8222-222222222222',C='33333333-3333-4333-8333-333333333333';
export const FAMILY_A='aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',FAMILY_B='bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb';
export const users={
  'a@example.test':{id:A,email:'a@example.test',aud:'authenticated',role:'authenticated',user_metadata:{display_name:'家人 A'}},
  'b@example.test':{id:B,email:'b@example.test',aud:'authenticated',role:'authenticated',user_metadata:{display_name:'家人 B'}},
  'c@example.test':{id:C,email:'c@example.test',aud:'authenticated',role:'authenticated',user_metadata:{display_name:'家人 C'}},
};
export function session(user) {
  const encode=data=>Buffer.from(JSON.stringify(data)).toString('base64url');
  return {access_token:`${encode({alg:'HS256',typ:'JWT'})}.${encode({sub:user.id,role:'authenticated',aud:'authenticated',email:user.email,exp:Math.floor(Date.now()/1000)+3600})}.test`,refresh_token:'test-refresh',token_type:'bearer',expires_in:3600,user};
}
export async function installBackend(page,{families=false,member=false,twoFamilies=false}={}) {
  const created=new Date().toISOString();
  const db={families:[],members:[],invites:[],sequence:0,requests:[]};
  if(families) {
    db.families.push({id:FAMILY_A,name:'溫暖的小家',owner_id:A,created_at:created});
    db.members.push({family_id:FAMILY_A,user_id:A,display_name:'家人 A',role:'owner',joined_at:created});
    if(member)db.members.push({family_id:FAMILY_A,user_id:B,display_name:'家人 B',role:'member',joined_at:created});
  }
  if(twoFamilies) {db.families.push({id:FAMILY_B,name:'另一個小家',owner_id:A,created_at:created});db.members.push({family_id:FAMILY_B,user_id:A,display_name:'家人 A',role:'owner',joined_at:created});}
  // Family tests exercise the real SDK and React flows, without painting the unrelated 3D scene.
  await page.route('**/src/world.js',route=>route.abort());
  const headers={'access-control-allow-origin':'*','access-control-allow-headers':'*','access-control-allow-methods':'GET,POST,PATCH,DELETE,OPTIONS'};
  await page.route('https://family-test.supabase.co/**',async route=>{
    const request=route.request(),url=new URL(request.url()),method=request.method();
    const reply=(data,status=200)=>route.fulfill({status,headers,contentType:'application/json',...(status===204?{}:{body:JSON.stringify(data)})});
    if(method==='OPTIONS')return reply({});
    const body=request.postDataJSON()||{};
    let actor;
    try {const token=request.headers().authorization?.replace('Bearer ','');actor=Object.values(users).find(user=>user.id===JSON.parse(Buffer.from(token.split('.')[1],'base64url').toString()).sub);}catch{ /* Anonymous request. */ }
    db.requests.push({path:url.pathname,method,body});
    if(url.pathname==='/auth/v1/token') {
      if(url.searchParams.get('grant_type')==='refresh_token')return reply(session(users['a@example.test']));
      const user=users[body.email];return user&&body.password==='password123'?reply(session(user)):reply({code:'invalid_credentials',msg:'Invalid login credentials'},400);
    }
    if(url.pathname==='/auth/v1/signup')return reply({user:{id:C,email:body.email,user_metadata:body.data||{}},session:null});
    if(url.pathname==='/auth/v1/recover')return reply({});
    if(url.pathname==='/auth/v1/logout')return reply(null,204);
    if(url.pathname==='/auth/v1/user')return reply(actor||users['a@example.test']);
    if(!actor)return reply({message:'auth_required',code:'42501'},401);
    const membership=id=>db.members.find(row=>row.family_id===id&&row.user_id===actor.id);
    const owner=id=>membership(id)?.role==='owner';
    const familyId=url.searchParams.get('family_id')?.replace(/^eq\./,'');
    if(url.pathname==='/rest/v1/island_family_members') {
      if(url.searchParams.has('user_id'))return reply(db.members.filter(row=>row.user_id===actor.id).map(row=>({...row,family:db.families.find(family=>family.id===row.family_id)})));
      return reply(membership(familyId)?db.members.filter(row=>row.family_id===familyId):[]);
    }
    if(url.pathname==='/rest/v1/island_family_invites')return reply(owner(familyId)?db.invites.filter(invite=>invite.family_id===familyId).map(({code,...invite})=>invite):[]);
    const rpc=url.pathname.split('/').at(-1);
    if(rpc==='island_create_family') {
      const id=`cccccccc-cccc-4ccc-8ccc-${String(++db.sequence).padStart(12,'0')}`;
      db.families.push({id,name:body.p_name,owner_id:actor.id,created_at:created});
      db.members.push({family_id:id,user_id:actor.id,display_name:actor.user_metadata.display_name,role:'owner',joined_at:created});return reply(id);
    }
    if(rpc==='island_join_family') {
      const invite=db.invites.find(invite=>invite.code===body.p_code&&!invite.used_at&&!invite.revoked_at&&new Date(invite.expires_at)>new Date());
      if(!invite)return reply({message:'invalid_invite',code:'P0001'},400);
      if(!membership(invite.family_id))db.members.push({family_id:invite.family_id,user_id:actor.id,display_name:actor.user_metadata.display_name,role:'member',joined_at:created});
      invite.used_at=new Date().toISOString();return reply(invite.family_id);
    }
    if(rpc==='island_create_invite') {
      if(!owner(body.p_family_id))return reply({message:'owner_only',code:'42501'},403);
      const invite={id:`dddddddd-dddd-4ddd-8ddd-${String(++db.sequence).padStart(12,'0')}`,family_id:body.p_family_id,code:db.sequence.toString(16).padStart(64,'a'),created_at:created,expires_at:new Date(Date.now()+7*86400000).toISOString(),used_at:null,revoked_at:null};
      db.invites.push(invite);return reply({id:invite.id,code:invite.code,expires_at:invite.expires_at});
    }
    if(rpc==='island_revoke_invite') {
      const invite=db.invites.find(invite=>invite.id===body.p_invite_id);
      if(!invite||!owner(invite.family_id))return reply({message:'owner_only',code:'42501'},403);
      invite.revoked_at=new Date().toISOString();return reply(null);
    }
    if(rpc==='island_rename_family') {
      if(!owner(body.p_family_id))return reply({message:'owner_only',code:'42501'},403);
      db.families.find(family=>family.id===body.p_family_id).name=body.p_name;return reply(null);
    }
    if(rpc==='island_remove_member') {
      if(!owner(body.p_family_id))return reply({message:'owner_only',code:'42501'},403);
      db.members=db.members.filter(row=>row.family_id!==body.p_family_id||row.user_id!==body.p_user_id||row.role==='owner');return reply(null);
    }
    if(rpc==='island_leave_family') {db.members=db.members.filter(row=>row.family_id!==body.p_family_id||row.user_id!==actor.id||row.role==='owner');return reply(null);}
    return reply({message:'unknown_request'},404);
  });
  return db;
}
export async function openFamily(page) {
  if(await page.locator('#modal').isVisible())await page.locator('#close-panel').click();
  if(!await page.locator('.family-panel').isVisible())await page.locator('#family-account').click();
  return page.locator('.family-panel');
}
export async function signIn(page,email='a@example.test',password='password123') {
  const panel=await openFamily(page);
  await panel.getByLabel('Email',{exact:true}).fill(email);
  await panel.getByLabel('密碼',{exact:true}).fill(password);
  await panel.locator('form').getByRole('button',{name:'登入',exact:true}).click();
  return panel;
}
