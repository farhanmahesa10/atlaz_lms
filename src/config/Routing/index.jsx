import React from "react";
import { Routes, Route } from "react-router-dom";
import { RegisterMail } from "../../components/Mail";
import { BeginAssessmentOrg } from "../../components/organism";
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
  LessonPreviewMyBookList,
} from "../../pages";
const Routing = () => {
  return (
    <Routes>
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
          // <Authenticate> contoh penggunaan middleware harus login
          <Dashboard />
          // </Authenticate>
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
            <ClassRoomSubject />
          </Authenticate>
        }
      />
      <Route
        path="/classroom/assessment/:classId/:subjectId/:section"
        element={
          <Authenticate>
            <SubjectPost />
          </Authenticate>
        }
      />
      <Route
        path="/classroom/post-detail/:classId/:subjectId/:postId"
        element={
          <Authenticate>
            <SubjectPostDetail />
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
            <TimelineShow />
          </Authenticate>
        }
      />
      <Route
        path="/classroom/start-learning-view/:classId/:subjectId"
        element={
          <Authenticate>
            <LearningSubjectView />
          </Authenticate>
        }
      />
      <Route
        path="/classroom/lesson-preview/:classId/:subjectId/:lessonId"
        element={
          <Authenticate>
            <LessonPreview />
          </Authenticate>
        }
      />
      <Route
        path="/classroom/welcome-assessment/:classId/:subjectId/:lessonId/:topicId/:id"
        element={
          <Authenticate>
            <WelcomeAssessment />
          </Authenticate>
        }
      />
      <Route
        path="/classroom/begin-assessment/:classId/:subjectId/:lessonId/:topicId/:id"
        element={
          <Authenticate>
            <BeginAssessmentOrg />
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
            <MyBookList />
          </Authenticate>
        }
      />
      <Route
        path="/my-book-list/detail/:subjectId"
        element={
          <Authenticate>
            <DetailBook />
          </Authenticate>
        }
      />
      <Route
        path="/my-book-list/practice/:subjectId/:lessonId/:topicId/:id"
        element={
          <Authenticate>
            <BookListPractice />
          </Authenticate>
        }
      />
      <Route
        path="/my-book-list/lesson-preview/:subjectId/:lessonId"
        element={
          <Authenticate>
            <LessonPreviewMyBookList />
          </Authenticate>
        }
      />

      <Route path="/carousel" element={<CobaBikinCarousel />} />

      {/* nextSpace route fajrul */}

      {/* codding disini */}

      {/* </nextSpace route fajrul */}
    </Routes>
  );
};
export default Routing;
