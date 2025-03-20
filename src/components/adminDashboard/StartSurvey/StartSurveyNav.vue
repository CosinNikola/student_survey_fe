<script>
export default {
  name: "StartSurveyNav"
};
</script>

<template>
  <div class="search-nav">
    <ul class="search-nav__list">
      <li class="search-nav__item">
        <router-link class="search-nav__link" to="/admin-dashboard/start-survey/general">
          Opšta anketa
        </router-link>
      </li> <li class="search-nav__item">
      <router-link class="search-nav__link" to="/admin-dashboard/survey-report/study-program-eval">
        Anketa po predmetu
      </router-link>
    </li>
    </ul>
  </div>
</template>

<style scoped>
.search-nav {
  text-align: start;
}
.search-nav__item {
  display: inline;
  font-weight: bold;
  margin-right: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.search-nav__item:not(:last-child) {
  border-right: 2px solid white;
}

.search-nav__link {
  text-decoration: none;
  color: white;
}

.search-nav__link:hover {
  text-decoration: underline;
}

.search-nav {
  background-color: rgb(50,50,50);
  border-radius: 15px 15px 0 0;
  width: 100%;
}
</style>