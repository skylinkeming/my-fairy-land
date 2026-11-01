export const WEATHER_LABELS={sunny:'☀️ 晴天',cloudy:'☁️ 陰天',rainy:'🌧️ 下雨'};
export const TIME_LABELS={day:'☀️ 白天',night:'🌙 夜晚'};
const cycle=['sunny','cloudy','rainy','cloudy'];
export function createIslandWeather({automatic=true}={}){
  let index=0,elapsed=0,age=0,revision=0,timeOfDay='day',dayAge=0;
  return {
    get state(){return cycle[index];},get elapsed(){return elapsed;},get revision(){return revision;},
    get timeOfDay(){return timeOfDay;},
    setTimeOfDay(value){if(!Object.hasOwn(TIME_LABELS,value))return false;timeOfDay=value;dayAge=0;revision++;return true;},
    set(state){if(!Object.hasOwn(WEATHER_LABELS,state))return false;index=cycle.indexOf(state);age=0;revision++;return true;},
    update(dt){if(!automatic||!Number.isFinite(dt)||dt<0)return;elapsed+=dt;age+=dt;dayAge+=dt;
      while(dayAge>=(timeOfDay==='day'?180:120)){dayAge-=timeOfDay==='day'?180:120;timeOfDay=timeOfDay==='day'?'night':'day';revision++;}
      const duration=cycle[index]==='cloudy'?16:100;
      if(age>=duration){age=0;index=(index+1)%cycle.length;revision++;}},
  };
}
