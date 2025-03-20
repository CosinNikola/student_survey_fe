<template>
  <div></div>
</template>


<script>
export default {
  name: "StartGeneralSurvey",
  created() {
    const subjectStudyProgramId = this.$route.params.sspid;
    const studyProgramByYearId = this.$route.params.spyid;

    sessionStorage.setItem("sspid", subjectStudyProgramId);
    sessionStorage.setItem("spyid", studyProgramByYearId);

    this.$router.push('/token-login-general');
    // this.$router.push({
    //   path: "/token-login",
    //   state: { subjectStudyProgramId , studyProgramByYearId }
    // })
  },
}
</script>



<style scoped>

</style>