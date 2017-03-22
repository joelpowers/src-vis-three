<template>
  <div class="viewer">
    <WGLScene>
    </WGLScene>
    <SceneControl>
    </SceneControl>
  </div>
</template>

<script>
  import SceneControl from './SceneControl';
  import WGLScene from './WGLScene';

  export default {
    name: 'viewer',
    data() {
      return {
        msg: 'Welcome to viewer',
      };
    },
    components: {
      WGLScene,
      SceneControl,
    },
  };
</script>
