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
  },
  mounted() {
    fetch('http://127.0.0.1:8000/api/subject/' + sessionStorage.getItem('sspid'), {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('subjectData', JSON.stringify(data));
      })
    fetch('http://127.0.0.1:8000/api/study-program/' + sessionStorage.getItem('spyid'), {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('studyProgramData', JSON.stringify(data));
      })
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