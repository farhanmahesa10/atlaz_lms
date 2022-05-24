import React from "react";
import { ProgressBar } from "../../../atoms";
import Dashbook1 from "../../../../assets/images/dashboard/dash-book1.png";
const BookListDashboardCard = () => {
  return (
    <div className="w-124 md-w-188 xl-w-127 radius-8 border border-secondary-500 d-flex justify-content-center">
      <div className="p-8 md-p-16 xl-p-8">
        <div className="h-111 md-h-156 w-111 md-w-156 xl-w-111 xl-h-111 radius-8 d-flex align-items-center justify-content-center">
          <img
            src={Dashbook1}
            alt=""
            className="w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="font-xs md-font-sm text-neutral-300 mt-8 md-mt-16 xl-mt-8 xl-font-xs">
          Atlaz
        </p>
        <p className="mt-4 font-sm-bold md-h6 h-40 xl-font-sm-bold">
          English Play - 01
        </p>
        <div className="mt-8">
          <div className="d-flex align-items-center justify-content-between">
            <span className="text-neutral-300 font-xs">20%</span>
            <div className="ml-8 w-full">
              <div className="w-full">
                {" "}
                <ProgressBar
                  bgColor="bg-secondary-200"
                  activeColor="info-500"
                  height="2"
                  value="50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookListDashboardCard;
