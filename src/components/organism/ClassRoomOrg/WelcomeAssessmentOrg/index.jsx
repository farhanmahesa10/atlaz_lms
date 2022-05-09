import React from "react";
import { BreadCrumb, Divider } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { OutlineList } from "../../../molecules";
import useWelcomeAssessment from "../../../../services/ClassRoom/useWelcomeAssessment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "react-router-dom";
const WelcomeAssessmentOrg = () => {
  const { dataOutline, breadcrumbsData, rulesCondition } =
    useWelcomeAssessment();
  return (
    <MainLayout navbarBg="bg-white">
      <div className="mt-16 d-none d-xl-block mx-48">
        <BreadCrumb data={breadcrumbsData} />
      </div>
      <div className="my-24 mx-24">
        <div className="mt-40 d-flex align-items-center flex-column">
          <div className="mt-20 md-mt-32 xl-max-w-888 md-max-w-500 w-full">
            <div className="row">
              <div className="col-12 col-xl-6">
                <span className="nowrap d-inline-block border border-info-500 px-8 py-2 radius-4 text-info-500 font-xs bg-info-100">
                  On Going
                </span>
                <div className="mt-8">
                  <h2 className="md-fs-60 " style={{ lineHeight: "72px" }}>
                    Reading Assessment
                  </h2>
                  <div className="w-64">
                    <Divider lineColor={"bg-primary-500"} height="h-2" />
                  </div>
                  <p className="font-xs text-neutral-300 mt-8">
                    by Atlaz Belajar Bahasa
                  </p>
                </div>
                <div className="mt-40">
                  <p className="font-medium text-neutral-200">Accessed on</p>
                  <div className="mt-18 d-flex align-items-center ">
                    <CalendarTodayIcon />{" "}
                    <span className="ml-16">24 January 2022</span>
                  </div>
                  <div className="mt-18 d-flex align-items-center mt-16">
                    <AccessTimeIcon /> <span className="ml-16">10:00 AM</span>
                  </div>
                  <div className="mt-18 d-flex align-items-center mt-16">
                    <TimerOutlinedIcon />{" "}
                    <span className="ml-16">45 Minutes</span>
                  </div>
                  <div className="mt-40">
                    <Link to="/">
                      <button
                        className="font-sm btn-primary d-flex align-items-center"
                        type="button"
                      >
                        <span className="mr-16">Begin Assessment</span>{" "}
                        <ArrowRightAltOutlinedIcon />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6 mt-40 xl-mt-0">
                <div className="border border-secondary-500 radius-14 px-32 py-40">
                  <p className="text-neutral-200 mb-16">Rules & Conditions</p>
                  {rulesCondition.map((r, i) => {
                    return (
                      <div className="d-flex align-items-start " key={i}>
                        <FiberManualRecordIcon className="text-secondary-500 fs-16" />{" "}
                        <span className="ml-24">{r}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
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

export default WelcomeAssessmentOrg;
