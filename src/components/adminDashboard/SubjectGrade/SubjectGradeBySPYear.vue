<template>
    <div class="main-container">
      <hr>
      <SurveyReportSelectMenu labelText="Odaberite studijski program" :data="studyProgramsData" @sendData="handleStudyProgram"/>
      <SurveyReportYearOfStudy @sendData="handleYearOfStudy"/>
      <SurveyReportSubmitButton @click="submitData"/>
    <div v-if="showData === 1">
    <SurveyReportDataDisplay v-for="(subjectGrade,i) in subjectGradeData" :data="subjectGrade" :dataLabels="dataLabels" :key="i" />
    </div>
    <div v-else-if="showData === 2" class="margin-top-10">Trenutno nema podataka!</div>
  </div>
</template>
<script>
import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";
import SurveyReportSelectMenu from "@/components/reports/SurveyReportSelectMenu.vue";
import SurveyReportSubmitButton from "@/components/reports/SurveyReportSubmitButton.vue";
import SurveyReportYearOfStudy from "@/components/reports/SurveyReportYearOfStudy.vue";

export default {
  name: "SubjectGradeBySPYear",
  components: { SurveyReportDataDisplay, SurveyReportSelectMenu, SurveyReportSubmitButton, SurveyReportYearOfStudy },
  props: ["data"],
  data() {
    return {
      studyProgramsData: JSON.parse(localStorage.getItem("studyProgramsData")),
      studyProgramId: "",
      yearOfStudy: "",
      subjectGradeData: [],
      dataLabels: ["Jasnoća zahteva na predmetu", "Obim gradiva je optimalan", "Nudi nova znanja", "Ima prakticnu primenu i omogucava razvoj vestina", "Koristan je za usmerenje", "Ocena kvaliteta nastavnog materijala", "Studjiski program", "Godina studija", "Ukupno anketa"],
      showData: 0
    }
  },
  computed: {
    reportData() {
      return [];
    }
  },

  methods: {
    handleStudyProgram(data) {
      this.studyProgramId = data;
    },
    handleYearOfStudy(data) {
      this.yearOfStudy = data;
    },
    submitData(e) {
      e.preventDefault();
      if(this.studyProgramId !== "") {
        fetch("http://127.0.0.1:8000/api/subject-grade-by-sp-yos?study_program_id=" + this.studyProgramId + "&year_of_study=" + this.yearOfStudy, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*",
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.subjectGradeData = data;
            if(this.subjectGradeData.length > 0) {
              this.showData = 1;
            }
            else {
              this.showData = 2;
            }
          });
      }

    }
  }
};
</script>


<style scoped>
label {
  font-weight: bold;
}
</style>