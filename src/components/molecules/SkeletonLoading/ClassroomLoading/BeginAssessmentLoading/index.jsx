import React from "react";
import Skeleton from "react-loading-skeleton";
const BeginAssessmentLoading = () => {
  return (
    <>
      <div className="min-mt-10" style={{ marginTop: "-5px" }}>
        <Skeleton width={"100%"} height="152px" className="min-mt-10" />
        <div className="max-w-888   px-24 md-px-48" style={{ margin: "auto" }}>
          <Skeleton width={"100%"} height="500px" className="mt-52 " />
        </div>
      </div>
    </>
  );
};

export default BeginAssessmentLoading;
