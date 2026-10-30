import React,{useEffect,useRef,useState} from 'react';
import {familyError} from '../family/client.js';
import {familyDisplayName} from '../family/auth.js';

export function FamilyPanel({workspace,onClose}) {
  const [familyMode,setFamilyMode]=useState('dashboard');
  const [name,setName]=useState(''),[joinCode,setJoinCode]=useState(''),[rename,setRename]=useState('');
  const [busy,setBusy]=useState(''),[error,setError]=useState(''),[message,setMessage]=useState('');
  const [invitation,setInvitation]=useState(null),[confirmation,setConfirmation]=useState(null);
  const dialog=useRef(null),alive=useRef(true),request=useRef(0);
  const identity=`${workspace.user?.id||'guest'}:${workspace.activeFamily?.id||''}`;
  const identityRef=useRef(identity);identityRef.current=identity;
  useEffect(()=>{
    alive.current=true;dialog.current?.focus();document.body.classList.add('family-open');
    const escape=event=>{if(event.key==='Escape'){event.preventDefault();event.stopImmediatePropagation();onClose();}};
    document.addEventListener('keydown',escape,true);
    return ()=>{alive.current=false;request.current++;document.body.classList.remove('family-open');document.removeEventListener('keydown',escape,true);requestAnimationFrame(()=>document.querySelector('#family-account')?.focus());};
  },[onClose]);
  useEffect(()=>{request.current++;setInvitation(null);setConfirmation(null);setError('');setMessage('');setBusy('');setJoinCode('');setFamilyMode('dashboard');setRename(workspace.activeFamily?.name||'');},[identity]);
  async function run(key,action,success) {
    if(busy)return;
    const token=++request.current,context=identityRef.current;
    setBusy(key);setError('');setMessage('');
    try {const result=await action();if(alive.current && token===request.current && context===identityRef.current)success?.(result);}
    catch(problem){if(alive.current && token===request.current && context===identityRef.current)setError(familyError(problem));}
    finally {if(alive.current && token===request.current)setBusy('');}
  }
  const family=workspace.activeFamily,owner=family?.role==='owner';
  const googleButton=()=> <button className="family-google-button" disabled={!workspace.configured||Boolean(busy)} onClick={()=>run('google',()=>workspace.signInWithGoogle())}>
      <svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5h6.6c3.9-3.6 6.1-8.8 6.1-14.9Z"/><path fill="#34A853" d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5c-1.8 1.2-4.1 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.8v5.2A20.4 20.4 0 0 0 24 44Z"/><path fill="#FBBC05" d="M12.6 27.6a12.2 12.2 0 0 1 0-7.2v-5.2H5.8a20 20 0 0 0 0 17.6l6.8-5.2Z"/><path fill="#EA4335" d="M24 12c3 0 5.6 1 7.7 3l5.8-5.8A19.6 19.6 0 0 0 24 4 20.4 20.4 0 0 0 5.8 15.2l6.8 5.2C14.2 15.6 18.7 12 24 12Z"/></svg>
      <span>{busy==='google'?'正在前往 Google…':'使用 Google 帳號登入'}</span>
    </button>;
  const googleLogin=()=> <div className="family-google-login">
    <p className="family-intro">用 Google 帳號回到小島，建立家庭或加入家人的邀請。</p>
    {googleButton()}
    <p className="family-login-note">第一次登入就會建立小島帳號，不需要另外設定密碼。加入家庭仍需要家人的邀請碼。</p>
  </div>;
  const membershipForms=()=> <div className="family-onboarding">
    <div className="family-tabs" role="group" aria-label="建立或加入家庭">
      <button type="button" aria-pressed={familyMode!=='join'} onClick={()=>setFamilyMode('create')}>建立家庭</button>
      <button type="button" aria-pressed={familyMode==='join'} onClick={()=>setFamilyMode('join')}>加入家庭</button>
    </div>
    {familyMode==='join'?<form className="family-form" onSubmit={event=>{event.preventDefault();run('join',()=>workspace.joinFamily(joinCode));}}>
      <label>家庭邀請碼<textarea value={joinCode} onChange={event=>setJoinCode(event.target.value)} rows={3} autoComplete="off" autoCapitalize="none" spellCheck={false} required placeholder="貼上家人分享的邀請碼"/></label>
      <button className="primary-button" disabled={Boolean(busy)}>{busy==='join'?'加入中…':'使用邀請碼加入'}</button>
    </form>:<form className="family-form" onSubmit={event=>{event.preventDefault();run('create',()=>workspace.createFamily(name));}}>
      <label>家庭名稱<input value={name} onChange={event=>setName(event.target.value)} minLength={2} maxLength={48} required placeholder="例如：我們的溫暖小窩"/></label>
      <button className="primary-button" disabled={Boolean(busy)}>{busy==='create'?'建立中…':'建立我們的家庭'}</button>
    </form>}
    {family&&<button className="family-text-button" type="button" onClick={()=>setFamilyMode('dashboard')}>返回目前家庭</button>}
  </div>;
  return <div className="family-overlay" onClick={event=>{if(event.target===event.currentTarget)onClose();}}>
    <section ref={dialog} className="family-panel" role="dialog" aria-modal="true" aria-labelledby="family-title" tabIndex={-1} onKeyDown={event=>{
      if(event.key!=='Tab')return;
      const items=[...dialog.current.querySelectorAll('button,input,textarea,select,a[href]')].filter(element=>!element.disabled&&element.getClientRects().length);
      if(!items.length)return;
      if(event.shiftKey&&(document.activeElement===items[0]||document.activeElement===dialog.current)){event.preventDefault();items.at(-1).focus();}
      else if(!event.shiftKey&&document.activeElement===items.at(-1)){event.preventDefault();items[0].focus();}
    }}>
      <header className="family-panel-header"><div><span className="section-kicker">A HOME TOGETHER</span><h2 id="family-title">{workspace.user?'我們的家庭空間':'登入與家庭空間'}</h2></div><button className="round-button" aria-label="關閉家庭空間" onClick={onClose}>×</button></header>
      {!workspace.configured?<div className="family-welcome"><span aria-hidden="true">⌂</span><h3>一起生活的小島，正在準備中</h3><p>Google 登入尚未開放。現在仍可以先逛小島，使用這個裝置上的日常紀錄。</p>{googleButton()}<button className="secondary-button" onClick={onClose}>繼續逛小島</button></div>:
        !workspace.ready?<p role="status">正在確認帳號與家庭…</p>:
        !workspace.user?googleLogin():
        <>
          <div className="family-account-summary"><div><strong>{familyDisplayName(workspace.user.user_metadata)}</strong><small>{workspace.user.email}</small></div><button className="secondary-button" disabled={Boolean(busy)} onClick={()=>run('signout',()=>workspace.signOut())}>登出</button></div>
          {workspace.families.length>0&&<label className="family-selector">目前家庭<select value={family?.id||''} onChange={event=>workspace.selectFamily(event.target.value)}>{workspace.families.map(item=><option key={item.id} value={item.id}>{item.name}</option>)}</select></label>}
          {!family||familyMode!=='dashboard'?<>{!family&&<p className="family-intro">先建立一個家庭，或貼上家人分享的邀請碼。</p>}{membershipForms()}</>:
          <>
            <section className="family-section"><div className="family-section-title"><h3>{family.name}</h3><span className="family-role">{owner?'家庭建立者':'家庭成員'}</span></div>
              <p className="family-scope-note">家庭名單可跨裝置使用。待辦、記事與照片目前仍保存在各自的裝置，尚未啟用家庭共享。</p>
              <h4>家庭成員</h4>{workspace.loading?<p role="status">正在載入成員…</p>:<ul className="family-members">{workspace.members.map(member=><li key={member.user_id}><span className="family-avatar" aria-hidden="true">{member.display_name.slice(0,1)}</span><div><strong>{member.display_name}{member.user_id===workspace.user.id?'（你）':''}</strong><small>{member.role==='owner'?'建立者':'家人'}</small></div>{owner&&member.role!=='owner'&&<button className="family-text-button" disabled={Boolean(busy)} onClick={()=>setConfirmation({kind:'remove',member})}>移除</button>}</li>)}</ul>}
            </section>
            {owner&&<section className="family-section"><h3>邀請家人</h3><p>每組邀請碼只能使用一次，7 天內有效。請複製後自行分享給家人。</p><button className="primary-button" disabled={Boolean(busy)} onClick={()=>run('invite',()=>workspace.createInvite(),value=>setInvitation(value))}>{busy==='invite'?'產生中…':'產生邀請碼'}</button>
              {invitation&&<div className="family-invitation"><label>家庭邀請碼<textarea aria-label="家庭邀請碼" readOnly rows={3} value={invitation.code} onFocus={event=>event.target.select()}/></label><button className="secondary-button" onClick={()=>run('copy',()=>navigator.clipboard.writeText(invitation.code),()=>setMessage('邀請碼已複製，可貼給家人。'))}>複製邀請碼</button><small>有效至 {new Date(invitation.expires_at).toLocaleString('zh-TW')}。離開視窗後不再顯示這組邀請碼。</small></div>}
              {workspace.invites.length>0&&<ul className="family-invites">{workspace.invites.map(invite=>{const state=invite.revoked_at?'已撤銷':invite.used_at?'已使用':new Date(invite.expires_at)<=new Date()?'已過期':'可使用';return <li key={invite.id}><span>{new Date(invite.created_at).toLocaleDateString('zh-TW')} 建立 · {state}</span>{state==='可使用'&&<button className="family-text-button" disabled={Boolean(busy)} onClick={()=>run('revoke',()=>workspace.revokeInvite(invite.id),()=>{if(invitation?.id===invite.id)setInvitation(null);setMessage('邀請碼已撤銷。');})}>撤銷</button>}</li>;})}</ul>}
            </section>}
            {owner&&<section className="family-section"><h3>家庭設定</h3><form className="family-form" onSubmit={event=>{event.preventDefault();run('rename',()=>workspace.renameFamily(rename),()=>setMessage('家庭名稱已更新。'));}}><label>新的家庭名稱<input value={rename} onChange={event=>setRename(event.target.value)} minLength={2} maxLength={48} required/></label><button className="secondary-button" disabled={Boolean(busy)}>儲存家庭名稱</button></form></section>}
            <div className="family-extra-actions"><button className="secondary-button" onClick={()=>setFamilyMode('create')}>建立另一個家庭</button><button className="secondary-button" onClick={()=>setFamilyMode('join')}>加入其他家庭</button>{!owner&&<button className="family-text-button" onClick={()=>setConfirmation({kind:'leave'})}>離開這個家庭</button>}</div>
          </>}
          <button className="family-text-button" disabled={Boolean(busy)} onClick={()=>run('refresh',()=>workspace.refresh(),()=>setMessage('家庭列表已重新整理。'))}>重新整理家庭列表</button>
        </>}
      {confirmation&&<div className="family-confirm" role="group" aria-label="確認家庭變更"><p>{confirmation.kind==='remove'?`移除「${confirmation.member.display_name}」後，對方將無法存取這個家庭。`:'離開後將無法存取這個家庭，需要新的邀請碼才能重新加入。'}</p><button className="secondary-button" onClick={()=>setConfirmation(null)}>取消</button><button className="primary-button" disabled={Boolean(busy)} onClick={()=>run('confirm',()=>confirmation.kind==='remove'?workspace.removeMember(confirmation.member.user_id):workspace.leaveFamily(),()=>{setConfirmation(null);setMessage('家庭成員已更新。');})}>確認{confirmation.kind==='remove'?'移除':'離開'}</button></div>}
      {(error||workspace.error)&&<p className="family-message error" role="alert">{error||workspace.error}</p>}
      {message&&<p className="family-message" role="status">{message}</p>}
    </section>
  </div>;
}
