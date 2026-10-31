import {useCallback,useEffect,useMemo,useRef,useState} from 'react';
import {createTodosApi,todoChanges,todoError} from './todos.js';

// Server rows are never copied into localStorage. A family/account change remounts
// IslandApp and cancels the old request, including a late mutation response.
export function useFamilyTodos(client,familyId) {
  const api=useMemo(()=>client&&familyId?createTodosApi(client,familyId):null,[client,familyId]);
  const [state,setState]=useState({todos:[],ready:false,busy:false,error:null});
  const live=useRef(false),busy=useRef(false),sequence=useRef(0);
  const report=useCallback(error=>{
    const denied=error?.code==='42501'||String(error?.message).includes('family_access_denied');
    setState(previous=>({...previous,...(denied?{todos:[],ready:false}:{}),error:todoError(error)}));
  },[]);
  const refresh=useCallback(async()=>{
    if(!api||busy.current||!live.current)return;
    const request=++sequence.current;
    try {
      const todos=await api.list();
      if(live.current&&request===sequence.current)setState(previous=>({...previous,todos,ready:true,error:null}));
    } catch(error) {if(live.current&&request===sequence.current)report(error);}
  },[api,report]);
  useEffect(()=>{
    live.current=true;refresh();
    const reload=()=>{if(!document.hidden)refresh();};
    const timer=setInterval(reload,10000);
    window.addEventListener('focus',reload);window.addEventListener('online',reload);document.addEventListener('visibilitychange',reload);
    return ()=>{live.current=false;sequence.current++;clearInterval(timer);window.removeEventListener('focus',reload);window.removeEventListener('online',reload);document.removeEventListener('visibilitychange',reload);};
  },[refresh]);
  const save=async next=>{
    if(!api||!live.current||!state.ready||busy.current)return false;
    const changes=todoChanges(state.todos,next);
    if(!changes.length)return true;
    busy.current=true;sequence.current++;setState(previous=>({...previous,busy:true,error:null}));
    try {
      const todos=await api.save(changes);
      if(!live.current)return false;
      setState({todos,ready:true,busy:false,error:null});return true;
    } catch(error) {
      if(live.current){
        // Refresh conflicts, but keep the failure visible and the editor's draft.
        if(String(error?.message).includes('todo_conflict')) {
          try {const todos=await api.list();if(live.current)setState(previous=>({...previous,todos}));}catch{ /* Keep original failure. */ }
        }
        if(live.current)report(error);
      }
      return false;
    } finally {busy.current=false;if(live.current)setState(previous=>({...previous,busy:false}));}
  };
  return {...state,save,refresh};
}
