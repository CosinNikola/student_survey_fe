<template>
  <div>
    <h1>Predmeti po godini studija</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Naziv predmeta</th>
        <th>Naziv stud. programa</th>
        <th>God. studija</th>
      </tr>
      <tr v-for="subject in this.subjectsStudyProgramData" :key="subject.id">
        <td>{{ subject.id}}</td>
        <td>{{subject.subject_name }}</td>
        <td> {{ subject.study_program_name }}</td>
        <td> {{ subject.year_of_study }}</td>
        <td><DashboardButton type="edit">Izmeni predmet po godini</DashboardButton></td>
        <td><DashboardButton type="error" v-if="!subject.isFk" @click="deleteSubjectStudyProgram(subject.id)">Obriši predmet po godini</DashboardButton></td>
      </tr>
    </table>
    <DashboardButton class="w-150" @click="() => {
      this.createFormVisible = !this.createFormVisible;
    }">Kreiraj novi</DashboardButton>
    <SubjectsByYearCreate v-if="this.createFormVisible"/>
  </div>
</template>

<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";
import SubjectsByYearCreate from "@/components/adminDashboard/SubjectsManagement/SubjectsByYearCreate.vue";

export default {
  name: "SubjectsByYear",
  components: {DashboardButton, SubjectsByYearCreate},
  data() {
    return {
      subjectsStudyProgramData: [],
      createFormVisible: false
    }
  },
  mounted() {
    fetch("http://127.0.0.1:8000/api/subject-study-program/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
        .then(res => res.json())
        .then(data => {
          this.subjectsStudyProgramData = data;
        })
  },
  methods: {
    deleteSubjectStudyProgram(id) {
      if(id) {
        fetch("http://127.0.0.1:8000/api/subject-study-program/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*",
          }
        })
            .then(res => res.json())
            .then(() => {
              window.location.reload();
            })
      }
    }
  }
}
</script>


<style scoped>
table {
  border: 1px solid black;
}
th {
  border: 1px solid black;
}
td {
  border: 1px solid black;
  max-width: 200px;
  text-align: center;
  overflow: auto;
}
.w-150 {
  width: 150px;
  margin-top: 20px;
}
</style>