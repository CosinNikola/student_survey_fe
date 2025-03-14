<template>
  <div>
    <hr>
    <div class="search-container">
    <SurveyReportSelectMenu labelText="Odaberite studijski program" :data="studyProgramsData" @sendData="handleStudyProgram"/>
    <SurveyReportSubmitButton @click="submitData"/>
    </div>
    <div v-if="showData === 1">
    <SurveyReportDataDisplay v-for="(studyProgramEval,i) in studyProgramEvalData" :data="studyProgramEval" :dataLabels="dataLabels" :key="i"/>
    </div>
    <div v-else-if="showData === 2">
      <p>Trenutno nema podataka!</p>
    </div>
  </div>
</template>
<script>
import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";
import SurveyReportSelectMenu from "@/components/reports/SurveyReportSelectMenu.vue";
import SurveyReportSubmitButton from "@/components/reports/SurveyReportSubmitButton.vue";

export default {
  name: "StudyProgramEvalBySP",
  components: { SurveyReportDataDisplay, SurveyReportSelectMenu, SurveyReportSubmitButton },
  props: ["data"],
  data() {
    return {
      studyProgramsData: JSON.parse(localStorage.getItem("studyProgramsData")),
      studyProgramId: "",
      studyProgramEvalData: {},
      dataLabels: [
        "Struktura studijskog programa", "Znanja koja nudi", "Ispunio očekivanja", "Studijski program", "Godina studija", "Ukupno anketa"
      ],
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
    submitData(e) {
      e.preventDefault();
      if(this.studyProgramId !== "") {
        fetch("http://127.0.0.1:8000/api/study-program-eval-by-sp?study_program_id=" + this.studyProgramId, {
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
            this.studyProgramEvalData = data;
            if(this.studyProgramEvalData.length > 0) {
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


<style>

</style>