<template>
  <div>
    <table>
      <tr>
        <th>Rbr.</th>
        <th>Korisničko ime</th>
        <th>Email adresa</th>
        <th>Role ID</th>
      </tr>
      <tr v-for="(user, i) in this.usersData" :key="user.id">
        <td>{{ i + 1 }}</td>
        <td>{{ user.name }}</td>
        <td> {{ user.email }}</td>
        <td> {{ (user.role_id === 1) ? "Administrator" : "Profesor"}}</td>
        <td><DashboardButton type="edit">Izmeni korisnika</DashboardButton></td>
        <td><DashboardButton type="error" v-if="!user.isFk" @click="this.deleteUser(user.id)">Obriši korisnika</DashboardButton></td>
      </tr>
    </table>
    <DashboardButton class="w-150" @click="() => {
      this.createFormVisible = !this.createFormVisible;
    }">Kreiraj novog</DashboardButton>
    <UserCreate v-if="this.createFormVisible"/>
  </div>
</template>
<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";
import UserCreate from "@/components/adminDashboard/Users/UserCreate.vue";

export default {
  name: "AllUsers",
  components: {DashboardButton, UserCreate},
  data() {
    return {
      usersData: [],
      createFormVisible: false
    }
  },
  methods: {
    deleteUser(id) {
      if(id) {
        fetch("http://127.0.0.1:8000/api/delete-user/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*",
          }
        })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              this.$router.go();
            });
      }
    }
  },
  mounted() {
    fetch("http://127.0.0.1:8000/api/get-all-users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
        "Access-Control-Allow-Origin": "*",
      }
    })
        .then(res => res.json())
        .then(data => {
          this.usersData = data;
        });
  },
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