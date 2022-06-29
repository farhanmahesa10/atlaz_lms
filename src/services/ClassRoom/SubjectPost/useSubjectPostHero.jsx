import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StartLearningBg } from "../../../assets/images";
import { defConfig, GET } from "../../../config/RestAPI";
const useSubjectPostHero = () => {
  const { classId, subjectId, section } = useParams();
  const navigate = useNavigate();
  const banner = StartLearningBg;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      link: "/classroom",
      label: "Classroom",
    },
    {
      link: `/classroom/class/${classId}`,
      label: "Class",
    },
  ]);

  useEffect(() => {
    getSubjectDetail();
  }, []);
  const getSubjectDetail = () => {
    setIsLoading(true);
    GET("/client/classrooms/subject/detail/" + subjectId, defConfig())
      .then((r) => {
        setIsLoading(false);
        let newBread = [...breadcrumbsData];
        newBread.push({
          link: ``,
          label: r.data.name,
        });
        setBreadcrumbsData(newBread);
        setData(r.data);
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
    data,
    isLoading,
  };
};

export default useSubjectPostHero;
