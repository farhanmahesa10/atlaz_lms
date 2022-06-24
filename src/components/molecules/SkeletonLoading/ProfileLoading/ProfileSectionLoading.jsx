import React from "react";
import Skeleton from "react-loading-skeleton";

const ProfileSectionLoading = () => {
  return (
    <div className="order-1 order-xl-2 col-xl-3 d-none d-md-block">
      <div className="row">
        <div className="col-6 col-xl-12">
          <div className="h-260 radius-14 position-relative ">
            <Skeleton height={"100%"} width="100%" />
          </div>
        </div>
        <div className="col-6 col-xl-12">
          <div className="h-121 xl-h-72 xl-mt-24   radius-14">
            <Skeleton height={"100%"} width="100%" />
          </div>

          <div className=" h-121 xl-h-72 mt-16  radius-14">
            <Skeleton height={"100%"} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSectionLoading;
