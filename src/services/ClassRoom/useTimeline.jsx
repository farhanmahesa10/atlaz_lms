import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defConfig, GET } from "../../config/RestAPI";

const useTimeline = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    addUpcomingData();
  }, []);

  const addUpcomingData = () => {
    GET(
      `/client/classrooms/my_school_assessment/find?subject=${params.subjectId}&classlist=${params.classId}`,
      defConfig()
    ).then((r) => {
      setData(r.data);
    });
  };
  return { data };
};

export default useTimeline;
