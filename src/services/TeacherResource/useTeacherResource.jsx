import React from "react";
import {
  TeacherResourceLessonPlan,
  TeacherResourceTraining,
  TeacherResourceWorksheet,
} from "../../components/molecules";

const useTeacherResource = () => {
  const TabBarData = [
    {
      name: "Lesson plan",
      component: <TeacherResourceLessonPlan />,
    },
    {
      name: "Teacher training",
      component: <TeacherResourceTraining />,
    },
    {
      name: "Worksheet",
      component: <TeacherResourceWorksheet />,
    },
  ];
  return { TabBarData };
};

export default useTeacherResource;
