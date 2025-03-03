import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

const store = createStore({
  state() {
    return {
      generalData: {
        gender: "",
        status: "",
        avg_grade: "",
        class_attendance: "",
        study_program_by_year_id: 0,
      },
      generalDataGender: "",
      generalAvgGrade: "",
      generalStatus: "",
      generalClassAttendance: "",
      generalSpyid: 0,

      surveyData: [],
      previousSurveyData: [],
      previousSurveyName: "",

      studyProgramEval: {
        structure: 0,
        knowledge_offering: 0,
        meets_expectations: 0,
        study_program_by_year_id: 0
      }
    }
  },
  mutations: {
    setGeneralData(state, generalData) {
      state.generalData = generalData;
    },
    setGeneralDataGender(state, payload) {
      state.generalDataGender = payload;
    },
    setGeneralDataAvgGrade(state, generalDataAvgGrade) {
      state.generalDataAvgGrade = generalDataAvgGrade;
    },
    setGeneralDataStatus(state, generalDataStatus) {
      state.generalDataStatus = generalDataStatus;
    },
    setGeneralDataClassAttendance(state, generalDataClassAttendance) {
      state.generalDataClassAttendance = generalDataClassAttendance;
    },
    setGeneralDataSpyid(state, generalDataSpyid) {
      state.generalDataSpyid = generalDataSpyid;
    },

    setStudyProgramEval(state, studyProgramEval) {
      state.studyProgramEval = studyProgramEval;
    },

    saveSurveyData(state, payload) {
      state.previousSurveyData = payload;
    },
    saveSurveyName(state, payload) {
      state.previousSurveyName = payload;
    },

    resetSurveyData(state) {
      state.surveyData = [];
    }
  }
});


createApp(App).use(router).use(store).mount("#app");
