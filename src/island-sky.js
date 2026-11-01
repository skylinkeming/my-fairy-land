import * as T from 'three';

// Independent of weather: a rainy night still has a readable, softly lit island.
export function createIslandSky({scene,sun,ambient}) {
  const sky=new T.Group();sky.name='island-night-sky';scene.add(sky);
  const moon=new T.Mesh(new T.SphereGeometry(1.3,20,12),new T.MeshBasicMaterial({color:'#fff0bd'}));
  moon.name='island-moon';moon.position.set(23,24,-20);sky.add(moon);
  const positions=new Float32Array(70*3);
  for(let i=0;i<70;i++)positions.set([Math.sin(i*2.399)*35,18+(i*7.13)%17,Math.cos(i*2.399)*30],i*3);
  const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(positions,3));
  const stars=new T.Points(geometry,new T.PointsMaterial({color:'#fff4d2',size:.16,transparent:true,opacity:.8}));
  stars.name='island-stars';sky.add(stars);sky.visible=false;
  const daySun=new T.Color('#fff0d2'),nightSun=new T.Color('#9cb9ed'),dayAmbient=new T.Color('#fff2d6'),nightAmbient=new T.Color('#9badd4');
  let nightAmount=0;
  return {
    update(weather,reduced=false,dt=.05) {
      const night=weather.timeOfDay==='night',target=night?1:0;
      nightAmount=reduced?target:T.MathUtils.damp(nightAmount,target,2,dt);
      sky.visible=nightAmount>.02;moon.visible=weather.state!=='rainy';stars.visible=weather.state==='sunny';
      stars.material.opacity=.8*nightAmount;
      sun.color.copy(daySun).lerp(nightSun,nightAmount);
      ambient.color.copy(dayAmbient).lerp(nightAmbient,nightAmount);
      const daylight=weather.state==='sunny'?2.5:weather.state==='cloudy'?1.8:1.25;
      sun.intensity=T.MathUtils.lerp(daylight,weather.state==='rainy'?.35:.65,nightAmount);
      ambient.intensity=T.MathUtils.lerp(1.55,.72,nightAmount);
    },
    dispose(){sky.removeFromParent();moon.geometry.dispose();moon.material.dispose();geometry.dispose();stars.material.dispose();},
  };
}
