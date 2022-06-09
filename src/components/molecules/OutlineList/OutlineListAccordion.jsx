import React, { useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
const OutlineListAccordion = (props) => {
  const {
    icon,
    title,
    withExpand,
    redirectTo,
    titleClassName,
    defaultShow,
    requestId,
    type,
    isLocked,
  } = props;
  const [expand, setExpand] = useState(defaultShow);
  const navigate = useNavigate();

  useEffect(() => {
    setExpand(defaultShow);
  }, [defaultShow]);

  const handleParentClick = (e) => {
    if (!isLocked) {
      if (redirectTo) {
        navigate(redirectTo);
      }
      if (withExpand) props.onOpened(requestId);

      setExpand(!expand);
    }
  };

  const cutTitle = (text) => {
    let maxText = 999999;
    if (type === "LESSON") {
      maxText = 20;
    } else if (type === "TOPIC") {
      maxText = 22;
    } else if (type === "SUBTOPIC") {
      maxText = 21;
    }

    if (text.length >= maxText) {
      return text.substring(0, maxText) + "...";
    }
    return text;
  };

  return (
    <>
      <div
        className={`h-40 w-full border radius-4 d-flex  align-items-center cursor-pointer
      ${expand && "bg-neutral-600"}`}
        onClick={handleParentClick}
      >
        <div className="px-16 py-16 w-full">
          <div className="w-full h-full d-flex align-items-center justify-content-between ">
            <div className="d-flex align-items-center">
              {props.icon && (
                <div
                  className={`mr-16 ${
                    expand ? "font-bold text-white" : "text-neutral-300"
                  }`}
                >
                  {icon}
                </div>
              )}
              <p
                className={`${titleClassName} ${
                  expand ? "font-bold text-white" : "text-neutral-300"
                }`}
              >
                {cutTitle(title)}
              </p>
            </div>
            <div className="d-flex align-items-center  ">
              <LockIcon
                className={`cursor-pointer text-danger-300 mr-8 position-relative  ${
                  !isLocked && "d-none"
                } `}
              />

              <div
                className={` cursor-pointer ${expand && "transform-180-deg"} ${
                  !withExpand ? "d-none" : " d-flex align-items-center "
                }`}
              >
                <ArrowDropDownIcon
                  className={` ${expand && "font-bold text-white"}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isLocked && (
        <Collapse in={expand}>
          <div className="card card-body ">{props.children}</div>
        </Collapse>
      )}
    </>
  );
};

export default OutlineListAccordion;
