import React, { useState } from "react";
import { InputSeach } from "../../atoms";
import LessonPlanCard from "../Cards/LessonPlanCard";

import TeacherResourceOffCanvas from "./TeacherResourceOffCanvas";
const TeacherResourceLessonPlan = () => {
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
          <LessonPlanCard />
        </div>
        <div className="mt-16">
          <LessonPlanCard />
        </div>
        <div className="mt-16">
          <LessonPlanCard />
        </div>
        <div className="mt-16">
          <LessonPlanCard />
        </div>
      </div>
    </div>
  );
};

export default TeacherResourceLessonPlan;
