import React from "react";
import Skeleton from "react-loading-skeleton";
const SubjectPostMemberLoading = () => {
  return (
    <>
      <div className="col-12 col-md-6 col-xl-4  mb-16">
        <Skeleton width="100%" height="64px" />
      </div>
      <div className="col-12 col-md-6 col-xl-4  mb-16">
        <Skeleton width="100%" height="64px" />
      </div>
      <div className="col-12 col-md-6 col-xl-4  mb-16">
        <Skeleton width="100%" height="64px" />
      </div>
    </>
  );
};

export default SubjectPostMemberLoading;
