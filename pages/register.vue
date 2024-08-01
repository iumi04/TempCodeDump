<template>
    <v-container>
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-card-title class="headline">Register</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Name" v-model="name" required></v-text-field>
                <v-text-field label="Email" v-model="email" required></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  append-icon="mdi-eye"
                  @click:append="showPassword = !showPassword"
                  required
                ></v-text-field>
                <v-btn color="primary" block @click="register">Register</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        showPassword: false,
      }
    },
    methods: {
      register() {
        // Handle registration logic here
        console.log('Registration attempt', this.name, this.email, this.password);
      },
    },
  }
  </script>
  
  <style scoped>
  .fill-height {
    min-height: 100vh;
  }
  </style>
  