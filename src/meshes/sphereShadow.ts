import * as THREE from "three";
import { simpleShadowMaterial } from "../shared/materials";
import floor from "./floor";
const sphereShadow = new THREE.Mesh(
  new THREE.PlaneGeometry(),
  simpleShadowMaterial
);

sphereShadow.position.y = floor.position.y + 0.01;
sphereShadow.rotation.x = -Math.PI / 2;

export default sphereShadow;
