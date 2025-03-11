<template>
  <div>
    <label for="">Odaberite predmet:</label>
    <select v-model="teacherId">
      <option v-for="teacher in this.teachersData" :value="teacher.id" :key="teacher.id">
       {{teacher.vocation}} {{teacher.last_name}} {{teacher.first_name}}
      </option>
    </select>
    <button @click="submitData">Pretraži</button>
    <SurveyReportDataDisplay />
  </div>
</template>
<script>
import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";

export default {
  name: "SubjectGradeByTeacher",
  components: { SurveyReportDataDisplay },
  props: ["data"],
  data() {
    return {
      teachersData: [],
      teacherId: "",
      subjectGradeData: {}
    }
  },
  computed: {
    reportData() {
      return [];
    }
  },
  beforeMount() {
    fetch("http://127.0.0.1:8000/api/teachers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then(res => res.json())
      .then(data => {
        this.teachersData = data;
      });
  },
  methods: {
    submitData(e) {
      e.preventDefault();
      if(this.teacherId !== "") {
        fetch("http://127.0.0.1:8000/api/subject-grade-by-teacher?teacher_id=" + this.teacherId, {
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