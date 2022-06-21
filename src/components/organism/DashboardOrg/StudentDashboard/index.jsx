import React from "react";
import MainLayout from "../../../Layout/Mainlayout";
import {
  OverviewStudentDashboard,
  WelcomeStudentDashboard,
  UpcomingClassStudentDashboard,
  GradeStudentDashboard,
  MyBookListStudentDashboard,
  ContinueClassStudentDashboard,
  BoxDashboardCard,
} from "../../../molecules";
import { EditProfileBg } from "../../../../assets/images";
import { AtlazMediaBg } from "../../../../assets/images";
const StudentDashboard = () => {
  return (
    <>
      <MainLayout maxWidth="1440px" navbarBg="bg-white">
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
                  <div className=" col-12 d-none d-xl-block   mt-24">
                    <GradeStudentDashboard />
                  </div>
                </div>
              </div>
              <div className="col-12  col-xl-4 mt-16 md-mt-24 xl-mt-0">
                <UpcomingClassStudentDashboard />
              </div>
              <div className="col-12 xl- col-xl-5 mt-16 md-mt-24 xl-mt-0 d-flex flex-column justify-content-between">
                <div className="row   xl-h-p-48 ">
                  <div className="col-12 col-md-7 h-373 xl-h-auto ">
                    <ContinueClassStudentDashboard />
                  </div>
                  <div className="d-none d-md-block col-md-5">
                    <div className="row h-full  d-flex flex-column justify-content-between">
                      <div className="col-12 h-p-47">
                        <BoxDashboardCard
                          bgImage={EditProfileBg}
                          bgColor="#FAEBF2"
                          title={
                            <span>
                              Edit <br /> Profile
                            </span>
                          }
                          link="/manage-account"
                        />
                      </div>
                      <div className="col-12 h-p-47">
                        <BoxDashboardCard
                          bgImage={AtlazMediaBg}
                          bgColor="#EAEDFB"
                          link="https://media.hiatlaz.com/"
                          isToExternal
                          title={
                            <span>
                              Atlaz <br /> Media
                            </span>
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row h-p-48 mt-16 md-mt-24 xl-mt-0">
                  <div className="col-12 h-full">
                    <MyBookListStudentDashboard />
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
