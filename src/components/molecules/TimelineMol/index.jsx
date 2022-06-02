import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./timelineMol.scss";
import { Divider } from "../../atoms";
import moment from "moment";
import { Collapse } from "react-bootstrap";
const TimelineMol = (props) => {
  const { data } = props;

  return (
    <>
      {data.map((r, i) => {
        return (
          <React.Fragment key={r._id}>
            <TimelineBlock data={r} />
            {i < data.length && (
              <Divider
                height="h-1"
                lineColor="bg-secondary-200"
                parentClassName="mx-24"
              />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

const TimelineBlock = ({ data }) => {
  return (
    <>
      <Timeline align="left" className="mt-24">
        <h5 className="mb-24">{data.lesson.name}</h5>
        {data.timelineSubtopic.map((r, i) => {
          console.log(r);
          return (
            <React.Fragment key={r._id}>
              <TimelineItem>
                <TimelineSeparator className="d-none d-md-flex">
                  {i < 1 ? (
                    <RadioButtonCheckedIcon className="text-info-500" />
                  ) : (
                    <RadioButtonUncheckedIcon className="text-neutral-200" />
                  )}
                  <TimelineConnector className="h-24" />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="d-flex align-items-start">
                    <div className="mr-16 w-70 font-sm-medium text-neutral-300">
                      {moment(r.dateEvent).format("LT")} <br />
                      {moment(r.dateEvent).format("D MMM")}
                    </div>
                    <BoxTimeline data={r} />
                  </div>
                </TimelineContent>
              </TimelineItem>
            </React.Fragment>
          );
        })}
        <TimelineItem>
          <TimelineSeparator>
            <RadioButtonUncheckedIcon className="text-neutral-200" />
          </TimelineSeparator>
        </TimelineItem>
      </Timeline>
    </>
  );
};

const BoxTimeline = ({ data }) => {
  const [extend, setExtend] = useState(false);

  const getDuration = (start, end) => {
    let startMoment = moment(start);
    let endMoment = moment(end);
    let duration = moment.duration(endMoment.diff(startMoment));
    let day = duration._data.days;
    let hour = duration._data.hours;
    let minute = duration._data.minutes;
    if (startMoment < endMoment) {
      let result = `${day > 0 ? day : "0"}d ${hour > 0 ? hour : "0"}hr ${
        minute > 0 ? minute : "0"
      }min`;
      return result;
      // console.log(result);
    } else {
      let result = `0d 0hr 0min`;
      return result;
    }
    // console.log(day + "d ", hour + "hr ", minute + "min");
  };

  return (
    <>
      <div
        style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}
        className="text-neutral-300 p-12 cursor-pointer radius-4 border border-secondary-500 bg-secondary-100 w-full"
        onClick={() => setExtend(!extend)}
      >
        <div className="d-flex justify-content-between">
          <p className="font-xs-bold md-font-sm-bold xl-font-bold">
            {data.subtopic.name}
          </p>
          <ArrowDropDownIcon className={extend ? "transform-180-deg" : ""} />
        </div>

        <Collapse in={extend}>
          <div>
            <Divider
              height="h-1"
              lineColor="bg-secondary-500"
              parentClassName="mb-18 mt-12"
            />
            <div className="mb-16">
              <p className="font-xs text-neutral-300">Start date & time</p>
              {data.subtopic.assessmentType.toLowerCase() ===
              "automatic grading" ? (
                <p className="font-xs-bold ">
                  {moment(data.assessmentDate).format("DD MMM Y")}, &nbsp;
                  {moment(data.startTime).format("LT")}
                </p>
              ) : (
                <p className="font-xs-bold ">
                  {moment(data.startDateTime).format("DD MMM Y, LT")}
                </p>
              )}
            </div>

            <div className="mb-16">
              <p className="font-xs text-neutral-300">End date & time</p>
              {data.subtopic.assessmentType.toLowerCase() ===
              "automatic grading" ? (
                <p className="font-xs-bold ">
                  {moment(data.assessmentDate).format("DD MMM Y")}, &nbsp;
                  {moment(data.endTime).format("LT")}
                </p>
              ) : (
                <p className="font-xs-bold ">
                  {moment(data.endDateTime).format("DD MMM Y, LT")}
                </p>
              )}
            </div>
            <div className="">
              <p className="font-xs text-neutral-300">Duration</p>
              <p className="font-xs-bold ">
                {data.subtopic.assessmentType.toLowerCase() ===
                "automatic grading"
                  ? getDuration(data.startTime, data.endTime)
                  : getDuration(data.startDateTime, data.endDateTime)}
              </p>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default TimelineMol;
