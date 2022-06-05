import React, { useEffect, useRef, useState } from "react";
import FormikControl from "../../../atoms/Formik/FormikControl";
import FooterContent from "../FooterContent";
import { Form, Formik } from "formik";
import { defConfig, POST } from "../../../../config/RestAPI";

const ShortAnswer = (props) => {
  const [buttonToggleFooter, setButtonToggleFooter] = useState(false);
  const data = props.data;

  const [clearForm, setClearForm] = useState(null);
  const [firstInitAnswer, setFirstInitAnswer] = useState(false);
  const [initAnswer, setInitAnswer] = useState(null);
  const submitRef = useRef();

  useEffect(() => {
    patternAnswer();
  }, []);
  useEffect(() => {
    if (initAnswer && !firstInitAnswer && data.userAnswers) {
      submitRef.current.click();
      setFirstInitAnswer(true);
    }
  }, [initAnswer]);
  const patternAnswer = () => {
    let answers = [];
    let clearForm = [];

    data.questions.map((r) => {
      if (data.userAnswers) {
        let result = data.userAnswers.find((res) => r._id === res._id);
        answers.push(result.userAnswer);
      } else {
        answers.push("");
      }
      clearForm.push("");
    });
    setClearForm({ answers: clearForm });
    setInitAnswer({ answers });
  };

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    values = data.questions.map((r, i) => {
      return { ...r, userAnswer: values.answers[i] };
    });

    let req = {
      contentId: data._id,
      contentType: data.contentType.name,
      userAnswers: values,
    };
    POST(`/client/activity/set_practice_student`, req, defConfig())
      .then((r, i) => {
        setSubmitting(false);
        setButtonToggleFooter(true);
      })
      .catch((err) => {
        setSubmitting(false);
        setButtonToggleFooter(true);
      });
    setSubmitting(false);
    setButtonToggleFooter(true);
  };

  return (
    <>
      <div className="col-12 card-container ">
        <div className="card-content">
          {data.instruction ? (
            <h5 className="mb-16">{data.instruction}</h5>
          ) : (
            ""
          )}
          <Formik
            initialValues={initAnswer}
            // validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize={true}
          >
            {(formik) => (
              <Form className="formFormik ">
                <div className="mb-16">
                  <div className=" ">
                    {data.questions.map((r, i) => {
                      return (
                        <div key={i} className="mb-3">
                          {r.image ? (
                            <div className="text-center mb-16">
                              <img src={r.image} alt="" width="100%" />
                            </div>
                          ) : (
                            ""
                          )}
                          <div className={`${i > 0 ? "mt-32" : ""} `}>
                            <span>
                              {i + 1}. {r.question}
                            </span>
                            <div className="ml-16 mt-8">
                              <FormikControl
                                control="input"
                                type="text"
                                autoComplete="off"
                                name={`answers[${i}]`}
                                placeholder="Enter the answer here"
                              />
                              {buttonToggleFooter ? (
                                <>
                                  <span className="text-neutral-200 font-sm">
                                    Answer:{" "}
                                  </span>{" "}
                                  <span className="font-sm-bold text-success-600">
                                    {r.answer}
                                  </span>
                                </>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <FooterContent
                  formik={formik}
                  isSubmitting={formik.isSubmitting}
                  data={data}
                  buttonToggle={buttonToggleFooter}
                  explanation={data.correctionText}
                  onRetry={() => {
                    setButtonToggleFooter(false);
                    // formik.resetForm();
                    setInitAnswer(clearForm);
                  }}
                  submitRef={submitRef}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ShortAnswer;
