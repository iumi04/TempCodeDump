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

    <!-- Task Status Section -->
    <v-row>
      <v-col>
        <v-card class="section-card">
          <v-card-title class="headline">Task Status</v-card-title>
          <v-card-text>
            <v-simple-table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Submitted</th>
                  <th>Approved</th>
                  <th>Rejected</th>
                  <th>Pending</th>
                  <th>Earnings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Today</td>
                  <td>20</td>
                  <td>18</td>
                  <td>1</td>
                  <td>1</td>
                  <td>$18.00</td>
                </tr>
                <tr>
                  <td>07/30/2024</td>
                  <td>15</td>
                  <td>14</td>
                  <td>0</td>
                  <td>1</td>
                  <td>$14.00</td>
                </tr>
                <tr>
                  <td>07/29/2024</td>
                  <td>22</td>
                  <td>20</td>
                  <td>2</td>
                  <td>0</td>
                  <td>$20.00</td>
                </tr>
                <!-- Add more rows as needed -->
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Task Overview Section -->
    <v-row>
      <v-col>
        <v-card class="section-card">
          <v-card-title class="headline">Task Overview</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>Approved: 52</v-col>
              <v-col>Approval Rate: 95%</v-col>
              <v-col>Pending: 2</v-col>
              <v-col>Rejected: 3</v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Earnings by Period Section -->
    <v-row>
      <v-col>
        <v-card class="section-card">
          <v-card-title class="headline">Earnings by Period</v-card-title>
          <v-card-text>
            <v-simple-table>
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Earnings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023 Q4</td>
                  <td>$120.00</td>
                </tr>
                <tr>
                  <td>2024 Q1</td>
                  <td>$250.00</td>
                </tr>
                <tr>
                  <td>2024 Q2</td>
                  <td>$300.00</td>
                </tr>
                <tr>
                  <td>2024 Q3</td>
                  <td>$400.00</td>
                </tr>
                <!-- Add more rows as needed -->
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Earnings Breakdown Section -->
    <v-row>
      <v-col>
        <v-card class="section-card">
          <v-card-title class="headline">Earnings Breakdown</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>Approved HITS: $500.00</v-col>
              <v-col>Bonus: $50.00</v-col>
              <v-col>Total Earnings: $550.00</v-col>
              <v-col>Account Balance: $150.00</v-col>
            </v-row>
            <v-row justify="end">
              <v-btn color="primary" class="ma-2">Transfer to Bank</v-btn>
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
  width: 100%;
  margin-bottom: 20px;
}
.top-banner .v-btn {
  margin-right: 20px;
}
.section-card {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
