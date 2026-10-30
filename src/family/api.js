export function createFamilyApi(client) {
  const result=async request=>{const {data,error}=await request;if(error)throw error;return data;};
  return {
    async families(userId) {
      const rows=await result(client.from('island_family_members').select('family_id,role,family:island_families(id,name,owner_id,created_at)').eq('user_id',userId).order('joined_at'));
      return (rows||[]).filter(row=>row.family).map(row=>({...row.family,role:row.role}));
    },
    members:familyId=>result(client.from('island_family_members').select('user_id,display_name,role,joined_at').eq('family_id',familyId).order('joined_at')),
    invites:familyId=>result(client.from('island_family_invites').select('id,family_id,created_at,expires_at,used_at,revoked_at').eq('family_id',familyId).order('created_at',{ascending:false}).limit(10)),
    create:name=>result(client.rpc('island_create_family',{p_name:name.trim()})),
    join:code=>result(client.rpc('island_join_family',{p_code:code.trim().toLowerCase()})),
    invite:familyId=>result(client.rpc('island_create_invite',{p_family_id:familyId})),
    rename:(familyId,name)=>result(client.rpc('island_rename_family',{p_family_id:familyId,p_name:name.trim()})),
    revoke:inviteId=>result(client.rpc('island_revoke_invite',{p_invite_id:inviteId})),
    remove:(familyId,userId)=>result(client.rpc('island_remove_member',{p_family_id:familyId,p_user_id:userId})),
    leave:familyId=>result(client.rpc('island_leave_family',{p_family_id:familyId})),
  };
}
export function familyScope(userId,familyId,ready=true) {
  if(!ready) return {key:'auth-pending',storageKey:'little-island-pending',shapesKey:'little-island-pending-shapes',editable:false};
  if(!userId) return {key:'guest',storageKey:'little-island-v1',shapesKey:'little-island-shapes-v1',editable:true};
  const key=`${userId}:${familyId||'no-family'}`;
  return {key,storageKey:`little-island-private-v1:${key}`,shapesKey:`little-island-private-shapes-v1:${key}`,editable:Boolean(familyId)};
}
