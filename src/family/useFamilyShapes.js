import {useCallback,useEffect,useMemo,useRef,useState} from 'react';
import {createShapesApi,shapeError} from './shapes.js';

export function useFamilyShapes(client,familyId) {
  const api=useMemo(()=>client&&familyId?createShapesApi(client,familyId):null,[client,familyId]);
  const [state,setState]=useState({settings:{},versions:{},ready:false,busy:false,error:null});
  const live=useRef(false),busy=useRef(false),sequence=useRef(0);
  const report=useCallback(error=>setState(previous=>({...previous,
    ...(error?.code==='42501'?{settings:{},versions:{},ready:false}:{}),error:shapeError(error)})),[]);
  const refresh=useCallback(async()=>{
    if(!api||!live.current||busy.current)return;
    const request=++sequence.current;
    try {const data=await api.list();if(live.current&&request===sequence.current)setState(previous=>({...previous,...data,ready:true,error:null}));}
    catch(error){if(live.current&&request===sequence.current)report(error);}
  },[api,report]);
  useEffect(()=>{
    live.current=true;refresh();
    const reload=()=>{if(!document.hidden)refresh();};
    const timer=setInterval(reload,10000);
    window.addEventListener('focus',reload);window.addEventListener('online',reload);document.addEventListener('visibilitychange',reload);
    return ()=>{live.current=false;sequence.current++;clearInterval(timer);window.removeEventListener('focus',reload);window.removeEventListener('online',reload);document.removeEventListener('visibilitychange',reload);};
  },[refresh]);
  const save=async(settings,versions)=>{
    if(!api||!live.current||!state.ready||busy.current)throw new Error('請先完成雲端造型載入，再儲存設定。');
    busy.current=true;sequence.current++;setState(previous=>({...previous,busy:true,error:null}));
    try {
      const data=await api.save(settings,versions);
      if(!live.current)throw new Error('家庭已切換，請在目前家庭確認設定。');
      setState({...data,ready:true,busy:false,error:null});return data;
    } catch(error) {
      if(live.current) {
        if(String(error?.message).includes('shape_conflict')) {
          try {const data=await api.list();if(live.current)setState(previous=>({...previous,...data}));}catch{ /* Keep the original failure. */ }
        }
        if(live.current)report(error);
      }
      throw new Error(shapeError(error));
    } finally {busy.current=false;if(live.current)setState(previous=>({...previous,busy:false}));}
  };
  return {...state,save,refresh};
}
