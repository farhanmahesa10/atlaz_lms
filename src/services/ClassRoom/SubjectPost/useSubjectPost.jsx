import React from "react";
import { useParams } from "react-router-dom";

const useSubjectPost = () => {
  const { classId, subjectId, section } = useParams();
  return { section };
};

export default useSubjectPost;
