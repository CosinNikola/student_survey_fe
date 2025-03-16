<template>
  <SurveyContainer :title="surveyTitle">
    <TextbooksQualityGradeForm />
  </SurveyContainer>
</template>

<script>
import SurveyContainer from "@/components/survey/SurveyContainer.vue";
import TextbooksQualityGradeForm from "@/components/survey/textbooksQuality/TextbooksQualityGradeForm.vue";
export default {
  name: "TextbooksQualityGradeView",
  components: {
    SurveyContainer,
    TextbooksQualityGradeForm
  },
  data() {
    return {
      surveyTitle: "Ocena udzbenika i literature: " + JSON.parse(localStorage.getItem('subjectData'))[0].naziv_predmeta.toUpperCase(),
    }
  },
};
</script>


<style scoped>

</style>