<template>
  <div class="worker-home">
    <div class="header">
      <div class="logout">
        <a href="/">Logout</a>
      </div>
      <div class="bell-icon">
        <a href="/">
          <img src="/8455409.png" alt="Bell" class="bell-image">
        </a>
      </div>
    </div>
    <div class="content">
      <div class="welcome">Welcome John!</div>
      <img src="/71f64c0592aa35f05491f49d2cfc0d18.png" class="profile-image">
      <div class="tasks-completed">You have completed <span class="bold">X</span> Tasks Today</div>
      <div class="worker-status">Worker status</div>
      <div class="tasks">
        <div class="task-detail"><span>Open source Tasks</span> <span class="permitted">permitted</span></div>
        <div class="task-detail"><span>Slightly better Tasks</span> <span class="permitted">permitted</span></div>
        <div class="task-detail"><span>Annotation Tasks</span> <span class="permitted">permitted</span></div>
        <div class="task-detail"><span>Private Tasks</span> <span class="permitted">permitted</span></div>
      </div>
      <div class="worker-id">Worker ID: 12345678</div>
    </div>
    <div class="footer">
      <button class="footer-item">Home</button>
      <div class="separator"></div>
      <button class="footer-item">Dashboard</button>
      <div class="separator"></div>
      <button class="footer-item">Jobs</button>
      <div class="separator"></div>
      <button class="footer-item">Profile</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkerHome',
}
</script>

<style scoped>
.worker-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 80vh;
  background: #FFFFFF;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #525252;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  margin-top: -60px;
}

.logout a {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #FFFFFF;
  text-decoration: none;
}

.bell-icon {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #FFFFFF;
}

.bell-image {
  width: 40px;
  height: 40px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.welcome {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 46px;
  color: #000000;
  margin-bottom: 15px;
  margin-top: -100px;
}

.profile-image {
  width: 250px;
  height: 167px;
  margin-bottom: 15px;
}

.tasks-completed {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  color: #000000;
  margin-bottom: 15px;
}

.bold {
  font-weight: bold;
}

.worker-status {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  color: #000000;
  margin-bottom: 15px;
}

.tasks {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.task-detail {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #000000;
  margin-bottom: 10px;
}

.task-detail span:first-child {
  margin-right: 50px; /* Adds more space between task and permitted */
}

.permitted {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #0DA000;
}

.worker-id {
  position: absolute;
  right: 10px;
  bottom: 100px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  color: #000000;
  margin-bottom: -120px;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #525252;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: -80px;
}

.footer-item {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  background: none;
  border: none;
  cursor: pointer;
  flex: 1;
  text-align: center;
  padding: 0;
}

.separator {
  width: 1px;
  height: 30px;
  background: #FFFFFF;
  margin: 0 10px;
}
</style>
