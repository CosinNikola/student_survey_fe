<template>
  <div>
    <h1>Rezultati anketa po smeru:</h1>
    <label for="">Odaberite studijski program:</label>
    <select v-model="studyProgramId">
      <option v-for="studyProgram in this.studyProgramsData" :value="studyProgram.id" :key="studyProgram.id">
        {{studyProgram.name}}
      </option>
    </select>
    <button @click="submitData">Pretraži</button>
  </div>
  <ReportDataDisplay :data="this.reportData"/>
</template>

<script>
import ReportDataDisplay from "@/components/adminDashboard/ReportDataDisplay.vue";
export default {
  name: "ReportByStudyProgram",
  components: { ReportDataDisplay },
  props: ["data"],
  data() {
    return {
      studyProgramsData: [],
      studyProgramId: "",
      requestData: {}
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
          });
      }

    }
  }
};
</script>

<style scoped>

</style>