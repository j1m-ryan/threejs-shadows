import * as THREE from "three";
import { lightsFolder } from "./libgui";

const ambientLight = new THREE.AmbientLight("white", 0.5);

lightsFolder
  .add(ambientLight, "intensity")
  .min(0)
  .max(5)
  .step(0.01)
  .name("Ambient Light Intensity");

const hemisphereLight = new THREE.HemisphereLight("white", "green", 0.5);
lightsFolder
  .add(hemisphereLight, "intensity")
  .min(0)
  .max(10)
  .step(0.01)
  .name("hemisphere light intensity");

const directionalLight = new THREE.DirectionalLight("white", 0.5);
lightsFolder
  .add(directionalLight, "intensity")
  .min(0)
  .max(10)
  .step(0.01)
  .name("directional light intensity");

directionalLight.position.set(2, 2, 0);
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.castShadow = true;
directionalLight.shadow.camera.far = 10;
directionalLight.shadow.camera.right = 4;
directionalLight.shadow.camera.left = -4;
directionalLight.shadow.camera.top = 4;
directionalLight.shadow.camera.bottom = -4;

const pointLight = new THREE.PointLight("white", 10, 20);
pointLight.position.set(-2, 3, 0);
pointLight.castShadow = true;
pointLight.shadow.mapSize.set(1024, 1024);
pointLight.shadow.camera.near = 0.1;
pointLight.shadow.camera.far = 5;

lightsFolder
  .add(pointLight, "intensity")
  .min(0)
  .max(10)
  .name("point light intensity");

export { ambientLight, hemisphereLight, directionalLight, pointLight };
