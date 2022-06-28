import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  LearningBookContent,
  LearningBookDetail,
  MyBookListDetailBook,
} from "../../components/organism";
import MyBookListDetailContent from "../../components/organism/MyBookListOrg/DetailBookListOrg/MyBookListDetailContent";
import { defConfig, GET } from "../../config/RestAPI";

const useMyBookListDetail = () => {
  const params = useParams();
  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      link: "/my-book-list",
      label: "My Book List",
    },
    {
      link: ``,
      label: "",
    },
  ]);
  const [subjectData, setSubjectData] = useState({});
  const [isSubjectLoading, setIsSubjectLoading] = useState(true);

  const [lessonData, setLessonData] = useState([]);
  const [isLessonLoading, setIsLessonLoading] = useState(true);

  const [bookDetailData, setbookDetailData] = useState([]);
  const [isBookDetailLoading, setIsBookDetailLoading] = useState(true);

  useEffect(() => {
    getSubject();
    getBookDetail();
  }, []);

  const getSubject = () => {
    setIsLessonLoading(true);
    setIsSubjectLoading(true);
    GET(`/booklist/detail/${params.subjectId}`, defConfig())
      .then((r) => {
        let newBread = [
          {
            link: "/my-book-list",
            label: "My Book List",
          },
          {
            link: "",
            label: r.data.name,
          },
        ];
        setBreadcrumbsData(newBread);
        setSubjectData(r.data);
        setLessonData(r.data.lessons);
        setIsSubjectLoading(false);
        setIsLessonLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSubjectLoading(false);
      });
  };

  const getBookDetail = () => {
    setIsBookDetailLoading(true);
    // let subjectId = "6230209218e3db54b7785539";
    let subjectId = params.subjectId;
    GET(`/client/classrooms/subject/detail/${subjectId}`, defConfig())
      .then((r) => {
        console.log("res", r.data);
        setbookDetailData(r.data);
        setIsBookDetailLoading(false);
      })
      .catch((err) => {
        setIsBookDetailLoading(false);
      });
  };

  const TabBarData = [
    {
      name: "Book Content",
      component: (
        <MyBookListDetailContent
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
        <MyBookListDetailBook
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

export default useMyBookListDetail;
