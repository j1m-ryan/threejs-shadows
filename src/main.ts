import { createDoubleClickListener } from "./utils/fullscreen";
import scene from "./scene";
import canvas from "./canvas";
import cube from "./meshes/cube";
import {
  ambientLight,
  directionalLight,
  hemisphereLight,
  pointLight,
} from "./lights";
import { tick } from "./timer";
import sphere from "./meshes/sphere";
import torus from "./meshes/torus";
import floor from "./meshes/floor";
import axesHelper from "./helpers/axesHelper";
import {
  directionalLightHelper,
  hemisphereLightHelper,
  pointLightHelper,
} from "./helpers/lightHelpers";
import {
  directionalLightCameraHelper,
  pointLightCameraHelper,
} from "./helpers/cameraHelpers";
import sphereShadow from "./meshes/sphereShadow";

function main() {
  scene.add(cube);
  scene.add(sphere);
  scene.add(torus);
  scene.add(floor);

  scene.add(ambientLight);
  scene.add(hemisphereLight);
  scene.add(directionalLight);
  scene.add(pointLight);

  scene.add(axesHelper);
  scene.add(hemisphereLightHelper);
  scene.add(directionalLightHelper);
  scene.add(directionalLightCameraHelper);
  scene.add(pointLightHelper);
  scene.add(pointLightCameraHelper);

  scene.add(sphereShadow);

  createDoubleClickListener(canvas);

  tick();
}

main();
