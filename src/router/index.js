import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Test from '@/components/Test';
import Viewer from '@/components/Viewer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/viewer',
      name: 'Viewer',
      component: Viewer,
    },
  ],
});
