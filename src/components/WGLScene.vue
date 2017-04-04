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
    PerspectiveCamera,
    TorusKnotGeometry,
    BoxBufferGeometry,
    Mesh,
    Scene,
    SpotLight,
    AmbientLight,
    DirectionalLight,
    WebGLRenderer,
    PlaneBufferGeometry,
    MeshPhongMaterial,
    DoubleSide,
  } from 'three';

  /* eslint-disable no-console */
  /* eslint-disable no-use-before-define */
  /* eslint-disable func-names */
  /* eslint-disable object-shorthand */
  /* eslint-disable no-use-before-define */
  /* eslint-disable prefer-arrow-callback */

  let camera;
  let mesh;
  let scene;

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
      let renderer;
      init();
      animate();

      function init() {
        const container = document.getElementById('wgl');
        const containerWidth = 400;
        const containerHeight = 400;

        camera = new PerspectiveCamera(36, containerWidth / containerHeight, 0.25, 16);
        camera.position.set(0, 1.3, 6);

        scene = new Scene();
        scene.add(new AmbientLight(0x505050));
        spot();
        directLight();
        // knot();

        plane();
        knot();
        box(0, 0.5, -2.5);
        box(-3.5, 0.5, -3.2);
        renderer = new WebGLRenderer();
        renderer.setSize(containerWidth, containerHeight);
        container.appendChild(renderer.domElement);
        renderer.render(scene, camera);
      }

      function box(x1, y1, z1) {
        const material = new MeshPhongMaterial({ color: 0x00cc00 });
        const geometry = new BoxBufferGeometry(1, 1, 1);
        const m = new Mesh(geometry, material);
        m.position.y = y1;
        m.position.z = z1;
        m.position.x = x1;
        scene.add(m);
      }

      function knot() {
        const material = new MeshPhongMaterial({ color: 0x80ee10, shininess: 100, side: DoubleSide });
        const geometry = new TorusKnotGeometry(0.4, 0.08, 95, 20);
        mesh = new Mesh(geometry, material);
        mesh.position.y = 2.7;
        mesh.position.x = 1.2;
        mesh.position.z = 1;
        scene.add(mesh);
        mesh.castShadow = true;
      }

      function plane() {
        const ground = new Mesh(
          new PlaneBufferGeometry(9, 9, 1, 1),
          new MeshPhongMaterial({ color: 0xa0adaf, shininess: 150 }));
        ground.x = 300;
        ground.rotation.x = -Math.PI / 2; // rotates X/Y to X/Z
        ground.receiveShadow = true;
        scene.add(ground);
      }

      function directLight() {
        const dirLight = new DirectionalLight(0x55505a, 1);
        dirLight.position.set(0, 3, 0);
        dirLight.castShadow = true;
        dirLight.shadow.camera.near = 1;
        dirLight.shadow.camera.far = 10;
        dirLight.shadow.camera.right = 1;
        dirLight.shadow.camera.left = -1;
        dirLight.shadow.camera.top = 1;
        dirLight.shadow.camera.bottom = -1;
        dirLight.shadow.mapSize.width = 512;
        dirLight.shadow.mapSize.height = 512;
        scene.add(dirLight);
      }

      function spot() {
        const spotLight = new SpotLight(0xffffff);
        spotLight.angle = Math.PI / 5;
        spotLight.penumbra = 0.2;
        spotLight.position.set(2, 3, 3);
        spotLight.castShadow = true;
        spotLight.shadow.camera.near = 3;
        spotLight.shadow.camera.far = 10;
        spotLight.shadow.mapSize.width = 500;
        spotLight.shadow.mapSize.height = 500;
        scene.add(spotLight);
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
