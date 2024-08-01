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

    <!-- Profile Information Section -->
    <v-row>
      <v-col cols="12" md="8" class="mx-auto">
        <v-card>
          <v-card-title class="headline">Profile Information</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" class="text-center">
                <v-avatar size="100" style="margin-right: 30px;">
                  <img src="/avatar-default.svg" alt="Profile Picture">
                </v-avatar>
                <v-btn small class="mt-2" @click="editProfilePicture" style="margin-right: 400px;">Edit Profile Picture</v-btn>
              </v-col>
              <v-col cols="12">
                <v-list>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Username</v-list-item-title>
                      <v-list-item-subtitle>{{ profile.username }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Email</v-list-item-title>
                      <v-list-item-subtitle>{{ profile.email }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Phone Number</v-list-item-title>
                      <v-list-item-subtitle>{{ profile.phone }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Address</v-list-item-title>
                      <v-list-item-subtitle>{{ profile.address }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Billing Info</v-list-item-title>
                      <v-list-item-subtitle>{{ profile.billingInfo }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <!-- Add more profile fields as needed -->
                </v-list>
              </v-col>
              <v-col cols="12" class="text-center">
                <v-btn color="primary" @click="editProfile">Edit Profile Information</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Bottom Navigation Banner -->
    <v-bottom-navigation style="margin-top: 30px;">
      <v-btn @click="$router.push('/Workerhome')">
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
      profile: {
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, Anytown, USA',
        billingInfo: 'Visa **** 1234'
      }
    };
  },
  methods: {
    logout() {
      this.$router.push('/login');
    },
    editProfilePicture() {
      // Logic to edit profile picture
    },
    editProfile() {
      // Logic to edit profile information
    }
  }
};
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
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
