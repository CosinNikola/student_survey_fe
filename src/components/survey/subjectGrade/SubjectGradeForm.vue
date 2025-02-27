<template>
  <div>
    <div class="form-container">
      <form class="form">
        <SurveyFormGroup :options="options" labelText="Jasnoća zahteva na predmetu" name="requirements_clarity"/>
        <SurveyFormGroup :options="options" labelText="Obim gradiva je optimalan" name="volume_of_material"/>
        <SurveyFormGroup :options="options" labelText="Nudi nova znanja" name="new_knowledge"/>
        <SurveyFormGroup :options="options" labelText="Ima prakticnu primenu i omogucava razvoj vestina" name="pratical_dimension"/>
        <SurveyFormGroup :options="options" labelText="Koristan je za usmerenje" name="useful_for_direction"/>
        <SurveyFormGroup :options="options" labelText="Ocena kvaliteta nastavnog materijala" name="quality_of_materials"/>
        <FormButton value="Potvrdi" route="/teacher-grade"/>
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
  data() {
    return {
      options: [
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 },
        { text: "4", value: 4 },
        { text: "5", value: 5 },
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