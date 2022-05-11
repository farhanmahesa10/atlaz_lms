import React, { useEffect, useState } from "react";
import _ from "lodash";
import FooterContent from "../FooterContent";
import { Field, Form, Formik } from "formik";

const FillinTheBlank = (props) => {
  const [buttonToggleFooter, setButtonToggleFooter] = useState(false);

  const data = props.data;

  const patternAnswer = () => {
    let answers = [];
    let dbAnswers = [];
    data.questions.map((r, i) => {
      answers.push({
        col1: [],
        col2: [],
      });
      answers.map((r2, i2) => {
        r.col1.answer.map((r3) => {
          r2.col1.push("");
        });
        r.col2.answer.map((r3) => {
          r2.col2.push("");
        });
      });
    });
    data.questions.map((r, i) => {
      dbAnswers.push({
        col1: [],
        col2: [],
      });
      dbAnswers.map((r2, i2) => {
        r.col1.answer.map((r3) => {
          r2.col1.push(r3);
        });
        r.col2.answer.map((r3) => {
          r2.col2.push(r3);
        });
      });
    });
    return { answers, dbAnswers };
  };

  var initAnswer = patternAnswer();

  const displayAnswer = (question, answers) => {
    let result = [];
    answers.map((col1Res, i) => {
      var countAnswerColumnt = (question.match(/__/g) || []).length;
      if (i >= countAnswerColumnt) {
        return "";
      }
      result.push(
        <span className="badge bg-success600 mr-8" key={i}>
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

  const handleRetry = (formik) => {
    initAnswer = patternAnswer();
  };

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    setButtonToggleFooter(true);
    console.log(values);
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
                                <td className="pr-20 fw-bold">
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
                      formik.resetForm();
                    }}
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
