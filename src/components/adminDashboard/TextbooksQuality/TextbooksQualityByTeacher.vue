<template>
  <div>
    <label for="">Odaberite predmet: </label>
    <select v-model="teacherId">
      <option v-for="teacher in this.teachersData" :value="teacher.id" :key="teacher.id">
        {{teacher.vocation}} {{teacher.last_name}} {{teacher.first_name}}
      </option>
    </select>
    <button @click="submitData">Pretraži</button>
    <SurveyReportDataDisplay v-for="(textbooksQuality,i) in textbooksQualityData" :data="textbooksQuality" :dataLabels="dataLabels" :key="i" />
  </div>
</template>
<script>
import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";

export default {
  name: "SubjectGradeByTeacher",
  components: { SurveyReportDataDisplay },
  props: ["data"],
  data() {
    return {
      teachersData: this.$store.state.teachersData,
      teacherId: "",
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
      if(this.teacherId !== "") {
        fetch("http://127.0.0.1:8000/api/textbooks-quality-grade-by-teacher?teacher_id=" + this.teacherId, {
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
