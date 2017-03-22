// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import SceneControl from './components/SceneControl';
import WGLScene from './components/WGLScene';
import Viewer from './components/Viewer';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Viewer, WGLScene, SceneControl },
});
