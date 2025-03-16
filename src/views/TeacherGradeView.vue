<template>
  <SurveyContainer :title="surveyTitle">
    <TeacherGradeForm type="teacher"/>
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
  },
  data() {
    return {
      teacherFirstName: JSON.parse(localStorage.getItem('subjectData'))[0].ime_profesora,
      teacherLastName: JSON.parse(localStorage.getItem('subjectData'))[0].prezime_profesora,
      teacherVocation: JSON.parse(localStorage.getItem('subjectData'))[0].titula_profesora,
      surveyTitle: ""
    }
  },
  beforeMount() {
      this.surveyTitle = "Ocena profesora: " + this.teacherVocation + " " + this.teacherFirstName + " " + this.teacherLastName;
  }
};
</script>


<style scoped>

</style>