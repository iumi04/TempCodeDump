<template>
    <v-container class="fill-height d-flex flex-column justify-space-between">
      <!-- Top Banner -->
      <v-row class="top-banner">
        <v-col class="d-flex justify-space-between align-center">
          <v-btn text color="white" @click="logout" style="font-weight: bold;">Logout</v-btn>
          <v-btn icon @click="$router.push('/notifications')">
            <v-icon color="white">mdi-bell</v-icon>
          </v-btn>
        </v-col>
      </v-row>
  
      <!-- Welcome Message -->
      <v-row>
        <v-col class="text-center">
          <h1>Welcome, Worker!</h1>
        </v-col>
      </v-row>
  
      <!-- Tasks Completed Today -->
      <v-row>
        <v-col class="text-center">
          <h2>You have completed 50 tasks today</h2>
        </v-col>
      </v-row>
  
      <!-- Worker Status Section -->
      <v-row>
        <v-col>
          <v-card>
            <v-card-title class="headline">Worker Status</v-card-title>
            <v-card-text>
              <v-list dense>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Open source tasks</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-chip color="green" dark>Permitted</v-chip>
                  </v-list-item-action>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Slightly better tasks</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-chip color="red" dark>Prohibited</v-chip>
                  </v-list-item-action>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Annotation tasks</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-chip color="green" dark>Permitted</v-chip>
                  </v-list-item-action>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Private tasks</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-chip color="red" dark>Prohibited</v-chip>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Worker ID -->
      <v-row>
        <v-col class="text-left">
          <small>Worker ID: 123456</small>
        </v-col>
      </v-row>
  
      <!-- Bottom Navigation Banner -->
      <v-bottom-navigation>
        <v-btn @click="$router.push('/workerhome')">
          <v-icon>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn @click="$router.push('/dashboard')">
          <v-icon>mdi-view-dashboard</v-icon>
          Dashboard
        </v-btn>
        <v-btn @click="$router.push('/jobs')">
          <v-icon>mdi-briefcase</v-icon>
          Jobs
        </v-btn>
        <v-btn @click="$router.push('/profile')">
          <v-icon>mdi-account</v-icon>
          Profile
        </v-btn>
      </v-bottom-navigation>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Add any necessary data properties here
      };
    },
    methods: {
      logout() {
        this.$router.push('/login');
      }
    }
  }
  </script>
  
  <style scoped>
  .fill-height {
    min-height: 100vh;
  }
  .text-left {
    margin-bottom: 20px;
  }
  .top-banner {
    background-color: #2E2E2E;
    padding: 7px;
    width: 575px;
    margin-bottom: 20px;
  }
  .top-banner .v-btn {
    margin-right: 20px;
  }
  </style>
  