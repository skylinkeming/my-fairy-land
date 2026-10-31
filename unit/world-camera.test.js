import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Vector3,Spherical} from 'three';
import {mapViewPosition,MAP_CAMERA_DISTANCE,MAP_CAMERA_FAR,MAP_MAX_POLAR_ANGLE} from '../src/world-camera.js';

test('all close-up and photo viewpoints keep the whole board in front of the camera',()=>{
 for(const center of [{x:0,z:0},{x:36,z:0},{x:0,z:36}])for(const elevation of [4,8,16,24])for(let i=0;i<16;i++){
  const target=new Vector3(center.x,1.47,center.z),position=mapViewPosition(center,i*Math.PI/8,elevation,.67),offset=position.clone().sub(target);
  assert.ok(Math.abs(offset.length()-MAP_CAMERA_DISTANCE)<1e-8);
  assert.ok(new Spherical().setFromVector3(offset).phi<=MAP_MAX_POLAR_ANGLE);
  const direction=offset.clone().normalize().negate();
  for(let j=0;j<32;j++){
   const point=new Vector3(Math.sin(j*Math.PI/16)*96,0,Math.cos(j*Math.PI/16)*96);
   const depth=point.sub(position).dot(direction);
   assert.ok(depth>.1&&depth<MAP_CAMERA_FAR,'the near and far planes include every side of the board');
  }
 }
});
