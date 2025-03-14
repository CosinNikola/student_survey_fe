<template>
  <hr>
  <div class="search-container-tight">
    <SurveyReportSelectMenu labelText="Odaberite profesora" :data="teachersData" @sendData="handleTeacher"/>
    <SurveyReportSubmitButton @click="submitData"/>
  </div>
  <div v-if="showData === 1">
    <SurveyReportDataDisplay v-for="(textbooksQuality,i) in textbooksQualityData" :data="textbooksQuality" :dataLabels="dataLabels" :key="i" />
    </div>
  <div v-else-if="showData === 2">Trenutno nema podataka!</div>
</template>
<script>
import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";
import SurveyReportSelectMenu from "@/components/reports/SurveyReportSelectMenu.vue";
import SurveyReportSubmitButton from "@/components/reports/SurveyReportSubmitButton.vue";

export default {
  name: "SubjectGradeByTeacher",
  components: { SurveyReportDataDisplay, SurveyReportSelectMenu, SurveyReportSubmitButton },
  props: ["data"],
  data() {
    return {
      teachersData: JSON.parse(localStorage.getItem("teachersData")),
      teacherId: "",
      textbooksQualityData: {},
      dataLabels: ["Nivo dostupnosti neophodne literature", "Nivo pokrivenosti nastavnog programa datom literaturom", "Studijski program", "Godina studija", "Naziv predmeta", "Ime profesora", "Prezime profesora", "Ukupno anketa"],
      showData: 0
    }
  },
  computed: {
    reportData() {
      return [];
    }
  },

  methods: {
    handleTeacher(data) {
      this.teacherId = data;
    },
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
            if(this.textbooksQualityData.length > 0) {
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
