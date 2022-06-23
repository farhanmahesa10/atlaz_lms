import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Can } from "../../../permission";
import { useGlobalFunction } from "../../../services";
import { defConfig, POST } from "../../../config/RestAPI";
const BookDetailContentAccordion = (props) => {
  const {
    icon,
    title,
    badgeText,
    badgeColor,
    withExpand,
    redirectTo,
    redirectIcon,
    parentRedirect,
    requestId,
    type,
    classId,
  } = props;
  const [expand, setExpand] = useState(false);

  const [isLocked, setIsLocked] = useState(props.isLocked);
  const [isLockedLoading, setIsLockedLoading] = useState(false);

  const navigate = useNavigate();

  const { getUserInfo } = useGlobalFunction();
  const user = getUserInfo();

  const isTeacher = () => {
    if (user.roleData.name.toLowerCase() === "teacher") {
      return true;
    }
    return false;
  };

  const handleParentClick = (e) => {
    if (redirectTo && parentRedirect) {
      navigate(redirectTo);
    }

    if (withExpand) {
      // props.onOpened(requestId);
      if (isTeacher()) {
        props.onOpened(requestId);
        setExpand(!expand);
      } else {
        if (!isLocked) {
          props.onOpened(requestId);
          setExpand(!expand);
        }
      }
    }
  };

  const handleLockCLicked = (e) => {
    if (isTeacher()) {
      e.stopPropagation();
      setIsLockedLoading(true);
      let req = {
        type: type,
        targetId: requestId,
        classlistId: classId,
      };
      POST("/client/classrooms/book/change_access", req, defConfig())
        .then((r) => {
          setIsLocked(!isLocked);
          setIsLockedLoading(false);
        })
        .catch((err) => {
          setIsLockedLoading(false);
        });
    }
  };

  return (
    <>
      <div
        className={`h-80 w-full border radius-4 d-flex   align-items-center 
        ${expand && "bg-secondary-200"}  
        ${!isTeacher() && isLocked ? "cursor-disabled" : "cursor-pointer "}`}
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
                {badgeText && (
                  <p className="font-bold">
                    <span
                      className={`px-8 py-2  ${badgeColor} radius-4 font-xs-medium md-font-sm-medium mr-8 mb-16 md-mr-16`}
                    >
                      {badgeText}
                    </span>
                  </p>
                )}
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div
                className={` mr-16 cursor-pointer ${
                  expand && "transform-180-deg"
                } ${!withExpand ? "d-none" : " d-flex align-items-center"}`}
                onClick={(e) => {
                  handleParentClick();
                }}
              >
                <ArrowDropDownIcon />
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

export default BookDetailContentAccordion;
