import React from "react";
import { Can } from "../../../permission";
import PublicDashboard from "./PublicDashboard";
import SchoolAdminDashboard from "./SchoolAdminDashboard";
import StudentDashboard from "./StudentDashboard";
import TeacherDashboard from "./TeacherDashboard";
import AdminDashboard from "./AdminDashboard";
const DashboardOrg = () => {
  return (
    <>
      <Can allowAccess="public">
        <PublicDashboard />
      </Can>
      <Can allowAccess="schoolAdmin">
        <SchoolAdminDashboard />
      </Can>
      <Can allowAccess="student">
        <StudentDashboard />
      </Can>
      <Can allowAccess="teacher">
        <TeacherDashboard />
      </Can>
      <Can allowAccess="superuser,administrator">
        <AdminDashboard />
      </Can>
    </>
  );
};

export default DashboardOrg;
