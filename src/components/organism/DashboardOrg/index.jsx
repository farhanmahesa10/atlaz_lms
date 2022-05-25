import React from "react";
import { Can } from "../../../permission";
import PublicDashboard from "./PublicDashboard";
import SchoolAdminDashboard from "./SchoolAdminDashboard";
import StudentDashboard from "./StudentDashboard";
import TeacherDashboard from "./TeacherDashboard";
const DashboardOrg = () => {
  return (
    <>
      <PublicDashboard />
      {/* <Can allowAccess="public">
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
      </Can> */}
    </>
  );
};

export default DashboardOrg;
