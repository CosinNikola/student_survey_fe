<template>
  <SearchNav :routes="routes"/>
  <router-view></router-view>
</template>

<script>
import SearchNav from "@/components/adminDashboard/SearchNav.vue";

export default {
  name: "TeacherAssessmentReport",
  components: { SearchNav },
  data(){
    return {
      roleId: JSON.parse(localStorage.getItem("userData")).role_id,
      }
  },
  computed: {
    routes() {
      return this.roleId === 1 ? [
            "/admin-dashboard/survey-report/teacher-grade/assessment/by-study-program",
            "/admin-dashboard/survey-report/teacher-grade/assessment/by-study-program-and-year",
            "/admin-dashboard/survey-report/teacher-grade/assessment/by-subject",
            "/admin-dashboard/survey-report/teacher-grade/assessment/by-teacher",
          ] :
          [
            "/teacher-dashboard/survey-report/teacher-grade/assessment/by-study-program",
            "/teacher-dashboard/survey-report/teacher-grade/assessment/by-study-program-and-year",
            "/teacher-dashboard/survey-report/teacher-grade/assessment/by-subject",
            "/teacher-dashboard/survey-report/teacher-grade/assessment/by-teacher",
          ]
    }
  }
};
</script>


<style scoped>

</style>