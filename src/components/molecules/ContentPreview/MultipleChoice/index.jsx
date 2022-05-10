import React, { useCallback, useEffect, useState } from "react";
import FooterContent from "../FooterContent";
import { Field, Form, Formik } from "formik";

const MultipleChoice = (props) => {
  const [buttonToggleFooter, setButtonToggleFooter] = useState(false);

  const abjads = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const data = props.data;

  const patternAnswer = () => {
    let answers = [];
    data.questions.map((r) => {
      answers.push("");
    });
    return { answers };
  };

  const initAnswer = patternAnswer();
  const changeStyleAfterSubmit = (idName, status) => {
    let doc = document.querySelector(idName);
    let color = "";
    if (status === 1) {
      color = "#1BB184"; 
      doc.style.fontWeight = "600";
    } else if (status === 2) {
      color = "#DC3545"; 
      doc.style.fontWeight = "600";
    } else {
      color = "#556070"; 
      doc.style.fontWeight = "400";
    }
    doc.style.color = color;
  };

  const clearColor = () => {
    let questionIndex = 0;
    for (let question of data.questions) {
      let optionIndex = 0;
      for (let option of question.options) {
        changeStyleAfterSubmit(
          `#question-${data._id}-${questionIndex}-option-${optionIndex}`,
          3
        );
        optionIndex++;
      }
      questionIndex++;
    }
  };

  const onSubmit = (values, { setSubmitting }) => {
    setButtonToggleFooter(true);
    setSubmitting(false);

    let questionIndex = 0;
    for (let question of data.questions) {
      let optionIndex = 0;
      for (let option of question.options) {
        if (option.isAnswer === true) {
          changeStyleAfterSubmit(
            `#question-${data._id}-${questionIndex}-option-${optionIndex}`,
            1
          );
        }

        for (let userAnswer of values.answers[questionIndex]) {
          if (option.isAnswer === false && userAnswer === option.text) {
            changeStyleAfterSubmit(
              `#question-${data._id}-${questionIndex}-option-${optionIndex}`,
              2
            );
          }
        }

        optionIndex++;
      }
      questionIndex++;
    }
  };

  return (
    <>
      <div className="col-12 card-container ">
        <div className="card-content">
          {data.instruction ? (
            <p className="tx-header5 mb-16">{data.instruction}</p>
          ) : (
            ""
          )}

          <div className="question ">
            <Formik
              initialValues={initAnswer}
              onSubmit={onSubmit}
              enableReinitialize={true}
            >
              {(formik) => (
                <Form>
                  <div>
                    {data.questions.map((res, ind) => {
                      return (
                        <React.Fragment key={ind}>
                          {res.image ? (
                            <div className="text-center">
                              <img src={res.image} alt="" width="100%" />
                            </div>
                          ) : (
                            ""
                          )}

                          <div className={`${ind > 0 ? "mt-16" : ""}`}>
                            <span>
                              {ind + 1}. {res.question}
                            </span>
                            {res.options.map((r, i) => {
                              return (
                                <div
                                  className={`my-8  ml-12 clear-color-${data._id}`}
                                  id={`question-${data._id}-${ind}-option-${i}`}
                                  key={i}
                                >
                                  <label
                                    className={` rounded mr-8 clear-color-${data._id}`}
                                  >
                                    <Field
                                      type="checkbox"
                                      name={`answers[${ind}]`}
                                      value={`${r.text}`}
                                      className={`radio-custom `}
                                    />
                                    <div className="custom align-items-center text-center rounded ps-2 ">
                                      <div className="mr-3 ">{abjads[i]}.</div>
                                    </div>
                                  </label>
                                  {r.text}
                                </div>
                              );
                            })}
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>

                  <FooterContent
                    formik={formik}
                    data={data}
                    buttonToggle={buttonToggleFooter}
                    explanation={data.correctionText}
                    onRetry={() => {
                      setButtonToggleFooter(false);
                      clearColor();
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
export default MultipleChoice;
