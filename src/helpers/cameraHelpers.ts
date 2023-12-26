import * as THREE from "three";
import { directionalLight, pointLight } from "../lights";

const directionalLightCameraHelper = new THREE.CameraHelper(
  directionalLight.shadow.camera
);

directionalLightCameraHelper.visible = false;

const pointLightCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera);

export { directionalLightCameraHelper, pointLightCameraHelper };
