<template>
  <h1>Pregled anketa o studijskom programu</h1>
  <SurveyReportsNavSPOnly :routes="routes" />
  <router-view></router-view>
</template>
<script>
import SearchNavSpOnly from "@/components/adminDashboard/SearchNavSPOnly.vue";

export default {
  name: "StudyProgramEvalReport",
  components: { SurveyReportsNavSPOnly: SearchNavSpOnly },
  data() {
    return {
      routes: [
        '/admin-dashboard/survey-report/study-program-eval/by-study-program',
        '/admin-dashboard/survey-report/study-program-eval/by-study-program-and-year'
      ]
    }
  }
};
</script>


<style scoped>
</style>