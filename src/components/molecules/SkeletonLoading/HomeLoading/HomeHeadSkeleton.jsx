import React from "react";
import Skeleton from "react-loading-skeleton";
const HomeHeadSkeleton = () => {
  return (
    <>
      <div className="bg-secondary-100 px-24 md-px-48 pb-16 md-pb-24">
        <div className=" m-auto " style={{ maxWidth: "1440px" }}>
          <div className="mb-16 pt-16 d-flex justify-content-center ">
            <div style={{ width: "432px" }}>
              <Skeleton height={"33px"} />
            </div>
          </div>
          <div className="mb-16 md-mb-40 ">
            <Skeleton height={"290px"} style={{ objectFit: "contain" }} />
          </div>
          <div className="text-center  mb-16 md-mb-20">
            <Skeleton width={"250px"} />
          </div>
          <div className="row gx-0  text-center justify-content-center">
            <div className="col h-22 md-h-40 xl-h-45">
              <Skeleton width={"100px"} />
            </div>
            <div className="col h-22 md-h-40 xl-h-45">
              <Skeleton width={"100px"} />
            </div>
            <div className="col h-22 md-h-40 xl-h-45">
              <Skeleton width={"100px"} />
            </div>
            <div className="col h-22 md-h-40 xl-h-45">
              <Skeleton width={"100px"} />
            </div>
            <div className="col h-22 md-h-40 xl-h-45">
              <Skeleton width={"100px"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeadSkeleton;
