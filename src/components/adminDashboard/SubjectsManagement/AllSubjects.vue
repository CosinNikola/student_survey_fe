<template>
  <div>
    <h1>Predmeti</h1>
    <table>
      <tr>
        <th>Rbr.</th>
        <th>Naziv</th>
        <th>Akronim</th>
      </tr>
      <tr v-for="(subject, i) in this.subjectsData" :key="subject.id">
        <td>{{ i + 1 }}</td>
        <td>{{ subject.name }}</td>
        <td> {{ subject.abbr }}</td>
        <td><DashboardButton type="edit" @click="editButtonClick(subject)">Izmeni studijski program</DashboardButton></td>
        <td><DashboardButton type="error" v-if="!subject.isFk" @click="deleteSubject(subject.id)">Obriši studijski program</DashboardButton></td>
      </tr>
    </table>
    <DashboardButton class="w-150" @click="() => {
      this.createFormVisible = !this.createFormVisible;
    }">Kreiraj novi</DashboardButton>
    <SubjectCreate v-if="createFormVisible" />
    <SubjectEdit v-if="editFormVisible" :name="this.subjectName" :abbr="this.subjectAbbr" :id="this.subjectId"/>
  </div>
</template>
<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";
import SubjectCreate from "@/components/adminDashboard/SubjectsManagement/SubjectCreate.vue";
import SubjectEdit from "@/components/adminDashboard/SubjectsManagement/SubjectEdit.vue";

export default {
  name: "AllSubjects",
  components: {SubjectCreate, SubjectEdit, DashboardButton},
  data() {
    return {
      subjectsData: [],
      subjectName: "",
      subjectAbbr: "",
      subjectId: "",
      createFormVisible: false,
      editFormVisible: false,
    }
  },
  methods: {
    fetchSubjects() {
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
            console.log(this.subjectsData);
          });
    },
    deleteSubject(id) {
      if(id) {
        fetch("http://127.0.0.1:8000/api/subjects/" + id, {
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
    editButtonClick(subject) {
      this.editFormVisible = !this.editFormVisible;
      this.subjectName = subject.name;
      this.subjectAbbr = subject.abbr;
      this.subjectId = subject.id;
    }
  },
  mounted(){
    this.fetchSubjects();
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