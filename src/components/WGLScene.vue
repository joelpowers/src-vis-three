<template>
  <div>
    <div>
      <label>Camera X Rotation</label>
      <input type="range" v-model="camRotX" min="0" max="359">
      <span>{{camRotX}}</span>
    </div>
    <div>
      <label>Camera Y Rotation</label>
      <input type="range" v-model="camRotY" min="0" max="359">
      <span>{{camRotY}}</span>
    </div>
    <div>
      <label>Camera Z Rotation</label>
      <input type="range" v-model="camRotZ" min="0" max="359">
      <span>{{camRotZ}}</span>
    </div>
    <div id="wgl">
    </div>
  </div>
</template>

<script>
  import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Mesh,
    BoxGeometry,
    MeshBasicMaterial,
  } from 'three';

  /* eslint-disable no-console */
  /* eslint-disable no-use-before-define */
  /* eslint-disable func-names */
  /* eslint-disable object-shorthand */
  /* eslint-disable no-use-before-define */
  /* eslint-disable prefer-arrow-callback */

  let camera;
  function degToRad(deg) {
    return (deg * Math.PI) / 180;
  }

  export default {
    name: 'wglScene',
    data() {
      return {
        camRotX: 0,
        camRotY: 0,
        camRotZ: 0,
      };
    },
    watch: {
      camRotX(newDeg) {
        camera.rotation.x = degToRad(newDeg);
      },
      camRotY(newDeg) {
        camera.rotation.y = degToRad(newDeg);
      },
      camRotZ(newDeg) {
        camera.rotation.z = degToRad(newDeg);
      },
    },

    mounted() {
      let mesh;
      let renderer;
      let scene;
      init();
      animate();

      function init() {
        const container = document.getElementById('wgl');
        const containerWidth = 400;
        const containerHeight = 400;
        scene = new Scene();

        camera = new PerspectiveCamera(75, containerWidth / containerHeight, 1, 10000);
        camera.position.z = 1000;
        // camera = new PerspectiveCamera(36, containerWidth / containerHeight, 0.25, 16);

        const geometry = new BoxGeometry(200, 200, 200);
        const material = new MeshBasicMaterial({ color: 0xff0000, wireframe: false });

        mesh = new Mesh(geometry, material);
        scene.add(mesh);

        renderer = new WebGLRenderer();
        renderer.setSize(containerWidth, containerHeight);
        container.appendChild(renderer.domElement);
        // scene.add(ground());
        renderer.render(scene, camera);
      }

      function animate() {
        requestAnimationFrame(animate);

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;

        renderer.render(scene, camera);
      }
    },
  };
</script>
<style>
  #wgl {
    height: 400px;
    width: 400px;
  }
</style>
