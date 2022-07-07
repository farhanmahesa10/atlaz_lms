import React from "react";
import { InputSeach } from "../../atoms";
import TeacherResourceOffCanvas from "./TeacherResourceOffCanvas";
import WorksheetCard from "../Cards/WorksheetCard";
const TeacherResourceWorksheet = () => {
  return (
    <div>
      <div className="row justify-content-between">
        <div className="col-12 col-md-8 col-lg-6">
          <InputSeach />
        </div>
        <div className="col-12 col-md-4 col-lg-6 d-flex justify-content-end mt-16 md-mt-0">
          <TeacherResourceOffCanvas />
        </div>
      </div>
      <div className="mt-24">
        <p className="font-sm-medium md-font-medium">
          <span className="text-neutral-300 ">Showing </span>
          <span className="text-neutral-500">100 result</span>
        </p>
        <div className="mt-8">
          <WorksheetCard />
        </div>
        <div className="mt-16">
          <WorksheetCard />
        </div>
        <div className="mt-16">
          <WorksheetCard />
        </div>
        <div className="mt-16">
          <WorksheetCard />
        </div>
      </div>
    </div>
  );
};

export default TeacherResourceWorksheet;
