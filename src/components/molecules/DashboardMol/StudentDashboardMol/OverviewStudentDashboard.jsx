import React from "react";
import Skeleton from "react-loading-skeleton";
import { CircularProgress } from "../../../atoms";

const OverviewStudentDashboard = (props) => {
  const { data, isLoading } = props;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full radius-14 border border-secondary-500 h-148 xl-h-auto md-h-148 d">
      <div className="h-full md-h-auto  d-flex d-xl-block flex-column  justify-content-between ">
        <div className=" pt-16 xl-py-12 px-24 md-px-32">
          <h6 className="xl-h5">Overview</h6>
          <p className="font-xs text-neutral-300 xl-font-sm">This week</p>
        </div>
        <div className=" pb-16 xl-py-12 px-24 md-px-32 d-md-none">
          <p className="font-sm-bold text-success-600">0/0 Completed</p>
          <p className="font-xs md-font-xs-medium text-neutral-200">
            Assessment
          </p>
        </div>
      </div>
      <div className=" px-32 pb-24">
        <div className="d-none d-md-block md-pb-12 ">
          <Progress
            strokeColor="#1bb184"
            titleColor="success-600"
            subTitle="Assessment"
            total={120}
            complete={100}
          />
        </div>
        <div className="d-none d-xl-block ">
          <Progress
            strokeColor="#8ECFEE"
            titleColor="info-500"
            subTitle="Assessment to grading"
            total={120}
            complete={20}
          />
          <Progress
            strokeColor="#FDBF47"
            titleColor="primary-500"
            subTitle="Owned book"
            total={120}
            complete={50}
          />
        </div>
      </div>
    </div>
  );
};

const Progress = (props) => {
  const { strokeColor, titleColor, subTitle, total, complete } = props;
  return (
    <div className="mt-24 d-flex justify-content-between align-items-center">
      <div>
        <p className={`font-sm-bold md-h6 xl-font-bold text-${titleColor}`}>
          {complete}/{total} Completed
        </p>
        <p className="font-sm-bold md-font-xs-medium xl-font-sm text-neutral-200">
          {subTitle}
        </p>
      </div>
      <div>
        <CircularProgress
          strokeWidth="4"
          sqSize="56"
          percentage={Math.round((complete / total) * 100)}
          strokeColor={strokeColor}
        />
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="w-full radius-14  h-148 xl-h-367 md-h-148 ">
      <Skeleton width="100%" height={"100%"} />
    </div>
  );
};
export default OverviewStudentDashboard;
