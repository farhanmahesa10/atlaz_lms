import React from "react";
import Skeleton from "react-loading-skeleton";

const WhatTheySayLoading = () => {
  return (
    <>
      <div className=" mt-48 md-mt-64 xl-mt-104">
        <div className="text-center mb-54">
          <h3 className="m-0">
            <Skeleton width={"250px"} height="30px" />
          </h3>
        </div>
        <div className=" row gx-0 ">
          <div className="col-4 pr-20">
            <Skeleton height={"256px"} width="100%" />
          </div>
          <div className="col-4 pr-20">
            <Skeleton height={"256px"} width="100%" />
          </div>
          <div className="col-4">
            <Skeleton height={"256px"} width="100%" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatTheySayLoading;
