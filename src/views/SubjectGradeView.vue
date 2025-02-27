<template>
  <SurveyContainer title="Ocena predmeta: NAZIV">
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
  }
};
</script>


<style scoped>

</style>