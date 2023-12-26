import * as THREE from "three";
import { textureLoader } from "../loadingManager";
import woodImage from "../../static/textures/wood/wood_floor_worn_diff_1k.jpg";
import bakedShadow from "../../static/textures/shadows/bakedShadow.jpg";
import simpleShadow from "../../static/textures/shadows/simpleShadow.jpg";
const woodTexture = textureLoader.load(woodImage);
const bakedShadowTexture = textureLoader.load(bakedShadow);
woodTexture.colorSpace = THREE.SRGBColorSpace;

const simpleShadowTexture = textureLoader.load(simpleShadow);

export { woodTexture, bakedShadowTexture, simpleShadowTexture };
