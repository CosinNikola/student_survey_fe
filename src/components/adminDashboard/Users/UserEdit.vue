<template>
  <div class="form-page">
    <h1>Izmeni podatke o korisniku</h1>
    <form>
      <div class="form-group">
        <label class="form-label">Ime</label>
        <input type="text" class="form-input" v-model="this.userName">
      </div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input type="text" class="form-input" v-model="this.userEmail">
      </div>
      <div class="form-group">
        <label class="form-label">Uloga</label>
        <select name="" id="" v-model="this.userRoleId">
          <option value="1">Administrator</option>
          <option value="2">Profesor</option>
        </select>
      </div>
      <DashboardButton type="success" @click="(e) => {formSubmit(e)}">Potvrdi</DashboardButton>
    </form>
    <p v-if="errorMessageToggle" class="errorMsgDisplay">{{ errorMessage }}</p>
  </div>
</template>

<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";

export default {
  name: "UserEdit",
  components: {DashboardButton},
  props: ['id','name', 'email', 'roleId'],
  data() {
    return {
      formData: {
        name: "",
        email: "",
        role_id: ""
      },
      userId: this.id,
      userName: this.name,
      userEmail: this.email,
      userRoleId: this.roleId,
      errorMessageToggle: false,
      errorMessage: ""
    }
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      this.formData = {
        name: this.userName,
        email: this.userEmail,
        role_id: this.userRoleId
      };
      console.log(this.formData, this.userId);
      fetch("http://127.0.0.1:8000/api/users/" + this.userId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.token}`
        },
        body: JSON.stringify(this.formData)
      })
          .then(res => res.json())
          .then(() => {
            window.location.reload();
          })
    }
  }

}
</script>


<style scoped>
.form-label {
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.form-input, select {
  border: 0;
  border-bottom: 1px solid gray;
  font-size: 15px;
  padding: 5px;
  width: 100%;
}
.form-group {
  margin-bottom: 15px;
}

.form-page {
  border: 1px solid lightgray;
  border-radius: 15px;
  padding: 20px;
  margin-top: 10px;
  box-shadow: 2px 2px 2px gray;
  width: 500px;
}

.form-page h1 {
  margin-top: 0;
}
.errorMsgDisplay {
  font-weight: bold;
  color: red;
}
</style>