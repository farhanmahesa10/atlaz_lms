import React from "react";
import Skeleton from "react-loading-skeleton";

const ActiveAssessmentSubtopicLoading = () => {
  return (
    <>
      <div className="col-12 col-md-6 col-xl-3">
        <Skeleton width={"100%"} height="32px" />
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <Skeleton width={"100%"} height="32px" />
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <Skeleton width={"100%"} height="32px" />
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <Skeleton width={"100%"} height="32px" />
      </div>
    </>
  );
};

export default ActiveAssessmentSubtopicLoading;
