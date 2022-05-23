import React from "react";
import { CircularProgress } from "../../../atoms";

const OverviewStudentDashboard = () => {
  return (
    <div className="w-full radius-14 border border-secondary-500 h-164 xl-h-auto md-h-148 d-flex d-xl-block flex-column  justify-content-between ">
      <div className="py-16 xl-py-12 px-24 md-px-32">
        <h6 className="xl-h5">Overview</h6>
        <p className="font-xs text-neutral-300 xl-font-sm">This week</p>
      </div>
      <div className="py-16 xl-py-12 px-24 md-px-32 d-xl-none">
        <p className="font-sm-bold text-success-600">0/0 Completed</p>
        <p className="font-xs md-font-xs-medium text-neutral-200">Assessment</p>
      </div>
      <div className="d-none d-xl-block px-32 pb-24">
        <div className="mt-24 d-flex justify-content-between">
          <div>
            <p className="font-sm-bold text-success-600">0/0 Completed</p>
            <p className="font-xs md-font-xs-medium text-neutral-200">
              Assessment
            </p>
          </div>
          <div>
            <CircularProgress
              strokeWidth="3"
              sqSize="56"
              percentage={90}
              strokeColor={"#1bb184"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewStudentDashboard;
