import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StartLearningBg } from "../../../assets/images";
import { defConfig, GET } from "../../../config/RestAPI";
const useSubjectPostHero = () => {
  const { classId, subjectId, section } = useParams();
  const navigate = useNavigate();
  const banner = StartLearningBg;
  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/classroom",
      label: "Classroom",
    },
  ]);

  useEffect(() => {
    getClass();
  }, []);
  const getClass = () => {
    GET("/client/classrooms/" + classId, defConfig())
      .then((r) => {
        let newBread = [...breadcrumbsData];
        newBread.push({
          link: `/classroom/class/${classId}`,
          label: r.data.classlist.name,
        });
        setBreadcrumbsData(newBread);
      })
      .catch((err) => {
        navigate("/page-not-found");
      });
  };

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
