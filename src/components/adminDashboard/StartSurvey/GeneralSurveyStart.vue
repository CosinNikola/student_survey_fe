<template>
  <h1>Pokretanje opšte ankete</h1>
  <div class="emails-form">
    <form id="excel-upload-form" @submit="uploadEmails">
      <label for="">Uploadujte tabelu sa studentskim mejlovima: </label>
      <input type="file" id="excel-file" name="excel_file" required />
      <SurveyReportSubmitButton @click="(e) => {
        uploadEmails(e);
        this.uploadSuccess = !this.uploadSuccess;
      }">Pošalji</SurveyReportSubmitButton>
    </form>
    <div id="message">

    </div>
    <SurveyReportSubmitButton @click="tokensGenerate" v-if="uploadSuccess" :key="uploadSuccess">Generiši tokene</SurveyReportSubmitButton>
  </div>
  <div>
    <SurveyReportSelectMenu labelText="Odaberite studijski program" :data="studyProgramsData" @sendData="handleStudyProgram"/>
    <SurveyReportYearOfStudy @sendData="handleYearOfStudy"/>
    <div v-if="errorMsg" class="msg-error">
      <p>{{errorMsg}}</p>
    </div>
    <SurveyReportSubmitButton @click="this.submit">Pokreni</SurveyReportSubmitButton>
  </div>
</template>

<script>
import SurveyReportSelectMenu from "@/components/reports/SurveyReportSelectMenu.vue";
import SurveyReportYearOfStudy from "@/components/reports/SurveyReportYearOfStudy.vue";
import SurveyReportSubmitButton from "@/components/reports/SurveyReportSubmitButton.vue";

export default {
  name: "GeneralSurveyStart",
  components: {SurveyReportSubmitButton, SurveyReportYearOfStudy, SurveyReportSelectMenu},
  data() {
    return {
      studyProgramsData: JSON.parse(localStorage.getItem("studyProgramsData")),
      studyProgramId: "",
      yearOfStudy: "",
      uploadSuccess: false,
      studentsCount: 0,
      errorMsg: ""
    }
  },
  computed: {
  },
  methods: {
    handleStudyProgram(data) {
      this.studyProgramId = data;
    },
    handleYearOfStudy(data) {
      this.yearOfStudy = data;
    },
    uploadEmails(e) {
       e.preventDefault();  // Prevent the form from submitting normally

        let fileInput = document.getElementById('excel-file');
        let file = fileInput.files[0];  // Get the file

        if (!file) {
          document.getElementById('message').innerText = 'Please select a file.';
          return;
        }

        // Create FormData to send file
        let formData = new FormData();
        formData.append('excel_file', file);
        // this.uploadSuccess = true;


        // Send the file via Fetch API (AJAX)
        fetch("http://127.0.0.1:8000/api/import", {
          method: 'POST',
          body: formData,
          headers: {
            'X-CSRF-TOKEN': '{{ csrf_token() }}',  // Include CSRF token for Laravel security
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
              document.getElementById('message').innerHTML = "<p>Greška pri slanju adresa!</p>";
              document.getElementById('message').className = "msg-error";
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
        }
      })
          .then(res => res.json())
          .then(data => console.log(data))
    },
    submit(e) {
      e.preventDefault();
      fetch("http://127.0.0.1:8000/api/send-tokens-general?study_program_id="+this.studyProgramId+"&year_of_study="+this.yearOfStudy, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
          "Access-Control-Allow-Origin": "*",
        }
      })
          .then(res => {
            if(res.status !== 200) {
              this.errorMsg = "Greska pri pokretanju ankete!";
            }
          }
          )
      .then(data => console.log(data.status))
               }

    },
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