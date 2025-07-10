<template>
  <div class="form-page">
    <h1>Promena lozinke: {{ this.userName }}</h1>
    <form>
    <div class="form-group">
      <label class="form-label">Nova lozinka</label>
      <input type="password" class="form-input" v-model="this.formData.password">
    </div><div class="form-group">
    <label class="form-label">Potvrda lozinke</label>
    <input type="password" class="form-input" v-model="this.formData.password_confirmation">
  </div>
      <DashboardButton type="success" @click="(e) => {formSubmit(e)}">Potvrdi</DashboardButton>
    </form>
    <p v-if="this.errorMessageToggle" class="errorMsgDisplay">{{ errorMessage }}</p>
  </div>
</template>
<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";

export default {
  name: "PasswordChange",
  components: {DashboardButton},
  props: ['userId', 'userName'],
  data() {
    return {
      formData: {
        password: "",
        password_confirmation: "",
      },
      errorMessageToggle: false,
      errorMessage: ""
    }
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      if(this.formData.password === "" || this.formData.password_confirmation === "") {
        this.errorMessageToggle = true;
        this.errorMessage = "Sva polja moraju biti popunjena!";
      }
      else {


      if(this.formData.password === this.formData.password_confirmation) {
      fetch("http://127.0.0.1:8000/api/pw-change/" + this.userId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(this.formData)
      })
          .then(res => res.json())
          .then(() => {
            window.location.reload();
          })
      }
      else {
        this.errorMessageToggle = true;
        this.errorMessage = "Lozinke se ne podudaraju!";
      }
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
  width: 600px;
}

.form-page h1 {
  margin-top: 0;
}
.errorMsgDisplay {
  font-weight: bold;
  color: red;
}
</style>