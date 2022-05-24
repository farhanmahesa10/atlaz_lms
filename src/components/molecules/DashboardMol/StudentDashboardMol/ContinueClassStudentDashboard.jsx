import React from "react";
import { Link } from "react-router-dom";
import { ContinueClass } from "../../../../assets/images";
const ContinueClassStudentDashboard = () => {
  return (
    <div
      className="h-full w-full radius-14  border border-secondary-500"
      style={{
        backgroundImage: `url(${ContinueClass})`,
        backgroundPositionX: " right ",
        backgroundPositionY: " bottom ",
        backgroundColor: "#F0F1F5",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-32 py-24">
        <div>
          <Link to="/">
            <span className="bg-white py-2 px-8 text-info-500 radius-5 font-xs-medium">
              Continue Learning
            </span>
          </Link>
        </div>
        <div className="mt-10">
          <h6 className="xl-h5">Kelas 1A IPA</h6>
          <p className="font-xs text-neutral-300 mt-4">
            Academic Year 2021/2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContinueClassStudentDashboard;
