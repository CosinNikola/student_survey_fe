<template>
  <div class="form-page">
    <h1>Kreiraj novog korisnika</h1>
    <form>
      <div class="form-group">
        <label class="form-label">Ime</label>
        <input type="text" class="form-input" v-model="this.formData.name">
      </div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input type="text" class="form-input" v-model="this.formData.email">
      </div><div class="form-group">
        <label class="form-label">Lozinka</label>
        <input type="text" class="form-input" v-model="this.formData.password">
      </div><div class="form-group">
        <label class="form-label">Potvrda lozinke</label>
        <input type="text" class="form-input" v-model="this.formData.password_confirmation">
      </div>
      <div class="form-group">
        <label class="form-label">Uloga</label>
        <select name="" id="" v-model="this.formData.role_id">
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
  name: "UserCreate",
  components: {DashboardButton},
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role_id: "",
        errorMessage: "",
        errorMessageToggle: ""
      }
    }
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();

      if(this.formData.name === "" || this.formData.email === "" || this.formData.password === "" || this.formData.password_confirmation === "" || this.role_id === "") {
        alert("Sva polja moraju biti popunjena!");
      }
      else {
        fetch("http://127.0.0.1:8000/api/register-user", {
          method: "POST",
          body: JSON.stringify(this.formData),
          headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*",
          }
        })
            .then(res => {
              if(res.status === 200) {
                location.reload();
              }
              else {
                this.errorMessage = "Greska pri kreiranju studijskog programa!";
                this.errorMessageToggle = true;
              }
            })
      }
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