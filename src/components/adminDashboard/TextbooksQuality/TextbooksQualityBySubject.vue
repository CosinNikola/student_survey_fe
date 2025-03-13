<template>
  <div>
    <label for="">Odaberite predmet: </label>
    <select v-model="subjectId">
      <option v-for="subject in this.subjectsData" :value="subject.id" :key="subject.id">
        {{subject.name}}
      </option>
    </select>
    <button @click="submitData">Pretraži</button>
    <SurveyReportDataDisplay v-for="(textbooksQuality,i) in textbooksQualityData" :data="textbooksQuality" :dataLabels="dataLabels" :key="i" />
  </div>
</template>
<script>
import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";

export default {
  name: "SubjectGradeBySubject",
  components: { SurveyReportDataDisplay },
  props: ["data"],
  data() {
    return {
      subjectsData: this.$store.state.subjectsData,
      subjectId: "",
      textbooksQualityData: {},
      dataLabels: ["Nivo dostupnosti neophodne literature", "Nivo pokrivenosti nastavnog programa datom literaturom", "Studijski program", "Godina studija", "Naziv predmeta", "Ime profesora", "Prezime profesora", "Ukupno anketa"],
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
      if(this.subjectId !== "") {
        fetch("http://127.0.0.1:8000/api/textbooks-quality-grade-by-subject?subject_id=" + this.subjectId, {
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
            this.textbooksQualityData = data;
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