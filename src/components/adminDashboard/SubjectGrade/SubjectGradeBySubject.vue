<template>
  <div>
    <label for="">Odaberite predmet:</label>
    <select v-model="subjectId">
      <option v-for="subject in this.subjectsData" :value="subject.id" :key="subject.id">
        {{subject.name}}
      </option>
    </select>
    <button @click="submitData">Pretraži</button>
    <SurveyReportDataDisplay />
  </div>
</template>
<script>
import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";

export default {
  name: "SubjectGradeBySubject",
  components: { SurveyReportDataDisplay },
  props: ["data"],
  data() {
    return {
      subjectsData: [],
      subjectId: "",
      subjectGradeData: {}
    }
  },
  computed: {
    reportData() {
      return [];
    }
  },
  beforeMount() {
    fetch("http://127.0.0.1:8000/api/subjects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then(res => res.json())
      .then(data => {
        this.subjectsData = data;
      });
  },
  methods: {
    submitData(e) {
      e.preventDefault();
      if(this.subjectId !== "") {
        fetch("http://127.0.0.1:8000/api/subject-grade-by-subject?subject_id=" + this.subjectId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*",
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.subjectGradeData = data;
          });
      }

    }
  }
};
</script>


<style scoped>

</style>