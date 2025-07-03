<template>
  <div class="form-page">
    <h1>Izmeni profesora</h1>
    <form>
      <div class="form-group">
        <label class="form-label">Zvanje</label>
        <input type="text" class="form-input" v-model="teacherVocation">
      </div>
      <div class="form-group">
        <label class="form-label">Prezime</label>
        <input type="text" class="form-input" v-model="teacherLastName">
      </div>
      <div class="form-group">
        <label class="form-label">Ime</label>
        <input type="text" class="form-input" v-model="teacherFirstName">
      </div>
      <DashboardButton type="success" @click="(e) => {formSubmit(e)}">Potvrdi</DashboardButton>
    </form>
    <p v-if="errorMessageToggle" class="errorMsgDisplay">{{ errorMessage }}</p>
  </div>
</template>
<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";

export default {
  name: "TeacherEdit",
  components: {DashboardButton},
  props: ['vocation', 'last_name', 'first_name', 'id'],
  data() {
    return {
      teacherVocation: this.vocation,
      teacherLastName: this.last_name,
      teacherFirstName: this.first_name,
      teacherId: this.id,
      errorMessageToggle: false,
      errorMessage: ""
    }
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      this.formData = {
        vocation: this.teacherVocation,
        last_name: this.teacherLastName,
        first_name: this.teacherFirstName
      };
      fetch("http://127.0.0.1:8000/api/teacher/" + this.teacherId, {
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
.form-input {
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
}

.form-page h1 {
  margin-top: 0;
}
.errorMsgDisplay {
  font-weight: bold;
  color: red;
}
</style>