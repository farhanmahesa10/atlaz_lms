import { red } from "@mui/material/colors";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { defConfig, GET, POST } from "../../config/RestAPI";
import useGlobalFunction from "../GlobalFuntions/useGlobalFunction";
const useActivateAssessment = () => {
  const { setFlashMessage } = useGlobalFunction();
  const [selectAllStatus, setSelectAllStatus] = useState("checked");
  const [showAssessmentList, setShowAssessmentList] = useState(false);

  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState({});

  const [firstLoading, setFirstLoading] = useState(true);
  const [isLoadingAssessmentInput, setisLoadingAssessmentInput] =
    useState(false);
  const [isSubtopicLoading, setIsSubtopicLoading] = useState(true);

  //untuk kebutuhan di preview
  const [previewSubjectName, setPreviewSubjectName] = useState("");
  const [previewLessonName, setPreviewLessonName] = useState("");
  const [previewTopicName, setPreviewTopicName] = useState("");

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

  //untuk option dan sub topic
  const [subjectData, setSubjectData] = useState([]);
  const [lessonData, setLessonData] = useState([]);
  const [assessmentData, setAssessmentData] = useState([]);
  const [classData, setClassData] = useState([]);
  const [subtopicData, setSubtopicData] = useState([]);

  const changeAssessmentData = (formik, lesson) => {
    setPreviewLessonName(lesson.label);
    // let value = "628dd59d344347707ad806bb";
    let value = lesson.value;
    setIsSubtopicLoading(true);
    setisLoadingAssessmentInput(true);
    GET(`/topic/find?lessonId=${value}&isAssessment=true`, defConfig()).then(
      (r) => {
        let newAssessmentData = r.data.map((res) => {
          return { label: res.name, value: res._id };
        });
        formik.setFieldValue("topic", "");
        setAssessmentData(newAssessmentData);
        setisLoadingAssessmentInput(false);
        setIsSubtopicLoading(false);
      }
    );
  };

  const setupTimeline = (formik, topic) => {
    setPreviewTopicName(topic.label);
    // let value = "628dd5db344347707ad80703";
    let value = topic.value;
    setIsSubtopicLoading(true);
    GET(`/subtopic/find?topicId=${value}&isAssessment=true`, defConfig()).then(
      (r) => {
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
        setIsSubtopicLoading(false);
        formik.setFieldValue("topic", value);
      }
    );
  };

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
    let subjectId = params.subjectId;
    // let subjectId = "622f1e237ef86a9e5bc71c7d";
    GET(
      `/client/classrooms/my_school_assessment/create?subjectId=${subjectId}`,
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

      setPreviewSubjectName(r.subject.name);
      setSubjectData([{ label: r.subject.name, value: r.subject._id }]);
      setLessonData(newLessonData);
      setClassData(newClassData);
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
    setPreviewData({
      data: values,
      subjectName: previewSubjectName,
      lessonName: previewLessonName,
      topicName: previewTopicName,
    });
  };

  const publishData = (req) => {
    POST("/client/classrooms/my_school_assessment/add", req, defConfig()).then(
      (r) => {
        setFlashMessage(
          "Assessment Active",
          "Your setted assessment was active."
        );
        navigate(
          `/classroom/assessment/${params.classId}/${params.subjectId}/dashboard`
        );
      }
    );
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
    publishData,
    params,
  };
};

export default useActivateAssessment;
