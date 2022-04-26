import React from "react";
import { useParams } from "react-router-dom";
import { ClassRoomHeroMain } from "../../../assets/images";
const useSubjectPostHero = () => {
  const { classId, subjectId, section } = useParams();

  const banner = ClassRoomHeroMain;
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
    {
      label: "Start Learning",
      link: `/classroom/assessment/${classId}/${subjectId}/start_learning`,
      activeTo: "start_learning",
    },
  ];

  return { banner, breadcrumbsData, navMenu, section };
};

export default useSubjectPostHero;
