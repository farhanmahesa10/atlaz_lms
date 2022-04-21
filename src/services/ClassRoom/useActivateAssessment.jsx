import React, { useEffect, useRef, useState } from "react";

const useActivateAssessment = () => {
  const [selectAllStatus, setSelectAllStatus] = useState("none");
  const [showAssessmentList, setShowAssessmentList] = useState(false);
  const formikRef = useRef(null);

  const initialValues = {
    subject: "",
    lesson: "",
    assessment: "",
    assessmentClass: "",

    startReading: "",
    startListening: "",
    startSpeaking: "",
    startWriting: "",

    endReading: "",
    endListening: "",
    endSpeaking: "",
    endWriting: "",

    checkReading: false,
    checkListening: false,
    checkSpeaking: false,
    checkWriting: false,
  };

  const [subjectData, setSubjectData] = useState([
    {
      value: "1",
      label: "English Play 01",
    },
    {
      value: "2",
      label: "English Play 02",
    },
  ]);

  const [lessonData, setLessonData] = useState([
    {
      value: "1",
      label: "Lesson Play 01",
    },
    {
      value: "2",
      label: "Lesson Play 02",
    },
  ]);

  const [assessmentData, setAssessmentData] = useState([
    {
      value: "1",
      label: "Asses Play 01",
    },
    {
      value: "2",
      label: "Asses Play 02",
    },
  ]);

  const [classData, setClassData] = useState([
    {
      value: "1",
      label: "Class Play 01",
    },
    {
      value: "2",
      label: "Class Play 02",
    },
  ]);

  const createForm = [
    {
      title: "Subject",
      name: "subject",
      placeholder: "Select subject",
      desc: "You can also activate the assessment of other subjects that you create.",
      data: subjectData,
    },
    {
      title: "Lesson",
      name: "lesson",
      placeholder: "Select lesson",
      desc: "Select available lessons on the selected subjects.",
      data: lessonData,
    },
    {
      title: "Assessment",
      name: "assessment",
      placeholder: "Select assessment",
      desc: "Select available topics on the selected lessons.",
      data: assessmentData,
    },
    {
      title: "Class",
      name: "assessmentClass",
      placeholder: "Select class",
      desc: "If you select all classes, the same assessment will be activated in all your classes.",
      data: classData,
    },
  ];

  useEffect(() => {
    console.log(formikRef);
  }, [formikRef]);

  return {
    initialValues,
    createForm,
    selectAllStatus,
    setSelectAllStatus,
    showAssessmentList,
    setShowAssessmentList,
    formikRef,
  };
};

export default useActivateAssessment;
