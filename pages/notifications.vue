<template>
  <v-container class="fill-height d-flex flex-column justify-space-between">
    <!-- Top Banner -->
    <v-row class="top-banner">
      <v-col class="d-flex justify-space-between align-center">
        <v-btn text color="white" @click="goBack" style="font-weight: bold;">Back</v-btn>
        <v-btn icon @click="$router.push('/notifications')">
          <v-icon color="white">mdi-bell</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <!-- Notifications Section -->
    <v-row>
      <v-col cols="12" md="10" class="mx-auto"> <!-- Adjusted width to be wider -->
        <v-card class="notifications-card">
          <v-card-title class="headline">Notifications</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="(notification, index) in notifications"
                :key="index"
                class="notification-item"
              >
                <v-btn text @click="viewNotification(notification)" class="notification-btn">
                  <v-list-item-content>
                    <v-list-item-title class="notification-title">{{ notification.title }}</v-list-item-title>
                    <v-list-item-subtitle class="notification-body">{{ notification.body }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-btn>
              </v-list-item>
              <v-list-item v-if="notifications.length === 0">
                <v-list-item-content>
                  <v-list-item-title class="notification-title">No notifications</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
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
      notifications: [
        // Example notifications
        { title: 'New Message', body: 'You have received a new message.' },
        { title: 'Task Update', body: 'One of your tasks has been updated.' },
        // Add more notifications as needed
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Go back to the previous page
    },
    viewNotification(notification) {
      // Logic to view the notification, e.g., navigate to a specific route
      alert(`Viewing notification: ${notification.title}`);
    }
  }
};
</script>

<style scoped>
.fill-height {
  min-height: 100;
}
.top-banner {
  background-color: #2E2E2E;
  padding: 7px;
  width: 100%;
  margin-bottom: 20px;
  height: 40px; /* Manually set the height to make the banner smaller */
}
.top-banner .v-btn {
  margin-right: 20px;
}
.notifications-card {
  width: 860px; /* Manually set the width to make the notifications box wider */
  margin: 0 auto; /* Center the card */
}
.notification-item {
  margin-bottom: 15px; /* Add spacing between notification items */
}
.notification-btn {
  text-align: left;
  width: 100%;
  justify-content: flex-start;
}
.notification-title {
  font-size: 20px; /* Adjust the font size for better readability */
  white-space: normal;
}
.notification-body {
  font-size: 16px; /* Adjust the font size for better readability */
  white-space: normal;
}
</style>
