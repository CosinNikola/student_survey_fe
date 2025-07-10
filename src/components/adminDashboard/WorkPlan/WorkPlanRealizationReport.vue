<template>
  <h1>Pregled anketa o planu rada</h1>
  <SearchNavSPOnly :routes="routes" />
  <router-view></router-view>
</template>
<script>
import SearchNavSPOnly from "@/components/adminDashboard/SearchNavSPOnly.vue";

export default {
  name: "WorkPlanRealizationReport",
  components: { SearchNavSPOnly },
  data() {
    return {
      roleId: JSON.parse(localStorage.getItem("userData")).role_id,
    }
  },
  computed: {
    routes() {
      return this.roleId === 1 ? [
            '/admin-dashboard/survey-report/study-program-eval/by-study-program',
            '/admin-dashboard/survey-report/study-program-eval/by-study-program-and-year'
          ] :
          [
            '/teacher-dashboard/survey-report/study-program-eval/by-study-program',
            '/teacher-dashboard/survey-report/study-program-eval/by-study-program-and-year'
          ]
    }
  }
};
</script>


<style scoped>

</style>