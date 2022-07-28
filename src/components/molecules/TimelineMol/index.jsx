import React, { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./timelineMol.scss";
import { Divider, ModalTrigger } from "../../atoms";
import moment from "moment";
import { Collapse } from "react-bootstrap";
import ModalAction from "../Modals/ModalAction";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { Can } from "../../../permission";
const TimelineMol = (props) => {
  const { data, onDelete, isLoading } = props;

  return (
    <>
      {isLoading ? (
        <div className="mx-24">
          <Skeleton width={"100px"} height="24px" />
          <Skeleton width={"100%"} height="50px" />
          <Skeleton width={"100%"} height="50px" />
        </div>
      ) : (
        data && data.map((r, i) => {
          return (
            <React.Fragment key={r._id}>
              <TimelineBlock
                data={r}
                onDelete={(data) => {
                  onDelete(data);
                }}
              />
              {i < data.length && (
                <Divider
                  height="h-1"
                  lineColor="bg-secondary-200"
                  parentClassName="mx-24"
                />
              )}
            </React.Fragment>
          );
        })
      )}
    </>
  );
};

const TimelineBlock = ({ data, onDelete }) => {
  return (
    <>
      <Timeline align="left" className="mt-24">
        <h5 className="mb-24">{data.lesson.name}</h5>
        {data.timelineSubtopic.map((r, i) => {
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
                      <span className="nowrap">
                        {moment(r.startDateTime).format("LT")}
                      </span>{" "}
                      <br />
                      <span className="nowrap">
                        {moment(r.startDateTime).format("D MMM")}
                      </span>
                    </div>
                    <BoxTimeline
                      data={r}
                      parentData={data}
                      onDelete={(data) => {
                        onDelete(data);
                      }}
                    />
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

const BoxTimeline = ({ data, parentData, onDelete }) => {
  const params = useParams();
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
      <ModalAction
        id="delete-timeline"
        onSubmit={(data) => {
          onDelete(data);
        }}
      />

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
                "automatic grading" ||
              data.subtopic.assessmentType.toLowerCase() ===
                "reading listening assessment" ? (
                <p className="font-xs-bold ">
                  {moment(data.startDateTime).format("DD MMM Y")}, &nbsp;
                  {moment(data.startDateTime).format("LT")}
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
                "automatic grading" ||
              data.subtopic.assessmentType.toLowerCase() ===
                "reading listening assessment" ? (
                <p className="font-xs-bold ">
                  {moment(data.endDateTime).format("DD MMM Y")}, &nbsp;
                  {moment(data.endDateTime).format("LT")}
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
                  "automatic grading" ||
                data.subtopic.assessmentType.toLowerCase() ===
                  "reading listening assessment"
                  ? getDuration(data.startDateTime, data.endDateTime)
                  : getDuration(data.startDateTime, data.endDateTime)}
              </p>
            </div>
            <div className="d-flex">
              <Can allowAccess="teacher">
                {data.event.toLowerCase() !== "on going" && (
                  <ModalTrigger
                    target="delete-timeline"
                    data={{
                      assessmentId: data._id,
                      timelineId: data.subtopic._id,
                    }}
                  >
                    <button className="text-neutral-500 btn-secondary font-xs mt-8 h-32 mr-8">
                      Cancel
                    </button>
                  </ModalTrigger>
                )}
              </Can>
              <Link
                to={`/classroom/welcome-assessment/${params.classId}/${params.subjectId}/${parentData.lesson._id}/${parentData.topic._id}/${data.subtopic._id}`}
              >
                <button className="text-neutral-500 btn-primary font-xs mt-8 h-32">
                  Go to Assessment
                </button>
              </Link>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default TimelineMol;
