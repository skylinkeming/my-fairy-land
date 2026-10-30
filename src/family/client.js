import project from './project.json';
import {readBackendConfig} from './config.js';
export const backendConfig=readBackendConfig(import.meta.env,project);
let clientPromise;
export function getFamilyClient() {
  if(!backendConfig) return Promise.resolve(null);
  clientPromise ||= import('@supabase/supabase-js').then(({createClient})=>createClient(backendConfig.url,backendConfig.key,{
    auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true},
  }));
  return clientPromise;
}
export function authRedirectUrl() {
  const url=new URL(import.meta.env.BASE_URL,window.location.href);url.hash='';url.search='';return url.href;
}
export function familyError(error) {
  const message=String(error?.message||'');
  const known={auth_required:'請先登入。',owner_only:'只有家庭建立者可以進行這項操作。',invalid_family_name:'家庭名稱請填寫 2～48 個字。',invalid_invite:'邀請碼無效、已使用、已撤銷或已過期，請家人重新產生邀請碼。',cannot_remove_owner:'無法移除家庭建立者。',owner_cannot_leave:'家庭建立者目前無法離開自己建立的家庭。'};
  for(const [code,text] of Object.entries(known)) if(message.includes(code)) return text;
  const auth={invalid_credentials:'Email 或密碼不正確。',email_not_confirmed:'請先開啟驗證信確認 Email，再回來登入。',user_already_exists:'這個 Email 已註冊，請直接登入。',over_email_send_rate_limit:'寄信次數較多，請稍後再試。',weak_password:'密碼強度不足，請使用至少 8 個字元。',same_password:'請使用與目前不同的新密碼。',signup_disabled:'目前暫停開放註冊。'};
  if(auth[error?.code]) return auth[error.code];
  if(/invalid login credentials/i.test(message))return auth.invalid_credentials;
  if(/email not confirmed/i.test(message))return auth.email_not_confirmed;
  if(/user already registered/i.test(message))return auth.user_already_exists;
  if(/email rate limit/i.test(message))return auth.over_email_send_rate_limit;
  if(/fetch|network|load failed/i.test(message)) return '暫時無法連線，請檢查網路後再試。';
  if(error?.code==='42501') return '目前沒有這個家庭的存取權限，請重新整理家庭列表。';
  return '這次操作未完成，請稍後再試。';
}
