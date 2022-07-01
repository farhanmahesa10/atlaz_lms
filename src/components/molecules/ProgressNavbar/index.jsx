import React, { useEffect, useMemo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, ModalTrigger } from "../../atoms";
import { ModalLink } from "../../molecules";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import moment from "moment";
const ProgressNavbar = (props) => {
  const {
    progressSetup,
    filledQuestions,
    scrollToSection,
    subTopicData,
    redirectLink,
    assessmentData,
  } = props;
  const [timertStr, setTimertStr] = useState("00:00");
  const [progress, setProgress] = useState(0);
  const timer = useMemo(() => {
    return timertStr;
  }, [timertStr]);

  useEffect(() => {
    let totalQuestion = progressSetup.length;
    let pointPerQuestion = 100 / totalQuestion;
    let tempProggress = 0;
    progressSetup.map((r) => {
      if (r.isFilled === true) {
        tempProggress += pointPerQuestion;
      }
    });
    if (tempProggress < 1) {
      setProgress(0);
    }
    setProgress(Math.round(tempProggress));
  }, [progressSetup]);

  useEffect(() => {
    if (assessmentData) {
      const interval = setInterval(() => {
        handleDuration();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [assessmentData]);

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    let result = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    setTimertStr(result);
  };

  const handleDuration = () => {
    let start = moment().format();
    let end = moment(assessmentData.endDateTime).format();
    // let end = moment(assessmentData.endDateTime).format();

    if (start && end) {
      let startMoment = moment(start);
      let endMoment = moment(end);
      let duration = moment.duration(endMoment.diff(startMoment));
      if (duration._milliseconds < 1) {
        props.onAutoSubmit();
      }
      if (duration._milliseconds > 0) {
        millisToMinutesAndSeconds(duration._milliseconds);
      } else {
        setTimertStr("00:00");
      }
    }
  };

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
            {subTopicData.assessmentType === "Manual Grading" ||
            subTopicData.assessmentType.toLowerCase() ===
              "speaking writing assessment" ? (
              <ModalTrigger
                target="close-assessment"
                data={{
                  redirect: redirectLink,
                  title: "Cancel proccess",
                  message:
                    "Continue to cancel process? Once canceled, any changes will be lost.",
                }}
              >
                <CloseIcon />
              </ModalTrigger>
            ) : (
              <>
                <span className="text-neutral-300 nowrap mr-8">{timer}</span>
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
