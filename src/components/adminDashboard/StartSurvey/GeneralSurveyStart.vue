<template>
  <h1>Pokretanje opšte ankete</h1>
  <div>
    <SurveyReportSelectMenu labelText="Odaberite studijski program" :data="studyProgramsData" @sendData="handleStudyProgram"/>
    <SurveyReportYearOfStudy @sendData="handleYearOfStudy"/>
    <SurveyReportSubmitButton @click="submit"/>
  </div>
</template>

<script>
import SurveyReportSelectMenu from "@/components/reports/SurveyReportSelectMenu.vue";
import SurveyReportYearOfStudy from "@/components/reports/SurveyReportYearOfStudy.vue";
import SurveyReportSubmitButton from "@/components/reports/SurveyReportSubmitButton.vue";

export default {
  name: "GeneralSurveyStart",
  components: {SurveyReportSubmitButton, SurveyReportYearOfStudy, SurveyReportSelectMenu},
  data() {
    return {
      studyProgramsData: JSON.parse(localStorage.getItem("studyProgramsData")),
      studyProgramId: "",
      yearOfStudy: "",
    }
  },
  methods: {
    handleStudyProgram(data) {
      this.studyProgramId = data;
    },
    handleYearOfStudy(data) {
      this.yearOfStudy = data;
    },
    submit(e) {
      e.preventDefault();
      fetch("http://127.0.0.1:8000/api/send-tokens-general?study_program_id="+this.studyProgramId+"&year_of_study="+this.yearOfStudy, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
          "Access-Control-Allow-Origin": "*",
        }
      })
          .then(res => res.json())
      .then(data => console.log(data))
      }
    }

}
</script>


<style scoped>

</style>