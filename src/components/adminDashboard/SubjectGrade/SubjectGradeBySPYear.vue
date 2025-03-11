<template>
  <div class="container">
    <label for="">Odaberite studijski program:</label>
    <select v-model="studyProgramId">
      <option v-for="studyProgram in this.studyProgramsData" :value="studyProgram.id" :key="studyProgram.id">
        {{studyProgram.name}}
      </option>
    </select>
    <label for="">Odaberite godinu studija:</label>
    <select v-model="yearOfStudy">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="submitData">Pretraži</button>
    <SurveyReportDataDisplay />
  </div>
</template>
<script>
import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";

export default {
  name: "SubjectGradeBySPYear",
  components: { SurveyReportDataDisplay },
  props: ["data"],
  data() {
    return {
      studyProgramsData: [],
      studyProgramId: "",
      yearOfStudy: "",
      subjectGradeData: {}
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
            // this.subjectGradeData = data;
          });
      }

    }
  }
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 35%;
}
</style>