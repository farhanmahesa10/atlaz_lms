import React, { useEffect, useRef, useState } from "react";
import FormikControl from "../../../atoms/Formik/FormikControl";
import FooterContent from "../FooterContent";
import { Form, Formik } from "formik";
import { Check, Clear } from "@mui/icons-material";
import { defConfig, POST } from "../../../../config/RestAPI";
import Skeleton from "react-loading-skeleton";

const SingleChoice = (props) => {
  const selectRef = useRef([]);

  const [buttonToggleFooter, setButtonToggleFooter] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [firstInitAnswer, setFirstInitAnswer] = useState(false);
  const [initAnswer, setInitAnswer] = useState(null);
  const submitRef = useRef();

  const { data } = props;
  const optionPattern = (options) => {
    let opts = [];
    options.map((r, i) => {
      opts.push({
        label: r.text,
        value: i,
      });
    });
    return opts;
  };

  useEffect(() => {
    data.questions.map((r, i) => {
      selectRef.current[i] = React.createRef();
    });
    patternAnswer();
  }, []);

  useEffect(() => {
    if (initAnswer && !firstInitAnswer && data.userAnswers) {
      onSubmit(initAnswer, true);
      setFirstInitAnswer(true);
    }
  }, [initAnswer]);

  const stylingAnswered = (values) => {
    let questionIndex = 0;
    for (let question of data.questions) {
      if (values.userAnswers[questionIndex] === question.answer) {
        let doc = document.querySelector(`.true-${data._id}-${question._id}`);
        doc.classList.remove("d-none");
        document
          .querySelector(`.select-${data._id}-${question._id}`)
          .classList.add("border-success-500");
      } else {
        document
          .querySelector(`.false-${data._id}-${question._id}`)
          .classList.remove("d-none");
        document
          .querySelector(`.correction-${data._id}-${question._id}`)
          .classList.remove("d-none");
        document
          .querySelector(`.select-${data._id}-${question._id}`)
          .classList.add("border-danger-500");
      }

      questionIndex++;
    }
  };

  const patternAnswer = () => {
    let userAnswers = [];
    if (!data.userAnswers) {
      data.questions.map((r) => {
        userAnswers.push();
      });
    } else {
      data.userAnswers.map((r) => {
        userAnswers.push(r.userAnswer);
      });
    }
    setInitAnswer({ userAnswers });
  };

  const clearIcon = () => {
    let questionIndex = 0;
    for (let question of data.questions) {
      document
        .querySelector(`.true-${data._id}-${question._id}`)
        .classList.add("d-none");
      document
        .querySelector(`.false-${data._id}-${question._id}`)
        .classList.add("d-none");
      document
        .querySelector(`.correction-${data._id}-${question._id}`)
        .classList.add("d-none");
      document
        .querySelector(`.select-${data._id}-${question._id}`)
        .classList.remove("border-success-500");
      document
        .querySelector(`.select-${data._id}-${question._id}`)
        .classList.remove("border-danger-500");
      questionIndex++;
    }
  };

  const handleRetry = (formik) => {
    setButtonToggleFooter(false);
    clearIcon();
    formik.resetForm();

    selectRef.current.map((r) => {
      r.current.setValue("");
    });
  };

  const handleSubmitPost = (values, setSubmitting, isFakeSubmit) => {
    values = data.questions.map((r, i) => {
      return { ...r, userAnswer: values.userAnswers[i] };
    });

    values = {
      userAnswers: values,
      contentId: data._id,
      contentType: data.contentType.name,
    };

    POST(`/client/activity/set_practice_student`, values, defConfig())
      .then((r, i) => {
        setSubmitting(false);
        setButtonToggleFooter(true);
      })
      .catch((err) => {
        setSubmitting(false);
        setButtonToggleFooter(true);
      });
  };

  const onSubmit = (values, isFake = false) => {
    setSubmitting(true);
    if (!isFake) {
      handleSubmitPost(values, setSubmitting);
    } else {
      setSubmitting(false);
      setButtonToggleFooter(true);
    }
    stylingAnswered(values);
  };
  if (!initAnswer) {
    // handle deleyed formik
    return (
      <div className="p-16">
        <Skeleton width={"100%"} height="200px" />
      </div>
    );
  }
  return (
    <>
      <div className="col-12 card-container ">
        <div className="card-content">
          <Formik
            initialValues={initAnswer}
            // validationSchema={validationSchema}
            onSubmit={(values) => onSubmit(values)}
            enableReinitialize={true}
          >
            {(formik) => (
              <Form className="formFormik">
                <div className="mb-16">
                  {data.instruction ? <h5>{data.instruction}</h5> : ""}
                  <table className="table table-borderless w-100">
                    <thead className="text-start">
                      <tr>
                        <th
                          width="50%"
                          className="font-sm-bold bg-secondary-200 p-8 radius-tl-8"
                        >
                          Question
                        </th>
                        <th className="font-sm-bold bg-secondary-200 p-8 radius-tr-8">
                          Answer
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.questions.map((r, i) => {
                        let defaultValue = false;
                        if (data.userAnswers) {
                          let findAnswer = data.userAnswers.find(
                            (res) => res._id === r._id
                          );
                          if (findAnswer.options[findAnswer.userAnswer]) {
                            defaultValue = {
                              label:
                                findAnswer.options[findAnswer.userAnswer].text,
                              value: findAnswer.userAnswer,
                            };
                          }
                        }

                        return (
                          <tr
                            className="table-content align-items-center "
                            key={i}
                          >
                            <td className="font-sm p-8 d-flex text-align-center">
                              <span
                                className={`d-none mr-4 true-${data._id}-${r._id}`}
                              >
                                <Check style={{ color: "#1bb184" }} />
                              </span>
                              <span
                                className={`d-none mr-4 false-${data._id}-${r._id}`}
                              >
                                <Clear style={{ color: "#dc3545" }} />
                              </span>
                              {r.question}
                            </td>

                            <td className="p-8">
                              <FormikControl
                                control="select"
                                name={`userAnswers[${i}]`}
                                selectRef={selectRef.current[i]}
                                className={`border radius-4 select-${data._id}-${r._id}`}
                                options={optionPattern(r.options)}
                                formik={formik}
                                placeholder="choose"
                                defaultValue={defaultValue}
                              />
                              <span
                                className={`d-none font-sm mr-4 correction-${data._id}-${r._id}`}
                              >
                                <span className="text-neutral-200 font-xs">
                                  Correction :{" "}
                                </span>{" "}
                                {r.options[r.answer].text}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <FooterContent
                  formik={formik}
                  isSubmitting={isSubmitting}
                  data={data}
                  buttonToggle={buttonToggleFooter}
                  explanation={data.correctionText}
                  onRetry={() => {
                    handleRetry(formik);
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
export default SingleChoice;
