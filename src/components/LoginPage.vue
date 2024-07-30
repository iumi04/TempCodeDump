  <style scoped>
  html, body {
    height: 100%;
    margin: 0;
    font-family: Helvetica, sans-serif;
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 150px;
    flex-grow: 1;
  }

  .logo {
    width: 150px;
    height: auto;
    margin-top: 50px;
    margin-left: 80px;
    text-align: center;
  }

  h2 {
    font-size: 30px;
    font-weight: 350;
    margin-right: 220px;
    margin-bottom: 30px;
  }

  .v-btn {
    margin-bottom: 30px;
    font-family: Geneva, Tahoma, sans-serif;
    width: 300px;
  }

  footer {
    text-align: center;
    margin-bottom: 10px;
  }
  </style>

  <template>
    <v-app id="app">
      <img src="/img/fb8870748e3cdc672d5b5c7c8e41f0bf-e1550384226647.jpg" alt="Logo" class="logo">
      <div class="main-content">
        <h2>Sign In</h2>
        <v-btn style="font-size: 25px;">Seller</v-btn> 
          <v-btn href="WorkerLogin.vue" style="font-size: 25px;">Worker</v-btn>   
      </div>
      <footer> <!-- @click="goToWorkerLogin"-->
        powered by edison
      </footer>
    </v-app>
  </template>

  <script>
  export default {
    name: 'LoginPage',
    methods: {
      goToWorkerLogin() {
        this.$router.push('/worker-login');
      }
    }
  }
  </script>