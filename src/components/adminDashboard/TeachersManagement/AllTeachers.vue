<template>
  <div>
    <h1>Profesori</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Zvanje</th>
        <th>Prezime</th>
        <th>Ime</th>
        <th>user_id</th>
      </tr>
      <tr v-for="teacher in this.teachersData" :key="teacher.id">
        <td>{{ teacher.id }}</td>
        <td>{{ teacher.vocation }}</td>
        <td>{{ teacher.last_name }}</td>
        <td> {{ teacher.first_name }}</td>
        <td><DashboardButton type="edit" @click="editButtonClick(teacher)">Izmeni</DashboardButton></td>
        <td><DashboardButton type="error" v-if="!teacher.isFk" @click="this.deleteTeacher(teacher.id)">Obriši</DashboardButton></td>
      </tr>
    </table>
    <DashboardButton class="w-150" @click="() => {
      this.createFormVisible = !this.createFormVisible;
    }">Kreiraj novog</DashboardButton>
  </div>
  <TeacherCreate v-if="this.createFormVisible"/>
  <TeacherEdit v-if="this.editFormVisible" :vocation="this.teacherVocation" :first_name="this.teacherFirstName" :last_name="this.teacherLastName" :id="this.teacherId"/>
</template>
<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";
import TeacherCreate from "@/components/adminDashboard/TeachersManagement/TeacherCreate.vue";
import TeacherEdit from "@/components/adminDashboard/TeachersManagement/TeacherEdit.vue";

export default {
  name: "AllTeachers",
  components: {TeacherEdit, TeacherCreate, DashboardButton},
  data() {
    return {
      teachersData: [],
      teacherVocation: "",
      teacherLastName: "",
      teacherFirstName: "",
      teacherId: "",
      createFormVisible: false,
      editFormVisible: false,
    }
  },
  mounted() {
    fetch("http://127.0.0.1:8000/api/get-all-teachers", {
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
    editButtonClick(teacher) {
      this.editFormVisible = !this.editFormVisible;
      this.teacherVocation = teacher.vocation;
      this.teacherLastName = teacher.last_name;
      this.teacherFirstName = teacher.first_name;
      this.teacherId = teacher.id;
    },
    deleteTeacher(id) {
      if(id) {
        fetch("http://127.0.0.1:8000/api/teacher/" + id, {
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