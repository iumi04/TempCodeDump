<template>
  <v-container class="worker-login">
    <v-row justify="center">
      <v-col cols="12" md="6" class="content">
        <div class="logo">
          <img src="/fb8870748e3cdc672d5b5c7c8e41f0bf-e1550384226647.jpg" alt="Logo">
        </div>
        <div class="sign-in-as-worker">Sign In as Worker</div>
        <input v-model="username" type="text" placeholder="Username" class="input-field" />
        <input v-model="password" type="password" placeholder="Password" class="input-field" />
        <button @click="login" class="login-button">Login</button>
        <div class="links">
          <a href="#" @click.prevent="forgotPassword">Forgot Password?</a>
          <span class="separator">|</span>
          <a href="#" @click.prevent="registerNow">Register Now</a>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="footer">
      <div class="powered-by-edison">powered by edison</div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'WorkerLogin',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Login logic here
      console.log('Logging in with', this.username, this.password);
    },
    forgotPassword() {
      // Forgot password logic
      console.log('Redirecting to forgot password');
    },
    registerNow() {
      // Register now logic
      console.log('Redirecting to register now');
    }
  }
};
</script>

<style scoped>
html, body {
  overflow: hidden; 
  margin: 0; 
  padding: 0; 
  width: 100%; 
  height: 100%; 
}

.worker-login {
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  box-sizing: border-box; 
}

.content {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1; 
  padding: 20px; 
  box-sizing: border-box; 
}

.logo {
  margin-bottom: 10px;
  margin-top: -30px; 
}

.sign-in-as-worker {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 20px;
}

.input-field {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 15px;
  padding: 10px;
  width: 80%;
  max-width: 300px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0 auto;
}

.input-field:not(:last-of-type) {
  margin-bottom: 15px; 
}

.login-button {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  background-color: #000000;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 20px auto;
  width: 80%;
  max-width: 300px;
}

.login-button:hover {
  background-color: #333333;
}

.links {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 16px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.links a {
  color: #0000EE;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}

.separator {
  margin: 0 10px;
  color: #000000;
}

.footer {
  text-align: center;
  padding: 10px 0; 
  box-sizing: border-box;
  margin-top: 110px; 
}

.powered-by-edison {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
}
</style>