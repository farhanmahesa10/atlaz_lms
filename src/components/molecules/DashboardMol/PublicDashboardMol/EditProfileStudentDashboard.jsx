import React from "react";
import { Link } from "react-router-dom";
import { useGlobalFunction } from "../../../../services";
const EditProfileStudentDashboard = () => {
  const { getUserInfo } = useGlobalFunction();

  return (
    <div
      className="border border-secondary-500 radius-14 h-full"
      style={{ backgroundColor: "#F1F2F4" }}
    >
      <div className="px-32 py-24">
        <div className="d-flex align-items-center">
          <div className="h-48 w-48 radius-p-100 mr-16">
            <img src="/images/profile.png" alt="" />
          </div>
          <div>
            <h6 className="xl-h5">
              Welcome,{" "}
              {getUserInfo().name.length > 15
                ? getUserInfo().name.substring(0, 15)
                : getUserInfo().name}
            </h6>
            <p className="font xs xl-font-sm text-neutral-300">
              Keep learning and keep it up!
            </p>
          </div>
        </div>

        <div className="mt-40">
          <Link to="/user/edit-profile">
            <button className="btn btn-secondary">Edit Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditProfileStudentDashboard;
