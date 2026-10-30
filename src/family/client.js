import project from './project.json';
import {readBackendConfig} from './config.js';
import {oauthRedirectUrl} from './auth.js';
export const backendConfig=readBackendConfig(import.meta.env,project);
let clientPromise;
export function getFamilyClient() {
  if(!backendConfig) return Promise.resolve(null);
  clientPromise ||= import('@supabase/supabase-js').then(({createClient})=>createClient(backendConfig.url,backendConfig.key,{
    auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,flowType:'pkce'},
  }));
  return clientPromise;
}
export function authRedirectUrl() {
  return oauthRedirectUrl(window.location.href);
}
export function familyError(error) {
  const message=String(error?.message||'');
  const known={auth_required:'請先登入。',owner_only:'只有家庭建立者可以進行這項操作。',invalid_family_name:'家庭名稱請填寫 2～48 個字。',invalid_invite:'邀請碼無效、已使用、已撤銷或已過期，請家人重新產生邀請碼。',cannot_remove_owner:'無法移除家庭建立者。',owner_cannot_leave:'家庭建立者目前無法離開自己建立的家庭。'};
  for(const [code,text] of Object.entries(known)) if(message.includes(code)) return text;
  if(error?.name==='AuthPKCEGrantCodeExchangeError'||/pkce|code verifier|invalid code/i.test(message)||['flow_state_expired','flow_state_not_found','bad_code_verifier'].includes(error?.code)) return '登入連結已失效，請重新使用 Google 帳號登入。';
  if(/fetch|network|load failed/i.test(message)) return '暫時無法連線，請檢查網路後再試。';
  if(error?.code==='42501') return '目前沒有這個家庭的存取權限，請重新整理家庭列表。';
  return '這次操作未完成，請稍後再試。';
}
