<template>
  <h1>Pregled anketa o predmetu</h1>
  <SearchNav :routes="routes" />
  <router-view></router-view>
</template>
<script>
import SearchNav from "@/components/adminDashboard/SearchNav.vue";

export default {
  name: "SubjectGradeReport",
  components: { SearchNav },
  data() {
    return {
      routes: [
        '/admin-dashboard/survey-report/subject-grade/by-study-program',
        '/admin-dashboard/survey-report/subject-grade/by-study-program-and-year',
        '/admin-dashboard/survey-report/subject-grade/by-subject',
        '/admin-dashboard/survey-report/subject-grade/by-teacher',
      ]
    }
  }
};
</script>


<style scoped>

</style>