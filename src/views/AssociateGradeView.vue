<template>
  <SurveyContainer :title="surveyTitle">
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
  },
  data() {
    return {
      associateFirstName: JSON.parse(localStorage.getItem('subjectData'))[0].ime_saradnika,
      associateLastName: JSON.parse(localStorage.getItem('subjectData'))[0].prezime_saradnika,
      associateVocation: JSON.parse(localStorage.getItem('subjectData'))[0].titula_saradnika,
      surveyTitle: ""
    }
  },
  beforeMount() {
    this.surveyTitle = "Ocena saradnika: " + ((this.associateVocation) ? this.associateVocation : " ") + " " + this.associateFirstName + " " + this.associateLastName;
  }
};
</script>


<style scoped>

</style>