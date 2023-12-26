import * as THREE from "three";
import { directionalLight, hemisphereLight, pointLight } from "../lights";

const hemisphereLightHelper = new THREE.HemisphereLightHelper(
  hemisphereLight,
  0.1
);

const directionalLightHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  0.1
);

const pointLightHelper = new THREE.PointLightHelper(pointLight);

export { hemisphereLightHelper, directionalLightHelper, pointLightHelper };
