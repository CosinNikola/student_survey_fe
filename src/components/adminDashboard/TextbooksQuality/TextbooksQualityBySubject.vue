<template>
  <hr>
  <div class="search-container-wide">
    <SurveyReportSelectMenu labelText="Odaberite predmet" :data="subjectsData" @sendData="handleSentData"/>
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
  name: "SubjectGradeBySubject",
  components: { SurveyReportDataDisplay, SurveyReportSelectMenu, SurveyReportSubmitButton },
  props: ["data"],
  data() {
    return {
      subjectsData: JSON.parse(localStorage.getItem("subjectsData")),
      subjectId: "",
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
    handleSentData(data) {
      this.subjectId = data;
    },
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