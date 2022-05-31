import React from "react";
import { GradeTeacherBg } from "../../../../assets/images";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const GradeTeacherDashboard = () => {
  return (
    <div
      className="border border-secondary-500  radius-14 w-full"
      style={{
        backgroundImage: `url(${GradeTeacherBg})`,
        // backgroundSize: "100% 100%",
        backgroundColor: "#FCF5E8",
        backgroundPositionY: "bottom",
        backgroundPositionX: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-32 py-24">
        <div className="d-flex justify-content-between">
          <h5>Average Grade</h5>
          <div className="d-flex align-items-center text-primary-500">
            <NavigateBeforeIcon className="mr-16 cursor-pointer" />
            <NavigateNextIcon className="cursor-pointer" />
          </div>
        </div>
        <p className="font-sm text-neutral-300">Kelas 1A IPA (2021/2022)</p>
        <div className="mt-18">
          <div
            className="w-62 h-62  radius-p-100  d-flex align-items-center justify-content-center"
            style={{ border: "4px solid #F2D1A6" }}
          >
            <h2 className="" style={{ color: "#F2D1A6" }}>
              0.0
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeTeacherDashboard;
