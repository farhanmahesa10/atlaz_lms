import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defConfig, GET, POST } from "../../config/RestAPI";

const useTimeline = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    addUpcomingData();
  }, []);

  const addUpcomingData = () => {
    setIsLoading(true);
    GET(
      `/client/classrooms/my_school_assessment/find?subject=${params.subjectId}&classlist=${params.classId}`,
      defConfig()
    )
      .then((r) => {
        setData(r.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleDetedTimeline = (data) => {
    setIsLoading(true);
    POST(`/client/classrooms/my_school_assessment/remove`, data, defConfig())
      .then((r) => {
        addUpcomingData();
      })
      .catch((r) => {
        addUpcomingData();
      });
  };
  return { data, isLoading, handleDetedTimeline };
};

export default useTimeline;
