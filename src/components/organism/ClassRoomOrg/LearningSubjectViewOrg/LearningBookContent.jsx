import React, { useEffect, useRef, useState } from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import { useNavigate } from "react-router-dom";
const LearningBookContent = () => {
  const data = [
    {
      name: "Unit 1 - How's Life?",
      complete: "10/64 Completed",
      topics: [
        {
          name: "Reading ",
          complete: "64/64 Completed",
          subTopics: [
            {
              name: "Reading 1",
              complete: "64/64 Completed",
            },
            {
              name: "Reading 2",
              complete: "64/64 Completed",
            },
          ],
        },
        {
          name: "Listening ",
          complete: "64/64 Completed",
          subTopics: [
            {
              name: "Listening 1",
              complete: "64/64 Completed",
            },
            {
              name: "Listening 2",
              complete: "64/64 Completed",
            },
          ],
        },
      ],
    },
    {
      name: "Unit 2 - How's Life?",
      complete: "20/64 Completed",
      topics: [
        {
          name: "Reading #2",
          complete: "64/64 Completed",
          subTopics: [
            {
              name: "Reading #1",
              complete: "64/64 Completed #",
            },
            {
              name: "Reading #2",
              complete: "64/64 Completed #",
            },
          ],
        },
        {
          name: "Listening #",
          complete: "64/64 Completed #",
          subTopics: [
            {
              name: "Listening #1",
              complete: "64/64 Completed #",
            },
            {
              name: "Listening #2",
              complete: "64/64 Completed #",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {data.map((r, i) => {
        return (
          <div key={i} className="mb-8">
            <Frames data={r} id={i} />
          </div>
        );
      })}
    </>
  );
};

const Frames = (props) => {
  const { id, data } = props;

  return (
    <>
      <Accordion
        id={`lesson-${id}`}
        icon={<LocalLibraryIcon />}
        badgeColor="info-500"
        title={data.name}
        badgeText={data.complete}
        withExpand
        redirectTo="/"
      >
        <div className="ml-20">
          <div className="border-start">
            <div className="ml-20">
              {data.topics.length > 0 &&
                data.topics.map((r, i) => {
                  return (
                    <div className="pt-8" key={`topic-${i}`}>
                      <Accordion
                        id={`topic-${id}-${i}`}
                        icon={<LabelImportantIcon />}
                        badgeColor="success-600"
                        badgeText={r.complete}
                        title={r.name}
                        withExpand
                      >
                        <div className="ml-20">
                          <div className="border-start">
                            <div className="ml-20">
                              {r.subTopics.length > 0 &&
                                r.subTopics.map((res, ind) => {
                                  return (
                                    <div className="pt-8">
                                      <Accordion
                                        id={`subTopics-${id}-${i}-${ind}`}
                                        icon={<WysiwygIcon />}
                                        badgeColor="success-600"
                                        badgeText={res.complete}
                                        title={res.name}
                                        redirectTo="/"
                                      />
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </Accordion>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Accordion>
    </>
  );
};

const Accordion = (props) => {
  // const tesRef = useRef();

  const { icon, title, badgeText, badgeColor, withExpand, redirectTo } = props;
  const [expand, setExpand] = useState(false);
  const navigate = useNavigate();

  const handleParentClick = (e) => {
    if (redirectTo) {
      navigate(redirectTo);
    }

    // tesRef.current.click();
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={`h-80 w-full border radius-4 d-flex  align-items-center ${
          redirectTo && "cursor-pointer"
        } ${expand && "bg-secondary-200"}`}
        onClick={handleParentClick}
      >
        <div className="md-px-32 py-16 w-full">
          <div className="w-full h-full d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div className="h-48 w-48 radius-p-100 bg-secondary-300  align-items-center justify-content-center d-none d-md-flex">
                {icon}
              </div>
              <div className="ml-16">
                <p className="font-bold">{title}</p>
                <p className="font-bold">
                  <span
                    className={`px-8 py-2  text-${badgeColor} border border-${badgeColor} radius-4 font-xs-medium md-font-sm-medium mr-8 mb-16 md-mr-16`}
                  >
                    {badgeText}
                  </span>
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <LockOpenIcon className="cursor-pointer mr-16" />
              <div
                id={`expand-target-${props.id}`}
                className={` mr-16 cursor-pointer ${
                  expand && "transform-180-deg"
                } ${!withExpand ? "d-none" : " d-flex align-items-center"}`}
                data-bs-toggle="collapse"
                data-bs-target={`#collapseTarget-${props.id}`}
                aria-expanded="false"
                aria-controls={`collapseTarget-${props.id}`}
                onClick={(e) => {
                  handleChildClick(e);
                  setExpand(expand ? false : true);
                }}
              >
                <ArrowDropDownIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse" id={`collapseTarget-${props.id}`}>
        <div className="card card-body ">{props.children}</div>
      </div>
    </>
  );
};

export default LearningBookContent;
