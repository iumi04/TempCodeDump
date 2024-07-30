<template>
  <v-app>
    <v-main>
      <LoginPage/>
      <SellerLogin/>
      <WorkerLogin/>
    </v-main>
  </v-app>
</template>

<script>
import LoginPage from './components/LoginPage.vue';
import SellerLogin from './components/SellerLogin.vue';
import WorkerLogin from './components/WorkerLogin.vue';

export default {
  name: 'App',

  components: {
    LoginPage,
    SellerLogin,
    WorkerLogin,
  },

  data: () => ({
    //
  }),
};
</script>
