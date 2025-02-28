<template>
  <div>
    <div class="form-container">
      <form class="form">
        <SurveyFormGroup :options="options" labelText="Struktura studijskog programa" name="structure"/>
        <SurveyFormGroup :options="options" labelText="Znanja koja nudi" name="knowledgeOffering"/>
        <SurveyFormGroup :options="options" labelText="Ispunjenje ocekivanja" name="meetsExpectations"/>
        <FormButton value="Potvrdi" route="/work-plan-realization" @click="submitData"/>
      </form>
    </div>
  </div>
</template>
<script>

import FormButton from "@/components/survey/FormButton.vue";
import SurveyFormGroup from "@/components/survey/SurveyFormGroup.vue";

export default {
  name: "StudyProgramEvalForm",
  components: {
    SurveyFormGroup,
    FormButton,
  },
  computed: {
    formData() {
      return {
        structure: this.$store.state.surveyData[0],
        knowledge_offering: this.$store.state.surveyData[1],
        meets_expectations: this.$store.state.surveyData[2],
        study_program_by_year_id: sessionStorage.getItem("spyid"),
      };

    }
  },
  methods: {
    submitData(e) {
      e.preventDefault();
      console.log("Study program eval:", this.formData);
      this.$store.commit("resetSurveyData");
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