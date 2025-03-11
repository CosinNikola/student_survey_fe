<template>
  <SurveyReportNav />
  <div class="display">
    <router-view></router-view>
  </div>
</template>
<script>
import SurveyReportNav from "@/components/adminDashboard/SurveyReportNav.vue";

export default {
  name: "SurveyReport",
  components: { SurveyReportNav },
  props: ["title"]
};
</script>


<style scoped>
  .display {
    padding: 0 30px 0 30px;
    text-align: start;
  }
</style>