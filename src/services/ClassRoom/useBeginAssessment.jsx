import React, { useEffect, useState } from "react";
import { defConfig, GET } from "../../config/RestAPI";
import { scroller } from "react-scroll";
import { useNavigate, useParams } from "react-router-dom";
import {
  BeginAssessmentDivider,
  BeginAssessmentSingleChoice,
  BeginAssessmentTextEditor,
  BeginAssessmentRecording,
  BeginAssessmentFIleUploader,
} from "../../components/organism";
const useBeginAssessment = () => {
  const navigate = useNavigate();
  const params = useParams();
  const idsubtopic = params.id;

  const [filledQuestions, setFilledQuestions] = useState([]);
  const [initialValues, setInitialValues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [subTopicData, setSubTopicData] = useState({});

  const redirectLink = `/classroom/welcome-assessment/${params.classId}/${params.subjectId}/${params.classId}/${params.lessonId}${params.topicId}/${params.id}`;

  useEffect(() => {
    GET(
      `/client/classrooms/student_assessment/content/${idsubtopic}`,
      defConfig()
    ).then((response) => {
      if (response.data) {
        console.log(response.data);

        setSubTopicData(response.data.subtopic);
        let r = response.data;
        let newQuestionName = [];
        // let formValue = r.assessment.map((r, i) => {
        //   switch (r.assessmentType.name) {
        //     case "Single Choice":
        //       let buildScInit = r.questions.map((res, ind) => {
        //         newQuestionName.push({
        //           name: `${i}.questions[${ind}].userAnswer`,
        //           isFilled: false,
        //         });
        //         res = {
        //           ...res,
        //           userAnswer: undefined,
        //         };
        //         return res;
        //       });

        //       return { ...r, questions: buildScInit };
        //     case "File Uploader":
        //       newQuestionName.push({
        //         name: `[${i}].userAnswer.base64File`,
        //         isFilled: false,
        //       });
        //       r = { ...r, userAnswer: { fakeFile: "", base64File: "" } };
        //       return r;
        //     case "Audio Recorder":
        //       newQuestionName.push({
        //         name: `[${i}].userAnswer`,
        //         isFilled: false,
        //       });
        //       r = { ...r, userAnswer: "" };
        //       return r;
        //     default:
        //       return r;
        //   }
        // });

        // setFilledQuestions(newQuestionName);
        // setInitialValues(formValue);
      }
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

  const handleProggress = (val) => {
    let result = filledQuestions.map((r) => {
      if (r.name === val) {
        r = { ...r, isFilled: true };
      }
      return r;
    });

    setFilledQuestions(result);
  };
  const callBlock = (assessment, index, formik) => {
    assessment = { ...assessment, idsubtopic };
    switch (assessment.assessmentType.name.toLowerCase()) {
      case "text editor":
        return <BeginAssessmentTextEditor data={assessment} key={index} />;
      case "single choice":
        return (
          <BeginAssessmentSingleChoice
            data={assessment}
            key={index}
            index={index}
            formik={formik}
            setFieldValue={formik.setFieldValue}
            onSendProgress={handleProggress}
          />
        );
      case "divider":
        return <BeginAssessmentDivider data={assessment} key={index} />;
      case "audio recorder":
        return (
          <BeginAssessmentRecording
            key={index}
            index={index}
            formik={formik}
            setFieldValue={formik.setFieldValue}
            onSendProgress={handleProggress}
          />
        );
      case "file uploader":
        return (
          <BeginAssessmentFIleUploader
            data={assessment}
            key={index}
            index={index}
            formik={formik}
            setFieldValue={formik.setFieldValue}
            onSendProgress={handleProggress}
          />
        );
      default:
        return;
    }
  };

  const onSubmit = (values) => {
    console.log(values);
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
  };
};

export default useBeginAssessment;
