import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defConfig, GET } from "../../../config/RestAPI";

const useSubjectPostMember = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({ teachers: [], students: [] });
  const params = useParams();

  useEffect(() => {
    GET(
      `/client/classrooms/members?subjectId=${params.subjectId}&classlistId=${params.classId}`,
      defConfig()
    )
      .then((r) => {
        setData(r.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading };
};

export default useSubjectPostMember;
