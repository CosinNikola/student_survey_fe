<template>
  <div>
    <h1>Profesori po predmetu</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Profesor</th>
        <th>Predmet</th>
      </tr>
      <tr v-for="teacher in this.teachersBySubjectsData" :key="teacher.id">
        <td>{{ teacher.id}}</td>
        <td>{{ `${teacher.teacher_vocation} ${teacher.teacher_last_name} ${teacher.teacher_first_name}` }}</td>
        <td> {{ teacher.subject_name }}</td>
        <td><DashboardButton type="edit" @click="editButtonClick(teacher)">Izmeni</DashboardButton></td>
        <td><DashboardButton type="error" @click="deleteTeacherBySubject(teacher.id)">Obriši</DashboardButton></td>
      </tr>
    </table>
    <DashboardButton class="w-150" @click="() => {
      this.createFormVisible = !this.createFormVisible;
    }">Kreiraj novi</DashboardButton>
    <TeacherBySubjectCreate v-if="createFormVisible"/>
    <TeacherBySubjectEdit :data="this.currentData" v-if="editFormVisible"/>
  </div>
</template>
<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";
import TeacherBySubjectCreate from "@/components/adminDashboard/TeachersManagement/TeacherBySubjectCreate.vue";
import TeacherBySubjectEdit from "@/components/adminDashboard/TeachersManagement/TeacherBySubjectEdit.vue";

export default {
  name: "TeacherSubject",
  components: {TeacherBySubjectEdit, TeacherBySubjectCreate, DashboardButton},
  data() {
    return {
      teachersBySubjectsData: [],
      createFormVisible: false,
      editFormVisible: false,
      teachersData: JSON.parse(localStorage.getItem("teachersData")),
      subjectsData: JSON.parse(localStorage.getItem("subjectsData")),
      currentData: {}
    }
  },
  mounted() {
    fetch("http://127.0.0.1:8000/api/teachers-by-subjects/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
        .then(res => res.json())
        .then(data => {
          this.teachersBySubjectsData = data;
        })
  },
  methods: {
    deleteTeacherBySubject(id) {
      if(id) {
        fetch("http://127.0.0.1:8000/api/teachers-by-subjects/" + id, {
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
    },
    editButtonClick(teacher) {
      console.log(teacher);
      this.editFormVisible = !this.editFormVisible;
      this.currentData = teacher;
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