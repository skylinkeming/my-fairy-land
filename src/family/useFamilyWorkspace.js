import {useCallback,useEffect,useMemo,useRef,useState} from 'react';
import {authRedirectUrl,backendConfig,getFamilyClient,familyError} from './client.js';
import {createFamilyApi} from './api.js';
import {googleSignInOptions,consumeOAuthError} from './auth.js';
const emptyWorkspace={userId:null,families:[],selected:null,loading:false,settled:false,error:null};
export function useFamilyWorkspace() {
  const [client,setClient]=useState(null);
  const [auth,setAuth]=useState({ready:!backendConfig,session:null,error:null});
  const [workspace,setWorkspace]=useState(emptyWorkspace);
  const [details,setDetails]=useState({userId:null,familyId:null,members:[],invites:[],loading:false,error:null});
  const [version,setVersion]=useState(0);
  const user=auth.session?.user || null,userId=user?.id || null;
  const userRef=useRef(userId),requestRef=useRef(0);userRef.current=userId;
  const api=useMemo(()=>client?createFamilyApi(client):null,[client]);
  useEffect(()=>{
    let cancelled=false,subscription,received=false;
    const callbackError=backendConfig?consumeOAuthError(window.location,window.history):null;
    if(!backendConfig) return;
    getFamilyClient().then(async next=>{
      const {error:initializationError}=await next.auth.initialize();
      if(cancelled)return;setClient(next);
      const loginError=callbackError||(initializationError?familyError(initializationError):null);
      const response=next.auth.onAuthStateChange((event,session)=>{
        received=true;if(cancelled)return;
        setAuth({ready:true,session,error:event==='INITIAL_SESSION'?loginError:null});
      });
      subscription=response.data.subscription;
      const {data,error}=await next.auth.getSession();
      if(!cancelled && !received) setAuth({ready:true,session:data?.session||null,error:error?familyError(error):loginError});
    }).catch(error=>{if(!cancelled)setAuth({ready:true,session:null,error:familyError(error)});});
    return ()=>{cancelled=true;subscription?.unsubscribe();};
  },[]);
  const refresh=useCallback(async preferred=>{
    if(!api || !userId)return;
    const request=++requestRef.current;
    setWorkspace(previous=>previous.userId===userId?{...previous,loading:true,error:null}:{...emptyWorkspace,userId,loading:true});
    try {
      const families=await api.families(userId);
      if(userRef.current!==userId || request!==requestRef.current)return;
      let saved;try{saved=localStorage.getItem(`little-island-active-family:${userId}`);}catch{ /* Storage may be unavailable. */ }
      setWorkspace(previous=>{
        const desired=preferred||previous.selected||saved;
        const selected=families.some(family=>family.id===desired)?desired:families[0]?.id||null;
        try {if(selected)localStorage.setItem(`little-island-active-family:${userId}`,selected);else localStorage.removeItem(`little-island-active-family:${userId}`);}catch{ /* Selection still works for this session. */ }
        return {userId,families,selected,loading:false,settled:true,error:null};
      });
      setVersion(value=>value+1);
    }catch(error){if(userRef.current===userId && request===requestRef.current)setWorkspace({...emptyWorkspace,userId,settled:true,error:familyError(error)});}
  },[api,userId]);
  useEffect(()=>{
    if(!userId){requestRef.current++;setWorkspace(emptyWorkspace);return;}
    refresh();
  },[userId,refresh]);
  useEffect(()=>{
    if(!userId)return;
    const reload=()=>{if(!document.hidden)refresh();};
    window.addEventListener('focus',reload);
    const timer=setInterval(reload,60000);
    return ()=>{window.removeEventListener('focus',reload);clearInterval(timer);};
  },[userId,refresh]);
  const families=workspace.userId===userId?workspace.families:[];
  const activeFamily=families.find(family=>family.id===workspace.selected)||null;
  useEffect(()=>{
    let cancelled=false;
    if(!api || !userId || !activeFamily){setDetails({userId,familyId:null,members:[],invites:[],loading:false,error:null});return;}
    const familyId=activeFamily.id;
    setDetails({userId,familyId,members:[],invites:[],loading:true,error:null});
    Promise.all([api.members(familyId),activeFamily.role==='owner'?api.invites(familyId):Promise.resolve([])])
      .then(([members,invites])=>{if(!cancelled)setDetails({userId,familyId,members:members||[],invites:invites||[],loading:false,error:null});})
      .catch(error=>{if(!cancelled)setDetails({userId,familyId,members:[],invites:[],loading:false,error:familyError(error)});});
    return ()=>{cancelled=true;};
  },[api,userId,activeFamily?.id,activeFamily?.role,version]);
  const authCall=async(method,...args)=>{
    if(!client)throw new Error('backend_unavailable');
    const {data,error}=await client.auth[method](...args);if(error)throw error;return data;
  };
  const familyAction=async(method,...args)=>{if(!api)throw new Error('backend_unavailable');return api[method](...args);};
  const visibleDetails=details.userId===userId && details.familyId===activeFamily?.id?details:{members:[],invites:[],loading:Boolean(activeFamily),error:null};
  return {
    configured:Boolean(backendConfig),ready:auth.ready&&(!userId||(workspace.userId===userId&&workspace.settled)),
    user,activeFamily,families,
    ...visibleDetails,loading:workspace.loading||visibleDetails.loading,
    error:auth.error||(workspace.userId===userId?workspace.error:null)||visibleDetails.error,
    refresh,
    selectFamily(id){if(!families.some(family=>family.id===id))return;setWorkspace(previous=>({...previous,selected:id}));try{localStorage.setItem(`little-island-active-family:${userId}`,id);}catch{ /* Optional preference. */ }},
    async signInWithGoogle(){setAuth(previous=>({...previous,error:null}));return authCall('signInWithOAuth',googleSignInOptions(authRedirectUrl()));},
    signOut:()=>authCall('signOut'),
    async createFamily(name){const id=await familyAction('create',name);await refresh(id);return id;},
    async joinFamily(code){const id=await familyAction('join',code);await refresh(id);return id;},
    async createInvite(){const invite=await familyAction('invite',activeFamily.id);setVersion(value=>value+1);return invite;},
    async renameFamily(name){await familyAction('rename',activeFamily.id,name);await refresh(activeFamily.id);},
    async revokeInvite(id){await familyAction('revoke',id);setVersion(value=>value+1);},
    async removeMember(id){await familyAction('remove',activeFamily.id,id);setVersion(value=>value+1);},
    async leaveFamily(){await familyAction('leave',activeFamily.id);await refresh();},
  };
}
