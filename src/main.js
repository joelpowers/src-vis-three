// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
} from 'three';
import App from './App';
import router from './router';
import SceneControl from './components/SceneControl';
import WGLScene from './components/WGLScene';
import Viewer from './components/Viewer';

let scene;
let camera;
let renderer;
let geometry;
let material;
let mesh;
/* eslint-disable no-use-before-define */
init();
animate();

function init() {
  const container = document.getElementById('world');

  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight - 60;
  scene = new Scene();

  camera = new PerspectiveCamera(75, containerWidth / containerHeight, 1, 10000);
  camera.position.z = 1000;

  geometry = new BoxGeometry(200, 200, 200);
  material = new MeshBasicMaterial({ color: 0xff0000, wireframe: true });

  mesh = new Mesh(geometry, material);
  scene.add(mesh);

  renderer = new WebGLRenderer();
  renderer.setSize(containerWidth, containerHeight);
  container.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render(scene, camera);
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Viewer, WGLScene, SceneControl },
});
