<template>
  <SurveyContainer title="Ocena nastavnika: TITULA IME PREZIME">
    <TeacherGradeForm />
  </SurveyContainer>
</template>

<script>
import SurveyContainer from "@/components/survey/SurveyContainer.vue";
import TeacherGradeForm from "@/components/survey/teacherGrade/TeacherGradeForm.vue";
export default {
  name: "TeacherGradeView",
  components: {
    SurveyContainer,
    TeacherGradeForm
  }
};
</script>


<style scoped>

</style>