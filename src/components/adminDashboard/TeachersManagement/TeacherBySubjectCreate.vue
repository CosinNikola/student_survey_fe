<template>
  <div class="form-page">
    <h1>Kreiraj novi zapis</h1>
    <form>
      <div class="form-group">
        <label class="form-label">Profesor </label>
        <select name="" id="" v-model="this.formData.teacher_id">
          <option v-for="teacher of this.teachersData" :value="teacher.id" :key="teacher.id">
            {{`${teacher.vocation} ${teacher.last_name} ${teacher.first_name}` }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Predmet</label>
        <select name="" id="" v-model="this.formData.subject_id">
          <option v-for="subject of this.subjectsData" :key="subject.id" :value="subject.id">{{ subject.name }}</option>
        </select>
      </div>
      <DashboardButton type="success" @click="(e) => {formSubmit(e)}">Potvrdi</DashboardButton>
    </form>
    <p class="errorMsgDisplay" v-if="this.errorMessageToggle">{{ this.errorMessage }}</p>
  </div>
</template>
<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";

export default {
  name: "TeacherBySubjectCreate",
  components: {DashboardButton},
  data() {
    return {
      teachersData: JSON.parse(localStorage.getItem("teachersData")),
      subjectsData: JSON.parse(localStorage.getItem("subjectsData")),
      formData: {
        teacher_id: "",
        subject_id: ""
      },
      errorMessage: "",
      errorMessageToggle: false
    }
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      if(this.formData.teacher_id === "" && this.formData.subject_id === "") {
        alert("Sva polja moraju biti popunjena!");
      }
      else {
        fetch("http://127.0.0.1:8000/api/teachers-by-subjects", {
          method: "POST",
          body: JSON.stringify(this.formData),
          headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*",
          }
        })
            .then(res => {
              if (res.status === 200) {
                location.reload();
              } else {
                this.errorMessage = "Greska pri kreiranju!";
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