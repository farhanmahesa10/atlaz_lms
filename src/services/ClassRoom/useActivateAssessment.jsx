import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";

const useActivateAssessment = () => {
  const [selectAllStatus, setSelectAllStatus] = useState("checked");
  const [showAssessmentList, setShowAssessmentList] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState(null);

  const formikRef = useRef(null);

  const initialValues = {
    subject: "",
    lesson: "",
    assessment: "",
    assessmentClass: [],
    durationReading: "",

    checkReading: true,
    checkListening: true,
    checkSpeaking: true,
    checkWriting: true,

    readingDate: "",
    startReadingTime: "",
    endReadingTime: "",

    listeningDate: "",
    startListeningTime: "",
    endListeningTime: "",

    startSpeaking: "",
    endSpeaking: "",

    startWriting: "",
    endWriting: "",

    durationReading: "",
    durationListening: "",
    durationSpeaking: "",
    durationWriting: "",
  };

  const requireRulesForm = (checkName) => {
    return Yup.string().when(checkName, {
      is: (check) => check === true,
      then: Yup.string().required(
        "Field is required now the checkbox is checked"
      ),
    });
  };
  const validationSchema = Yup.object().shape({
    readingDate: requireRulesForm("checkReading"),
    startReadingTime: requireRulesForm("checkReading"),
    endReadingTime: requireRulesForm("checkReading"),

    listeningDate: requireRulesForm("checkListening"),
    startListeningTime: requireRulesForm("checkListening"),
    endListeningTime: requireRulesForm("checkListening"),

    startSpeaking: Yup.string().required(
      "Field is required now the checkbox is checked"
    ),
    endSpeaking: requireRulesForm("checkSpeaking"),

    startWriting: requireRulesForm("checkWriting"),
    endWriting: requireRulesForm("checkWriting"),
  });

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
      isDisabled: true,
      defaultValue: subjectData[0],
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
      isMulti: true,
      inputType: "checkbox",
      hideSelectedOptions: false,
      closeMenuOnSelect: false,
      defaultValue: classData[0],
    },
  ];

  const formDateTime = [
    {
      title: "Reading Assessment",
      checkBoxName: "checkReading",
      dateName: "readingDate",
      startTimeName: "startReadingTime",
      endTimeName: "endReadingTime",
      durationName: "durationReading",
      isNoEndDate: true,
    },
    {
      title: "Listening Assessment",
      checkBoxName: "checkListening",
      dateName: "listeningDate",
      startTimeName: "startListeningTime",
      endTimeName: "endListeningTime",
      durationName: "durationListening",
      isNoEndDate: true,
    },
    {
      title: "Speaking Assessment",
      checkBoxName: "checkSpeaking",
      startDateName: "startSpeaking",
      endDateName: "endSpeaking",
      durationName: "durationSpeaking",
    },
    {
      title: "Writing Assessment",
      checkBoxName: "checkWriting",
      startDateName: "startWriting",
      endDateName: "endWriting",
      durationName: "durationWriting",
    },
  ];

  const changeCheked = (formik, value) => {
    formik.setFieldValue("checkReading", value);
    formik.setFieldValue("checkListening", value);
    formik.setFieldValue("checkSpeaking", value);
    formik.setFieldValue("checkWriting", value);
  };

  const onSubmit = (values) => {
    // setShowPreview(true);
    // setPreviewData(values);
    console.log(values);
    console.log(JSON.stringify(values));
  };

  return {
    initialValues,
    createForm,
    selectAllStatus,
    setSelectAllStatus,
    showAssessmentList,
    setShowAssessmentList,
    formikRef,
    formDateTime,
    changeCheked,
    onSubmit,
    showPreview,
    previewData,
    validationSchema,
  };
};

export default useActivateAssessment;
