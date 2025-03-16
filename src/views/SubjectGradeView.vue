<template>
  <SurveyContainer :title="surveyTitle">
    <SubjectGradeForm />
  </SurveyContainer>
</template>

<script>
import SurveyContainer from "@/components/survey/SurveyContainer.vue";
import SubjectGradeForm from "@/components/survey/subjectGrade/SubjectGradeForm.vue";
export default {
  name: "SubjectGradeView",
  components: {
    SurveyContainer,
    SubjectGradeForm
  },
  data() {
    return {
      surveyTitle: "Ocena predmeta: " + JSON.parse(localStorage.getItem('subjectData'))[0].naziv_predmeta.toUpperCase(),
    }
  },
};
</script>


<style scoped>

</style>