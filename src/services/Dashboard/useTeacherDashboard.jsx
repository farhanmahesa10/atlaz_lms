import React, { useEffect, useState } from "react";
import { defConfig, GET } from "../../config/RestAPI";

const useTeacherDashboard = () => {
  const [isLoadingClassList, setIsLoadingClassList] = useState(true);
  const [classListData, setClassListData] = useState([]);

  const [upcomingData, setUpcomingData] = useState([]);
  const [upcomingLoading, setUpcomingLoading] = useState(true);

  useEffect(() => {
    initClassList();
    initUpcoming();
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

  return { isLoadingClassList, classListData, upcomingData, upcomingLoading };
};

export default useTeacherDashboard;
