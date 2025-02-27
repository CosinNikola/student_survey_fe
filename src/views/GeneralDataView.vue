<template>
  <SurveyContainer title="Opšti podaci">
    <GeneralDataForm />
  </SurveyContainer>
</template>

<script>
  import GeneralDataForm from "@/components/survey/generalData/GeneralDataForm.vue";
  import SurveyContainer from "@/components/survey/SurveyContainer.vue";

export default {
  name: "GeneralDataView",
  components: {
    GeneralDataForm,
    SurveyContainer,
  },
};
</script>


<style scoped>

</style>