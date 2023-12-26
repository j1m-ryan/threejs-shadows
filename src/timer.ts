import { Timer } from "three/examples/jsm/misc/Timer.js";
import { resizeRendererToDisplaySize } from "./utils/resize";
import cube from "./meshes/cube";
import sphere from "./meshes/sphere";
import torus from "./meshes/torus";
import renderer from "./renderer";
import camera from "./camera";
import scene from "./scene";
import controls from "./controls";
import sphereShadow from "./meshes/sphereShadow";

const timer = new Timer();

export default timer;

export const tick = () => {
  const elapsedTime = timer.getElapsed();
  timer.update();
  cube.rotation.y = elapsedTime * 0.5;
  // sphere.rotation.y = elapsedTime * 0.5;
  torus.rotation.y = elapsedTime * 0.5;
  sphere.position.x = Math.sin(elapsedTime) * 1.5;
  sphere.position.z = Math.cos(elapsedTime) * 1.5;
  sphere.position.y = Math.abs(Math.sin(elapsedTime * 3));

  sphereShadow.position.x = sphere.position.x;
  sphereShadow.position.z = sphere.position.y;
  sphereShadow.material.opacity = 1 - sphere.position.y;

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  renderer.render(scene, camera);
  controls.update();

  requestAnimationFrame(tick);
};
