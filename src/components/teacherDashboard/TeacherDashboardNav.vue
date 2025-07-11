<template>
  <div class="container">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/teacher-dashboard/survey-report" active-class="nav-link-active">Pregled anketa</router-link>
      </li><li class="nav-item">
      <router-link class="nav-link" to="/teacher-dashboard/start-survey" active-class="nav-link-active">Nova anketa</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/teacher-dashboard/change-password" active-class="nav-link-active">Promena lozinke</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="logout()">ODJAVA</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "DashboardNav",
  data() {
    return {
      token: localStorage.getItem('token')
    }
  },
  methods: {
    logout() {
      fetch("http://127.0.0.1:8000/api/logout", {
        method: "POST",
        body: JSON.stringify(this.formData),
        headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
          "Access-Control-Allow-Origin": "*",
          "Authorization": `Bearer ${this.token}`
        }
      })
          .then(res => {
            if(res.status === 200) {
              localStorage.removeItem('token');
              localStorage.removeItem('userData');
              this.$router.push('/login');
            }
          })
    }
  }
};
</script>


<style scoped>
body {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  flex-direction: column;
  width: 10%;
  background-color: rgb(50,50,50);
  color: white;
  min-height: 100vh;

}
.nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.nav-item {

}
.nav-link {
  display:block;
  font-weight: bold;
  padding: 10px;
  text-decoration: none;
  color: #fff;
}
.nav-link:hover {
  background-color: gray;
  cursor: pointer;
}

.nav-link-active {
  background-color: gray;
}

</style>