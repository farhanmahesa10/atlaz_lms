import React, { useEffect, useState } from "react";
import { defConfig, GET } from "../../config/RestAPI";

const useTeacherDashboard = () => {
  const [isLoadingClassList, setIsLoadingClassList] = useState(true);
  const [classListData, setClassListData] = useState([]);

  useEffect(() => {
    initClassList();
  }, []);

  const initClassList = () => {
    setIsLoadingClassList(false);
    GET("/client/classrooms/my_classlist", defConfig())
      .then((r) => {
        setClassListData(r.data);
        setIsLoadingClassList(false);
      })
      .catch((err) => {
        setIsLoadingClassList(false);
      });
  };

  return { isLoadingClassList, classListData };
};

export default useTeacherDashboard;
