<template>
  <div class="form-page">
    <h1>Promeni lozinku</h1>
    <form>
      <div class="form-group">
        <label class="form-label">Trenutna lozinka</label>
        <input type="password" class="form-input" v-model="formData.current_password">
      </div>
      <div class="form-group">
        <label class="form-label">Nova lozinka</label>
        <input type="password" class="form-input" v-model="formData.password">
      </div><div class="form-group">
      <label class="form-label">Potvrda nove lozinke</label>
      <input type="password" class="form-input" v-model="formData.password_confirmation">
    </div>
      <DashboardButton type="success" @click="(e) => {formSubmit(e)}">Potvrdi</DashboardButton>
    </form>
    <p v-if="errorMessageToggle" class="errorMsgDisplay">{{ errorMessage }}</p>
  </div>
</template>

<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";

export default {
  name: "ChangePasswordForm",
  components: {DashboardButton},
  data() {
    return {
      errorMessageToggle: false,
      errorMessage: "",
      formData: {
        current_password: "",
        password: "",
        password_confirmation: ""
      }
    }

  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      if (this.formData.password !== this.formData.password_confirmation) {
        this.errorMessage = 'Nova lozinka i potvrda se ne poklapaju.';
      }
      const token = localStorage.getItem('token');
      fetch("http://127.0.0.1:8000/api/change-password", {
        method: "POST",
        body: JSON.stringify(this.formData),
        headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
          "Access-Control-Allow-Origin": "*",
          'Authorization': `Bearer ${token}`
        }
      })
          .then(res => {
            if(res.status === 200) {
              location.reload();
            }
            else {
              this.errorMessage = "Greska pri promeni lozinke!";
              this.errorMessageToggle = true;
            }
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
  text-align: start;
}

.form-page h1 {
  margin-top: 0;
}
.errorMsgDisplay {
  font-weight: bold;
  color: red;
}
</style>