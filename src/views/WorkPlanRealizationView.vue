<template>
  <SurveyContainer :title="surveyTitle">
    <WorkPlanRealizationForm />
  </SurveyContainer>
</template>

<script>
import SurveyContainer from "@/components/survey/SurveyContainer.vue";
import WorkPlanRealizationForm from "@/components/survey/workPlanRealization/WorkPlanRealizationForm.vue";
export default {
  name: "WorkPlanRealizationView",
  components: {
    SurveyContainer,
    WorkPlanRealizationForm
  },
  data() {
    return {
      surveyTitle: "Ocena plana rada za studijski program: " + JSON.parse(localStorage.getItem("studyProgramData"))[0].naziv_smera.toUpperCase(),
    }
  }
};
</script>


<style scoped>

</style>