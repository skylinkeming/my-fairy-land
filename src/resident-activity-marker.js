import {LEISURE_LABELS} from './resident-leisure.js';
const markers={
  fishing:['fishing','🎣','釣魚中'],picnicking:['picnic','🧺','野餐中'],gardening:['garden','🌷','照顧花園'],
  photographing:['photo','📷','拍照中'],'photo-posing':['photo','📸','擺姿勢合照'],
  indoors:['coffee','☕','喝茶休息'],chatting:['chat','💬','聊天中'],swinging:['swing','🎠','盪鞦韆'],
  playing:['play','⚽','玩球中'],daydreaming:['rest','🌿','看風景'],waiting:['rest','🌤','看風景'],
  'pair-waiting':['chat','👋','等朋友'],
};
const icons={fishing:'🎣',picnic:'🧺',garden:'🌷',photo:'📷',group:'📸'};
export function residentActivityMarker(actor,paused=false) {
  let marker;
  if(actor.leisureQueue)marker=[actor.leisureQueue,icons[actor.leisureQueue]||'⌛',`排隊等${LEISURE_LABELS[actor.leisureQueue]||'活動'}`];
  else if(actor.state==='walking'&&actor.target?.leisureSite)marker=[actor.target.leisureKind,icons[actor.target.leisureKind]||'📸',`前往${LEISURE_LABELS[actor.target.leisureKind]||'合照'}`];
  else marker=markers[actor.state];
  if(!marker)return null;
  const [kind,icon,text]=marker;
  const label=actor.state==='indoors'&&!actor.leisureQueue&&actor.target?.roomType==='cafe'?'喝咖啡':text;
  return {kind,icon,label:paused?`${label} · 暫停`:label};
}
