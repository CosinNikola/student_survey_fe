import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css"

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
      },

      lastSurveyTimestamp: "",
      studyProgramsData: [],
      teachersData: [],
      subjectsData: [],
      associatesData: []
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
    setLastSurveyTimestamp(state, payload) {
      state.previousSurveyName = payload;
    },

    resetSurveyData(state) {
      state.surveyData = [];
    },

    setStudyProgramsData(state, payload) {
      state.studyProgramsData = payload;
    },

    setSubjectsData(state, payload) {
      state.subjectsData = payload;
    },

    setTeachersData(state, payload) {
      state.teachersData = payload;
    },

    setAssociatesData(state, payload) {
      state.associatesData = payload;
    }
  }
});


createApp(App).use(router).use(store).mount("#app");

router.beforeEach((to, from, next) => {
  if (from.name) {
    next(); // Allow forward navigation
    setTimeout(() => {
      window.history.replaceState(null, "", window.location.href);
    }, 100); // Clear history after navigating
  } else {
    next();
  }
});


// window.addEventListener("popstate", () => {
//   router.replace(window.location.hash.substring(1)); // Redirect to home instead of going back
// });

// Prevent back navigation
// window.history.pushState(null, "", window.location.href);
// window.addEventListener("popstate", (event) => {
//   event.preventDefault();
//   window.history.pushState(null, "", window.location.href);
// });
//
