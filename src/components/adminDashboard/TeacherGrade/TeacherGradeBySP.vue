<template>
  <div>
    <label for="">Odaberite studijski program: </label>
    <select v-model="studyProgramId">
      <option v-for="studyProgram in this.studyProgramsData" :value="studyProgram.id" :key="studyProgram.id">
        {{studyProgram.name}}
      </option>
    </select>
    <button @click="submitData">Pretraži</button>
    <SurveyReportDataDisplay v-for="(teacherGrade,i) in teacherGradeData" :data="teacherGrade" :dataLabels="dataLabels" :key="i" />
  </div>
</template>
<script>
import SurveyReportDataDisplay from "@/components/adminDashboard/SurveyReportDataDisplay.vue";

export default {
  name: "TeacherGradeBySP",
  components: { SurveyReportDataDisplay },
  props: ["data"],
  data() {
    return {
      studyProgramsData: this.$store.state.studyProgramsData,
      studyProgramId: "",
      teacherGradeData: {},
      dataLabels: ["Jasno i razumljivo izlaganje", "Kvalitet primera", "Nastavnik odgovara na mejlove", "Korektan odnos", "Nivo objektivnosti pri ocenjivanju", "Nastavnik objavljuje rezultate predispitnih aktivnosti", "Nivo javnosti ispita", "Studijski program", "Godina studija", "Ukupno anketa"]
    }
  },
  computed: {
    reportData() {
      return [];
    }
  },

  methods: {
    submitData(e) {
      e.preventDefault();
      if(this.studyProgramId !== "") {
        fetch("http://127.0.0.1:8000/api/teacher-quality-grade-by-sp?study_program_id=" + this.studyProgramId, {
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
            this.teacherGradeData = data;
            // fetch("http://127.0.0.1:8000/api/teacher-assessment-grade-by-sp?study_program_id=" + this.studyProgramId, {
            //   method: "GET",
            //   headers: {
            //     "Content-Type": "application/json",
            //     "mode": "no-cors",
            //     "Access-Control-Allow-Origin": "*",
            //   }
            // })
            //   .then(res => res.json())
            //   .then(data => {
            //     console.log(data);
            //     this.teacherGradeData.push(data);
            //   });

          });
      }

    }
  }
};
</script>


<style scoped>
label {
  font-weight: 500;
}
</style>