import React from "react";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
const TeacherTrainingCard = () => {
  return (
    <div className=" border border-secondary-500">
      <div className="w-full h-120 ">
        <img
          src="https://img.youtube.com/vi/RMtz1R5BwEE/mqdefault.jpg"
          alt=""
          className="w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-8">
        <h6>English Training Homework</h6>
        <div className="mt-24 d-flex align-items-center">
          <SupervisorAccountIcon className="fs-20 text-neutral-300" />
          <p className="font-sm text-neutral-300 ml-8">Atlaz Belajar Bahasa</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherTrainingCard;
