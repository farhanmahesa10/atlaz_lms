import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defConfig, GET, POST } from "../../../config/RestAPI";

const useClaassRoomContentSubject = (props) => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [subjectListModal, setSubjectListModal] = useState([]);
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    //untuk di modal
    getClassListModal();
    getSubjects();
  }, []);

  const getClassListModal = () => {
    GET("/client/classrooms/subject", defConfig()).then((r) => {
      setSubjectListModal(r.data);
    });
  };

  const getSubjects = () => {
    setIsLoading(true);
    GET("/client/classrooms/" + params.classId, defConfig())
      .then((r) => {
        setSubjects(r.data.subjects);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleAddSubject = async (values) => {
    let req = { ...values, classlistId: params.classId };
    // POST("/client/classrooms/subject", req, defConfig()).then((r) => {
    //   getSubjects();
    // });

    try {
      await POST("/client/classrooms/subject", req, defConfig());
      await getSubjects();
      await getClassListModal();

      return true;
    } catch (err) {
      return false;
    }
  };
  return { isLoading, subjects, subjectListModal, handleAddSubject, params };
};

export default useClaassRoomContentSubject;
