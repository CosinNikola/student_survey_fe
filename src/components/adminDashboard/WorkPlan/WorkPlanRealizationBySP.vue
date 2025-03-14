<template>
  <div>
    <hr>
  <div class="search-container">
    <SurveyReportSelectMenu labelText="Odaberite studijski program" :data="studyProgramsData" @sendData="handleSentData"/>
    <SurveyReportSubmitButton @click="submitData"/>
  </div>
    <div v-if="showData === 1">
    <SurveyReportDataDisplay v-for="(workPlanRealization,i) in workPlanRealizationData" :data="workPlanRealization" :dataLabels="dataLabels" :key="i" />
    </div>
    <div v-else-if="showData === 2">Trenutno nema podataka!</div>
  </div>
</template>
<script>
import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";
import SurveyReportSelectMenu from "@/components/reports/SurveyReportSelectMenu.vue";
import SurveyReportSubmitButton from "@/components/reports/SurveyReportSubmitButton.vue";

export default {
  name: "WorkPlanRealizationBySP",
  components: { SurveyReportDataDisplay, SurveyReportSelectMenu, SurveyReportSubmitButton },
  props: ["data"],
  data() {
    return {
      studyProgramsData: JSON.parse(localStorage.getItem("studyProgramsData")),
      studyProgramId: "",
      workPlanRealizationData: {},
      dataLabels: [ "Plan rada nudi neophodne informacije", "Ocena rasporeda nastave", "Ocena rasporeda konsultacija", "Studijski program", "Godina studija", "Ukupno anketa" ],
      showData: 0
    }
  },
  computed: {
    reportData() {
      return [];
    }
  },

  methods: {
    handleSentData(data) {
      this.studyProgramId = data;
    },
    submitData(e) {
      e.preventDefault();
      if(this.studyProgramId !== "") {
        fetch("http://127.0.0.1:8000/api/work-plan-realization-by-sp?study_program_id=" + this.studyProgramId, {
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
            this.workPlanRealizationData = data;
            if(this.workPlanRealizationData.length > 0) {
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
</style>