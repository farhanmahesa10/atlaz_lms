import React from "react";
import MainLayout from "../../../Layout/Mainlayout";
import {
  OverviewStudentDashboard,
  WelcomeStudentDashboard,
} from "../../../molecules";

const StudentDashboard = () => {
  return (
    <>
      <MainLayout maxWidth="1440px">
        <div className="mt-32">
          <div className="row">
            <div className="px-24 md-px-48">
              <div className="col-12 col-xl-3">
                <div className="row ">
                  <div className="col-6 col-xl-12">
                    <WelcomeStudentDashboard />
                  </div>
                  <div className=" col-6  col-xl-12 xl-mt-24">
                    <OverviewStudentDashboard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default StudentDashboard;
