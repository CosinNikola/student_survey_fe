<template>
  <div>
    <div class="form-container">
      <form class="form">
        <SurveyFormGroup
          :options="options"
          v-for="formGroupData in formGroupsData"
          :key="formGroupData.id"
          :id="formGroupData.id"
          :labelText="formGroupData.labelText"
          :name="formGroupData.name"
        />
        <FormButton value="Potvrdi" route="/subject-grade" @click="submitData"/>
      </form>
    </div>
  </div>
</template>
<script>

import FormButton from "@/components/survey/FormButton.vue";
import SurveyFormGroup from "@/components/survey/SurveyFormGroup.vue";

export default {
  name: "TextbooksQualityGradeForm",
  components: {
    SurveyFormGroup,
    FormButton,
  },
  computed: {
    formData() {
      return {
        availibility: this.$store.state.surveyData[0],
        coverage: this.$store.state.surveyData[1],
        subject_study_program_id: sessionStorage.getItem("sspid"),
      }
    }
  },
  methods: {
    submitData(e) {
      e.preventDefault();
      console.log("Textbooks grades:", this.formData);
      fetch("http://127.0.0.1:8000/api/textbooks-quality", {
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
          this.$store.commit("resetSurveyData");
        })
    }
  },
  data() {
    return {
      options: [
        { id: 0, text: "1", value: 1 },
        { id: 1, text: "2", value: 2 },
        { id: 2, text: "3", value: 3 },
        { id: 3, text: "4", value: 4 },
        { id: 4, text: "5", value: 5 },
      ],
      formGroupsData: [
        {id: 0, labelText: "Nivo dostupnosti neophodne literature", name: "availibility"},
        {id: 1, labelText: "Nivo pokrivenosti nastavnog programa datom literaturom", name: "coverage"},
      ]
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