import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const EditProfilePublicDashboard = (props) => {
  const { data, isLoading } = props;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className="border border-secondary-500 radius-14 h-full"
      style={{ backgroundColor: "#F1F2F4" }}
    >
      <div className="px-32 py-24">
        <div className="d-flex align-items-center">
          <div className="h-48 w-48 radius-p-100 mr-16">
            <img
              src={data?.avatar && "/images/profile.png"}
              alt=""
              className="w-full h-full  radius-p-100"
            />
          </div>
          <div>
            <h6 className="xl-h5">
              Welcome,{" "}
              {data?.name?.length > 15
                ? data?.name?.substring(0, 15)
                : data?.name}
            </h6>
            <p className="font xs xl-font-sm text-neutral-300">
              Keep learning and keep it up!
            </p>
          </div>
        </div>

        <div className="mt-40">
          <Link to="/manage-account">
            <button className="btn btn-secondary">Edit Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="radius-14 h-full">
      <Skeleton width={"100%"} height="168px" />
    </div>
  );
};

export default EditProfilePublicDashboard;
