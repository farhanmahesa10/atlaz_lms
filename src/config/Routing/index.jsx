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
} from "../../pages";
const Routing = () => {
  return (
    <Routes>
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
          <CheckRole allowAccess="ADMINISTRATOR,SCHOOLADMIN,teacher,student">
            <Classroom />
          </CheckRole>
        }
      />
      <Route path="/classroom/class/:classId" element={<ClassRoomSubject />} />
      <Route
        path="/classroom/assessment/:classId/:subjectId/:section"
        element={<SubjectPost />}
      />
      <Route
        path="/classroom/post-detail/:classId/:subjectId/:section/:postId"
        element={<SubjectPostDetail />}
      />
      <Route
        path="/classroom/set-plan/:classId/:subjectId/:postId"
        element={<ActivateAssessment />}
      />
      <Route
        path="/classroom/timeline/:classId/:subjectId"
        element={<TimelineShow />}
      />
      <Route
        path="/classroom/start-learning-view/:subjectId"
        element={<LearningSubjectView />}
      />
      <Route path="/classroom/lesson-preview/:id" element={<LessonPreview />} />
      <Route
        path="/classroom/welcome-assessment/:id"
        element={<WelcomeAssessment />}
      />
      <Route
        path="/classroom/begin-assessment/:id"
        element={<BeginAssessmentOrg />}
      />
      <Route path="/logout" element={<Logout />} />

      <Route path="/carousel" element={<CobaBikinCarousel />} />

      {/* Space route fajrul */}
      <Route
        path="/classroom/preview-content/:id"
        element={
          <Authenticate>
            <PreviewContent />
          </Authenticate>
        }
      />
    </Routes>
  );
};
export default Routing;
