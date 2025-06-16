<template>
  <div>
    <h1>Studijski programi po godini studija</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Naziv</th>
        <th>Akronim</th>
        <th>God. studija</th>
        <th>Broj studenata</th>
      </tr>
      <tr v-for="studyProgram in this.studyProgramsByYearData" :key="studyProgram.id">
        <td>{{ studyProgram.id}}</td>
        <td>{{ studyProgram.name }}</td>
        <td> {{ studyProgram.abbr }}</td>
        <td> {{ studyProgram.year_of_study }}</td>
        <td> {{ studyProgram.no_of_students }}</td>
        <td><DashboardButton type="edit" @click="editButtonClick(studyProgram)">Izmeni studijski program</DashboardButton></td>
        <td><DashboardButton type="error" v-if="!studyProgram.isFk" @click="deleteStudyProgramByYear(studyProgram.id)">Obriši studijski program</DashboardButton></td>
      </tr>
    </table>
    <DashboardButton class="w-150" @click="() => {
      this.createFormVisible = !this.createFormVisible;
    }">Kreiraj novi</DashboardButton>
  <StudyProgramByYearCreate v-if="createFormVisible" :data = "studyProgramsByYearData"/>
  </div>
</template>

<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";
import StudyProgramByYearCreate from "@/components/adminDashboard/StudyProgramsManagement/StudyProgramByYearCreate.vue";

export default {
  name: "StudyProgramsByYear",
  components: {StudyProgramByYearCreate, DashboardButton},
  data() {
    return {
      studyProgramsByYearData: [],
      createFormVisible: false,
    }
  },
  mounted() {
    fetch("http://127.0.0.1:8000/api/study-programs-by-year/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
        .then(res => res.json())
        .then(data => {
          this.studyProgramsByYearData = data;
        })
  },
  methods: {
    deleteStudyProgramByYear(id) {
      if(id) {
        fetch("http://127.0.0.1:8000/api/study-programs-by-year/" + id, {
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