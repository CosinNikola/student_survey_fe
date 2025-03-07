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

        <FormButton value="Potvrdi" :route="route" @click="submitData"/>
      </form>
    </div>
  </div>
</template>
<script>

import FormButton from "@/components/survey/FormButton.vue";
import SurveyFormGroup from "@/components/survey/SurveyFormGroup.vue";

export default {
  name: "TeacherGradeForm",
  components: {
    SurveyFormGroup,
    FormButton,
  },
  props: ["type"],
  computed: {
    formDataQuality() {
      if(Object.keys(this.previousFormData).length > 0) {
        return {
          clarity_of_presentation: this.previousFormData.clarity_of_presentation,
          examples_quality: this.previousFormData.examples_quality,
          teacher_answers_email: this.previousFormData.teacher_answers_email,
          correct_relationship: this.previousFormData.correct_relationship,
          subject: this.previousFormData.subject_study_program_id,
        }
      }
      else {

      return {
        clarity_of_presentation: this.$store.state.surveyData[0],
        examples_quality: this.$store.state.surveyData[1],
        teacher_answers_email: this.$store.state.surveyData[2],
        correct_relationship: this.$store.state.surveyData[3],
        subject_study_program_id: sessionStorage.getItem("sspid"),
      }
      }
    },
    formDataAssessment() {
      if(Object.keys(this.previousFormData).length > 0) {
        return {
          objectivity: this.previousFormData.objectivity,
          results_publication: this.previousFormData.results_publication,
          exam_public: this.previousFormData.exam_public,
          subject_study_program_id: this.previousFormData.subject_study_program_id,
        }
      }
      else {
      return {
        objectivity: this.$store.state.surveyData[4],
        results_publication: this.$store.state.surveyData[5],
        exam_public: this.$store.state.surveyData[6],
        subject_study_program_id: sessionStorage.getItem("sspid"),
      }
      }
    }
  },
  methods: {
    submitData(e) {
      e.preventDefault();
      // console.log("Teacher quality grades:", this.formDataQuality);
      // console.log("Teacher assessment grades: ", this.formDataAssessment);
      if(this.formDataAssessment.objectivity && this.formDataAssessment.results_publication && this.formDataAssessment.exam_public && this.formDataAssessment.subject_study_program_id
      && this.formDataQuality.clarity_of_presentation && this.formDataQuality.examples_quality && this.formDataQuality.teacher_answers_email && this.formDataQuality.correct_relationship && this.formDataQuality.subject_study_program_id) {
        localStorage.setItem(this.formDataLabels[0], JSON.stringify(this.formDataQuality));
        localStorage.setItem(this.formDataLabels[1], JSON.stringify(this.formDataAssessment));
        this.$router.push(this.route);
      }
      else {
        alert('Morate popuniti sva polja!');
      }
      // fetch("http://127.0.0.1:8000/api/teacher-quality", {
      //   method: "POST",
      //   body: JSON.stringify(this.formDataQuality),
      //   headers: {
      //     "Content-Type": "application/json",
      //     "mode": "no-cors",
      //     "Access-Control-Allow-Origin": "*",
      //   }
      // })
      //   .then(res => res.json())
      //   .then(data => {
      //     console.log(data);
      //
      //     fetch("http://127.0.0.1:8000/api/teacher-assessment", {
      //       method: "POST",
      //       body: JSON.stringify(this.formDataAssessment),
      //       headers: {
      //         "Content-Type": "application/json",
      //         "mode": "no-cors",
      //         "Access-Control-Allow-Origin": "*",
      //       }
      //     })
      //       .then(res => res.json())
      //       .then(data => {
      //         console.log(data);
      //       })
      //   })
             this.$store.commit("resetSurveyData");
    }
  },
  data() {
    return {
      options: [
        { id: 0, text: "1", value: 1 },
        { id: 1,text: "2", value: 2 },
        { id: 2,text: "3", value: 3 },
        { id: 3,text: "4", value: 4 },
        { id: 4,text: "5", value: 5 },
      ],
      route: (this.type === "teacher") ? "/associate-grade" : "/textbooks-grade",
      formGroupsData: [
        {id: 0, labelText: "Jasno i razumljivo izlaganje", name: "clarity_of_presentation"},
        {id: 1, labelText: "Kvalitet primera", name: "examples_quality"},
        {id: 2, labelText: "Nastavnik odgovara na mejlove", name: "teacher_answers_email"},
        {id: 3, labelText: "Korektan odnos", name: "correct_relationship"},
        {id: 4, labelText: "Nivo objektivnosti pri ocenjivanju", name: "objectivity"},
        {id: 5, labelText: "Nastavnik objavljuje rezultate predispitnih aktivnosti", name: "results_publication"},
        {id: 6, labelText: "Nivo javnosti ispita", name: "exam_public"},
      ],
      previousFormData: {},
      formDataLabels: (this.type === "teacher")? ["teacherQuality", "teacherAssessment"] : ["associateQuality", "associateAssessment"]
    }
  },
  beforeMount() {
    if(localStorage.getItem(this.formDataLabels[0]) && localStorage.getItem(this.formDataLabels[1])) {
      let previousFormData1 = JSON.parse(localStorage.getItem(this.formDataLabels[0]));
      let previousFormData2 = JSON.parse(localStorage.getItem(this.formDataLabels[1]));
      this.previousFormData = {
        ...previousFormData1,
        ...previousFormData2,
      };
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