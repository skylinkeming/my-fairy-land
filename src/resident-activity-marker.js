import {LEISURE_LABELS} from './resident-leisure.js';
const markers={
  watching:['wildlife','🦋','看蝴蝶與小動物'],'pond-watching':['pond','🐟','觀察池塘'],
  'playing-ball':['ball','⚽','追球玩耍'],'gift-picking':['gift','🌸','撿小禮物'],'gift-waiting':['gift','🎁','等朋友送禮'],'gift-giving':['gift','🎁','送小禮物'],
  fanning:['shade','🍃','樹蔭下搧風'],sheltering:['shelter','🌧️','涼亭避雨'],'sharing-umbrella':['rainwalk','☂️','共撐一把傘'],
  fishing:['fishing','🎣','釣魚中'],picnicking:['picnic','🧺','野餐中'],gardening:['garden','🌷','照顧花園'],
  photographing:['photo','📷','拍照中'],'photo-posing':['photo','📸','擺姿勢合照'],
  indoors:['coffee','☕','喝茶休息'],chatting:['chat','💬','聊天中'],swinging:['swing','🎠','盪鞦韆'],
  playing:['play','⚽','玩球中'],daydreaming:['rest','🌿','看風景'],waiting:['rest','🌤','看風景'],
  'pair-waiting':['chat','👋','等朋友'],
};
const icons={fishing:'🎣',picnic:'🧺',garden:'🌷',photo:'📷',group:'📸',wildlife:'🦋',pond:'🐟',ball:'⚽',gift:'🎁',shade:'🍃',shelter:'🌧️',rainwalk:'☂️'};
export function residentActivityMarker(actor,paused=false,weather='sunny') {
  let marker;
  if(actor.leisureQueue)marker=[actor.leisureQueue,icons[actor.leisureQueue]||'⌛',`排隊等${LEISURE_LABELS[actor.leisureQueue]||'活動'}`];
  else if(actor.giftPhase==='receiving')marker=['gift','💝','收到小禮物！'];
  else if(actor.giftPhase==='carrying')marker=['gift','🎁','帶禮物找朋友'];
  else if(actor.umbrellaPartner!=null&&actor.target?.leisureKind==='rainwalk')marker=['rainwalk','☂️','共傘散步'];
  else if(actor.state==='walking'&&actor.target?.leisureSite)marker=[actor.target.leisureKind,icons[actor.target.leisureKind]||'📸',`前往${LEISURE_LABELS[actor.target.leisureKind]||'合照'}`];
  else if(weather==='rainy'&&actor.state==='walking')marker=['rainwalk','☂️','撐傘散步'];
  else marker=markers[actor.state];
  if(!marker)return null;
  const [kind,icon,text]=marker;
  const label=actor.state==='indoors'&&!actor.leisureQueue&&actor.target?.roomType==='cafe'?'喝咖啡':text;
  return {kind,icon,label:paused?`${label} · 暫停`:label};
}
