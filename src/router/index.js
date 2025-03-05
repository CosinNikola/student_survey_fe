import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import TokenLoginView from "../views/TokenLoginView.vue";
import LoginView from "../views/LoginView.vue";
import GeneralDataView from "../views/GeneralDataView.vue";
import StudyProgramEvalView from "@/views/StudyProgramEvalView.vue";
import WorkPlanRealizationView from "@/views/WorkPlanRealizationView.vue";
import SubjectGradeView from "../views/SubjectGradeView.vue";
import TeacherGradeView from "@/views/TeacherGradeView.vue";
import AssociateGradeView from "../views/AssociateGradeView.vue";
import TextbooksQualityGradeView from "@/views/TextbooksQualityGradeView.vue";
import StartSurveyView from "@/views/StartSurveyView.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: '/start-survey/:sspid/:spyid',
    name: "startSurvey",
    component: StartSurveyView,
  },
  {
    path: "/token-login",
    name: "token-login",
    component: TokenLoginView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/general-data",
    name: "general-data",
    component: GeneralDataView,
  },
  {
    path: "/study-program-eval",
    name: "study-program-eval",
    component: StudyProgramEvalView,
  },
  {
    path: "/work-plan-realization",
    name: "work-plan-realization",
    component: WorkPlanRealizationView,
  }, {
    path: "/subject-grade",
    name: "subject-grade",
    component: SubjectGradeView,
  },{
    path: "/teacher-grade",
    name: "teacher-grade",
    component: TeacherGradeView,
  },{
    path: "/associate-grade",
    name: "associate-grade",
    component: AssociateGradeView,
  },{
    path: "/textbooks-grade",
    name: "textbooks-grade",
    component: TextbooksQualityGradeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;
