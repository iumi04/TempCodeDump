<template>
  <v-container>
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="headline">Login</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Email" v-model="email" required></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                append-icon="mdi-eye"
                @click:append="showPassword = !showPassword"
                required
              ></v-text-field>
              <v-btn color="primary" block @click="login">Login</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <div class="actions">
              <v-btn text @click="forgotPassword">Forgot Password?</v-btn>
              <v-btn text @click="registerNow">Register Now</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    }
  },
  methods: {
    login() {
      // Handle login logic here
      console.log('Login attempt', this.email, this.password);
    },
    forgotPassword() {
      // Handle forgot password logic here
    },
    registerNow() {
      this.$router.push('/register')
    },
  },
}
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}
.actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.actions .v-btn:first-of-type {
  margin-right: auto;
}
</style>
