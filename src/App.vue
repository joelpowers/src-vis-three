<template>
  <div id="app">
    <viewer></viewer>
    <router-view></router-view>
  </div>
</template>

<script>
import viewer from './components/Viewer';
import cameraControls from './components/CameraControls';

export default {
  name: 'app',
  components: { viewer, cameraControls },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
