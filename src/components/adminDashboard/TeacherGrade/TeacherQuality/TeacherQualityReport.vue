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
      routes: [
        "/admin-dashboard/survey-report/teacher-grade/quality/by-study-program",
        "/admin-dashboard/survey-report/teacher-grade/quality/by-study-program-and-year",
        "/admin-dashboard/survey-report/teacher-grade/quality/by-subject",
        "/admin-dashboard/survey-report/teacher-grade/quality/by-teacher",
      ]
  }
  }
};
</script>


<style scoped>

</style>