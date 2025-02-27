<template>
  <SurveyContainer title="Ocena studijskog programa: NAZIV">
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
  }
};
</script>


<style scoped>

</style>