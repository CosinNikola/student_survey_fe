<template>
  <div>
    <table>
      <tr>
        <th>Rbr.</th>
        <th>Naziv</th>
        <th>Akronim</th>
      </tr>
      <tr v-for="(studyProgram, i) in this.studyProgramsData" :key="studyProgram.id">
        <td>{{ i + 1 }}</td>
        <td>{{ studyProgram.name }}</td>
        <td> {{ studyProgram.abbr }}</td>
        <td><DashboardButton type="edit">Izmeni studijski program</DashboardButton></td>
        <td><DashboardButton type="error" v-if="!studyProgram.isFk">Obriši studijski program</DashboardButton></td>
      </tr>
    </table>
  </div>
</template>
<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";

export default {
  name: "AllStudyPrograms",
  components: {DashboardButton},
  data() {
    return {
      studyProgramsData: []
    }
  },
  methods: {
    deleteUser(id) {
      if(id) {
        fetch("http://127.0.0.1:8000/api/delete-user/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*",
          }
        })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              this.$router.go();
            });
      }
    }
  },
  mounted() {
  //   fetch("http://127.0.0.1:8000/api/get-all-study-programs", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "mode": "no-cors",
  //       "Access-Control-Allow-Origin": "*",
  //     }
  //   })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //         // this.studyProgramsData = data;
  //       });
  // },
    this.studyProgramsData = JSON.parse(localStorage.getItem("studyProgramsData"));
}
}
</script>

<style scoped>
table {
  border: 1px solid black;
}
th {
  border: 1px solid black;
}
td {
  border: 1px solid black;
  max-width: 200px;
  text-align: center;
  overflow: auto;
}
</style>