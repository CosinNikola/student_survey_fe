<template>
  <SurveyContainer title="Ocena plana rada za studijski program: NAZIV">
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
  }
};
</script>


<style scoped>

</style>