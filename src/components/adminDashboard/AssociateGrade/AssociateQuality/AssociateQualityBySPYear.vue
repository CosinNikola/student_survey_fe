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
    <SurveyReportDataDisplay v-for="(associateGrade,i) in associateGradeData" :data="associateGrade" :dataLabels="dataLabels" :key="i" />
  </div>
</template>
<script>
import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";

export default {
  name: "AssociateQualityBySPYear",
  components: { SurveyReportDataDisplay },
  props: ["data"],
  data() {
    return {
      studyProgramsData: this.$store.state.studyProgramsData,
      studyProgramId: "",
      yearOfStudy: "",
      associateGradeData: [],
      dataLabels: ["Jasno i razumljivo izlaganje", "Kvalitet primera", "Nastavnik odgovara na mejlove", "Korektan odnos", "Studijski program", "Godina studija", "Predmet", "Ime saradnika", "Prezime saradnika", "Broj anketa"]
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
        fetch("http://127.0.0.1:8000/api/associate-quality-grade-by-sp-yos?study_program_id=" + this.studyProgramId + "&year_of_study=" + this.yearOfStudy, {
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
            this.associateGradeData = data;
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
}

label {
  font-weight: bold;
}
</style>