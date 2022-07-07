import React from "react";
import { InputSeach } from "../../atoms";
import TeacherTrainingCard from "../Cards/TeacherTrainingCard";
import TeacherResourceOffCanvas from "./TeacherResourceOffCanvas";

const TeacherResourceTraining = () => {
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
      </div>
      <div className="row mt-8">
        <div className="mb-24 col-6 col-md-4 col-xl-3">
          <TeacherTrainingCard />
        </div>
        <div className="mb-24 col-6 col-md-4 col-xl-3 ">
          <TeacherTrainingCard />
        </div>
        <div className="mb-24 col-6 col-md-4 col-xl-3">
          <TeacherTrainingCard />
        </div>
        <div className="mb-24 col-6 col-md-4 col-xl-3">
          <TeacherTrainingCard />
        </div>
        <div className="mb-24 col-6 col-md-4 col-xl-3">
          <TeacherTrainingCard />
        </div>
        <div className="mb-24 col-6 col-md-4 col-xl-3 ">
          <TeacherTrainingCard />
        </div>
        <div className="mb-24 col-6 col-md-4 col-xl-3">
          <TeacherTrainingCard />
        </div>
        <div className="mb-24 col-6 col-md-4 col-xl-3">
          <TeacherTrainingCard />
        </div>
      </div>
    </div>
  );
};

export default TeacherResourceTraining;
