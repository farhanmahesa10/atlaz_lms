import React from "react";
import { useParams } from "react-router-dom";
import { StartLearningBg } from "../../../assets/images";
const useSubjectPostHero = () => {
  const { classId, subjectId, section } = useParams();

  const banner = StartLearningBg;
  const breadcrumbsData = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "",
      label: "Classroom",
    },
  ];

  const navMenu = [
    {
      label: "Dashboard",
      link: `/classroom/assessment/${classId}/${subjectId}/dashboard`,
      activeTo: "dashboard",
    },
    {
      label: "Member",
      link: `/classroom/assessment/${classId}/${subjectId}/member`,
      activeTo: "member",
    },
  ];

  return {
    banner,
    breadcrumbsData,
    navMenu,
    section,
    classId,
    subjectId,
  };
};

export default useSubjectPostHero;
