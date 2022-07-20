import React from "react";
import NoteBookIcon from "../../../../assets/images/notebook-icon.png";
import SchoolIcon from "@mui/icons-material/School";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useGlobalFunction } from "../../../../services";

const LessonPlanCard = (props) => {
  const { data } = props
  const { getUserInfo } = useGlobalFunction();
  const user = getUserInfo();

  return (
    <div
      className="p-16 border-secondary-500 bg-secondary-100 radius-8"
      style={{ border: "2px solid" }}
    >
      <div className="d-md-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center">
        <div className="d-flex ">
          <div
            className="p-8 border-secondary-500 radius-4 d-none d-md-block"
            style={{ border: "2px solid" }}
          >
            <div className="h-32 ">
              <img src={NoteBookIcon} alt="" />
            </div>
          </div>
          <div className="md-ml-16 ">
            <h6>{data.subject.name ? data.subject.name : ''}</h6>
            <div className="d-flex flex-column flex-md-row mt-16 md-mt-0">
              <p className="d-flex align-items-center text-neutral-300 ">
                <SchoolIcon className="fs-20" />
                <span className="pl-8">{data.subject.level ? data.subject.level : ''}</span>
              </p>
              <p className="d-flex align-items-center text-neutral-300 md-ml-24 mt-8 md-mt-0">
                <SupervisorAccountIcon className="fs-20" />
                <span className="pl-8">{data.subject.author ? data.subject.author : ''}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 xl-mt-0">
          <a href={user.role <=5 ? data.subject.lessonPlanSchool : (user.role === 7 ? data.subject.lessonPlanPublic : '')} target="_blank" className="btn-primary font-normal w-full xl-w-auto">
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default LessonPlanCard;
