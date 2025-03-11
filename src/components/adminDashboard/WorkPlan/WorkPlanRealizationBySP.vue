<template>
  <div>
    <label for="">Odaberite studijski program:</label>
    <select v-model="studyProgramId">
      <option v-for="studyProgram in this.studyProgramsData" :value="studyProgram.id" :key="studyProgram.id">
        {{studyProgram.name}}
      </option>
    </select>
    <button @click="submitData">Pretraži</button>
<!--    <SurveyReportDataDisplay />-->
  </div>
</template>
<script>
// import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";

export default {
  name: "WorkPlanRealizationBySP",
  components: {  },
  props: ["data"],
  data() {
    return {
      studyProgramsData: [],
      studyProgramId: "",
      workPlanRealizationData: {}
    }
  },
  computed: {
    reportData() {
      return [];
    }
  },
  beforeMount() {
    fetch("http://127.0.0.1:8000/api/study-programs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then(res => res.json())
      .then(data => {
        this.studyProgramsData = data;
      });
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
          });
      }

    }
  }
};
</script>


<style scoped>

</style>