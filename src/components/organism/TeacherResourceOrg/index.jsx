import React from "react";
import { useTeacherResource } from "../../../services";
import MainLayout from "../../Layout/Mainlayout";
import { TabBar } from "../../molecules";

const TeacherResourceOrg = () => {
  const { TabBarData } = useTeacherResource();
  // const title = "Find out our resource to teaching expert".split(" ")
  return (
    <MainLayout navbarBg="bg-white">
      <div className="h-136 md-h-168 xl-h-232 bg-secondary-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <p className="text-neutral-500 font-xs md-font-sm xl-font-normal  ">
            Get knowledge to teaching
          </p>

          <div className="mt-8 h5 md-h4 xl-h3 ">
            <div className="position-relative">
              <h3
                className="h5 md-h4 xl-h3 position-relative"
                style={{ zIndex: "2" }}
              >
                Find out our resource{" "}
              </h3>
              <div
                className="position-absolute w-full h-8 bg-primary-500"
                style={{ bottom: "8px", zIndex: "1" }}
              ></div>
            </div>
          </div>

          <div className="mt-8 h5 md-h4 xl-h3 ">
            <div className="position-relative">
              <h3
                className="h5 md-h4 xl-h3 position-relative d-inline-flex"
                style={{ zIndex: "2" }}
              >
                <span className="position-abosulute" style={{ zIndex: "5" }}>
                  {" "}
                  to teaching expert
                </span>
                <div
                  className="position-absolute  w-full h-8 bg-primary-500"
                  style={{ bottom: "8px", zIndex: "1" }}
                ></div>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center  mt-32 xl-mt-40 ">
        <div style={{ maxWidth: "1440px" }} className="w-full">
          <div className="mx-24 md-mx-134 xl-mx-176 ">
            <TabBar data={TabBarData} activeDefault="Lesson plan" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TeacherResourceOrg;
