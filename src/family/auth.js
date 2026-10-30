export function oauthRedirectUrl(href) {
  const url=new URL('./',href);url.hash='';url.search='';return url.href;
}
export function googleSignInOptions(redirectTo) {
  return {provider:'google',options:{redirectTo,scopes:'openid email profile',queryParams:{prompt:'select_account'}}};
}
export function familyDisplayName(metadata={}) {
  for(const key of ['display_name','full_name','name']) {
    if(typeof metadata?.[key]==='string' && metadata[key].trim())return Array.from(metadata[key].trim()).slice(0,40).join('');
  }
  return '小島家人';
}
// OAuth errors are untrusted URL input: show our own text and remove the callback fields.
export function consumeOAuthError(location,history) {
  const url=new URL(location.href),hash=new URLSearchParams(url.hash.slice(1));
  const params=url.searchParams.has('error')||url.searchParams.has('error_code')?url.searchParams:hash;
  if(!params.has('error')&&!params.has('error_code'))return null;
  const cancelled=params.get('error')==='access_denied'||params.get('error_code')==='access_denied';
  for(const key of ['error','error_code','error_description'])params.delete(key);
  if(params===hash)url.hash=hash.toString();
  history.replaceState(history.state,'',url.href);
  return cancelled?'已取消 Google 登入，你可以重新登入，或繼續逛小島。':'Google 登入未完成，請重新登入。';
}
