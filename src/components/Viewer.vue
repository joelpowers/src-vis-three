<template>
  <div class="viewer">
    <WGLScene>
    </WGLScene>
  </div>
</template>

<script>
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
    },
  };
</script>
