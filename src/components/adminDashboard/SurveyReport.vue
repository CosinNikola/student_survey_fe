<template>
  <div class="search-nav">
    <ul class="search-nav__list">
      <li class="search-nav__item">
        <router-link class="search-nav__link" to="/admin-dashboard/survey-report/general-data">
          Opšta anketa
        </router-link>
      </li> <li class="search-nav__item">
      <router-link class="search-nav__link" to="/admin-dashboard/survey-report/study-program">
        Pretraga po smeru
      </router-link>
    </li> <li class="search-nav__item">
      <router-link class="search-nav__link" to="/admin-dashboard/survey-report/study-program-and-year">
        Pretraga po smeru i godini
      </router-link>
    </li> <li class="search-nav__item">
      <router-link class="search-nav__link" to="/admin-dashboard/survey-report/subject">
        Pretraga po predmetu
      </router-link>
    </li> <li class="search-nav__item">
      <router-link class="search-nav__link" to="/admin-dashboard/survey-report/teacher">
        Pretraga po profesoru
      </router-link>
    </li>
    </ul>
  </div>
  <router-view></router-view>
</template>
<script>
export default {
  name: "SurveyReport"
};
</script>


<style scoped>
.search-nav__item {
  display: inline;
  font-weight: bold;
  border-right: 2px solid rgb(50,50,50);
  margin-right: 10px;
  padding-right: 10px;
}

.search-nav__link {
  text-decoration: none;
  color: rgb(50,50,50);
}
</style>