import React, { useState } from "react";
import FormikControl from "../../../atoms/Formik/FormikControl";
import FooterContent from "../FooterContent";
import { Form, Formik } from "formik";

const ShortAnswer = (props) => {
  const [buttonToggleFooter, setButtonToggleFooter] = useState(false);
  const data = props.data;

  const patternAnswer = () => {
    let answers = [];
    data.questions.map((r) => {
      answers.push("");
    });
    return { answers };
  };

  const initAnswer = patternAnswer();
  const onSubmit = (values, { setSubmitting }) => {
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
                                name={`answers[${i}]`}
                                placeholder="Enter the answer here"
                              />
                              {buttonToggleFooter ? (
                                <>
                                  <span className="neutral200 tx-small">
                                    Answer :{" "}
                                  </span>{" "}
                                  <span className="tx-small-po success600">
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
                    formik.resetForm();
                  }}
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
