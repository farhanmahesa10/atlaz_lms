import React from "react";
import { useMyBookListDetail } from "../../../../services";
import { BreadCrumb, Divider, ProgressBar } from "../../../atoms";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MainLayout from "../../../Layout/Mainlayout";
import { LearningSubjectViewLoading, TabBar } from "../../../molecules";
const DetailBookListOrg = () => {
  const { breadcrumbsData, TabBarData, subjectData, isSubjectLoading } =
    useMyBookListDetail();
  return (
    <MainLayout
      maxWidth="1440px"
      navbarBg="bg-white"
      mainClassName="bg-neutral-50"
    >
      <div className="pt-16 d-none d-xl-block px-24">
        <BreadCrumb data={breadcrumbsData} />
      </div>

      <div className="d-flex  justify-content-center">
        <div className="max-w-888 w-full p-24 md-p-48">
          {isSubjectLoading ? (
            <LearningSubjectViewLoading />
          ) : (
            <>
              <div className="w-full row gx-0  align-items-center ">
                <div className=" col-12 col-md-6 text-center ">
                  <img
                    src={subjectData.imageCover}
                    alt=""
                    className="w-p-100 md-w-328  radius-8"
                  />
                </div>

                <div className="col-12 col-md-6 mt-24 md-mt-0 md-pl-24">
                  <div className="mb-32">
                    <h1 className="h2 md-h1">{subjectData.name}</h1>
                    <Divider
                      height="h-2"
                      parentClassName="w-64"
                      lineColor="bg-primary-500"
                    />
                    <p className="text-neutral-300 mt-8">
                      by {subjectData.author}
                    </p>
                  </div>
                  <div className="mb-24">
                    <p className="font-small-medium text-neutral-200">
                      Book Content
                    </p>
                    <div className="d-flex align-items-center mt-8 mb-16">
                      <FiberManualRecordIcon
                        className="fs-12"
                        style={{ color: "#8EA3EE" }}
                      />
                      <p className="font-sm ml-20">
                        {subjectData.countLesson} Lesson
                      </p>
                    </div>
                    <div className="d-flex align-items-center  mb-16">
                      <FiberManualRecordIcon
                        className="fs-12"
                        style={{ color: "#AD8EEE" }}
                      />
                      <p className="font-sm ml-20"> 90 Exercise </p>
                    </div>
                    <div className="d-flex align-items-center  ">
                      <FiberManualRecordIcon
                        className="fs-12"
                        style={{ color: "#DB8EEE" }}
                      />
                      <p className="font-sm ml-20">Certificate Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* book content and detail */}
          <div className="mt-40">
            <TabBar data={TabBarData} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailBookListOrg;
