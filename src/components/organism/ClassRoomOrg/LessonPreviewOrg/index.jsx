import React, { useState } from "react";
import { BreadCrumb, Divider } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { OutlineList } from "../../../molecules";
import { useLessonPreview } from "../../../../services";

const LessonPreviewOrg = () => {
  const { dataOutline, breadcrumbsData } = useLessonPreview();
  return (
    <MainLayout navbarBg="bg-white">
      <div className="mt-16 d-none d-xl-block mx-48">
        <BreadCrumb data={breadcrumbsData} />
      </div>
      <div className="my-24 mx-24">
        <div className="mt-40 d-flex align-items-center flex-column">
          <h4 className="md-h1 text-center">Unit 1 - How's Life?</h4>
          <div className="w-64">
            <Divider lineColor="bg-primary-500" height="h-2" />
          </div>
          <div className="mt-20 md-mt-16">
            <p className="text-neutral-300">by Atlaz Belajar Bahasa</p>
          </div>
          <div className="mt-16 md-mt-24">
            <button className="btn-primary font-normal d-flex align-items-center">
              Go to Topic <ArrowRightAltIcon className="pl-8" />
            </button>
          </div>
          <div className="mt-20 md-mt-32 ">
            <img
              src="/images/example-img-post/gb2.jpeg"
              alt=""
              className="max-w-888 w-full radius-8"
            />
          </div>
          <div className="mt-24 md-mt-40 d-flex w-full justify-content-between justify-content-md-center">
            <div className="d-flex  md-mr-68 w-148">
              <button className="btn btn-disable d-flex justify-content-center align-items-center w-28 h-28 p-0 m-0">
                <ArrowBackIcon className="fs-20" />
              </button>
              <div className="ml-8 d-flex justify-content-between flex-column ">
                <span className="font-xs text-neutral-300">Back</span>
                <span className="font-xs text-neutral-300">-</span>
              </div>
            </div>
            <div className="d-flex md-ml-68 w-148 justify-content-end">
              <div className="mr-8 d-flex justify-content-between flex-column ">
                <span className="font-xs text-neutral-300">Next</span>
                <span className="font-xs text-neutral-300">-</span>
              </div>
              <button className="btn btn-outline d-flex justify-content-center align-items-center w-28 h-28 p-0 m-0">
                <ArrowForwardIcon className="fs-20" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <OutlineList data={dataOutline} />
    </MainLayout>
  );
};

export default LessonPreviewOrg;
