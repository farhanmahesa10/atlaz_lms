import React from "react";
import { ProgressBar } from "../../../atoms";
import Dashbook1 from "../../../../assets/images/dashboard/dash-book1.png";
const BookListDashboardPublicCard = () => {
  return (
    <div className="w-124 md-w-188 radius-8 border border-secondary-500 d-flex justify-content-center">
      <div className="p-8 md-p-16 ">
        <div className="h-111 md-h-156 w-111 md-w-156 radius-8 d-flex align-items-center justify-content-center">
          <img
            src={Dashbook1}
            alt=""
            className="w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="font-xs md-font-sm text-neutral-300 mt-8 md-mt-16 ">
          Atlaz
        </p>
        <p className="mt-4 font-sm-bold md-h6 h-40 ">English Play - 01</p>
        <div className="mt-8">
          <div className="d-flex align-items-center justify-content-between">
            <span className="text-neutral-300 font-xs">20%</span>
            <div className="ml-8 w-full">
              <div className="w-full">
                <ProgressBar
                  bgColor="bg-secondary-200"
                  activeColor="info-500"
                  height="2"
                  value="20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookListDashboardPublicCard;
