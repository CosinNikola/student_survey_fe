<template>
  <div class="container">
  <h1>Rezultati opšte ankete:</h1>
    <label for="">Odaberite studijski program:</label>
  <select v-model="this.studyProgramId">
    <option :key="studyProgram.id" v-for="studyProgram in studyProgramsData" :value="studyProgram.id">{{studyProgram.name}}</option>
  </select>
    <button @click="submitData">Pretraži</button>
  </div>
  <ReportDataDisplay :data="this.reportData" v-if="this.reportData[0].value"/>
</template>
<script>
import ReportDataDisplay from "@/components/adminDashboard/ReportDataDisplay.vue";

export default {
  name: "GeneralDataReport",
  components: { ReportDataDisplay },
  data() {
    return {
      studyProgramsData: [],
      studyProgramId: "",
      requestData: {}
    }
  },
  computed: {
    reportData() {
      return [
        {
          label: "Broj anketiranih",
          value: this.requestData.broj_anketiranih
        },{
          label: "Ukupno studenata",
          value: this.requestData.ukupno_studenata
        },{
          label: "Procenat anketiranih",
          value: this.requestData.procenat_anketiranih
        },{
          label: "Muško",
          value: this.requestData.M
        },{
          label: "Žensko",
          value: this.requestData.Z
        },{
          label: "Budžet",
          value: this.requestData.budzet
        },{
          label: "Samofinansiranje",
          value: this.requestData.samofinansiranje
        },{
          label: "Prosečna ocena 6-7",
          value: this.requestData.ocena6_7
        },{
          label: "Prosečna ocena 7-8",
          value: this.requestData.ocena7_8
        },{
          label: "Prosečna ocena 8-9",
          value: this.requestData.ocena8_9
        },{
          label: "Prosečna ocena 9-10",
          value: this.requestData.ocena9_10
        },{
          label: "Prisustvo na nastavi retko",
          value: this.requestData.retko
        },{
          label: "Prisustvo na nastavi povremeno",
          value: this.requestData.povremeno
        },{
          label: "Prisustvo na nastavi često",
          value: this.requestData.cesto
        },{
          label: "Prisustvo na nastavi redovno",
          value: this.requestData.redovno
        }

      ]
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
              this.requestData = data;
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