<template>
  <div>
    <div class="form-container">
      <form class="form">
        <SurveyFormGroup :options="optionsGender" labelText="Pol" name="pol" v-model="formData.gender"/>
        <SurveyFormGroup :options="optionsStatus" labelText="Status" name="status" v-model="formData.status"/>
        <SurveyFormGroup :options="optionsAvgGrade" labelText="Prosecna ocena" name="avgGrade" v-model="formData.avg_grade"/>
        <SurveyFormGroup :options="optionsAttendance" labelText="Prisustvo na nastavi" name="attendance" v-model="formData.class_attendance"/>
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
        {text: "Muski", value:"M"},
        {text: "Zenski", value:"Z"},
      ],
      optionsStatus: [
        {text: "Budzet", value:"B"},
        {text: "Samofinansiranje", value:"S"},
      ],
      optionsAvgGrade: [
        {text: "6-7", value:"6-7"},
        {text: "7-8", value:"7-8"},
        {text: "8-9", value:"8-9"},
        {text: "9-10", value:"9-10"},
      ],
      optionsAttendance: [
        {text: "Retko", value:"retko"},
        {text: "Povremeno", value:"povremeno"},
        {text: "Cesto", value:"cesto"},
        {text: "Redovno", value:"redovno"},
      ],
      formData: {
        gender: "",
        status: "",
        avg_grade: "",
        class_attendance: "",
        study_program_by_year_id: sessionStorage.getItem("spyid"),
      }
    }
  },
  methods: {
    submitData(e){
      e.preventDefault();
      console.log("Sending survey data:", this.formData);

      // fetch("http://127.0.0.1:8000/api/general-data", {
      //   method: "POST",
      //   body: JSON.stringify(this.formData),
      //   headers: {
      //     "Content-Type": "application/json",
      //     "mode": "no-cors",
      //     "Access-Control-Allow-Origin": "*",
      //   }
      // })
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