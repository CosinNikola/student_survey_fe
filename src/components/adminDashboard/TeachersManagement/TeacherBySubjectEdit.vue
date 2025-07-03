<template>
  <div class="form-page">
    <h1>Izmeni zapis</h1>
    <form>
      <div class="form-group">
        <label class="form-label">Profesor </label>
        <select name="" id="" v-model="this.teacherId">
          <option v-for="teacher of this.teachersData" :value="teacher.id" :key="teacher.id">
            {{`${teacher.vocation} ${teacher.last_name} ${teacher.first_name}` }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Predmet</label>
        <select name="" id="" v-model="this.subjectId">
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
  name: "TeacherBySubjectEdit",
  components: {DashboardButton},
  props: ['data'],
  data() {
    return {
      errorMessage: "",
      errorMessageToggle: false,
      teachersData: JSON.parse(localStorage.getItem("teachersData")),
      subjectsData: JSON.parse(localStorage.getItem("subjectsData")),
      prevData: this.data,
      teacherSubjectId: this.data.id,
      teacherId: this.data.teacher_id,
      subjectId: this.data.subject_id,
      formData: {
        teacher_id: "",
        subject_id: ""
      }
    }
  },
  mounted() {
    console.log(this.data);
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      this.formData = {
        teacher_id: this.teacherId,
        subject_id: this.subjectId
      };
      fetch("http://127.0.0.1:8000/api/teachers-by-subjects/" + this.teacherSubjectId, {
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