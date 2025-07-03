<template>
  <div class="form-page">
    <h1>Kreiraj novog profesora</h1>
    <form>
      <div class="form-group">
        <label class="form-label">Zvanje</label>
        <input type="text" class="form-input" v-model="this.formData.vocation">
      </div>
      <div class="form-group">
        <label class="form-label">Prezime</label>
        <input type="text" class="form-input" v-model="this.formData.last_name">
      </div><div class="form-group">
      <label class="form-label">Ime</label>
      <input type="text" class="form-input" v-model="this.formData.first_name">
    </div>
      <DashboardButton type="success" @click="(e) => {formSubmit(e)}">Potvrdi</DashboardButton>
    </form>
    <p v-if="errorMessageToggle" class="errorMsgDisplay">{{ errorMessage }}</p>
  </div>
</template>
<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";

export default {
  name: "TeacherCreate",
  components: {DashboardButton},
  data(){
    return {
      formData: {
        vocation: "",
        last_name: "",
        first_name: ""
      },
      errorMessage: "",
      errorMessageToggle: false
    }
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();

      if(this.formData.vocation === "" || this.formData.last_name === "" || this.formData.first_name === "") {
        alert("Sva polja moraju biti popunjena!");
      }
      else {
        fetch("http://127.0.0.1:8000/api/teacher", {
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