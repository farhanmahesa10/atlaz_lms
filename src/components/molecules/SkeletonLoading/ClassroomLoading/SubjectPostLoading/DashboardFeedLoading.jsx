import React from "react";
import Skeleton from "react-loading-skeleton";

const DashboardFeedLoading = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 mt-24">
          <Skeleton width="100%" height="252px" />
        </div>
        <div className="col-12 mt-24">
          <Skeleton width="100%" height="252px" />
        </div>
      </div>
    </>
  );
};

export default DashboardFeedLoading;
