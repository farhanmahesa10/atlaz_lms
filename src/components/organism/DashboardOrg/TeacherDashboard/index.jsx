import React from "react";
import {
  AtlazMediaBg,
  CreateSubjectBg,
  EditProfileBg,
  GradeBg,
} from "../../../../assets/images";
import { useTeacherDashboard } from "../../../../services";
import MainLayout from "../../../Layout/Mainlayout";
import {
  BoxDashboardCard,
  ClassListTeacherDashboard,
  GradeTeacherDashboard,
  OverviewTeacherDashboard,
  UpcomingTeacherDashboard,
  WelcomeTeacherDashboard,
} from "../../../molecules";

const TeacherDashboard = () => {
  const { isLoadingClassList, classListData, upcomingData, upcomingLoading } =
    useTeacherDashboard();
  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <div className="mt-32">
        <div className="px-24 md-px-48">
          <div className="row ">
            <div className="col-12 col-xl-3">
              <div className="row ">
                <div className="col-6 col-xl-12">
                  <WelcomeTeacherDashboard />
                </div>
                <div className=" col-6  col-xl-12 xl-mt-24">
                  <OverviewTeacherDashboard />
                </div>
                <div className=" col-12 d-none d-xl-block   mt-24">
                  <GradeTeacherDashboard />
                </div>
              </div>
            </div>
            <div className="col-12  col-xl-4 mt-16 md-mt-24 xl-mt-0">
              <UpcomingTeacherDashboard
                data={upcomingData}
                isLoading={upcomingLoading}
              />
            </div>
            <div className="col-12 col-xl-5 mt-16 md-mt-24 xl-mt-0 d-flex flex-column justify-content-between">
              <div className="row   xl-h-p-48 ">
                <div className="col-12 col-md-6 h-120 xl-h-173">
                  <BoxDashboardCard
                    bgImage={GradeBg}
                    bgColor="#EAF7FA"
                    title={
                      <span>
                        Grade <br /> Student
                      </span>
                    }
                    link="/grade/grade-overview"
                  />
                </div>
                <div className="col-12 col-md-6 h-120 xl-h-173 d-none d-md-block">
                  <BoxDashboardCard
                    bgImage={EditProfileBg}
                    bgColor="#FAEBF2"
                    link="/manage-account"
                    title={
                      <span>
                        Edit <br /> Profile
                      </span>
                    }
                  />
                </div>

                <div className="col-12 col-md-6 h-120 xl-h-173 mt-24">
                  <BoxDashboardCard
                    bgImage={CreateSubjectBg}
                    bgColor="#F9F2EC"
                    title={
                      <span>
                        Create <br /> Subject
                      </span>
                    }
                    link={process.env.REACT_APP_ADMIN_URL}
                    isToExternal
                  />
                </div>
                <div className="col-12 col-md-6 h-120 xl-h-173 mt-24 d-none d-md-block">
                  <BoxDashboardCard
                    bgImage={AtlazMediaBg}
                    bgColor="#EAEDFB"
                    link="https://media.hiatlaz.com/"
                    isToExternal
                    isCommingSoon
                    title={
                      <span>
                        Atlaz <br /> Media
                      </span>
                    }
                  />
                </div>
                <div className="col-12  mt-24">
                  <ClassListTeacherDashboard
                    isLoading={isLoadingClassList}
                    data={classListData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TeacherDashboard;
