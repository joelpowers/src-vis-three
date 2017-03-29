<template>
  <div class="viewer">
    <WGLScene>
    </WGLScene>
    <cameraControls></cameraControls>
  </div>
</template>

<script>
  import WGLScene from './WGLScene';
  import CameraControls from './CameraControls';

  export default {
    name: 'viewer',
    data() {
      return {
        msg: 'Welcome to viewer',
      };
    },
    components: {
      WGLScene,
      CameraControls,
    },
  };
</script>
