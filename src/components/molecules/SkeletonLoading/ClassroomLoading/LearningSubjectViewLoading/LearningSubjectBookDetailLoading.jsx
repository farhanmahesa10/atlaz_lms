import React from "react";
import Skeleton from "react-loading-skeleton";
const LearningSubjectBookDetailLoading = () => {
  return (
    <div>
      <Skeleton width="250px" height={"40px"} />
      <Skeleton width="190px" height={"24px"} />
      <p className="mt-8">
        <Skeleton width="100%" height={"24px"} />
        <Skeleton width="100%" height={"24px"} />
        <Skeleton width="100%" height={"24px"} />
      </p>

      <div className="mt-32 ">
        <div className="mb-16">
          <Skeleton width="180px" height={"40px"} />
        </div>
        <div className="text-danger d-grid grid-cols-2 md-grid-cols-4">
          <Skeleton width="138px" height={"28px"} className="mr-4 " />
          <Skeleton width="138px" height={"28px"} className="mr-4 " />
          <Skeleton width="138px" height={"28px"} className="mr-4 " />
          <Skeleton width="138px" height={"28px"} className="mr-4 " />
        </div>
      </div>
      <div className="mt-56">
        <div className="mb-16">
          <Skeleton width="180px" height={"40px"} />
        </div>
        <div className="  row  gx-0">
          <div className="text-danger d-grid grid-cols-2 md-grid-cols-4">
            <Skeleton width="138px" height={"30px"} className="mr-4 " />
            <Skeleton width="138px" height={"30px"} className="mr-4 " />
            <Skeleton width="138px" height={"30px"} className="mr-4 " />
            <Skeleton width="138px" height={"30px"} className="mr-4 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSubjectBookDetailLoading;
