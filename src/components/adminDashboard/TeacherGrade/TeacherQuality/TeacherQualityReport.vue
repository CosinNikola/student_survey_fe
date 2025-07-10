<template>
  <SearchNav :routes="routes"/>
  <router-view></router-view>
</template>
<script>
import SearchNav from "@/components/adminDashboard/SearchNav.vue";

export default {
  name: "TeacherQualityReport",
  components: { SearchNav },
  data(){
    return {
      roleId: JSON.parse(localStorage.getItem("userData")).role_id,
      }
  },
  computed: {
    routes() {
      return this.roleId === 1 ? [
            "/admin-dashboard/survey-report/teacher-grade/quality/by-study-program",
            "/admin-dashboard/survey-report/teacher-grade/quality/by-study-program-and-year",
            "/admin-dashboard/survey-report/teacher-grade/quality/by-subject",
            "/admin-dashboard/survey-report/teacher-grade/quality/by-teacher",
          ] :
          [
            "/teacher-dashboard/survey-report/teacher-grade/quality/by-study-program",
            "/teacher-dashboard/survey-report/teacher-grade/quality/by-study-program-and-year",
            "/teacher-dashboard/survey-report/teacher-grade/quality/by-subject",
            "/teacher-dashboard/survey-report/teacher-grade/quality/by-teacher",
          ]
    }
  }
};
</script>


<style scoped>

</style>