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
      roleId: JSON.parse(localStorage.getItem("userData")).role_id,

    }
  },
  computed: {
    routes() {
      return this.roleId === 1 ? [
            '/admin-dashboard/survey-report/subject-grade/by-study-program',
            '/admin-dashboard/survey-report/subject-grade/by-study-program-and-year',
            '/admin-dashboard/survey-report/subject-grade/by-subject',
            '/admin-dashboard/survey-report/subject-grade/by-teacher',
          ] :
          [
            '/teacher-dashboard/survey-report/subject-grade/by-study-program',
            '/teacher-dashboard/survey-report/subject-grade/by-study-program-and-year',
            '/teacher-dashboard/survey-report/subject-grade/by-subject',
            '/teacher-dashboard/survey-report/subject-grade/by-teacher',
          ]
    }
  }
};
</script>


<style scoped>

</style>