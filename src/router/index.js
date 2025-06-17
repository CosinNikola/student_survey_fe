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
import StudyProgramEvalReport from "@/components/adminDashboard/StudyProgramEval/StudyProgramEvalReport.vue";
import WorkPlanRealizationReport from "@/components/adminDashboard/WorkPlan/WorkPlanRealizationReport.vue";
import SubjectGradeReport from "@/components/adminDashboard/SubjectGrade/SubjectGradeReport.vue";
import TeacherGradeReport from "@/components/adminDashboard/TeacherGrade/TeacherGradeReport.vue";
import StudyProgramEvalBySP from "@/components/adminDashboard/StudyProgramEval/StudyProgramEvalBySP.vue";
import StudyProgramEvalBySPYear from "@/components/adminDashboard/StudyProgramEval/StudyProgramEvalBySPYear.vue";
import WorkPlanRealizationBySP from "@/components/adminDashboard/WorkPlan/WorkPlanRealizationBySP.vue";
import WorkPlanRealizationBySPYear from "@/components/adminDashboard/WorkPlan/WorkPlanRealizationBySPYear.vue";
import SubjectGradeBySP from "@/components/adminDashboard/SubjectGrade/SubjectGradeBySP.vue";
import SubjectGradeBySPYear from "@/components/adminDashboard/SubjectGrade/SubjectGradeBySPYear.vue";
import SubjectGradeBySubject from "@/components/adminDashboard/SubjectGrade/SubjectGradeBySubject.vue";
import SubjectGradeByTeacher from "@/components/adminDashboard/SubjectGrade/SubjectGradeByTeacher.vue";

import TeacherQualityReport from "@/components/adminDashboard/TeacherGrade/TeacherQuality/TeacherQualityReport.vue";
import TeacherAssessmentReport from "@/components/adminDashboard/TeacherGrade/TeacherAssessment/TeacherAssessmentReport.vue";
import TeacherQualityBySP from "@/components/adminDashboard/TeacherGrade/TeacherQuality/TeacherQualityBySP.vue";
import TeacherQualityBySPYear from "@/components/adminDashboard/TeacherGrade/TeacherQuality/TeacherQualityBySPYear.vue";
import TeacherQualityBySubject
  from "@/components/adminDashboard/TeacherGrade/TeacherQuality/TeacherQualityBySubject.vue";
import TeacherQualityByTeacher
  from "@/components/adminDashboard/TeacherGrade/TeacherQuality/TeacherQualityByTeacher.vue";
import TeacherAssessmentBySP
  from "@/components/adminDashboard/TeacherGrade/TeacherAssessment/TeacherAssessmentBySP.vue";
import TeacherAssessmentBySPYear
  from "@/components/adminDashboard/TeacherGrade/TeacherAssessment/TeacherAssessmentBySPYear.vue";
import TeacherAssessmentBySubject
  from "@/components/adminDashboard/TeacherGrade/TeacherAssessment/TeacherAssessmentBySubject.vue";
import TeacherAssessmentByTeacher
  from "@/components/adminDashboard/TeacherGrade/TeacherAssessment/TeacherAssessmentByTeacher.vue";
import AssociateGradeReport from "@/components/adminDashboard/AssociateGrade/AssociateGradeReport.vue";
import AssociateQualityReport
  from "@/components/adminDashboard/AssociateGrade/AssociateQuality/AssociateQualityReport.vue";
import AssociateQualityBySP from "@/components/adminDashboard/AssociateGrade/AssociateQuality/AssociateQualityBySP.vue";
import AssociateQualityBySPYear
  from "@/components/adminDashboard/AssociateGrade/AssociateQuality/AssociateQualityBySPYear.vue";
import AssociateQualityBySubject
  from "@/components/adminDashboard/AssociateGrade/AssociateQuality/AssociateQualityBySubject.vue";
import AssociateQualityByAssociate
  from "@/components/adminDashboard/AssociateGrade/AssociateQuality/AssociateQualityByAssociate.vue";
import AssociateAssessmentReport
  from "@/components/adminDashboard/AssociateGrade/AssociateAssessment/AssociateAssessmentReport.vue";
import AssociateAssessmentBySP
  from "@/components/adminDashboard/AssociateGrade/AssociateAssessment/AssociateAssessmentBySP.vue";
import AssociateAssessmentBySPYear
  from "@/components/adminDashboard/AssociateGrade/AssociateAssessment/AssociateAssessmentBySPYear.vue";
import AssociateAssessmentBySubject
  from "@/components/adminDashboard/AssociateGrade/AssociateAssessment/AssociateAssessmentBySubject.vue";
import AssociateAssessmentByAssociate
  from "@/components/adminDashboard/AssociateGrade/AssociateAssessment/AssociateAssessmentByAssociate.vue";
import TextbooksQualityReport from "@/components/adminDashboard/TextbooksQuality/TextbooksQualityReport.vue";
import TextbooksQualityBySP from "@/components/adminDashboard/TextbooksQuality/TextbooksQualityBySP.vue";
import TextbooksQualityBySPYear from "@/components/adminDashboard/TextbooksQuality/TextbooksQualityBySPYear.vue";
import TextbooksQualityBySubject from "@/components/adminDashboard/TextbooksQuality/TextbooksQualityBySubject.vue";
import TextbooksQualityByTeacher from "@/components/adminDashboard/TextbooksQuality/TextbooksQualityByTeacher.vue";
import StartGeneralSurveyView from "@/views/StartGeneralSurveyView.vue";
import TokenLoginGeneralView from "@/views/TokenLoginGeneralView.vue";
import StartSurvey from "@/components/adminDashboard/StartSurvey/StartSurvey.vue";
import GeneralSurveyStart from "@/components/adminDashboard/StartSurvey/GeneralSurveyStart.vue";
import SubjectSurveyStart from "@/components/adminDashboard/StartSurvey/SubjectSurveyStart.vue";
import TokensTable from "@/components/adminDashboard/StartSurvey/TokensTable.vue";
import UsersManagement from "@/components/adminDashboard/Users/UsersManagement.vue";
import AllUsers from "@/components/adminDashboard/Users/AllUsers.vue";
import StudyProgramsManagement from "@/components/adminDashboard/StudyProgramsManagement/StudyProgramsManagement.vue";
import AllStudyPrograms from "@/components/adminDashboard/StudyProgramsManagement/AllStudyPrograms.vue";
import StudyProgramsByYear from "@/components/adminDashboard/StudyProgramsManagement/StudyProgramsByYear.vue";
import SubjectsManagement from "@/components/adminDashboard/SubjectsManagement/SubjectsManagement.vue";
import AllSubjects from "@/components/adminDashboard/SubjectsManagement/AllSubjects.vue";
import SubjectsByYear from "@/components/adminDashboard/SubjectsManagement/SubjectsByYear.vue";


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
    path: '/start-general-survey/:spyid',
    name: "start-general-survey",
    component: StartGeneralSurveyView,
  },
  {
    path: "/token-login",
    name: "token-login",
    component: TokenLoginView,
  },
  {
    path: "/token-login-general",
    name: "token-login-general",
    component: TokenLoginGeneralView,
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
            path: "study-program-eval",
            component: StudyProgramEvalReport,
            children: [
              {
                path: "by-study-program",
                component: StudyProgramEvalBySP
              }, {
                path: "by-study-program-and-year",
                component: StudyProgramEvalBySPYear
              },
            ]
             },
          {
            path: "work-plan-realization",
            component: WorkPlanRealizationReport,
            children: [
              {
                path: "by-study-program",
                component: WorkPlanRealizationBySP
              }, {
                path: "by-study-program-and-year",
                component: WorkPlanRealizationBySPYear
              },
            ]
          },
          {
            path: "subject-grade",
            component: SubjectGradeReport,
            children: [
              {
                path: "by-study-program",
                component: SubjectGradeBySP
              }, {
                path: "by-study-program-and-year",
                component: SubjectGradeBySPYear
              },{
                path: "by-subject",
                component: SubjectGradeBySubject
              },{
                path: "by-teacher",
                component: SubjectGradeByTeacher
              },
            ]
          },
          {
            path: "teacher-grade",
            component: TeacherGradeReport,
            children: [
              {
              path: "quality",
              component: TeacherQualityReport,
              children: [
                {
                  path: "by-study-program",
                  component: TeacherQualityBySP
                },
                {
                  path: "by-study-program-and-year",
                  component: TeacherQualityBySPYear
                },{
                  path: "by-subject",
                  component: TeacherQualityBySubject
                },{
                  path: "by-teacher",
                  component: TeacherQualityByTeacher
                },
              ]
              },
              {
              path: "assessment",
              component: TeacherAssessmentReport,
                children: [
                  {
                    path: "by-study-program",
                    component: TeacherAssessmentBySP
                  },
                  {
                    path: "by-study-program-and-year",
                    component: TeacherAssessmentBySPYear
                  },{
                    path: "by-subject",
                    component: TeacherAssessmentBySubject
                  },{
                    path: "by-teacher",
                    component: TeacherAssessmentByTeacher
                  },
                ]
              },
            ]
          },
          {
            path: "associate-grade",
            component: AssociateGradeReport,
            children: [
              {
                path: "quality",
                component: AssociateQualityReport,
                children: [
                  {
                    path: "by-study-program",
                    component: AssociateQualityBySP
                  },
                  {
                    path: "by-study-program-and-year",
                    component: AssociateQualityBySPYear
                  },{
                    path: "by-subject",
                    component: AssociateQualityBySubject
                  },{
                    path: "by-associate",
                    component: AssociateQualityByAssociate
                  },
                ]
              },
              {
                path: "assessment",
                component: AssociateAssessmentReport,
                children: [
                  {
                    path: "by-study-program",
                    component: AssociateAssessmentBySP
                  },
                  {
                    path: "by-study-program-and-year",
                    component: AssociateAssessmentBySPYear
                  },{
                    path: "by-subject",
                    component: AssociateAssessmentBySubject
                  },{
                    path: "by-associate",
                    component: AssociateAssessmentByAssociate
                  },
                ]
              },
            ]
          },{
            path: "textbooks-quality",
            component: TextbooksQualityReport,
            children: [
              {
                path: "by-study-program",
                component: TextbooksQualityBySP
              },
              {
                path: "by-study-program-and-year",
                component: TextbooksQualityBySPYear
              },
              {
                path: "by-subject",
                component: TextbooksQualityBySubject
              },
              {
                path: "by-teacher",
                component: TextbooksQualityByTeacher
              },
            ]
          },

        ]
      },
      {
        path: "start-survey",
        component: StartSurvey,
        children: [
          {
            path: "general",
            component: GeneralSurveyStart
          },
          {
            path: "subject",
            component: SubjectSurveyStart
          },{
            path: "tokens-table",
            component: TokensTable
          },
        ]
      },
      {
        path: "users",
        component: UsersManagement,
        children: [
          {
            path: "all-users",
            component: AllUsers
          }
        ]
      },
      {
        path: "study-programs",
        component: StudyProgramsManagement,
        children: [
          {
            path: "all-study-programs",
            component: AllStudyPrograms,
            },
          {
            path: "by-year",
            component: StudyProgramsByYear
          }
        ]
      },
      {
        path: "subjects",
        component: SubjectsManagement,
        children: [
          {
            path: "all-subjects",
            component: AllSubjects
          },
          {
            path: "by-year",
            component: SubjectsByYear
          }
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

// {
//   path: "study-program",
//     component: ReportByStudyProgram
// },{
//   path: "study-program-and-year",
//     component: ReportByStudyProgramAndYear
// },{
//   path: "subject",
//     component: ReportBySubject
// },{
//   path: "teacher",
//     component: ReportByTeacher
// },
export default router;
