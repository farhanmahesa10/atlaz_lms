import React from "react";
import { Routes, Route } from "react-router-dom";
import { RegisterMail } from "../../components/Mail";
import { BeginAssessmentOrg, TryAssessmentOrg } from "../../components/organism";
import Authenticate from "../../midlewares/Authenticate";
import CheckRole from "../../midlewares/CheckRole";
import RedirectIfAuthenticated from "../../midlewares/RedirectIfAuthenticated";
import {
  Login,
  Register1,
  Register2,
  Register3,
  Register4,
  Register5,
  ForgotPassword,
  ResetPassword,
  Redirecting,
  Home,
  SearchResult,
  ProductDetail,
  Verify,
  RedirectGoogleAuthenticated,
  Classroom,
  CobaBikinCarousel,
  ClassRoomSubject,
  SubjectPost,
  SubjectPostDetail,
  ActivateAssessment,
  TimelineShow,
  LearningSubjectView,
  Logout,
  LessonPreview,
  WelcomeAssessment,
  ChangeFirstPassword,
  PreviewContent,
  Dashboard,
  ManageAccount,
  Security,
  PurchasedHistory,
  MyBookList,
  ErrorView,
  DetailBook,
  BookListPractice,
  VerifyProfile,
  LessonPreviewMyBookList,
  GradeOverview,
  GradeDetail,
  GradeBook,
  ManageGrades,
  ManageInformation,
  ManageDetail,
  TeacherResource,
} from "../../pages";
import TesViewContent from "../../pages/TesViewContent";
const Routing = () => {
  return (
    <Routes>
      <Route
        path="/tes-view-content"
        exac
        element={
          // <Authenticate> contoh penggunaan middleware harus login
          <TesViewContent />
          // </Authenticate>
        }
      />
      <Route
        path="/*"
        exac
        element={
          // <Authenticate> contoh penggunaan middleware harus login
          <ErrorView />
          // </Authenticate>
        }
      />
      <Route
        path="/"
        exac
        element={
          // <Authenticate> contoh penggunaan middleware harus login
          <Home />
          // </Authenticate>
        }
      />
      <Route
        path="/dashboard"
        exac
        element={
          <Authenticate>
            <Dashboard />
          </Authenticate>
        }
      />
      <Route
        path="/login"
        element={
          <RedirectIfAuthenticated>
            <Login />
          </RedirectIfAuthenticated>
        }
      />
      <Route
        path="/register"
        element={
          <RedirectIfAuthenticated>
            <Register1 />
          </RedirectIfAuthenticated>
        }
      />
      <Route
        path="/register-step-2"
        element={
          <RedirectIfAuthenticated>
            <Register2 />
          </RedirectIfAuthenticated>
        }
      />
      <Route
        path="/register-step-3"
        element={
          <RedirectIfAuthenticated>
            <Register3 />
          </RedirectIfAuthenticated>
        }
      />
      <Route
        path="/register-step-4"
        element={
          <RedirectIfAuthenticated>
            <Register4 />
          </RedirectIfAuthenticated>
        }
      />
      <Route
        path="/register-finish"
        element={
          <RedirectIfAuthenticated>
            <Register5 />
          </RedirectIfAuthenticated>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <RedirectIfAuthenticated>
            <ForgotPassword />
          </RedirectIfAuthenticated>
        }
      />
      <Route
        path="/password/new"
        element={
          <RedirectIfAuthenticated>
            <ResetPassword />
          </RedirectIfAuthenticated>
        }
      />
      <Route
        path="/change-first-password/:username"
        element={
          <RedirectIfAuthenticated>
            <ChangeFirstPassword />
          </RedirectIfAuthenticated>
        }
      />
      <Route path="/redirecting" element={<Redirecting />} />
      <Route path="/mail-design" element={<RegisterMail />} />
      <Route path="/search-result/:keyword" element={<SearchResult />} />
      <Route path="/search-result" element={<SearchResult />} />
      <Route path="/shop" element={<Home />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/auth/verify" element={<Verify />} />
      <Route path="/auth/verify/security" element={<VerifyProfile />} />
      <Route
        path="/redirect-google"
        element={<RedirectGoogleAuthenticated />}
      />

      {/* classroom route */}
      <Route
        path="/classroom"
        element={
          <Authenticate>
            <CheckRole allowAccess="ADMINISTRATOR,SCHOOLADMIN,teacher,student">
              <Classroom />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/classroom/class/:classId"
        element={
          <Authenticate>
            <CheckRole allowAccess="ADMINISTRATOR,SCHOOLADMIN,teacher,student">
              <ClassRoomSubject />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/classroom/assessment/:classId/:subjectId/:section"
        element={
          <Authenticate>
            <CheckRole allowAccess="ADMINISTRATOR,SCHOOLADMIN,teacher,student">
              <SubjectPost />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/classroom/post-detail/:classId/:subjectId/:postId"
        element={
          <Authenticate>
            <CheckRole allowAccess="ADMINISTRATOR,SCHOOLADMIN,teacher,student">
              <SubjectPostDetail />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/classroom/set-plan/:classId/:subjectId"
        element={
          <Authenticate>
            <CheckRole allowAccess="SCHOOLADMIN,teacher">
              <ActivateAssessment />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/classroom/timeline/:classId/:subjectId"
        element={
          <Authenticate>
            <CheckRole allowAccess="ADMINISTRATOR,SCHOOLADMIN,teacher,student">
              <TimelineShow />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/classroom/start-learning-view/:classId/:subjectId"
        element={
          <Authenticate>
            <CheckRole allowAccess="ADMINISTRATOR,SCHOOLADMIN,teacher,student">
              <LearningSubjectView />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/classroom/lesson-preview/:classId/:subjectId/:lessonId"
        element={
          <Authenticate>
            <CheckRole allowAccess="ADMINISTRATOR,SCHOOLADMIN,teacher,student">
              <LessonPreview />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/classroom/welcome-assessment/:classId/:subjectId/:lessonId/:topicId/:id"
        element={
          <Authenticate>
            <CheckRole allowAccess="ADMINISTRATOR,SCHOOLADMIN,teacher,student">
              <WelcomeAssessment />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/classroom/begin-assessment/:classId/:subjectId/:lessonId/:topicId/:id"
        element={
          <Authenticate>
            <CheckRole allowAccess="STUDENT">
              <BeginAssessmentOrg />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/classroom/preview-assessment/:classId/:subjectId/:lessonId/:topicId/:id"
        element={
          <Authenticate>
            <CheckRole allowAccess="ADMINISTRATOR,SCHOOLADMIN,TEACHER">
              <TryAssessmentOrg />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/logout"
        element={
          <Authenticate>
            <Logout />
          </Authenticate>
        }
      />

      <Route
        path="/classroom/content-practice/:classId/:subjectId/:lessonId/:topicId/:id"
        element={
          <Authenticate>
            <PreviewContent />
          </Authenticate>
        }
      />
      <Route
        path="/manage-account"
        element={
          <Authenticate>
            <ManageAccount />
          </Authenticate>
        }
      />
      <Route
        path="/security"
        element={
          <Authenticate>
            <Security />
          </Authenticate>
        }
      />
      <Route
        path="/purchased-history"
        element={
          <Authenticate>
            <PurchasedHistory />
          </Authenticate>
        }
      />
      <Route
        path="/my-book-list"
        element={
          <Authenticate>
            <CheckRole allowAccess="public">
              <MyBookList />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/my-book-list/detail/:subjectId"
        element={
          <Authenticate>
            <CheckRole allowAccess="public">
              <DetailBook />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/my-book-list/practice/:subjectId/:lessonId/:topicId/:id"
        element={
          <Authenticate>
            <CheckRole allowAccess="public">
              <BookListPractice />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/my-book-list/lesson-preview/:subjectId/:lessonId"
        element={
          <Authenticate>
            <CheckRole allowAccess="public">
              <LessonPreviewMyBookList />
            </CheckRole>
          </Authenticate>
        }
      />

      <Route path="/carousel" element={<CobaBikinCarousel />} />

      {/* nextSpace route fajrul */}

      <Route
        path="/grade/grade-overview"
        element={
          <Authenticate>
            <CheckRole allowAccess="SUPERUSER,ADMINISTRATOR,HEADMASTER,SCHOOLADMIN,STUDENT,TEACHER">
              <GradeOverview />
            </CheckRole>
          </Authenticate>
        }
      />

      <Route
        path="/grade/grade-overview/detail/:idSubject/:idClass"
        element={
          <Authenticate>
            <CheckRole allowAccess="SUPERUSER,ADMINISTRATOR,HEADMASTER,SCHOOLADMIN,STUDENT,TEACHER">
              <GradeDetail />
            </CheckRole>
          </Authenticate>
        }
      />

      <Route
        path="/grade/grade-overview/detail/subject/:idSubject"
        element={
          <Authenticate>
            <CheckRole allowAccess="SUPERUSER,ADMINISTRATOR,HEADMASTER,SCHOOLADMIN,STUDENT,TEACHER">
              <GradeDetail />
            </CheckRole>
          </Authenticate>
        }
      />

      <Route
        path="/grade/grade-overview/detail/class/:idClass"
        element={
          <Authenticate>
            <CheckRole allowAccess="SUPERUSER,ADMINISTRATOR,HEADMASTER,SCHOOLADMIN,STUDENT,TEACHER">
              <GradeDetail />
            </CheckRole>
          </Authenticate>
        }
      />

      <Route
        path="/grade/grade-overview/detail/:idSubject/:idClass/score/:id"
        element={
          <Authenticate>
            <CheckRole allowAccess="SUPERUSER,ADMINISTRATOR,HEADMASTER,SCHOOLADMIN,TEACHER">
              <GradeBook />
            </CheckRole>
          </Authenticate>
        }
      />

      <Route
        path="/grade/grade-overview/score/:idSubject/:idClass"
        element={
          <Authenticate>
            <CheckRole allowAccess="STUDENT">
              <GradeBook />
            </CheckRole>
          </Authenticate>
        }
      />

      <Route
        path="/grade/manage-grades"
        element={
          <Authenticate>
            <CheckRole allowAccess="TEACHER">
              <ManageGrades />
            </CheckRole>
          </Authenticate>
        }
      />

      <Route
        path="/grade/manage-grades/information/:idSubject/:idClass"
        element={
          <Authenticate>
            <CheckRole allowAccess="TEACHER">
              <ManageInformation />
            </CheckRole>
          </Authenticate>
        }
      />

      <Route
        path="/grade/manage-grades/information/:idSubject/:idClass/detail/:id"
        element={
          <Authenticate>
            <CheckRole allowAccess="TEACHER">
              <ManageDetail />
            </CheckRole>
          </Authenticate>
        }
      />

      <Route
        path="/teacher-resources"
        element={
          <Authenticate>
            <CheckRole allowAccess="TEACHER,schooladmin">
              <TeacherResource />
            </CheckRole>
          </Authenticate>
        }
      />
      <Route
        path="/resources"
        element={
          <Authenticate>
            <CheckRole allowAccess="PUBLIC">
              <TeacherResource />
            </CheckRole>
          </Authenticate>
        }
      />

      {/* </nextSpace route fajrul */}
    </Routes>
  );
};
export default Routing;
