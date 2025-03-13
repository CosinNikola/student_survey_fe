<template>
  <h1>Pregled anketa o udžbeniku</h1>
  <SearchNav :routes="routes" />
  <router-view></router-view>
</template>
<script>
import SearchNav from "@/components/adminDashboard/SearchNav.vue";

export default {
  name: "TextbooksQualityReport",
  components: { SearchNav },
  data() {
    return {
      routes: [
        '/admin-dashboard/survey-report/textbooks-quality/by-study-program',
        '/admin-dashboard/survey-report/textbooks-quality/by-study-program-and-year',
        '/admin-dashboard/survey-report/textbooks-quality/by-subject',
        '/admin-dashboard/survey-report/textbooks-quality/by-teacher',
      ]
    }
  }
};
</script>


<style scoped>

</style>