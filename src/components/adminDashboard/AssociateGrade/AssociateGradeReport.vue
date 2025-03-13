<template>
  <h1>Pregled anketa o saradniku</h1>
  <!--  <SearchNav :routes="routes" />-->
  <hr>
  <div class="nav">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/admin-dashboard/survey-report/associate-grade/quality" class="nav-link" active-class="nav-link-active">Kvalitet nastavnika</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin-dashboard/survey-report/associate-grade/assessment" class="nav-link"  active-class="nav-link-active">Ocenjivanje nastavnika</router-link>
      </li>
    </ul>
  </div>
  <router-view></router-view>
</template>

<script>
// import SearchNav from "@/components/adminDashboard/SearchNav.vue";

export default {
  name: "AssociateGradeReport",
  components: {  },
  data() {
    return {
      routes: [
        '/admin-dashboard/survey-report/associate-grade/by-study-program',
        '/admin-dashboard/survey-report/associate-grade/by-study-program-and-year',
        '/admin-dashboard/survey-report/associate-grade/by-subject',
        '/admin-dashboard/survey-report/associate-grade/by-associate',
      ]
    }
  }
};
</script>


<style scoped>
.nav {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.nav-list {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 0;
}
.nav-item {
  list-style: none;
  margin-right: 20px;
}

.nav-link {
  text-decoration: none;
  background-color: rgb(50, 50, 50);
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 10px;
  border: 2px solid rgb(50, 50, 50);
}

.nav-link-active {
  background-color: #fff;
  color: rgb(50, 50, 50);
  border: 2px solid rgb(50, 50, 50);
}
</style>