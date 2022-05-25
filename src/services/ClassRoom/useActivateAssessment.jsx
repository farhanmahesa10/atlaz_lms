import { red } from "@mui/material/colors";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { defConfig, GET, POST } from "../../config/RestAPI";

const useActivateAssessment = () => {
  const [selectAllStatus, setSelectAllStatus] = useState("checked");
  const [showAssessmentList, setShowAssessmentList] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState(null);
  const [firstLoading, setFirstLoading] = useState(true);
  const [isLoadingAssessmentInput, setisLoadingAssessmentInput] =
    useState(false);
  const [isSubtopicLoading, setIsSubtopicLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  const formikRef = useRef(null);

  const [initialValues, setInitialValues] = useState({
    subject: "",
    lesson: "",
    topic: "",
    classlist: [],
    subtopic: [],
  });

  const requireRulesForm = (assessmentType) => {
    return Yup.string().when("type", {
      is: (val) => {
        if (val.toLowerCase() === assessmentType) {
          return true;
        } else {
          return false;
        }
      },
      then: Yup.string().when("checkbox", {
        is: (check) => check === true,
        then: Yup.string().required(
          "Field is required now the checkbox is checked"
        ),
      }),
    });
  };
  const validationSchema = Yup.object().shape({
    subtopic: Yup.array().of(
      Yup.object().shape({
        startTime: requireRulesForm("automatic grading"),
        endTime: requireRulesForm("automatic grading"),
        assessmentDate: requireRulesForm("automatic grading"),
        startDateTime: requireRulesForm("manual grading"),
        endDateTime: requireRulesForm("manual grading"),
      })
    ),
  });

  const [subjectData, setSubjectData] = useState([]);

  const [lessonData, setLessonData] = useState([]);

  const [assessmentData, setAssessmentData] = useState([]);

  const [classData, setClassData] = useState([]);

  const [subtopicData, setSubtopicData] = useState([]);

  const changeAssessmentData = (formik, { value }) => {
    setisLoadingAssessmentInput(true);
    GET(
      `/topic/find?lessonId=628dd59d344347707ad806bb&isAssessment=true`,
      defConfig()
    ).then((r) => {
      let newAssessmentData = r.data.map((res) => {
        return { label: res.name, value: res._id };
      });
      setAssessmentData(newAssessmentData);
      setisLoadingAssessmentInput(false);
    });
  };

  const setupTimeline = (formik, { value }) => {
    GET(
      `/subtopic/find?topicId=628dd5db344347707ad80703&isAssessment=true`,
      defConfig()
    ).then((r) => {
      let newSubTopicData = r.data.map((res) => {
        if (res.assessmentType.toLowerCase() === "manual grading") {
          return {
            type: res.assessmentType,
            _id: res._id,
            name: res.name,
            checkbox: true,
            startDateTime: "",
            endDateTime: "",
            duration: "",
          };
        } else {
          return {
            type: res.assessmentType,
            _id: res._id,
            name: res.name,
            checkbox: true,
            startTime: "",
            endTime: "",
            assessmentDate: "",
            duration: "",
          };
        }
      });
      let newInitialValues = { ...formik.values, subtopic: newSubTopicData };

      setInitialValues(newInitialValues);
      setSubtopicData(newSubTopicData);
      formik.setFieldValue("topic", value);
    });
  };
  // console.log(assessmentType);
  // if (assessmentType.toLowerCase() === "manual grading") {
  //   return Yup.object().shape({
  //     startDateTime: requireRulesForm("checkbox"),
  //     endDateTime: requireRulesForm("checkbox"),
  //   });
  // } else {
  //   return Yup.object().shape({
  //     assessmentDate: requireRulesForm("checkbox"),
  //     startTime: requireRulesForm("checkbox"),
  //     endTime: requireRulesForm("checkbox"),
  //   });
  // }
  const createForm = useMemo(() => {
    return [
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
        onInputChange: changeAssessmentData,
      },
      {
        title: "Assessment",
        name: "topic",
        placeholder: "Select assessment",
        desc: "Select available topics on the selected lessons.",
        data: assessmentData,
        loadingState: isLoadingAssessmentInput,
        onInputChange: setupTimeline,
      },
      {
        title: "Class",
        name: "classlist",
        placeholder: "Select class",
        desc: "If you select all classes, the same assessment will be activated in all your classes.",
        data: classData,
        isMulti: true,
        inputType: "checkbox",
        hideSelectedOptions: false,
        closeMenuOnSelect: false,
        defaultValue: (() => {
          let defaultClass = classData.find(
            (res) => res.value === params.classId
          );
          console.log("def", defaultClass);
          return defaultClass;
        })(),
      },
    ];
  }, [
    subjectData,
    lessonData,
    assessmentData,
    classData,
    isLoadingAssessmentInput,
  ]);

  useEffect(() => {
    GET(
      "/client/classrooms/my_school_assessment/create?subjectId=622f1e237ef86a9e5bc71c7d",
      defConfig()
    ).then((r) => {
      r = r.data;
      // console.log(r);
      let newLessonData = r.lessons.map((res) => {
        return { label: res.name, value: res._id };
      });

      let newClassData = r.classlist.map((res) => {
        return { label: res.name, value: res.id };
      });
      // let tempInitialValues = { ...initialValues };

      // let newInitialValues = {
      //   ...tempInitialValues,
      //   subjectName: r.subject.name,
      // };
      // let tempClassList = r.classList.map((r) => {
      //   return { label: r.name, value: r._id };
      // });

      setSubjectData([{ label: r.subject.name, value: r.subject._id }]);
      setLessonData(newLessonData);
      setClassData(newClassData);
      // setInitialValues(newInitialValues);
      setFirstLoading(false);
    });
  }, []);

  const changeCheked = (formik, value) => {
    subtopicData.map((r, i) => {
      formik.setFieldValue(`subtopic[${i}].checkbox`, value);
    });
  };

  const onSubmit = (values) => {
    values = {
      ...values,
      subtopic: values.subtopic.filter((r) => r.checkbox === true),
      classlist: values.classlist.map((r) => {
        return { _id: r.value, name: r.label };
      }),
    };
    setShowPreview(true);
    setPreviewData(values);
    // POST(
    //   "/client/classrooms/my_school_assessment/add",
    //   values,
    //   defConfig()
    // ).then((r) => {
    //   console.log("good", r);
    // });
    console.log(values);
    // console.log(JSON.stringify(values));
  };

  return {
    initialValues,
    createForm,
    selectAllStatus,
    setSelectAllStatus,
    showAssessmentList,
    setShowAssessmentList,
    formikRef,
    changeCheked,
    onSubmit,
    showPreview,
    previewData,
    validationSchema,
    firstLoading,
    subtopicData,
    isSubtopicLoading,
    setShowPreview,
  };
};

export default useActivateAssessment;
