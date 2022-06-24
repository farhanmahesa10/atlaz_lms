import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import moment from "moment";
import { useGlobalFunction } from "../../../../services";
const WelcomeStudentDashboard = () => {
  const { getUserInfo } = useGlobalFunction();
  return (
    <div
      className="w-full  border border-secondary-500 radius-14  h-148  d-flex flex-column  justify-content-between"
      style={{ backgroundColor: "#FFF8E6" }}
    >
      <div className="py-16 xl-py-12 px-24 md-px-32">
        <div className="radius-p-100 h-44 w-44  d-flex align-items-center justify-content-center">
          <img
            src={getUserInfo().avatar}
            alt=""
            className="h-p-100 w-p-100 radius-p-100"
          />
        </div>
      </div>
      <div className="py-16 xl-py-12 px-24 md-px-32">
        <h5 className="font-sm-bold md-h6 xl-h5">
          {moment().format("D MMM YYYY")}
        </h5>
        <p className="font-xs md-font-xs-medium text-neutral-200">
          {moment().format("dddd")}
        </p>
      </div>
    </div>
  );
};

export default WelcomeStudentDashboard;
