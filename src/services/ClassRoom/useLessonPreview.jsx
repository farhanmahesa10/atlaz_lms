import React from "react";
import { useParams } from "react-router-dom";

const useLessonPreview = () => {
  const params = useParams();

  const breadcrumbsData = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/",
      label: "Subject",
    },
    {
      link: "/",
      label: "English play 01",
    },
    {
      link: "",
      label: "Unit 1 lalalalalala",
    },
  ];

  return { breadcrumbsData, params };
};

export default useLessonPreview;
