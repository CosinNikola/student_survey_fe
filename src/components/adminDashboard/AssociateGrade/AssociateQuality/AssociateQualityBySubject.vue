<template>
  <hr>
  <div>
    <label for="">Odaberite predmet: </label>
    <select v-model="subjectId">
      <option v-for="subject in this.subjectsData" :value="subject.id" :key="subject.id">
        {{subject.name}}
      </option>
    </select>
    <button @click="submitData">Pretraži</button>
    <SurveyReportDataDisplay v-for="(associateGrade,i) in associateGradeData" :data="associateGrade" :dataLabels="dataLabels" :key="i" />
  </div>
</template>
<script>
import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";

export default {
  name: "AssociateQualityBySubject",
  components: { SurveyReportDataDisplay },
  props: ["data"],
  data() {
    return {
      subjectsData: this.$store.state.subjectsData,
      subjectId: "",
      associateGradeData: {},
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
        fetch("http://127.0.0.1:8000/api/associate-quality-grade-by-subject?subject_id=" + this.subjectId, {
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
label {
  font-weight: 500;
}
</style>