<template>
  <SearchNav :routes="routes"/>
  <router-view></router-view>
</template>

<script>
import SearchNav from "@/components/adminDashboard/SearchNav.vue";

export default {
  name: "AssociateAssessmentReport",
  components: { SearchNav },
  data(){
    return {
      roleId: JSON.parse(localStorage.getItem("userData")).role_id,
     }
  },
  computed: {
    routes() {
      return this.roleId === 1 ? [
            "/admin-dashboard/survey-report/associate-grade/assessment/by-study-program",
            "/admin-dashboard/survey-report/associate-grade/assessment/by-study-program-and-year",
            "/admin-dashboard/survey-report/associate-grade/assessment/by-subject",
            "/admin-dashboard/survey-report/associate-grade/assessment/by-associate",
          ] :
          [
            "/teacher-dashboard/survey-report/associate-grade/assessment/by-study-program",
            "/teacher-dashboard/survey-report/associate-grade/assessment/by-study-program-and-year",
            "/teacher-dashboard/survey-report/associate-grade/assessment/by-subject",
            "/teacher-dashboard/survey-report/associate-grade/assessment/by-associate",
          ]
    }
  }
};
</script>


<style scoped>

</style>