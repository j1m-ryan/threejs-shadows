import * as THREE from "three";
import {
  bakedShadowTexture,
  simpleShadowTexture,
  woodTexture,
} from "./textures";
const woodMaterial = new THREE.MeshStandardMaterial({
  map: woodTexture,
});
woodMaterial.side = THREE.DoubleSide;

const floorMaterial = new THREE.MeshBasicMaterial({
  map: bakedShadowTexture,
});

const simpleShadowMaterial = new THREE.MeshBasicMaterial({
  color: "black",
  alphaMap: simpleShadowTexture,
  transparent: true,
});

export { woodMaterial, floorMaterial, simpleShadowMaterial };
