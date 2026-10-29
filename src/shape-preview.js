import * as T from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { applyResidentShape, disposeShapeGeometry } from "./resident-shape.js";

// A Three.js-only preview runtime. React supplies the canvas and settings.
export function createShapePreview(canvas) {
  const renderer = new T.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.outputColorSpace = T.SRGBColorSpace;
  const scene = new T.Scene();
  scene.background = new T.Color("#eee6d6");
  scene.add(new T.HemisphereLight(0xfffbf0, 0xa2a7a4, 2.3));
  const sun = new T.DirectionalLight(0xfff6ed, 2.4);
  sun.position.set(3, 5, 5);
  scene.add(sun);
  const rim = new T.DirectionalLight(0xffffff, 1);
  rim.position.set(-3, 2, -3);
  scene.add(rim);
  const camera = new T.PerspectiveCamera(35, 1, 0.01, 50),
    controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0.8, 0);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.minDistance = 1.7;
  controls.maxDistance = 8;
  controls.minPolarAngle = 0.06;
  controls.maxPolarAngle = Math.PI - 0.06;
  let model = null,
    frame;
  function clear() {
    if (!model) return;
    scene.remove(model);
    disposeShapeGeometry(model);
    model.traverse((node) => {
      if (node.isInstancedMesh) node.dispose();
    });
    model = null;
  }
  function view(name) {
    const positions = {
      front: [0, 1.1, 3.8],
      side: [3.8, 1.1, 0],
      back: [0, 1.1, -3.8],
      angle: [2.6, 1.65, 3],
    };
    controls.enableDamping = false;
    controls.update();
    controls.target.set(0, 0.8, 0);
    camera.position.set(...positions[name]);
    controls.update();
    controls.enableDamping = true;
  }
  view("angle");
  const observer = new ResizeObserver(() => {
    const { clientWidth: width, clientHeight: height } = canvas.parentElement;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
  observer.observe(canvas.parentElement);
  function animate() {
    frame = requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
  return {
    setResident(template, shape) {
      clear();
      model = template;
      model.position.set(0, 0, 0);
      model.rotation.set(0, 0, 0);
      scene.add(model);
      applyResidentShape(model, shape);
    },
    setShape(shape) {
      if (model) applyResidentShape(model, shape);
    },
    view,
    dispose() {
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();
      clear();
      renderer.dispose();
    },
  };
}
