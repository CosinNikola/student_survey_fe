<template>
  <div class="form-page">
    <h1>Izmeni predmet</h1>
    <form>
      <div class="form-group">
        <label class="form-label">Naziv</label>
        <input type="text" class="form-input" v-model="subjectName">
      </div>
      <div class="form-group">
        <label class="form-label">Akronim</label>
        <input type="text" class="form-input" v-model="subjectAbbr">
      </div>
      <DashboardButton type="success" @click="(e) => {formSubmit(e)}">Potvrdi</DashboardButton>
    </form>
    <p v-if="errorMessageToggle" class="errorMsgDisplay">{{ errorMessage }}</p>
  </div>
</template>
<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";

export default {
  name: "SubjectEdit",
  components: {DashboardButton},
  props: ["name", "abbr", "id"],
  data() {
    return {
      subjectName: this.name,
      subjectAbbr: this.abbr,
      subjectId: this.id,
      formData: {},
      errorMessageToggle: false,
      errorMessage: ""
    }
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      this.formData = {
        name: this.subjectName,
        abbr: this.subjectAbbr
      };
      fetch("http://127.0.0.1:8000/api/subjects/" + this.subjectId, {
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