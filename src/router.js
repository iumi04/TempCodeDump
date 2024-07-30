import Vue from 'vue';
import Router from 'vue-router';
import WorkerLogin from '@/components/WorkerLogin.vue';
import LoginPage from './components/LoginPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/workerlogin',
      name: 'WorkerLogin',
      component: WorkerLogin,
    },
    // other routes
  ],
});
