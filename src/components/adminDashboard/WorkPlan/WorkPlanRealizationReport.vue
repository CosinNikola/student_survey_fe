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
      routes: [
        '/admin-dashboard/survey-report/work-plan-realization/by-study-program',
        '/admin-dashboard/survey-report/work-plan-realization/by-study-program-and-year'
      ]
    }
  }
};
</script>


<style scoped>

</style>