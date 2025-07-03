<template>
  <div>
    <h1>Saradnici po predmetu</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Saradnik</th>
        <th>Predmet</th>
      </tr>
      <tr v-for="associate in this.associatesBySubjectsData" :key="associate.id">
        <td>{{ associate.id}}</td>
        <td>{{ `${(associate.associate_vocation) ? associate.associate_vocation : ""} ${associate.associate_last_name} ${associate.associate_first_name}` }}</td>
        <td> {{ associate.subject_name }}</td>
        <td><DashboardButton type="edit" @click="editButtonClick(associate)">Izmeni</DashboardButton></td>
        <td><DashboardButton type="error" @click="deleteAssociateBySubject(associate.id)">Obriši</DashboardButton></td>
      </tr>
    </table>
    <DashboardButton class="w-150" @click="() => {
      this.createFormVisible = !this.createFormVisible;
    }">Kreiraj novi</DashboardButton>
    <AssociateBySubjectCreate v-if="createFormVisible"/>
    <AssociateBySubjectEdit :data="this.currentData" v-if="editFormVisible"/>
  </div>
</template>
<script>
import AssociateBySubjectCreate from "@/components/adminDashboard/AssociatesManagement/AssociateBySubjectCreate.vue";
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";
import AssociateBySubjectEdit from "@/components/adminDashboard/AssociatesManagement/AssociateBySubjectEdit.vue";

export default {
  name: "AssociateBySubject",
  components: {AssociateBySubjectEdit, DashboardButton, AssociateBySubjectCreate},
  data() {
    return {
      associatesBySubjectsData: [],
      createFormVisible: false,
      editFormVisible: false,
      associatesData: JSON.parse(localStorage.getItem("associatesData")),
      subjectsData: JSON.parse(localStorage.getItem("subjectsData")),
      currentData: {}
    }
  },
  mounted() {
    fetch("http://127.0.0.1:8000/api/associates-by-subjects/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
        .then(res => res.json())
        .then(data => {
          this.associatesBySubjectsData = data;
        })
  },
  methods: {
    deleteAssociateBySubject(id) {
      if (id) {
        fetch("http://127.0.0.1:8000/api/associates-by-subjects/" + id, {
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