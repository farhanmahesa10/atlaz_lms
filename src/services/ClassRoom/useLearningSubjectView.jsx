import React, { useState } from "react";
import {
  LearningBookContent,
  LearningBookDetail,
} from "../../components/organism";

const useLearningSubjectView = () => {
  const [tesData, setTesData] = useState("ini tes data dari use");
  const breadcrumbsData = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/classroom",
      label: "Classroom",
    },
    {
      link: "",
      label: "Book",
    },
  ];

  const TabBarData = [
    { name: "Book Content", component: <LearningBookContent /> },
    { name: "Book Detail", component: <LearningBookDetail /> },
  ];

  return { tesData, breadcrumbsData, TabBarData };
};

export default useLearningSubjectView;
