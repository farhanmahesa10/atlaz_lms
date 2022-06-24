import React from "react";
import Skeleton from "react-loading-skeleton";

const PublicManageAccountLoading = () => {
  return (
    <>
      <div className="col-12 border border-secondary-500 radius-14 p-16">
        <div className="">
          <Skeleton width="200px" height="24px" />
          <p className="font-xs text-neutral-300">
            <Skeleton width="200px" height="16" />
          </p>
        </div>
        <div className="mt-16"></div>
        <div className="mt-8">
          <Skeleton width="100%" height="35px" />
        </div>
        <div className="mt-24">
          <Skeleton width="100%" height="35px" />
        </div>

        <div className="mt-24 d-md-flex justify-content-end">
          <div className="mr-16">
            <Skeleton width="100px" height="40px" />
          </div>
          <Skeleton width="100px" height="40px" />
        </div>
      </div>

      <div className="col-12 border border-secondary-500 radius-14 p-16 mt-24">
        <div className="">
          <Skeleton width="200px" height="24px" />
          <p className="font-xs text-neutral-300">
            <Skeleton width="200px" height="16" />
          </p>
        </div>
        <div className="mt-16"></div>
        <div className="mt-8">
          <div className=" py-8  radius-4">
            <Skeleton width="100%" height="60px" />
          </div>
        </div>
        <div className="mt-8 d-flex align-items-end">
          <div className="w-full mr-8">
            <Skeleton width="100%" height="35px" />
          </div>
          <div>
            <Skeleton width="100px" height="35px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicManageAccountLoading;
