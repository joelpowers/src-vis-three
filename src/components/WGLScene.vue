<template>
  <div>
    {{msg}}
  </div>
</template>


<script>
  import * as THREE from 'three';

  export default {
    name: 'wglScene',
    props: {
      size: {
        type: Object, // { w, h }
        required: true,
      },
      wgl: { type: THREE.WebGLRenderer },
      scene: { type: THREE.Scene },
      camera: { type: THREE.PerspectiveCamera },
    },
    data() {
      return {
        msg: 'wglScene',
      };
    },
    created() {
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(70, 1, 1, 1000);
      this.camera.position.y = 150;
      this.camera.position.z = 500;

      const geometry = new THREE.BoxGeometry(200, 200, 200);
      for (let i = 0; i < geometry.faces.length; i += 2) {
        const hex = Math.random() * 0xffffff;
        geometry.faces[i].color.setHex(hex);
        geometry.faces[i + 1].color.setHex(hex);
      }
      const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors, overdraw: 0.5 });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.y = 150;
      this.scene.add(cube);
      // eslint-disable-next-line
      console.log('wgl created');
    },
  };
</script>
