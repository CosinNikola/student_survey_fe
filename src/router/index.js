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
import FinalPageView from "@/views/FinalPageView.vue";
import AdminDashboardView from "@/views/AdminDashboardView.vue";
import TeacherDashboardView from "@/views/TeacherDashboardView.vue";
import SurveyReport from "@/components/adminDashboard/SurveyReport.vue";
import GeneralDataReport from "@/components/reports/GeneralDataReport.vue";
import ReportByStudyProgram from "@/components/reports/ReportByStudyProgram.vue";
import ReportByStudyProgramAndYear from "@/components/reports/ReportByStudyProgramAndYear.vue";
import ReportBySubject from "@/components/reports/ReportBySubject.vue";
import ReportByTeacher from "@/components/reports/ReportByTeacher.vue";


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
  },{
    path: "/survey-end",
    name: "survey-end",
    component: FinalPageView,
  },{
    path: "/admin-dashboard",
    name: "admin-dashboard",
    component: AdminDashboardView,
    children: [
      {
        path: 'survey-report',
        component: SurveyReport,
        children: [
        {
          path: "general-data",
          component: GeneralDataReport
        },
          {
          path: "study-program",
          component: ReportByStudyProgram
        },{
          path: "study-program-and-year",
          component: ReportByStudyProgramAndYear
        },{
          path: "subject",
          component: ReportBySubject
        },{
          path: "teacher",
          component: ReportByTeacher
        },
        ]
      }

    ]
  },{
    path: "/teacher-dashboard",
    name: "teacher-dashboard",
    component: TeacherDashboardView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;
