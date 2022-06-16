import React from "react";
import Skeleton from "react-loading-skeleton";
const LessonPreviewLoading = () => {
  return (
    <>
      <div className="mt-16 d-none d-xl-block mx-48">
        <Skeleton width="250px" height="16px" />
      </div>
      <div className="my-24 mx-24">
        <div className="mt-40 d-flex align-items-center flex-column">
          <Skeleton width="350px" height="40px" />
          <div className="w-64">
            {/* <Divider lineColor="bg-primary-500" height="h-2" /> */}
          </div>
          <div className="mt-20 md-mt-16">
            <Skeleton width="170px" height="20px" />
          </div>
          <div className="mt-16 md-mt-24">
            <Skeleton width="150px" height="40px" />
          </div>
          <div className="mt-20 md-mt-32 ">
            <Skeleton width="888px" height="500px" />
          </div>
          <div className="mt-24 md-mt-40 d-flex w-full justify-content-between justify-content-md-center">
            <div className="d-flex  md-mr-68 w-148">
              <Skeleton width="70px" height="28px" />
            </div>
            <div className="d-flex md-ml-68 w-148 justify-content-end">
              <Skeleton width="70px" height="28px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonPreviewLoading;
