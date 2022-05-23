import React from "react";
import MainLayout from "../../../Layout/Mainlayout";
import {
  OverviewStudentDashboard,
  WelcomeStudentDashboard,
  UpcomingClassStudentDashboard,
  GradeStudentDashboard,
  MyBookListStudentDashboard,
} from "../../../molecules";

const StudentDashboard = () => {
  return (
    <>
      <MainLayout maxWidth="1440px">
        <div className="mt-32">
          <div className="px-24 md-px-48">
            <div className="row ">
              <div className="col-12 col-xl-3">
                <div className="row ">
                  <div className="col-6 col-xl-12">
                    <WelcomeStudentDashboard />
                  </div>
                  <div className=" col-6  col-xl-12 xl-mt-24">
                    <OverviewStudentDashboard />
                  </div>
                  <div className=" col-12   mt-24">
                    <GradeStudentDashboard />
                  </div>
                </div>
              </div>
              <div className="col-12  col-xl-4">
                <UpcomingClassStudentDashboard />
              </div>
              <div className="col-12  col-xl-5">
                <MyBookListStudentDashboard />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default StudentDashboard;
