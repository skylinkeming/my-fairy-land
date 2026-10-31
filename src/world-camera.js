import {Vector3} from 'three';

// Orthographic magnification comes from zoom, not camera distance. Keep the
// camera outside the whole board so its near plane never slices the foreground.
export const MAP_CAMERA_DISTANCE=160;
export const MAP_CAMERA_FAR=400;
export const MAP_MAX_POLAR_ANGLE=1.35;
export function mapViewPosition(center,angle,elevation,top=0){
  return new Vector3(Math.sin(angle)*12,elevation-.8,Math.cos(angle)*12)
    .normalize().multiplyScalar(MAP_CAMERA_DISTANCE)
    .add(new Vector3(center.x,top+.8,center.z));
}
