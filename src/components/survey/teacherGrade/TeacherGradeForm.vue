<template>
  <div>
    <div class="form-container">
      <form class="form">
        <SurveyFormGroup :options="options" labelText="Jasno i razumljivo izlaganje" name="clarity_of_presentation"/>
        <SurveyFormGroup :options="options" labelText="Kvalitet primera" name="examples_quality"/>
        <SurveyFormGroup :options="options" labelText="Nastavnik odgovara na mejlove" name="teacher_answers_email"/>
        <SurveyFormGroup :options="options" labelText="Korektan odnos" name="correct_relationship"/>
        <SurveyFormGroup :options="options" labelText="Nivo objektivnosti pri ocenjivanju" name="objectivity"/>
        <SurveyFormGroup :options="options" labelText="Nastavnik objavljuje rezultate predispitnih aktivnosti" name="result_publication"/>
        <SurveyFormGroup :options="options" labelText="Nivo javnosti ispita" name="exam_public"/>
        <FormButton value="Potvrdi" route="/textbooks-grade"/>
      </form>
    </div>
  </div>
</template>
<script>

import FormButton from "@/components/survey/FormButton.vue";
import SurveyFormGroup from "@/components/survey/SurveyFormGroup.vue";

export default {
  name: "TeacherGradeForm",
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