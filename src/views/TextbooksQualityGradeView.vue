<template>
  <SurveyContainer title="Ocena udzbenika i literature: NAZIV_PREDMETA">
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
  }
};
</script>


<style scoped>

</style>