<template>
  <div>
    <div class="form-container">
      <form class="form">
        <SurveyFormGroup :options="optionsGender" labelText="Pol" name="pol"/>
        <SurveyFormGroup :options="optionsStatus" labelText="Status" name="status"/>
        <SurveyFormGroup :options="optionsAvgGrade" labelText="Prosecna ocena" name="avgGrade"/>
        <SurveyFormGroup :options="optionsAttendance" labelText="Prisustvo na nastavi" name="attendance"/>
        <FormButton value="Potvrdi" type="submit" @click="submitData" route="/study-program-eval"/>
      </form>
  </div>
  </div>
</template>
<script>

import FormButton from "@/components/survey/FormButton.vue";
import SurveyFormGroup from "@/components/survey/SurveyFormGroup.vue";


export default {
  name: "GeneralDataForm",
  components: {
    FormButton,
    SurveyFormGroup,
  },
  data() {
    return {
      optionsGender: [
        {id: "gender",text: "Muski", value:"M"},
        {id: "gender", text: "Zenski", value:"Z"},
      ],
      optionsStatus: [
        {id: "status", text: "Budzet", value:"B"},
        {id: "status", text: "Samofinansiranje", value:"S"},
      ],
      optionsAvgGrade: [
        {id: "avgGrade", text: "6-7", value:"6-7"},
        {id: "avgGrade", text: "7-8", value:"7-8"},
        {id: "avgGrade", text: "8-9", value:"8-9"},
        {id: "avgGrade", text: "9-10", value:"9-10"},
      ],
      optionsAttendance: [
        {id: "classAttendance", text: "Retko", value:"retko"},
        {id: "classAttendance", text: "Povremeno", value:"povremeno"},
        {id: "classAttendance", text: "Cesto", value:"cesto"},
        {id: "classAttendance", text: "Redovno", value:"redovno"},
      ],
      // formData: {
      //   gender: "",
      //   status: "",
      //   avg_grade: "",
      //   class_attendance: "",
      //   study_program_by_year_id: sessionStorage.getItem("spyid"),
      // }
    }
  },
  computed: {
    formDataGender() {
      return this.$store.state.generalDataGender;
    },
    formDataStatus() {
      return this.$store.state.generalDataStatus;
    },
    formDataAvgGrade() {
      return this.$store.state.generalDataAvgGrade;
    },
    formDataClassAttendance() {
      return this.$store.state.generalDataClassAttendance;
    },
    formData() {
      return this.$store.state.generalData;
    }
  },
  methods: {
    submitData(e){
      e.preventDefault();

      this.$store.commit("setGeneralData", {
        gender: this.formDataGender,
        status: this.formDataStatus,
        avg_grade: this.formDataAvgGrade,
        class_attendance: this.formDataClassAttendance,
        study_program_by_year_id: sessionStorage.getItem("spyid"),
      });

      console.log("Sending survey data:", this.formData);

      fetch("http://127.0.0.1:8000/api/general-data", {
        method: "POST",
        body: JSON.stringify(this.formData),
        headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
          "Access-Control-Allow-Origin": "*",
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
    }
  }
};
</script>
<style scoped>
  .form {
    text-align: left;
    width: 100%;
  }
  .form-container {
    font-weight: bold;
    color: rgb(50,50,50);
    width: 100%;
  }








</style>