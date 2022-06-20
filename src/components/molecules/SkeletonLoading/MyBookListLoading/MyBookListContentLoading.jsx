import React from "react";
import Skeleton from "react-loading-skeleton";

const MyBookListContentLoading = () => {
  return (
    <div className="mt-24">
      <div className="row">
        <div className="col-6 col-sm-4 col-lg-3  mb-24">
          <div className="w-127 md-w-188 h-279">
            <Skeleton height={"100%"} width="100%" />
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-3  mb-24">
          <div className="w-127 md-w-188 h-279">
            <Skeleton height={"100%"} width="100%" />
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-3  mb-24">
          <div className="w-127 md-w-188 h-279">
            <Skeleton height={"100%"} width="100%" />
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-3  mb-24">
          <div className="w-127 md-w-188 h-279">
            <Skeleton height={"100%"} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookListContentLoading;
