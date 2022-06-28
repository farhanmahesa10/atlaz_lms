import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  LearningBookContent,
  LearningBookDetail,
} from "../../components/organism";
import { defConfig, GET } from "../../config/RestAPI";

const useLearningSubjectView = () => {
  const params = useParams();
  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      link: "/classroom",
      label: "Classroom",
    },
    {
      link: `/classroom/class/${params.classId}`,
      label: "Class",
    },
    {
      link: `/classroom/assessment/${params.classId}/${params.subjectId}/dashboard`,
      label: "Subject",
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
    getLesson();
    getBookDetail();
  }, []);

  const getSubject = () => {
    setIsSubjectLoading(true);
    GET(`/client/classrooms/book/subject/${params.subjectId}`, defConfig())
      .then((r) => {
        let newBread = [
          {
            link: "/classroom",
            label: "Classroom",
          },
          {
            link: `/classroom/class/${params.classId}`,
            label: "Class",
          },
          {
            link: `/classroom/assessment/${params.classId}/${params.subjectId}/dashboard`,
            label: "Subject",
          },
        ];
        newBread.push({
          link: "",
          label: r.data.name,
        });
        setBreadcrumbsData(newBread);
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
    // let subjectId = "6230209218e3db54b7785539";
    let subjectId = params.subjectId;
    GET(`/client/classrooms/subject/detail/${subjectId}`, defConfig())
      .then((r) => {
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
