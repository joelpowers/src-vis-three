<template>
  <div id="wgl">
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

  export default {
    name: 'wglScene',
    data() {
      return {
        msg: 'wglScene',
      };
    },
    mounted() {
      /* eslint-disable no-use-before-define */
      /* eslint-disable no-console */
      let mesh;
      let renderer;
      let camera;
      let scene;
      init();
      animate();

      function init() {
        console.log('init');
        const container = document.getElementById('wgl');
        const containerWidth = 400;
        const containerHeight = 400;
        scene = new Scene();
        console.log('after scene');

        camera = new PerspectiveCamera(75, containerWidth / containerHeight, 1, 10000);
        camera.position.z = 1000;

        const geometry = new BoxGeometry(200, 200, 200);
        const material = new MeshBasicMaterial({ color: 0xff0000, wireframe: true });

        mesh = new Mesh(geometry, material);
        scene.add(mesh);

        renderer = new WebGLRenderer();
        renderer.setSize(containerWidth, containerHeight);
        container.appendChild(renderer.domElement);
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
