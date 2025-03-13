<template>
  <div>
    <label for="">Odaberite studijski program: </label>
    <select v-model="studyProgramId">
      <option v-for="studyProgram in this.studyProgramsData" :value="studyProgram.id" :key="studyProgram.id">
        {{studyProgram.name}}
      </option>
    </select>
    <button @click="submitData">Pretraži</button>
    <div v-if="showData === 1">
    <SurveyReportDataDisplay v-for="(workPlanRealization,i) in workPlanRealizationData" :data="workPlanRealization" :dataLabels="dataLabels" :key="i" />
    </div>
    <div v-else-if="showData === 2">Trenutno nema podataka!</div>
  </div>
</template>
<script>
// import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";

import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";

export default {
  name: "WorkPlanRealizationBySP",
  components: { SurveyReportDataDisplay },
  props: ["data"],
  data() {
    return {
      studyProgramsData: this.$store.state.studyProgramsData,
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
  label {
    font-weight: 500;
  }
</style>