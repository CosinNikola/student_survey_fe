<template>
  <hr>
  <div class="search-container-xtratight">
    <SurveyReportSelectMenu labelText="Odaberite saradnika" :data="associatesData" @sendData="handleAssociate"/>
    <SurveyReportSubmitButton @click="submitData"/>
  </div>
  <div v-if="showData === 1">
    <SurveyReportDataDisplay v-for="(associateGrade,i) in associateGradeData" :data="associateGrade" :dataLabels="dataLabels" :key="i" />
  </div>
  <div v-else-if="showData === 2">Trenutno nema podataka!</div>
</template>
<script>
import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";
import SurveyReportSelectMenu from "@/components/reports/SurveyReportSelectMenu.vue";
import SurveyReportSubmitButton from "@/components/reports/SurveyReportSubmitButton.vue";

export default {
  name: "AssociateQualityByAssociate",
  components: { SurveyReportDataDisplay, SurveyReportSelectMenu, SurveyReportSubmitButton },
  props: ["data"],
  data() {
    return {
      associatesData: JSON.parse(localStorage.getItem("associatesData")),
      associateId: "",
      associateGradeData: {},
      dataLabels: ["Jasno i razumljivo izlaganje", "Kvalitet primera", "Nastavnik odgovara na mejlove", "Korektan odnos", "Studijski program", "Godina studija", "Predmet", "Ime saradnika", "Prezime saradnika", "Broj anketa"],
      showData: 0
    }
  },
  computed: {
    reportData() {
      return [];
    }
  },

  methods: {
    handleAssociate(data) {
      this.associateId = data;
    },
    submitData(e) {
      e.preventDefault();
      if(this.studyProgramId !== "") {
        fetch("http://127.0.0.1:8000/api/associate-quality-grade-by-associate?associate_id=" + this.associateId, {
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
            if(this.associateGradeData.length > 0) {
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