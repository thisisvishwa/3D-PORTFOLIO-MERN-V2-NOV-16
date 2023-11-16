import * as THREE from 'three';

export const createScene = () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  return scene;
};

export const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  return camera;
};

export const createRenderer = (canvas) => {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  return renderer;
};

export const createLight = () => {
  const light = new THREE.PointLight(0xffffff, 1, 1000);
  light.position.set(0, 0, 0);
  return light;
};

export const createControls = (camera, canvas) => {
  const controls = new THREE.OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;
  return controls;
};

export const resizeRendererToDisplaySize = (renderer) => {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  const width  = canvas.clientWidth  * pixelRatio | 0;
  const height = canvas.clientHeight * pixelRatio | 0;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
};

export const animate = (renderer, scene, camera, controls) => {
  requestAnimationFrame(() => animate(renderer, scene, camera, controls));

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  controls.update();
  renderer.render(scene, camera);
};