import React, { useState } from "react";

const useActivateAssessment = () => {
  const initialValues = {
    subject: "",
    lesson: "",
    assessment: "",
    class: "",
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
      desc: "You can also activate the assessment of other subjects that you create.",
      data: subjectData,
    },
    {
      title: "Lesson",
      name: "lesson",
      desc: "Select available lessons on the selected subjects.",
      data: lessonData,
    },
    {
      title: "Assessment",
      name: "assessment",
      desc: "Select available topics on the selected lessons.",
      data: assessmentData,
    },
    {
      title: "Class",
      name: "class",
      desc: "If you select all classes, the same assessment will be activated in all your classes.",
      data: classData,
    },
  ];

  return {
    initialValues,
    createForm,
  };
};

export default useActivateAssessment;
