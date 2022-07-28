import React from "react";
import Skeleton from "react-loading-skeleton";
import { Divider } from "../../../atoms";
const ClassroomAcademicLoading = () => {
  return (
    <div className="bg-white radius-t-14 ">
      <div className="px-24 md-px-48 pt-16 md-pt-24">
        <div className="row ">
          <Divider
            parentClassName={"mb-23"}
            textClassName={"px-4 text-neutral-300 font-xs "}
          />
          <div className="h-162 w-full col-12 col-md-6 col-lg-4 col-xl-3 radius-8 cursor-pointer">
            <Skeleton width={"100%"} height="160px" />
          </div>
          <div className="h-162 w-full col-12 col-md-6 col-lg-4 col-xl-3 radius-8 cursor-pointer">
            <Skeleton width={"100%"} height="160px" />
          </div>
          <div className="h-162 w-full col-12 col-md-6 col-lg-4 col-xl-3 radius-8 cursor-pointer">
            <Skeleton width={"100%"} height="160px" />
          </div>
          <div className="h-162 w-full col-12 col-md-6 col-lg-4 col-xl-3 radius-8 cursor-pointer">
            <Skeleton width={"100%"} height="160px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomAcademicLoading;
