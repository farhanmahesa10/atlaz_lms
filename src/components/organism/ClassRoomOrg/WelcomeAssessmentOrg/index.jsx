import React, { useEffect, useRef } from "react";
import { BreadCrumb, Divider, GlobalToast, ModalTrigger } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  ModalBeginAssessment,
  OutlineList,
  WelcomeAssessmentLoading,
} from "../../../molecules";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { Link } from "react-router-dom";
import { useWelcomeAssessment } from "../../../../services";
import moment from "moment";
import { Can } from "../../../../permission";
const WelcomeAssessmentOrg = () => {
  const {
    breadcrumbsData,
    modalText,
    params,
    data,
    isLoading,
    handleDuration,
    handleBadgeColor,
  } = useWelcomeAssessment();

  const createMarkup = () => {
    return { __html: data.subtopic.preparationText };
  };

  const rulesRef = useRef();
  useEffect(() => {
    if (rulesRef.current) {
      let ul = rulesRef.current.querySelectorAll("ul");
      let ol = rulesRef.current.querySelectorAll("ol");

      if (ul) {
        ul.forEach((r) => {
          // r.style.listStyleType = "inherit";
          r.style.paddingLeft = "20px";
        });
      }
      if (ol) {
        ol.forEach((r) => {
          // r.style.listStyleType = "inherit";
          r.style.paddingLeft = "20px";
        });
      }
    }
  });

  return (
    <MainLayout navbarBg="bg-white">
      {isLoading ? (
        <WelcomeAssessmentLoading />
      ) : (
        <>
          <GlobalToast />
          <ModalBeginAssessment id="modal-begin-assessment" />
          <div className="mt-16 d-none d-xl-block mx-48">
            <BreadCrumb data={breadcrumbsData} />
          </div>
          <div className="my-24 mx-24">
            <div className="mt-40 d-flex align-items-center flex-column">
              <div className="mt-20 md-mt-32 xl-max-w-888 md-max-w-500 w-full">
                <div className="row">
                  <div className="col-12 col-xl-6">
                    <span
                      className={`nowrap d-inline-block border ${handleBadgeColor(
                        data.status
                      )} px-8 py-2 radius-4 font-xs `}
                    >
                      {data.status}
                    </span>
                    <div className="mt-8">
                      <h2 className="md-fs-60 " style={{ lineHeight: "72px" }}>
                        {data.subtopic.name}
                      </h2>
                      <div className="w-64">
                        <Divider lineColor={"bg-primary-500"} height="h-2" />
                      </div>
                      <p className="font-xs text-neutral-300 mt-8">
                        by {data.subject.author}
                      </p>
                    </div>
                    <div className="mt-40">
                      <p className="font-medium text-neutral-200">
                        Accessed on
                      </p>
                      <div className="mt-18 d-flex align-items-center ">
                        <CalendarTodayIcon />{" "}
                        <span className="ml-16">
                          {data.assessment
                            ? moment(data.assessment.startDateTime).format(
                                "D MMMM Y"
                              )
                            : "-"}
                        </span>
                      </div>
                      <div className="mt-18 d-flex align-items-center mt-16">
                        <AccessTimeIcon />{" "}
                        <span className="ml-16">
                          {data.assessment
                            ? moment(data.assessment.startDateTime).format("LT")
                            : "-"}
                        </span>
                      </div>
                      <div className="mt-18 d-flex align-items-center mt-16">
                        <TimerOutlinedIcon />{" "}
                        <span className="ml-16">
                          {data.assessment
                            ? handleDuration(
                                data.assessment.startDateTime,
                                data.assessment.endDateTime
                              )
                            : "-"}
                        </span>
                      </div>
                      <div className="mt-40">
                        {data.status.toLowerCase() === "on going" ? (
                          <Can allowAccess="student">
                            <Link
                              to={`/classroom/begin-assessment/${params.classId}/${params.subjectId}/${params.lessonId}/${params.topicId}/${params.id}`}
                            >
                              <button
                                className="font-sm btn-primary d-flex align-items-center"
                                type="button"
                              >
                                <span className="mr-16">Begin Assessment</span>{" "}
                                <ArrowRightAltOutlinedIcon />
                              </button>
                            </Link>
                          </Can>
                        ) : (
                          <ModalTrigger
                            target="modal-begin-assessment"
                            data={modalText}
                          >
                            <button
                              className="font-sm btn-primary d-flex align-items-center"
                              type="button"
                            >
                              <span className="mr-16">Begin Assessment</span>
                              <ArrowRightAltOutlinedIcon />
                            </button>
                          </ModalTrigger>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 h-full mt-40 xl-mt-0">
                    <div className="border  border-secondary-500 radius-14 px-32 py-40">
                      <p className="text-neutral-200 mb-16">
                        Rules & Conditions
                      </p>
                      <div
                        dangerouslySetInnerHTML={createMarkup()}
                        className="h-350 custom-scroll "
                        ref={rulesRef}
                        style={{ overflow: "auto" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-24 md-mt-40 d-flex w-full justify-content-between justify-content-md-center">
                <div className="d-flex  md-mr-68 w-148">
                  {!data.prev ? (
                    <>
                      <button className="btn btn-disable d-flex justify-content-center align-items-center w-28 h-28 p-0 m-0">
                        <ArrowBackIcon className="fs-20" />
                      </button>
                      <div className="ml-8 d-flex justify-content-between flex-column ">
                        <span className="font-xs text-neutral-300">Back</span>
                        <span className="font-xs text-neutral-300">-</span>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={`/classroom/welcome-assessment/${params.classId}/${params.subjectId}/${params.lessonId}/${params.topicId}/${data.prev._id}`}
                      className="d-flex"
                    >
                      <button className="btn btn-outline d-flex justify-content-center align-items-center w-28 h-28 p-0 m-0">
                        <ArrowBackIcon className="fs-20" />
                      </button>
                      <div className="ml-8 d-flex justify-content-between flex-column ">
                        <span className="font-xs text-neutral-300">Back</span>
                        <span className="font-xs text-neutral-400 text-end">
                          {data.prev.name.length > 12
                            ? data.prev.name.substring(0, 12) + "..."
                            : data.prev.name}
                        </span>
                      </div>
                    </Link>
                  )}
                </div>
                <div className="d-flex md-ml-68 w-148 justify-content-end">
                  {!data.next ? (
                    <>
                      <div className="mr-8 d-flex justify-content-between flex-column ">
                        <span className="font-xs text-neutral-300">Next</span>
                        <span className="font-xs text-neutral-400">-</span>
                      </div>
                      <button className="btn btn-disable d-flex justify-content-center align-items-center w-28 h-28 p-0 m-0">
                        <ArrowForwardIcon className="fs-20" />
                      </button>
                    </>
                  ) : (
                    <Link
                      to={`/classroom/welcome-assessment/${params.classId}/${params.subjectId}/${params.lessonId}/${params.topicId}/${data.next._id}/`}
                      className="d-flex"
                    >
                      <div className="mr-8 d-flex justify-content-between flex-column ">
                        <span className="font-xs text-neutral-300 text-end">
                          Next
                        </span>
                        <span className="font-xs text-neutral-400">
                          {data.next.name.length > 12
                            ? data.next.name.substring(0, 12) + "..."
                            : data.next.name}
                        </span>
                      </div>
                      <button className="btn btn-outline d-flex justify-content-center align-items-center w-28 h-28 p-0 m-0">
                        <ArrowForwardIcon className="fs-20" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <OutlineList
            classId={params.classId}
            subjectId={params.subjectId}
            lessonId={params.lessonId}
            topicId={params.topicId}
            subtopicId={params.id}
          />
        </>
      )}
    </MainLayout>
  );
};

export default WelcomeAssessmentOrg;
