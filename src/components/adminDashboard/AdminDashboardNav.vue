<template>
  <div class="container">
    <ul class="nav">
      <li class="nav-item">
        <router-link  to="/admin-dashboard" class="nav-link">Pocetna</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin-dashboard/survey-report">Pregled anketa</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link">Nova anketa</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Korisnici</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Studijski programi</a>
      </li><li class="nav-item">
        <a class="nav-link">Predmeti</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Profesori</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Saradnici</a>
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
  height: 100vh;

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

</style>