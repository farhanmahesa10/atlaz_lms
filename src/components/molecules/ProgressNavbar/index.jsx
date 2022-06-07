import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, ModalTrigger } from "../../atoms";
import { ModalLink } from "../../molecules";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
const ProgressNavbar = (props) => {
  const {
    progressSetup,
    filledQuestions,
    scrollToSection,
    subTopicData,
    redirectLink,
  } = props;
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let totalQuestion = progressSetup.length;
    let pointPerQuestion = 100 / totalQuestion;
    let tempProggress = 0;
    progressSetup.map((r) => {
      if (r.isFilled === true) {
        tempProggress += pointPerQuestion;
        setProgress(tempProggress);
      }
    });
  }, [progressSetup]);
  return (
    <>
      <ModalLink id="close-assessment" />
      <div
        className=" position-fixed  pb-24 w-full bg-white"
        style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)", zIndex: "9" }}
      >
        <div className="d-flex align-items-center py-24 px-48">
          <div>
            <h6 className=" mr-32 nowrap">{subTopicData.name}</h6>
          </div>
          <div className=" w-full bg-info-100 h-8 radius-8 progress">
            <div
              className={`radius-8 bg-info-500 w-p-${progress} h-8 progress-bar`}
              role="progressbar"
            ></div>
          </div>
          <div className="d-flex align-items-center ml-32 text-neutral-300 cursor-pointer hover-text-neutral-200">
            {subTopicData.assessmentType === "Manual Grading" ? (
              <ModalTrigger
                target="close-assessment"
                data={{
                  redirect: { redirectLink },
                  title: "Cancel proccess",
                  message:
                    "Continue to cancel process? Once canceled, any changes will be lost.",
                }}
              >
                <CloseIcon />
              </ModalTrigger>
            ) : (
              <>
                <span className="text-neutral-300 nowrap mr-8">10:00</span>{" "}
                <TimerOutlinedIcon className="fs-20" />
              </>
            )}
          </div>
        </div>
        <div className=" pb-24 px-48">
          <Divider lineColor="bg-secondary-500" height="h-1" />
        </div>

        <div className="collapse mb-8" id="collapseExample">
          <div className="card card-body">
            <div className="row justify-content-start px-48 ">
              {filledQuestions.map((r, i) => {
                return (
                  <div
                    className={`h-40 w-40 d-flex mt-12 mx-16  justify-content-center align-items-center radius-4  cursor-pointer ${
                      r.isFilled
                        ? "bg-neutral-500 text-white"
                        : "bg-secondary-100"
                    }`}
                    key={i}
                    onClick={() => {
                      scrollToSection(r.name);
                    }}
                  >
                    <p>{i + 1}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-center cursor-pointer text-neutral-200 hover-text-neutral-300 cursor-pointer"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <ExpandMoreIcon />
        </div>
      </div>
    </>
  );
};

export default ProgressNavbar;
