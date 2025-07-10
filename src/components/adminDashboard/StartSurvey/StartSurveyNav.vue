<script>
export default {
  name: "StartSurveyNav",
  data() {
    return {
      roleId: JSON.parse(localStorage.getItem("userData")).role_id,
    }
  },
  computed: {
    urlPrefix() {
      return this.roleId === 1 ? 'admin-dashboard' : 'teacher-dashboard';
    }
  }
};
</script>

<template>
  <div class="search-nav">
    <ul class="search-nav__list">
      <li class="search-nav__item">
        <router-link class="search-nav__link" :to="`/${this.urlPrefix}/start-survey/general`">
          Opšta anketa
        </router-link>
      </li> <li class="search-nav__item">
      <router-link class="search-nav__link" :to="`/${this.urlPrefix}/start-survey/subject`">
        Anketa po predmetu
      </router-link>
    </li><li class="search-nav__item">
      <router-link class="search-nav__link" :to="`/${this.urlPrefix}/start-survey/tokens-table`">
        Tabela sa tokenima
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