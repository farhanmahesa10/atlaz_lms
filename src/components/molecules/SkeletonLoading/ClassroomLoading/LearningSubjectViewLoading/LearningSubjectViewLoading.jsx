import React from "react";
import Skeleton from "react-loading-skeleton";
const LearningSubjectViewLoading = () => {
  return (
    <>
      <div className="w-full row  align-items-center ">
        <div className=" col-12 col-md-6 text-center ">
          <Skeleton width="300px" height="300px" />
        </div>

        <div className="col-12 col-md-6 mt-24 md-mt-0 md-pl-24">
          <div className="mb-32">
            <Skeleton height="60px" />
          </div>
          <div className="mb-24">
            <div className=" align-items-center mt-8 mb-16 wl">
              <Skeleton height="30px" width="100%" />
            </div>
            <div className=" align-items-center  mb-16">
              <Skeleton />
            </div>
            <div className=" align-items-center  ">
              <Skeleton />
            </div>
          </div>

          <Skeleton />
        </div>
      </div>

      {/* progress */}

      {/* <div className="mt-40">
        <div className=" md-h-64  px-24 py-16 md-py-0 radius-8">
          <Skeleton height="64px" width="100%" />
        </div>
      </div> */}
    </>
  );
};

export default LearningSubjectViewLoading;
