<script>
export default {
  name: "SurveyReportNav"
};
</script>

<template>
  <div class="search-nav">
    <ul class="search-nav__list">
      <li class="search-nav__item">
        <router-link class="search-nav__link" to="/admin-dashboard/survey-report/general-data">
          Opšta anketa
        </router-link>
      </li> <li class="search-nav__item">
      <router-link class="search-nav__link" to="/admin-dashboard/survey-report/study-program-eval">
        Anketa o studijskom programu
      </router-link>
    </li> <li class="search-nav__item">
      <router-link class="search-nav__link" to="/admin-dashboard/survey-report/work-plan-realization">
        Anketa o planu rada
      </router-link>
    </li> <li class="search-nav__item">
      <router-link class="search-nav__link" to="/admin-dashboard/survey-report/subject-grade">
        Anketa o predmetu
      </router-link>
    </li> <li class="search-nav__item">
      <router-link class="search-nav__link" to="/admin-dashboard/survey-report/teacher-grade">
        Anketa o profesoru
      </router-link>
    </li><li class="search-nav__item">
      <router-link class="search-nav__link" to="/admin-dashboard/survey-report/associate-grade">
        Anketa o saradniku
      </router-link>
    </li><li class="search-nav__item">
      <router-link class="search-nav__link" to="/admin-dashboard/survey-report/textbooks-quality">
        Anketa o udžbeniku
      </router-link>
    </li>
    </ul>
  </div>
</template>

<style scoped>
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