import React from "react";

const SubjectCard = ({ image, title, desc }) => {
  return (
    <div
      className="h-148 w-329 radius-8 cursor-pointer "
      style={{ backgroundColor: "#7194CC" }}
    >
      <div className=" d-flex align-items-center   p-24">
        <div className="w-full ">
          <h5 className="text-white">{title}</h5>
          <p className=" font-xs text-neutral-50">{desc}</p>
        </div>
        <div className="ml-1t">
          <img src={image} className="w-101" />
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
