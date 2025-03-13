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
      routes: [
        "/admin-dashboard/survey-report/teacher-grade/assessment/by-study-program",
        "/admin-dashboard/survey-report/teacher-grade/assessment/by-study-program-and-year",
        "/admin-dashboard/survey-report/teacher-grade/assessment/by-subject",
        "/admin-dashboard/survey-report/teacher-grade/assessment/by-teacher",
      ]
    }
  }
};
</script>


<style scoped>

</style>