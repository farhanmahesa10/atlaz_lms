import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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
  } = props;
  const [expand, setExpand] = useState(defaultShow);
  const navigate = useNavigate();
  const handleParentClick = (e) => {
    if (redirectTo) {
      navigate(redirectTo);
    }
    if (withExpand) props.onOpened(requestId);

    setExpand(!expand);
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
                {title}
              </p>
            </div>
            <div className="d-flex align-items-center  ">
              <LockIcon className="fs-20 text-danger-200" />
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
      <Collapse in={expand}>
        <div className="card card-body ">{props.children}</div>
      </Collapse>
    </>
  );
};

export default OutlineListAccordion;
