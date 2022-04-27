import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./timelineMol.scss";
import { Divider } from "../../atoms";
const TimelineMol = () => {
  return (
    <Timeline align="left">
      <h5 className="mb-24">11 April 2022</h5>
      <TimelineItem>
        <TimelineSeparator className="d-none d-md-flex">
          <RadioButtonCheckedIcon className="text-info-500" />
          <TimelineConnector className="h-70" />
        </TimelineSeparator>
        <TimelineContent>
          <div className="d-flex align-items-start">
            <div className="mr-16"> 10:00</div>
            <Accordion
              style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}
              className="text-neutral-300 radius-4 border border-secondary-500 bg-secondary-100 w-full"
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="pl-24 "
              >
                <div>
                  <p className="font-xs-bold md-font-sm-bold xl-font-bold">
                    Reading Assessment
                  </p>
                  <p className="font-xs md-font-sm">
                    Unit 1 - Meet My New Friends!
                  </p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Divider
                  height="h-1"
                  lineColor="bg-secondary-500"
                  parentClassName="mb-18"
                />
                <div className="mb-16">
                  <p className="font-xs text-neutral-300">Start date & time</p>
                  <p className="font-xs-bold ">11 Apr 2022, 10:00 AM</p>
                </div>

                <div className="mb-16">
                  <p className="font-xs text-neutral-300">End date & time</p>
                  <p className="font-xs-bold ">11 Apr 2022, 10:10 AM</p>
                </div>
                <div className="">
                  <p className="font-xs text-neutral-300">Duration</p>
                  <p className="font-xs-bold ">0d 0hr 10min</p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className="d-none d-md-block">
          <RadioButtonCheckedIcon className="text-info-500" />
        </TimelineSeparator>
        <TimelineContent>
          <div className="d-flex align-items-start">
            <div className="mr-16"> 10:00</div>
            <Accordion
              style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}
              className="text-neutral-300 radius-4 border border-secondary-500 bg-secondary-100 w-full"
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="pl-24 "
              >
                <div>
                  <p className="font-bold">Reading Assessment</p>
                  <p>Unit 1 - Meet My New Friends!</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Divider
                  height="h-1"
                  lineColor="bg-secondary-500"
                  parentClassName="mb-18"
                />
                <div className="mb-16">
                  <p className="font-xs text-neutral-300">Start date & time</p>
                  <p className="font-xs-bold ">11 Apr 2022, 10:00 AM</p>
                </div>

                <div className="mb-16">
                  <p className="font-xs text-neutral-300">End date & time</p>
                  <p className="font-xs-bold ">11 Apr 2022, 10:10 AM</p>
                </div>
                <div className="">
                  <p className="font-xs text-neutral-300">Duration</p>
                  <p className="font-xs-bold ">0d 0hr 10min</p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineMol;
