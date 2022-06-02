import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const SubjectCard = ({ image, title, creator }) => {
  return (
    <div className="h-96 w-full radius-8 position-relative cursor-pointer bg-secondary-100 ">
      <div className=" d-flex align-items-center ">
        <div className="mr-16">
          <img src={image} className="w-96  h-p-100 radius-8" />
        </div>

        <div className="w-143  border-start border-secondary-500 pl-8">
          <p className=" font-xs ">{creator}</p>
          <h6 className="">
            {title.length > 30 ? title.substring(0, 30) + "..." : title}{" "}
          </h6>
        </div>
      </div>
      <div
        style={{ right: "0", bottom: "0" }}
        className="w-32 h-32 position-absolute radius-tl-8 text-white radius-br-8 d-flex justify-content-center align-items-center bg-info-500"
      >
        <ArrowRightAltIcon />
      </div>
    </div>
  );
};

export default SubjectCard;
