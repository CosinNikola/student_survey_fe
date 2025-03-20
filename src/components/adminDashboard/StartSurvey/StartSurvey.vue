<template>
  <StartSurveyNav />
  <div class="display">
    <h1>Pokreni novu anketu</h1>
    <router-view></router-view>
  </div>
</template>


<script>
import StartSurveyNav from "@/components/adminDashboard/StartSurvey/StartSurveyNav.vue";

export default {
  name: "StartSurvey",
  components: {StartSurveyNav},
}
</script>



<style scoped>
.display {
  padding: 0 30px 0 30px;
  text-align: start;
}
</style>