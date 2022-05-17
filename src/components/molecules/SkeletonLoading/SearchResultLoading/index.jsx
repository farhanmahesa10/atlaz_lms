import React from "react";
import Skeleton from "react-loading-skeleton";
const SearchResultLoading = () => {
  return (
    <>
      <div
        className=" row justify-content-center position-relative"
        style={{ zIndex: "-10" }}
      >
        <div className="col-6  col-md-4 col-xl-2 col-xl-2 d-flex justify-content-center mb-20 ">
          <Skeleton width={"160px"} height="160px" />
        </div>
        <div className="col-6  col-md-4 col-xl-2 col-xl-2 d-flex justify-content-center mb-20 ">
          <Skeleton width={"160px"} height="160px" />
        </div>
        <div className="col-6  col-md-4 col-xl-2 col-xl-2 d-flex justify-content-center mb-20 ">
          <Skeleton width={"160px"} height="160px" />
        </div>
        <div className="col-6  col-md-4 col-xl-2 col-xl-2 d-flex justify-content-center mb-20 ">
          <Skeleton width={"160px"} height="160px" />
        </div>
        <div className="col-6  col-md-4 col-xl-2 col-xl-2 d-flex justify-content-center mb-20 ">
          <Skeleton width={"160px"} height="160px" />
        </div>
        <div className="col-6  col-md-4 col-xl-2 col-xl-2 d-flex justify-content-center mb-20 ">
          <Skeleton width={"160px"} height="160px" />
        </div>
      </div>
      <div className="mt-16">
        <Skeleton width={"100%"} height="40px" />
      </div>
    </>
  );
};

export default SearchResultLoading;
