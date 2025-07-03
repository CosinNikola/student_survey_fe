<template>
  <div>
    <h1>Saradnici</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Zvanje</th>
        <th>Prezime</th>
        <th>Ime</th>
      </tr>
      <tr v-for="associate in this.associatesData" :key="associate.id">
        <td>{{ associate.id }}</td>
        <td>{{ (associate.vocation) ? associate.vocation : "/" }}</td>
        <td>{{ associate.last_name }}</td>
        <td> {{ associate.first_name }}</td>
        <td><DashboardButton type="edit" @click="editButtonClick(associate)">Izmeni</DashboardButton></td>
        <td><DashboardButton type="error" v-if="!associate.isFk" @click="this.deleteAssociate(associate.id)">Obriši</DashboardButton></td>
      </tr>
    </table>
    <DashboardButton class="w-150" @click="() => {
      this.createFormVisible = !this.createFormVisible;
    }">Kreiraj novog</DashboardButton>
  </div>
  <AssociateCreate v-if="this.createFormVisible"/>
  <AssociateEdit v-if="this.editFormVisible" :vocation="associateVocation" :last_name="associateLastName" :first_name="associateFirstName" :id="associateId"/>
</template>
<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";
import AssociateCreate from "@/components/adminDashboard/AssociatesManagement/AssociateCreate.vue";
import AssociateEdit from "@/components/adminDashboard/AssociatesManagement/AssociateEdit.vue";

export default {
  name: "AllAssociates",
  components: {AssociateEdit, AssociateCreate, DashboardButton},
  data() {
    return {
      associatesData: [],
      associateVocation: "",
      associateLastName: "",
      associateFirstName: "",
      associateId: "",
      createFormVisible: false,
      editFormVisible: false,
    }
  },
  mounted() {
    fetch("http://127.0.0.1:8000/api/associates", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
        .then(res => res.json())
        .then(data => {
          this.associatesData = data;
        });
  },
  methods: {
    deleteAssociate(id) {
      if(id) {
        fetch("http://127.0.0.1:8000/api/associates/" + id, {
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
    editButtonClick(associate) {
      this.editFormVisible = !this.editFormVisible;
      this.associateVocation = associate.vocation;
      this.associateLastName = associate.last_name;
      this.associateFirstName = associate.first_name;
      this.associateId = associate.id;
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