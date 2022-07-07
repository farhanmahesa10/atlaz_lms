import React from "react";
import WorkSheetIcon from "../../../../assets/images/work-sheet-icon.png";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
const WorksheetCard = () => {
  return (
    <div
      className="p-16 border-secondary-500 bg-secondary-100 radius-8"
      style={{ border: "2px solid" }}
    >
      <div className="d-md-flex flex-column flex-xl-row justify-content-xl-between align-items-xl-end">
        <div className="d-flex ">
          <div>
            <div
              className="p-8 border-secondary-500 radius-4 d-none d-md-block"
              style={{ border: "2px solid" }}
            >
              <div className="h-64 ">
                <img src={WorkSheetIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="md-ml-16  d-flex justify-content-between flex-column ">
            <div>
              <h6>Name of worksheet</h6>
              <p className="font-sm text-neutral-300">by author name</p>
            </div>
            <div className="d-flex flex-column flex-xl-row mt-16 xl-mt-0">
              <p className="d-flex align-items-center text-neutral-300 ">
                <SchoolIcon className="fs-20" />
                <span className="pl-8">Elementary school</span>
              </p>
              <p className="d-flex align-items-center text-neutral-300 xl-ml-24 mt-8 xl-mt-0">
                <PsychologyIcon className="fs-20" />
                <span className="pl-8">Skill name</span>
              </p>
              <p className="d-flex align-items-center text-neutral-300 xl-ml-24 mt-8 xl-mt-0">
                <ScatterPlotIcon className="fs-20" />
                <span className="pl-8">Skill name</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 xl-mt-0">
          <button className="btn-primary font-normal w-full xl-w-auto">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorksheetCard;
