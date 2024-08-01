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
  
      <!-- Search and Filter -->
      <v-row class="mb-3">
        <v-col cols="10">
          <v-text-field label="Search jobs..." solo></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn color="primary">Filter</v-btn>
        </v-col>
      </v-row>
  
      <!-- List of Jobs Section -->
      <v-row>
        <v-col>
          <v-card class="section-card">
            <v-card-title class="headline">List of Jobs</v-card-title>
            <v-card-text>
  
              <!-- Images Subsection -->
              <v-row class="subsection">
                <v-col>
                  <h3>Images</h3>
                  <v-simple-table>
                    <thead>
                      <tr>
                        <th>Preview</th>
                        <th>Title</th>
                        <th>Tasks</th>
                        <th>Reward</th>
                        <th>Created</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><img src="/penguin.jpg" alt="Penguin" class="job-image"></td>
                        <td>Image Annotation</td>
                        <td>10</td>
                        <td>$0.10</td>
                        <td>1d ago</td>
                        <td>Work</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-col>
              </v-row>
  
              <!-- Text Subsection -->
              <v-row class="subsection">
                <v-col>
                  <h3>Text</h3>
                  <v-simple-table>
                    <thead>
                      <tr>
                        <th>Preview</th>
                        <th>Title</th>
                        <th>Tasks</th>
                        <th>Reward</th>
                        <th>Created</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><img src="/penguin.jpg" alt="Penguin" class="job-image"></td>
                        <td>Sentimental Annotation</td>
                        <td>5</td>
                        <td>$0.05</td>
                        <td>2d ago</td>
                        <td>Work</td>
                      </tr>
                      <tr>
                        <td><img src="/penguin.jpg" alt="Penguin" class="job-image"></td>
                        <td>Grammar Annotation</td>
                        <td>8</td>
                        <td>$0.08</td>
                        <td>3d ago</td>
                        <td>Work</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-col>
              </v-row>
  
              <!-- Audio Subsection -->
              <v-row class="subsection">
                <v-col>
                  <h3>Audio</h3>
                  <v-simple-table>
                    <thead>
                      <tr>
                        <th>Preview</th>
                        <th>Title</th>
                        <th>Tasks</th>
                        <th>Reward</th>
                        <th>Created</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><img src="/penguin.jpg" alt="Penguin" class="job-image"></td>
                        <td>AI Voice Annotation</td>
                        <td>3</td>
                        <td>$0.03</td>
                        <td>1d ago</td>
                        <td>Work</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-col>
              </v-row>
  
              <!-- Invited Only Subsection -->
              <v-row class="subsection">
                <v-col>
                  <h3>Invited Only</h3>
                  <v-simple-table>
                    <thead>
                      <tr>
                        <th>Preview</th>
                        <th>Title</th>
                        <th>Tasks</th>
                        <th>Reward</th>
                        <th>Created</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><img src="/penguin.jpg" alt="Penguin" class="job-image"></td>
                        <td>A Secret Task</td>
                        <td>1</td>
                        <td>$0.01</td>
                        <td>4d ago</td>
                        <td>Work</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
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
  .job-image {
    width: 50px;
    height: 50px;
  }
  .subsection {
    margin-bottom: 20px;
  }
  </style>
  