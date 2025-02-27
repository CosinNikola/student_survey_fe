<template>
  <div>
    <div class="form-container">
      <form class="form">
        <SurveyFormGroup :options="options" labelText="Plan rada nudi neophodne informacije" name="plan_informing"/>
        <SurveyFormGroup :options="options" labelText="Ocena rasporeda nastave" name="teaching_schedule"/>
        <SurveyFormGroup :options="options" labelText="Ocena rasporeda konsultacija" name="consultation_schedule"/>
        <FormButton value="Potvrdi" route="/subject-grade"/>
      </form>
    </div>
  </div>
</template>
<script>

import FormButton from "@/components/survey/FormButton.vue";
import SurveyFormGroup from "@/components/survey/SurveyFormGroup.vue";

export default {
  name: "WorkPlanRealizationForm",
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