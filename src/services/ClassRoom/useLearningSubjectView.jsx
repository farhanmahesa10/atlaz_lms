import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  LearningBookContent,
  LearningBookDetail,
} from "../../components/organism";
import { defConfig, GET } from "../../config/RestAPI";

const useLearningSubjectView = () => {
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
  const params = useParams();

  const [subjectData, setSubjectData] = useState({});
  const [isSubjectLoading, setIsSubjectLoading] = useState(true);

  const [lessonData, setLessonData] = useState([]);
  const [isLessonLoading, setIsLessonLoading] = useState(true);

  const [bookDetailData, setbookDetailData] = useState([]);
  const [isBookDetailLoading, setIsBookDetailLoading] = useState(true);

  useEffect(() => {
    getSubject();
    getLesson();
    getBookDetail();
  }, []);

  const getSubject = () => {
    setIsSubjectLoading(true);
    GET(`/client/classrooms/book/subject/${params.subjectId}`, defConfig())
      .then((r) => {
        setIsSubjectLoading(false);
        setSubjectData(r.data);
      })
      .catch((err) => {
        setIsSubjectLoading(false);
      });
  };

  const getLesson = () => {
    setIsLessonLoading(true);
    GET(
      `/client/classrooms/book/lesson?subjectId=${params.subjectId}&classlistId=${params.classId}`,
      defConfig()
    )
      .then((r) => {
        setIsLessonLoading(false);
        setLessonData(r.data);
      })
      .catch((err) => {
        setIsLessonLoading(false);
      });
  };

  const getBookDetail = () => {
    setIsBookDetailLoading(true);
    let subjectId = "6230209218e3db54b7785539";
    // let subjectId = params.subjectId
    GET(`/client/classrooms/subject/detail/${subjectId}`, defConfig())
      .then((r) => {
        setIsBookDetailLoading(false);
        setbookDetailData(r.data);
      })
      .catch((err) => {
        setIsBookDetailLoading(false);
      });
  };

  const TabBarData = [
    {
      name: "Book Content",
      component: (
        <LearningBookContent
          data={lessonData}
          isLoading={isLessonLoading}
          classId={params.classId}
          subjectId={params.subjectId}
        />
      ),
    },
    {
      name: "Book Detail",
      component: (
        <LearningBookDetail
          data={bookDetailData}
          isLoading={isBookDetailLoading}
        />
      ),
    },
  ];

  return {
    breadcrumbsData,
    TabBarData,
    subjectData,
    isSubjectLoading,
    lessonData,
    isLessonLoading,
  };
};

export default useLearningSubjectView;
