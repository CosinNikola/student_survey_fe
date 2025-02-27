<template>
    <div>
        <h2>sspid: {{subjectStudyProgramId}}</h2>
        <h2>spyid: {{studyProgramByYearId}}</h2>
        <TokenLoginForm />
    </div>
</template>
<script>
import TokenLoginForm from '@/components/tokenLogin/TokenLoginForm.vue';

export default {
  name: "TokenLoginView",
  components: {
    TokenLoginForm,
  },
  data() {
    return {
      subjectStudyProgramId: null,
      studyProgramByYearId: null
    }
  },
  created() {
    this.subjectStudyProgramId = this.$route.state?.subjectStudyProgramId;
    this.studyProgramByYearId = this.$route.state?.studyProgramByYearId;
  }
};
</script>
<style scoped>
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 80vh;
    }
</style>