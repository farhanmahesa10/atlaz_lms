import React, { useEffect, useState } from "react";
import { defConfig, GET, POST } from "../../config/RestAPI";
import { scroller } from "react-scroll";
import { useNavigate, useParams } from "react-router-dom";
import {
  BeginAssessmentDivider,
  BeginAssessmentSingleChoice,
  BeginAssessmentTextEditor,
  BeginAssessmentRecording,
  BeginAssessmentFIleUploader,
  BeginAssessmentEssay,
  BeginAssessmentMatchPairs,
  BeginAssessmentMultipleChoice,
  BeginAssessmentShortAnswer,
} from "../../components/organism";
import useGlobalFunction from "../GlobalFuntions/useGlobalFunction";
const useBeginAssessment = () => {
  const navigate = useNavigate();
  const params = useParams();
  const idsubtopic = params.id;
  const { setFlashMessage } = useGlobalFunction();

  const [filledQuestions, setFilledQuestions] = useState([]);
  const [initialValues, setInitialValues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [subTopicData, setSubTopicData] = useState({});
  const [assessmentData, setAssessmentData] = useState({});
  const [timeLineId, setTimeLineId] = useState(null);
  const [manualValidation, setManualValidation] = useState(false);

  const redirectLink = `/classroom/welcome-assessment/${params.classId}/${params.subjectId}/${params.lessonId}/${params.topicId}/${params.id}`;

  useEffect(() => {
    setIsLoading(true);
    GET(
      `/client/classrooms/student_assessment/content/${idsubtopic}`,
      defConfig()
    )
      .then((response) => {
        if (response.data) {
          setTimeLineId(response.data.assessment._id);
          setSubTopicData(response.data.subtopic);
          let res = response.data;
          let newQuestionName = [];
          let formValue = res.content.map((r, i) => {
            if (r.assessmentType.name.toLowerCase() === "single choice") {
              let buildScInit = r.questions.map((res, ind) => {
                newQuestionName.push({
                  name: `${i}.questions[${ind}].userAnswer`,
                  isFilled: false,
                });
                res = {
                  ...res,
                  userAnswer: null,
                };
                return res;
              });
              return { ...r, questions: buildScInit };
            } else if (
              r.assessmentType.name.toLowerCase() === "multiple choice"
            ) {
              let buildMcInit = r.questions.map((res, ind) => {
                newQuestionName.push({
                  name: `${i}.questions[${ind}].userAnswer`,
                  isFilled: false,
                });
                res = {
                  ...res,
                  userAnswer: [],
                };
                return res;
              });
              return { ...r, questions: buildMcInit };
            } else if (r.assessmentType.name.toLowerCase() === "short answer") {
              let buildSaInit = r.questions.map((res, ind) => {
                newQuestionName.push({
                  name: `${i}.questions[${ind}].userAnswer`,
                  isFilled: false,
                });
                res = {
                  ...res,
                  userAnswer: "",
                };
                return res;
              });

              return { ...r, questions: buildSaInit };
            } else if (
              r.assessmentType.name.toLowerCase() === "file uploader"
            ) {
              newQuestionName.push({
                name: `[${i}].userAnswer.base64File`,
                isFilled: false,
              });
              r = { ...r, userAnswer: { fakeFile: "", base64File: "" } };
              return r;
            } else if (
              r.assessmentType.name.toLowerCase() === "audio recorder"
            ) {
              newQuestionName.push({
                name: `[${i}].userAnswer`,
                isFilled: false,
              });
              r = { ...r, userAnswer: "" };
              return r;
            } else if (r.assessmentType.name.toLowerCase() === "essay") {
              newQuestionName.push({
                name: `${i}.userAnswer`,
                isFilled: false,
              });
              r = { ...r, userAnswer: "" };
              return r;
            } else if (r.assessmentType.name.toLowerCase() === "match pairs") {
              newQuestionName.push({
                name: `${i}.userAnswer`,
                isFilled: false,
              });
              let buildMpInit = r.options.map((res, ind) => {
                res = {
                  ...res,
                  userAnswer: "",
                };
                return res;
              });
              // return r;
              return { ...r, options: buildMpInit };
            } else {
              return r;
            }
          });
          setFilledQuestions(newQuestionName);
          setInitialValues(formValue);
          setAssessmentData(response.data.assessment);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        // console.log(redirectLink);
        navigate(redirectLink);
        // console.log(err.response);
      });
  }, []);

  const scrollToSection = (name) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      offset: -280,
      smooth: true,
    });
  };

  const handleProggress = (name, isFilled) => {
    let result = filledQuestions.map((r) => {
      if (r.name === name) {
        r = { ...r, isFilled: isFilled };
      }
      return r;
    });

    setFilledQuestions(result);
  };

  const callBlock = (assessment, index, formik, nomor) => {
    assessment = { ...assessment, idsubtopic };
    let assessmentType = assessment.assessmentType.name.toLowerCase();
    if (assessmentType === "text editor") {
      return <BeginAssessmentTextEditor data={assessment} key={index} />;
    } else if (assessmentType === "single choice") {
      return (
        <BeginAssessmentSingleChoice
          data={assessment}
          key={index}
          index={index}
          formik={formik}
          setFieldValue={formik.setFieldValue}
          onSendProgress={handleProggress}
          nomor={nomor}
        />
      );
    } else if (assessmentType === "essay") {
      return (
        <BeginAssessmentEssay
          data={assessment}
          key={index}
          index={index}
          formik={formik}
          setFieldValue={formik.setFieldValue}
          onSendProgress={handleProggress}
          nomor={nomor}
        />
      );
    } else if (assessmentType === "match pairs") {
      return (
        <BeginAssessmentMatchPairs
          data={assessment}
          key={index}
          index={index}
          formik={formik}
          setFieldValue={formik.setFieldValue}
          onSendProgress={handleProggress}
          nomor={nomor}
        />
      );
    } else if (assessmentType === "multiple choice") {
      return (
        <BeginAssessmentMultipleChoice
          data={assessment}
          key={index}
          index={index}
          formik={formik}
          setFieldValue={formik.setFieldValue}
          onSendProgress={handleProggress}
          nomor={nomor}
        />
      );
    } else if (assessmentType === "short answer") {
      return (
        <BeginAssessmentShortAnswer
          data={assessment}
          key={index}
          index={index}
          formik={formik}
          setFieldValue={formik.setFieldValue}
          onSendProgress={handleProggress}
          nomor={nomor}
        />
      );
    } else if (assessmentType === "divider") {
      return <BeginAssessmentDivider data={assessment} key={index} />;
    } else if (assessmentType === "audio recorder") {
      return (
        <BeginAssessmentRecording
          key={index}
          index={index}
          formik={formik}
          setFieldValue={formik.setFieldValue}
          onSendProgress={handleProggress}
          nomor={nomor}
        />
      );
    } else if (assessmentType === "file uploader") {
      return (
        <BeginAssessmentFIleUploader
          data={assessment}
          key={index}
          index={index}
          formik={formik}
          setFieldValue={formik.setFieldValue}
          onSendProgress={handleProggress}
          nomor={nomor}
          setManualValidation={setManualValidation}
        />
      );
    } else {
      return "";
    }
  };

  const onSubmit = (values) => {
    if (!manualValidation) {
      setFlashMessage(
        "Submit Error",
        "Please check requirement to submit.",
        false
      );
      return;
    }
    let request = {
      classlist: params.classId,
      subject: params.subjectId,
      lesson: params.lessonId,
      topic: params.topicId,
      subtopic: params.id,
      timeline: timeLineId,
      userAnswers: values,
    };

    POST(`/client/classrooms/student_assessment/add`, request, defConfig())
      .then((r) => {
        setFlashMessage(
          "Assessment Submitted",
          "Success to submit assessment."
        );
        navigate(redirectLink);
      })
      .catch((err) => {
        console.log(err.response);
      });

    window.scrollTo({ top: 0, behavior: "smooth" });
    // navigate(`/subtopic/editsubtopic/${idsubtopic}`);
  };

  return {
    filledQuestions,
    scrollToSection,
    callBlock,
    initialValues,
    onSubmit,
    isLoading,
    subTopicData,
    redirectLink,
    assessmentData,
  };
};

export default useBeginAssessment;
