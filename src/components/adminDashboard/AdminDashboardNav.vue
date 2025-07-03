<template>
  <div class="container">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/admin-dashboard/survey-report" active-class="nav-link-active">Pregled anketa</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin-dashboard/start-survey" active-class="nav-link-active">Nova anketa</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin-dashboard/users" active-class="nav-link-active">Korisnici</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin-dashboard/study-programs" active-class="nav-link-active">Studijski programi</router-link>
      </li><li class="nav-item">
      <router-link class="nav-link" to="/admin-dashboard/subjects" active-class="nav-link-active">Predmeti</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin-dashboard/teachers" active-class="nav-link-active">Profesori</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin-dashboard/associates" active-class="nav-link-active">Saradnici</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "AdminDashboardNav"
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