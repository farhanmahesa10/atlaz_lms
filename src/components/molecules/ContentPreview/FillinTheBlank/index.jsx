import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import FooterContent from "../FooterContent";
import { Field, Form, Formik } from "formik";
import { defConfig, POST } from "../../../../config/RestAPI";
import Skeleton from "react-loading-skeleton";

const FillinTheBlank = (props) => {
  const [buttonToggleFooter, setButtonToggleFooter] = useState(false);

  const [clearForm, setClearForm] = useState(null);
  const [firstInitAnswer, setFirstInitAnswer] = useState(false);
  const [initAnswer, setInitAnswer] = useState(null);
  const submitRef = useRef();

  const data = props.data;

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
    let dbAnswers = [];
    let clearedForm = [];

    if (!data.userAnswers) {
      data.questions.map((r, i) => {
        answers.push({
          col1: [],
          col2: [],
        });
        r.col1.answer.map((r3) => {
          answers[i].col1.push("");
        });
        r.col2.answer.map((r3) => {
          answers[i].col2.push("");
        });
      });
    } else {
      answers = data.userAnswers.userAnswer;
    }

    //for clear form
    data.questions.map((r, i) => {
      clearedForm.push({
        col1: [],
        col2: [],
      });
      r.col1.answer.map((r3) => {
        clearedForm[i].col1.push("");
      });
      r.col2.answer.map((r3) => {
        clearedForm[i].col2.push("");
      });
    });

    data.questions.map((r, i) => {
      dbAnswers.push({
        col1: [],
        col2: [],
      });
      r.col1.answer.map((r3) => {
        dbAnswers[i].col1.push(r3);
      });
      r.col2.answer.map((r3) => {
        dbAnswers[i].col2.push(r3);
      });
    });
    setClearForm({ answers: clearedForm, dbAnswers });
    setInitAnswer({ answers, dbAnswers });
  };

  const displayAnswer = (question, answers) => {
    let result = [];
    answers.map((col1Res, i) => {
      var countAnswerColumnt = (question.match(/__/g) || []).length;
      if (i >= countAnswerColumnt) {
        return "";
      }
      result.push(
        <span
          key={i}
          className="px-8 py-2  text-neutral-50 bg-success-600 radius-4 font-xs-medium md-font-sm-medium mr-8 nowrap"
        >
          {col1Res}
        </span>
      );
    });
    return result;
  };

  const flatMap = (array, fn) => {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      var mapping = fn(array[i], i);
      result = result.concat(mapping);
    }
    return result;
  };

  const qaReplace = (str, name) => {
    var result = str;
    result = flatMap(result.split("__"), function (part, i) {
      return [
        part,
        <React.Fragment key={i}>
          <AutoGrowInput name={`answers${name}[${i}]`} key={i} />
        </React.Fragment>,
      ];
    });
    result.pop();
    return result;
  };

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    // setButtonToggleFooter(true);
    values = { ...data, userAnswer: values.answers };
    // console.log(data);

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
          {data.instruction ? (
            <h5 className="mb-16">{data.instruction}</h5>
          ) : (
            ""
          )}
          {data.image ? (
            <div className="text-center mb-2">
              <img src={data.image} alt="" width="100%" />
            </div>
          ) : (
            ""
          )}
          <div className="align-items-end fill-in-the-blank-question">
            <Formik
              initialValues={initAnswer}
              onSubmit={onSubmit}
              enableReinitialize={true}
            >
              {(formik) => (
                <Form>
                  <div className="mb-16">
                    <table>
                      <tbody>
                        {data.questions.map((r, i) => {
                          return (
                            <React.Fragment key={i}>
                              <tr className="mb-4">
                                <td
                                  className="pr-20 fw-bold"
                                  style={{
                                    verticalAlign: "top",
                                  }}
                                >
                                  {qaReplace(r.col1.question, `[${i}].col1`)}
                                </td>
                                <td>
                                  {qaReplace(r.col2.question, `[${i}].col2`)}
                                </td>
                              </tr>
                              {buttonToggleFooter ? (
                                <tr>
                                  <td className="pl-5 ">
                                    {displayAnswer(
                                      r.col1.question,
                                      r.col1.answer
                                    ).map((displayed) => {
                                      return displayed;
                                    })}
                                  </td>
                                  <td>
                                    {displayAnswer(
                                      r.col2.question,
                                      r.col2.answer
                                    ).map((displayed) => {
                                      return displayed;
                                    })}
                                  </td>
                                </tr>
                              ) : (
                                ""
                              )}
                            </React.Fragment>
                          );
                        })}
                      </tbody>
                    </table>
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
      </div>
    </>
  );
};

const AutoGrowInput = ({ name, isDbAnswers, showAnswer }) => {
  if (isDbAnswers && !showAnswer) {
    return "";
  }

  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }) => {
        return (
          <>
            <label
              className={`input-sizer  ${
                isDbAnswers ? "outline-dashed-success" : ""
              }`}
            >
              <input
                type="text"
                size="1"
                autoComplete="off"
                {...field}
                onInput={(e) => {
                  e.target.parentNode.dataset.value = e.target.value;
                }}
                readOnly={isDbAnswers ? true : false}
              />
            </label>
          </>
        );
      }}
    </Field>
  );
};
export default FillinTheBlank;
