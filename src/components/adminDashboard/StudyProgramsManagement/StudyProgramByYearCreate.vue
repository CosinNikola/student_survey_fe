<template>
  <div class="form-page">
    <h1>Kreiraj novi studijski program</h1>
    <form>
      <div class="form-group">
        <label class="form-label">Studijski program</label>
        <select name="" id="" v-model="studyProgramId">
          <option v-for="studyProgramByYear in this.studyProgramsData" :value="studyProgramByYear.id" :key="studyProgramByYear.id">{{studyProgramByYear.name}}</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Godina studija </label>
        <select name="" id="" v-model="yearOfStudy">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Broj studenata</label>
        <input type="text" class="form-input" v-model="noOfStudents">
      </div>
      <DashboardButton type="success" @click="(e) => {formSubmit(e)}">Potvrdi</DashboardButton>
    </form>
    <p v-if="errorMessageToggle" class="errorMsgDisplay">{{ errorMessage }}</p>
  </div>
</template>

<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";

export default {
  name: "StudyProgramByYearCreate",
  components: {DashboardButton},
  props: ['data'],
  data() {
    return {
      errorMessage: "",
      errorMessageToggle: false,
      studyProgramId: "",
      yearOfStudy: "",
      noOfStudents: "",
      studyProgramsData: []
    }
  },
  mounted() {
    this.studyProgramsData = JSON.parse(localStorage.getItem("studyProgramsData"));
    console.log(this.studyProgramsData);
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      if (this.studyProgramId === "" || this.yearOfStudy === "" || this.noOfStudents === 0 || this.noOfStudents === "") {
        alert("Sva polja moraju biti popunjena!");
      } else {
        this.formData = {
          study_program_id: Number(this.studyProgramId),
          year_of_study: Number(this.yearOfStudy),
          no_of_students: Number(this.noOfStudents)
        };
        console.log(this.formData);
        fetch("http://127.0.0.1:8000/api/study-programs-by-year", {
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