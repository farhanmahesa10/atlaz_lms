import React from "react";
import { useLearningSubjectView } from "../../../../services";
import { BreadCrumb, Divider, ProgressBar } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { TabBar } from "../../../molecules";
const LearningSubjectViewOrg = () => {
  const { tesData, breadcrumbsData, TabBarData } = useLearningSubjectView();

  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <div className="mt-16 d-none d-xl-block mx-48">
        <BreadCrumb data={breadcrumbsData} />
      </div>

      <div className="d-flex  justify-content-center">
        <div className="max-w-888 w-full p-24 md-p-48">
          <div className="w-full row gx-0  align-items-center ">
            <div className=" col-12 col-md-6 text-center ">
              <img
                src="/images/product.png"
                alt=""
                className="w-p-100 md-w-328  radius-8"
              />
            </div>

            <div className="col-12 col-md-6 mt-24 md-mt-0 md-pl-24">
              <div className="mb-32">
                <h1 className="h2 md-h1">English Play 01</h1>
                <Divider
                  height="h-2"
                  parentClassName="w-64"
                  lineColor="bg-primary-500"
                />
                <p className="text-neutral-300 mt-8">by Atlaz Belajar Bahasa</p>
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
                  <p className="font-sm ml-20"> 6 Lesson</p>
                </div>
                <div className="d-flex align-items-center  mb-16">
                  <FiberManualRecordIcon
                    className="fs-12"
                    style={{ color: "#AD8EEE" }}
                  />
                  <p className="font-sm ml-20"> 90 Exercise</p>
                </div>
                <div className="d-flex align-items-center  ">
                  <FiberManualRecordIcon
                    className="fs-12"
                    style={{ color: "#DB8EEE" }}
                  />
                  <p className="font-sm ml-20"> Certificate Available</p>
                </div>
              </div>

              <button className="btn btn-primary font-normal">
                View all course
              </button>
            </div>
          </div>

          {/* progress */}

          <div className="mt-40">
            <div className="bg-neutral-600 d-md-flex align-items-center md-h-64  px-24 py-16 md-py-0 radius-8">
              <h6 className="text-white nowrap mr-64">Progress Overall</h6>
              <div className="d-flex w-full align-items-center">
                <div className="w-full">
                  <ProgressBar
                    bgColor="bg-white"
                    activeColor="info-500"
                    height="4"
                    radius="3"
                    value="40"
                  />
                </div>
                <p className="ml-8 nowrap text-neutral-200 md-mr-24">
                  65/90 Exercise
                </p>
              </div>
              <button className="btn btn-disable nowrap w-full md-w-auto">
                Get Certificate
              </button>
            </div>
          </div>

          {/* book content and detail */}
          <div className="mt-40">
            <TabBar data={TabBarData} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LearningSubjectViewOrg;
