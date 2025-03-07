<template>
  <div>
    <div class="form-container">
      <form class="form">
        <SurveyFormGroup
          :options="options"
          v-for="formGroupData in formGroupsData"
          :key="formGroupData.id"
          :id="formGroupData.id"
          :labelText="formGroupData.labelText"
          :name="formGroupData.name"
          :prevData="previousFormData"
        />
        <FormButton value="Potvrdi" route="/survey-end" @click="submitData"/>
      </form>
    </div>
  </div>
</template>
<script>

import FormButton from "@/components/survey/FormButton.vue";
import SurveyFormGroup from "@/components/survey/SurveyFormGroup.vue";

export default {
  name: "TextbooksQualityGradeForm",
  components: {
    SurveyFormGroup,
    FormButton,
  },
  computed: {
    formData() {
      if(Object.keys(this.previousFormData).length > 0) {
        return this.previousFormData;
      }
      else {
        return {
          availibility: this.$store.state.surveyData[0],
          coverage: this.$store.state.surveyData[1],
          subject_study_program_id: sessionStorage.getItem("sspid"),
        }
      }
    }
  },
  methods: {
    submitData(e) {
      e.preventDefault();
      console.log("Textbooks grades:", this.formData);
      if(this.formData.availibility && this.formData.coverage && this.formData.subject_study_program_id) {
      localStorage.setItem(this.formDataLabel, JSON.stringify(this.formData));
      this.$router.push("/survey-end");this.textbooksQualityGrade = JSON.parse(localStorage.getItem("textbooksQualityGrade"));
      }
      else {
        alert('Morate popuniti sva polja!');
      }
      if(this.generalData && this.studyProgramEval && this.workPlanRealization && this.subjectGrade && this.teacherQuality && this.teacherAssessment && this.associateQuality && this.associateAssessment && this.textbooksQualityGrade)
      {
        fetch("http://127.0.0.1:8000/api/general-data", {
          method: "POST",
          body: JSON.stringify(this.generalData),
          headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*",
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            fetch("http://127.0.0.1:8000/api/study-program-eval", {
              method: "POST",
              body: JSON.stringify(this.studyProgramEval),
              headers: {
                "Content-Type": "application/json",
                "mode": "no-cors",
                "Access-Control-Allow-Origin": "*",
              }
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                fetch("http://127.0.0.1:8000/api/work-plan-realization", {
                  method: "POST",
                  body: JSON.stringify(this.workPlanRealization),
                  headers: {
                    "Content-Type": "application/json",
                    "mode": "no-cors",
                    "Access-Control-Allow-Origin": "*",
                  }
                })
                  .then(res => res.json())
                  .then(data => {
                    console.log(data);
                    fetch("http://127.0.0.1:8000/api/subject-grade", {
                      method: "POST",
                      body: JSON.stringify(this.subjectGrade),
                      headers: {
                        "Content-Type": "application/json",
                        "mode": "no-cors",
                        "Access-Control-Allow-Origin": "*",
                      }
                    })
                      .then(res => res.json())
                      .then(data => {
                        console.log(data);
                        fetch("http://127.0.0.1:8000/api/teacher-quality", {
                          method: "POST",
                          body: JSON.stringify(this.teacherQuality),
                          headers: {
                            "Content-Type": "application/json",
                            "mode": "no-cors",
                            "Access-Control-Allow-Origin": "*",
                          }
                        })
                          .then(res => res.json())
                          .then(data => {
                            console.log(data);
                          });
                        fetch("http://127.0.0.1:8000/api/teacher-assessment", {
                          method: "POST",
                          body: JSON.stringify(this.teacherAssessment),
                          headers: {
                            "Content-Type": "application/json",
                            "mode": "no-cors",
                            "Access-Control-Allow-Origin": "*",
                          }
                        })
                          .then(res => res.json())
                          .then(data => {
                            console.log(data);
                            fetch("http://127.0.0.1:8000/api/associate-quality", {
                              method: "POST",
                              body: JSON.stringify(this.associateQuality),
                              headers: {
                                "Content-Type": "application/json",
                                "mode": "no-cors",
                                "Access-Control-Allow-Origin": "*",
                              }
                            })
                              .then(res => res.json())
                              .then(data => {
                                console.log(data);
                                fetch("http://127.0.0.1:8000/api/associate-assessment", {
                                  method: "POST",
                                  body: JSON.stringify(this.associateAssessment),
                                  headers: {
                                    "Content-Type": "application/json",
                                    "mode": "no-cors",
                                    "Access-Control-Allow-Origin": "*",
                                  }
                                })
                                  .then(res => res.json())
                                  .then(data => {
                                    console.log(data);
                                    if(this.textbooksQualityGrade != null) {
                                    fetch("http://127.0.0.1:8000/api/textbooks-quality", {
                                      method: "POST",
                                      body: JSON.stringify(this.textbooksQualityGrade),
                                      headers: {
                                        "Content-Type": "application/json",
                                        "mode": "no-cors",
                                        "Access-Control-Allow-Origin": "*",
                                      }
                                    })
                                      .then(res => res.json())
                                      .then(data => {
                                        console.log(data);
                                      })
                                    }
                                  })
                              })
                          });
                      });
                  });
              });
          });
      }
      else {
        console.error("Survey unsuccessful!");
      }
      }
  },
  data() {
    return {
      options: [
        { id: 0, text: "1", value: 1 },
        { id: 1, text: "2", value: 2 },
        { id: 2, text: "3", value: 3 },
        { id: 3, text: "4", value: 4 },
        { id: 4, text: "5", value: 5 },
      ],
      formGroupsData: [
        {id: 0, labelText: "Nivo dostupnosti neophodne literature", name: "availibility"},
        {id: 1, labelText: "Nivo pokrivenosti nastavnog programa datom literaturom", name: "coverage"},
      ],
      previousFormData: {},
      formDataLabel: "textbooksQualityGrade",
      generalData: JSON.parse(localStorage.getItem("generalData")),
      studyProgramEval: JSON.parse(localStorage.getItem("studyProgramEval")),
      workPlanRealization: JSON.parse(localStorage.getItem("workPlanRealization")),
      subjectGrade: JSON.parse(localStorage.getItem("subjectGrade")),
      teacherQuality: JSON.parse(localStorage.getItem("teacherQuality")),
      teacherAssessment: JSON.parse(localStorage.getItem("teacherAssessment")),
      associateQuality: JSON.parse(localStorage.getItem("associateQuality")),
      associateAssessment: JSON.parse(localStorage.getItem("associateAssessment")),
      textbooksQualityGrade: JSON.parse(localStorage.getItem("textbooksQualityGrade")),
    }
  },
  beforeMount() {
    if(localStorage.getItem(this.formDataLabel)) {
      this.previousFormData = JSON.parse(localStorage.getItem(this.formDataLabel));
    }
    else {
      this.previousFormData = {};
    }
    console.log(this.previousFormData);
  }
};
</script>

<style scoped>
.form {
  text-align: left;
  width: 100%;
}
.form-container {
  font-weight: bold;
  color: rgb(50,50,50);
  width: 100%;
}

</style>