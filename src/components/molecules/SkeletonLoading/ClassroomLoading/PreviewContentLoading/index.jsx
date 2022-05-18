import React from "react";
import Skeleton from "react-loading-skeleton";
const PreviewContentLoading = () => {
  return (
    <>
      <div className="row justify-content-center mx-12 md-mx-24">
        <div className="col-md-8 col-12 mb-24">
          <div className=" radius-14 ">
            <Skeleton width="100%" height="104px" />
          </div>
        </div>
        <div className="col-md-8 col-12 mb-50">
          <div className=" radius-14 ">
            <Skeleton width="100%" height="500px" />
          </div>
        </div>
        <div className="col-md-8 col-12 mb-100">
          <div className=" radius-14 ">
            <Skeleton width="100%" height="30px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewContentLoading;
