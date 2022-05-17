import React from "react";
import Skeleton from "react-loading-skeleton";
const ClassroomSubjectContentLoading = () => {
  return (
    <div className="px-24 md-px-48 py-24">
      <div className="row mt-24">
        <div className="mb-24 col-12 col-md-6 col-lg-4 col-xl-3">
          <div className="h-96 w-full radius-8 position-relative cursor-pointer bg-secondary-100 ">
            <Skeleton width={"100%"} height="100%" />,
          </div>
        </div>
        <div className="mb-24 col-12 col-md-6 col-lg-4 col-xl-3">
          <div className="h-96 w-full radius-8 position-relative cursor-pointer bg-secondary-100 ">
            <Skeleton width={"100%"} height="100%" />,
          </div>
        </div>
        <div className="mb-24 col-12 col-md-6 col-lg-4 col-xl-3">
          <div className="h-96 w-full radius-8 position-relative cursor-pointer bg-secondary-100 ">
            <Skeleton width={"100%"} height="100%" />,
          </div>
        </div>
        <div className="mb-24 col-12 col-md-6 col-lg-4 col-xl-3">
          <div className="h-96 w-full radius-8 position-relative cursor-pointer bg-secondary-100 ">
            <Skeleton width={"100%"} height="100%" />,
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomSubjectContentLoading;
