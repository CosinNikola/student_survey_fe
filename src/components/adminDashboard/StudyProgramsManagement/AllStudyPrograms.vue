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
        <td><DashboardButton type="edit" @click="editButtonClick(studyProgram)">Izmeni studijski program</DashboardButton></td>
        <td><DashboardButton type="error" v-if="!studyProgram.isFk" @click="deleteStudyProgram(studyProgram.id)">Obriši studijski program</DashboardButton></td>
      </tr>
    </table>
    <DashboardButton class="w-150" @click="() => {
      this.createFormVisible = !this.createFormVisible;
    }">Kreiraj novi</DashboardButton>
    <StudyProgramCreate v-if="createFormVisible" :name="this.studyProgramName" :abbr="this.studyProgramAbbr" />
    <StudyProgramEdit v-if="editFormVisible" :name="this.studyProgramName" :abbr="this.studyProgramAbbr" :id="this.studyProgramId"/>
  </div>
</template>
<script>
import DashboardButton from "@/components/adminDashboard/DashboardButton.vue";
import StudyProgramCreate from "@/components/adminDashboard/StudyProgramsManagement/StudyProgramCreate.vue";
import StudyProgramEdit from "@/components/adminDashboard/StudyProgramsManagement/StudyProgramEdit.vue";

export default {
  name: "AllStudyPrograms",
  components: {StudyProgramCreate, DashboardButton, StudyProgramEdit },
  data() {
    return {
      studyProgramsData: [],
      studyProgramName: "",
      studyProgramAbbr: "",
      studyProgramId: "",
      createFormVisible: false,
      editFormVisible: false,
      componentKey: 0
    }
  },
  methods: {
    fetchStudyPrograms() {
      // const data = localStorage.getItem("studyProgramsData");
      // if (data) {
      //   this.studyProgramsData = JSON.parse(data);
      // }
      fetch("http://127.0.0.1:8000/api/study-programs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
          "Access-Control-Allow-Origin": "*",
        }
      })
          .then(res => res.json())
          .then(data => {
            this.studyProgramsData = data;
          });
    },
    deleteStudyProgram(id) {
      if(id) {
        fetch("http://127.0.0.1:8000/api/study-programs/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*",
          }
        })
            .then(res => res.json())
            .then(() => {
              window.location.reload();
            })
      }
    },
    editButtonClick(studyProgram) {
      this.editFormVisible = !this.editFormVisible;
      this.studyProgramName = studyProgram.name;
      this.studyProgramAbbr = studyProgram.abbr;
      this.studyProgramId = studyProgram.id;
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
//     fetch("http://127.0.0.1:8000/api/study-programs", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "mode": "no-cors",
//         "Access-Control-Allow-Origin": "*",
//       }
//     })
//         .then(res => res.json())
//         .then(data => {
//           localStorage.setItem("studyProgramsData", JSON.stringify(data));
//           this.studyProgramsData = JSON.parse(localStorage.getItem("studyProgramsData"));
//         });
// },
    this.fetchStudyPrograms();
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
.w-150 {
  width: 150px;
  margin-top: 20px;
}
</style>