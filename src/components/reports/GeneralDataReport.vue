<template>
  <div class="container">
  <h1>Rezultati opšte ankete:</h1>
    <label for="">Odaberite studijski program:</label>
  <select v-model="this.studyProgramId" class="form-group__select">
    <option :key="studyProgram.id" v-for="studyProgram in studyProgramsData" :value="studyProgram.id">{{studyProgram.name}}</option>
  </select>
    <button @click="submitData">Pretraži</button>
  </div>
  <ReportGeneralDataDisplay :dataLabels="this.reportDataLabels" :dataValues="this.reportDataValues"/>
</template>
<script>
import ReportGeneralDataDisplay from "@/components/adminDashboard/ReportGeneralDataDisplay.vue";

export default {
  name: "GeneralDataReport",
  components: { ReportGeneralDataDisplay },
  data() {
    return {
      studyProgramsData: this.$store.state.studyProgramsData,
      studyProgramId: "",
      requestData: {},
      showReportData: false,
      reportDataLabels: [
          "Broj anketiranih", "Ukupno studenata", "Procenat anketiranih", "Muško", "Žensko", "Budžet", "Samofinansiranje", "Prosečna ocena 6-7", "Prosečna ocena 7-8", "Prosečna ocena 8-9", "Prosečna ocena 9-10",
          "Prisustvo na nastavi retko", "Prisustvo na nastavi povremeno", "Prisustvo na nastavi često","Prisustvo na nastavi redovno"
      ],
      reportDataValues: []

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
        fetch("http://127.0.0.1:8000/api/general-data-report?study_program_id=" + this.studyProgramId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*",
          }
        })
          .then(res => res.json())
          .then(data => {
              this.reportDataValues = Object.values(data);
              if(data.procenat_anketiranih > 0) {
                this.showReportData = true;
              }
              else {
                this.showReportData = false;
              }
          });
      }

    }
  }
};
</script>


<style scoped>
  label {
    font-weight: bold;
  }
  h1 {
    margin-left: 0;
  }

  .container {
    text-align: start;
  }
</style>