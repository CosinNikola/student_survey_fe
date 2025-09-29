<template>
  <h1>Pokretanje ankete o predmetu</h1>
  <div class="emails-form">
    <form id="excel-upload-form" @submit="uploadEmails">
      <label for="">Uploadujte tabelu sa studentskim mejlovima: </label>
      <input type="file" id="excel-file" name="excel_file" required />
      <SurveyReportSubmitButton @click="(e) => {
        uploadEmails(e);
        this.uploadSuccess = !this.uploadSuccess;
      }">Pošalji</SurveyReportSubmitButton>
    </form>
    <div id="message" v-if="tokenMessage" :class="(tokensGenerateSuccess) ? 'msg-success' : 'msg-error'">
      <p>{{tokenMessage}}</p>
    </div>
    <SurveyReportSubmitButton @click="tokensGenerate" v-if="uploadSuccess" :key="uploadSuccess">Generiši tokene</SurveyReportSubmitButton>
  </div>
  <div>
    <SurveyReportSelectMenu labelText="Odaberite studijski program" :data="studyProgramsData" @sendData="handleStudyProgram"/>
    <SurveyReportYearOfStudy @sendData="handleYearOfStudy"/>
    <SurveyReportSelectMenu labelText="Odaberite predmet" :data="subjectsData" @sendData="handleSentData"/>
    <div v-if="errorMsg" class="msg-error">
      <p>{{errorMsg}}</p>
    </div><div v-if="surveyMsg" class="msg-success">
      <p>{{surveyMsg}}</p>
    </div>
    <SurveyReportSubmitButton @click="submit">Pokreni</SurveyReportSubmitButton>
  </div>
</template>
<script>
import SurveyReportSubmitButton from "@/components/reports/SurveyReportSubmitButton.vue";
import SurveyReportSelectMenu from "@/components/reports/SurveyReportSelectMenu.vue";
import SurveyReportYearOfStudy from "@/components/reports/SurveyReportYearOfStudy.vue";

export default {
  name: "SubjectSurveyStart",
  components: {SurveyReportYearOfStudy, SurveyReportSelectMenu, SurveyReportSubmitButton},
  data() {
    return {
      studyProgramsData: JSON.parse(localStorage.getItem("studyProgramsData")),
      subjectsData:  JSON.parse(localStorage.getItem("subjectsData")),
      studyProgramId: "",
      yearOfStudy: "",
      subjectId: null,
      uploadSuccess: false,
      studentsCount: 0,
      errorMsg: "",
      surveyMsg: "",
      surveyStartSuccess: false,
      tokenMessage: "",
      tokensGenerateSuccess: false,
      token: localStorage.getItem("token"),
    }
  },
  methods: {
    handleStudyProgram(data) {
      this.studyProgramId = data;
    },
    handleYearOfStudy(data) {
      this.yearOfStudy = data;
    },
    handleSentData(data) {
      this.subjectId = data;
    },
    uploadEmails(e) {
      e.preventDefault();

      let fileInput = document.getElementById('excel-file');
      let file = fileInput.files[0];

      if (!file) {
        document.getElementById('message').innerText = 'Please select a file.';
        return;
      }

      let formData = new FormData();
      formData.append('excel_file', file);


      fetch("http://127.0.0.1:8000/api/import", {
        method: 'POST',
        body: formData,
        headers: {
          'X-CSRF-TOKEN': '{{ csrf_token() }}',
          "Authorization": `Bearer ${this.token}`
        }
      })
          .then(response => response.json())
          .then(data => {
            if (data.message) {
              document.getElementById('message').innerText = data.message;
            }
            else {
              for (const row of data) {
                console.log(row);
              }
              this.studentsCount = data.length;
              console.log(this.studentsCount);
              document.getElementById('message').className = "msg-success";
            }
          })
          .catch(error => {
            console.log(error);
          });
    },
    tokensGenerate(e) {
      e.preventDefault();
      console.log(this.studentsCount);
      fetch("http://127.0.0.1:8000/api/generate-tokens?count="+this.studentsCount, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
          "Access-Control-Allow-Origin": "*",
          "Authorization": `Bearer ${this.token}`
        }
      })
          .then(res => {
            if(res.status === 200) {
              this.tokenMessage = "Tokeni uspešno generisani!";
              this.tokensGenerateSuccess = true;
            }
          })
          .then(data => console.log(data))
    },
    submit(e) {
      e.preventDefault();
      fetch("http://127.0.0.1:8000/api/send-tokens?study_program_id="+this.studyProgramId+"&year_of_study="+this.yearOfStudy+"&subject_id="+this.subjectId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
          "Access-Control-Allow-Origin": "*",
          "Authorization": `Bearer ${this.token}`
        }
      })
          .then(res => {
                if(res.status !== 200) {
                  this.errorMsg = "Greska pri pokretanju ankete!";
                }
                else {
                  this.surveyMsg = "Anketa uspešno pokrenuta!";
                  this.surveyStartSuccess = true;
                }
              }
          )
          .then(data => console.log(data))
           }

  }
}
</script>


<style scoped>
.emails-form {
  margin-bottom: 15px;
}
.msg-success {
  color: green;
  font-weight: bold;
}

.msg-error {
  color: red;
  font-weight: bold;
}
</style>