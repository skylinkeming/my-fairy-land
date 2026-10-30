export function readBackendConfig(env={},project={}) {
  const overrides=Boolean(env.VITE_SUPABASE_URL||env.VITE_SUPABASE_PUBLISHABLE_KEY);
  const url=(overrides?env.VITE_SUPABASE_URL||'':project.url||'').trim(),key=(overrides?env.VITE_SUPABASE_PUBLISHABLE_KEY||'':project.publishableKey||'').trim();
  if(!url && !key) return null;
  if(!url || !key) throw new Error('Set both VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY.');
  let parsed;
  try {parsed=new URL(url);} catch {throw new Error('Supabase URL is invalid.');}
  if(parsed.protocol!=='https:' && !(parsed.protocol==='http:' && ['localhost','127.0.0.1'].includes(parsed.hostname))) throw new Error('Supabase URL must use HTTPS.');
  if(parsed.username||parsed.password||parsed.search||parsed.hash||!['','/'].includes(parsed.pathname)) throw new Error('Use the Supabase project origin URL.');
  let publicKey=key.startsWith('sb_publishable_');
  if(!publicKey && key.split('.').length===3) {
    try {publicKey=JSON.parse(atob(key.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))).role==='anon';} catch { /* Invalid public key. */ }
  }
  if(!publicKey) throw new Error('Only a Supabase publishable key or legacy anon key may be included in the browser build.');
  return {url:parsed.origin,key};
}
