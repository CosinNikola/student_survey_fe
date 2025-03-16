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
          :prevData="previousFormData"
        />

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
      if(Object.keys(this.previousFormData).length > 0) {
        return this.previousFormData;
      }
      else {
      return {
        structure: this.$store.state.surveyData[0],
        knowledge_offering: this.$store.state.surveyData[1],
        meets_expectations: this.$store.state.surveyData[2],
        study_program_by_year_id: sessionStorage.getItem("spyid"),
      };
      }
    },
    currentRoute() {
     return this.$route.path.substring(1);
    }

  },
  methods: {
    submitData(e) {
      e.preventDefault();
      console.log("Study program eval:", this.formData);
      if(this.formData.structure && this.formData.knowledge_offering && this.formData.meets_expectations && this.formData.study_program_by_year_id) {
       localStorage.setItem(this.formDataLabel, JSON.stringify(this.formData));
       this.$router.push('/work-plan-realization');
      }
      else {
        alert("Morate popuniti sva polja!");
      }
      // fetch("http://127.0.0.1:8000/api/study-program-eval", {
      //   method: "POST",
      //   body: JSON.stringify(this.formData),
      //   headers: {
      //     "Content-Type": "application/json",
      //     "mode": "no-cors",
      //     "Access-Control-Allow-Origin": "*",
      //   }
      // })
      //   .then(res => res.json())
      //   .then(data => {
      //     console.log(data);
      //   })
      //     this.$store.commit("saveSurveyData", this.formData);
      //     this.$store.commit("saveSurveyName", "study-program-eval");
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
      ],

      formGroupsData: [
        {id: 0, labelText: "Struktura studijskog programa", name: "structure"},
        {id: 1, labelText: "Znanja koja nudi", name: "knowledge_offering"},
        {id: 2, labelText: "Ispunjenje ocekivanja", name: "meets_expectations"},
      ],

      previousFormData: {},

      formDataLabel: "studyProgramEval"
    }
  },
  beforeMount() {
    // console.log(this.$store.state.previousSurveyData);
    // console.log(this.currentRoute);
    // console.log(this.$store.state.previousSurveyName);
    // console.log(window.location.hash.substring(1));
    // if(this.currentRoute === this.$store.state.previousSurveyName) {
    //     this.previousFormData = this.$store.state.previousSurveyData;
    //     console.log(this.previousFormData);
    // }
    // else {
    //   this.previousFormData = [];
    // }
    if(localStorage.getItem(this.formDataLabel)) {
        this.previousFormData = JSON.parse(localStorage.getItem(this.formDataLabel));
    }
    else {
      this.previousFormData = {};
    }
    console.log(this.previousFormData);
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