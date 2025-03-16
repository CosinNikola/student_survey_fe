<template>
  <SurveyContainer :title="surveyTitle">
    <StudyProgramEvalForm />
  </SurveyContainer>
</template>

<script>
import SurveyContainer from "@/components/survey/SurveyContainer.vue";
import StudyProgramEvalForm from "@/components/survey/studyProgramEval/StudyProgramEvalForm.vue";
export default {
  name: "StudyProgramEvalView",
  components: {
    SurveyContainer,
    StudyProgramEvalForm
  },
  data() {
    return {
      surveyTitle: "Ocena studijskog programa: " + JSON.parse(localStorage.getItem("studyProgramData"))[0].naziv_smera.toUpperCase(),
    }
  }
};
</script>


<style scoped>

</style>