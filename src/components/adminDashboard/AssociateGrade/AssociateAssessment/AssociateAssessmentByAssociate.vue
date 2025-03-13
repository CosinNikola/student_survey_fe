<template>
  <hr>
  <div>
    <label for="">Odaberite saradnika: </label>
    <select v-model="associateId">
      <option v-for="associate in this.associatesData" :value="associate.id" :key="associate.id">
        {{associate.vocation}} {{associate.last_name}} {{associate.first_name}}
      </option>
    </select>
    <button @click="submitData">Pretraži</button>
    <div v-if="showData === 1">
    <SurveyReportDataDisplay v-for="(associateGrade,i) in associateGradeData" :data="associateGrade" :dataLabels="dataLabels" :key="i" />
    </div>
    <div v-else-if="showData === 2">Trenutno nema podataka!</div>
  </div>
</template>
<script>
import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";

export default {
  name: "AssociateAssessmentByAssociate",
  components: { SurveyReportDataDisplay },
  props: ["data"],
  data() {
    return {
      associatesData: this.$store.state.associatesData,
      associateId: "",
      associateGradeData: {},
      dataLabels: ["Nivo objektivnosti pri ocenjivanju", "Nastavnik objavljuje rezultate predispitnih aktivnosti", "Nivo javnosti ispita", "Studijski program", "Godina studija", "Predmet", "Ime saradnika", "Prezime saradnika", "Broj anketa"],
      showData: 0
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
        fetch("http://127.0.0.1:8000/api/associate-assessment-quality-by-associate?associate_id=" + this.associateId, {
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