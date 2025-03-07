<template>
  <SurveyContainer title="Kraj ankete!">
    <FinalPage />
  </SurveyContainer>
</template>

<script>
import SurveyContainer from "@/components/survey/SurveyContainer.vue";
import FinalPage from "@/components/survey/finalPage/FinalPage.vue";
export default {
  name: "FinalPageView",
  components: {
    SurveyContainer,
    FinalPage
  }
};
</script>


<style scoped>

</style>