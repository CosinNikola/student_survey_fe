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
        <FormButton value="Potvrdi" route="/teacher-grade" @click="submitData"/>
      </form>
    </div>
  </div>
</template>
<script>

import FormButton from "@/components/survey/FormButton.vue";
import SurveyFormGroup from "@/components/survey/SurveyFormGroup.vue";

export default {
  name: "SubjectGradeForm",
  components: {
    SurveyFormGroup,
    FormButton,
  },
  computed: {
    formData() {
      if (Object.keys(this.previousFormData).length > 0) {
        return this.previousFormData;
      } else {
        return {
          requirements_clarity: this.$store.state.surveyData[0],
          volume_of_material: this.$store.state.surveyData[1],
          new_knowledge: this.$store.state.surveyData[2],
          practical_dimension: this.$store.state.surveyData[3],
          useful_for_direction: this.$store.state.surveyData[4],
          quality_of_materials: this.$store.state.surveyData[5],
          subject_study_program_id: sessionStorage.getItem("sspid"),
        }
      }
    }

  },
  methods: {
    submitData(e) {
      e.preventDefault();
      console.log("Subject grades:", this.formData);
      if(this.formData.requirements_clarity && this.formData.volume_of_material &&
        this.formData.new_knowledge && this.formData.practical_dimension &&
        this.formData.useful_for_direction && this.formData.quality_of_materials &&
        this.formData.subject_study_program_id
      ) {
        localStorage.setItem(this.formDataLabel, JSON.stringify(this.formData));
        this.$router.push("/teacher-grade");
      }
      else {
        alert('Morate popuniti sva polja!');
      }
      // fetch("http://127.0.0.1:8000/api/subject-grade", {
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
      //     this.$store.commit("resetSurveyData");
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
        {id: 0, labelText: "Jasnoća zahteva na predmetu", name: "requirements_clarity"},
        {id: 1, labelText: "Obim gradiva je optimalan", name: "volume_of_material"},
        {id: 2, labelText: "Nudi nova znanja", name: "new_knowledge"},
        {id: 3, labelText: "Ima prakticnu primenu i omogucava razvoj vestina", name: "practical_dimension"},
        {id: 4, labelText: "Koristan je za usmerenje", name: "useful_for_direction"},
        {id: 5, labelText: "Ocena kvaliteta nastavnog materijala", name: "quality_of_materials"},
      ],
      previousFormData: {},
      formDataLabel: "subjectGrade"
    }
  },
  beforeMount() {
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