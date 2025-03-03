<template>
  <SurveyContainer title="Ocena saradnika: TITULA IME PREZIME">
    <TeacherGradeForm type="associate"/>
  </SurveyContainer>
</template>

<script>
import SurveyContainer from "@/components/survey/SurveyContainer.vue";
import TeacherGradeForm from "@/components/survey/teacherGrade/TeacherGradeForm.vue";
export default {
  name: "AssociateGradeView",
  components: {
    SurveyContainer,
    TeacherGradeForm
  }
};
</script>


<style scoped>

</style>