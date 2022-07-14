import React, { useEffect, useState } from "react";
import { defConfig, GET } from "../../config/RestAPI";

const useTeacherDashboard = () => {
  const [isLoadingClassList, setIsLoadingClassList] = useState(true);
  const [classListData, setClassListData] = useState([]);

  const [upcomingData, setUpcomingData] = useState([]);
  const [upcomingLoading, setUpcomingLoading] = useState(true);

  const [overviewData, setOverviewData] = useState({
    assessment: {
      countAllAssessment: 0,
      countSetAssessment: 0,
      progress: 0,
    },
    assessmentToGrading: {
      countAllAssessment: 0,
      countSetAssessment: 0,
      progress: 0,
    },
    ownetBook: {
      countAllAssessment: 0,
      countSetAssessment: 0,
      progress: 0,
    },
  });
  const [isOverviewLoading, setIsOverviewLoading] = useState(true);

  useEffect(() => {
    initClassList();
    initUpcoming();
    initOverview();
  }, []);
  const initUpcoming = () => {
    setUpcomingLoading(true);
    GET(`/client/dashboard/upcoming_event`, defConfig())
      .then((r) => {
        setUpcomingData(r.data.splice(0, 5));
        setUpcomingLoading(false);
      })
      .catch((err) => {
        setUpcomingLoading(false);
      });
  };

  const initClassList = () => {
    setIsLoadingClassList(true);
    GET("/client/classrooms/my_classlist", defConfig())
      .then((r) => {
        setClassListData(r.data);
        setIsLoadingClassList(false);
      })
      .catch((err) => {
        setIsLoadingClassList(false);
      });
  };

  const initOverview = () => {
    GET("/client/dashboard/progress/assessment_set", defConfig())
      .then((r) => {
        setOverviewData({ ...overviewData, assessment: r.data });
        setIsOverviewLoading(false);
      })
      .catch((err) => {
        setIsOverviewLoading(false);
      });
  };

  return {
    isLoadingClassList,
    classListData,
    upcomingData,
    upcomingLoading,
    overviewData,
    isOverviewLoading,
  };
};

export default useTeacherDashboard;
