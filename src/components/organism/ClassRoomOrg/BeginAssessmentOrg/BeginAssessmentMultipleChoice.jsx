import { Field } from "formik";
import React from "react";

const BeginAssessmentMultipleChoice = (props) => {
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

  return (
    <div className="assessments-content-preview ">
      <div className="col-12 card-container ">
        <div className="card-content">
          <div className="question ">
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

                    <div
                      className={`${ind > 0 ? "mt-16" : "mt-8"}`}
                      id={`${props.index}.questions[${ind}].userAnswer`}
                    >
                      <span>
                        {props.nomor}. {res.question}
                      </span>
                      {res.options.map((r, i) => {
                        return (
                          <div
                            className={`my-8 d-flex  ml-12 clear-color-${data._id}`}
                            key={i}
                          >
                            <label className=" rounded mr-8">
                              <Field
                                type="checkbox"
                                name={`${props.index}.questions[${ind}].userAnswer`}
                                hidden
                                value={r.text}
                                className="radio-custom-multiple"
                                onInput={(e) => {
                                  let setIsfilled = false;
                                  let formikValue = props.formik.getFieldProps(
                                    `${props.index}.questions[${ind}].userAnswer`
                                  );
                                  if (formikValue.value.length > 0) {
                                    setIsfilled = true;
                                  }
                                  props.onSendProgress(
                                    `${props.index}.questions[${ind}].userAnswer`,
                                    setIsfilled
                                  );
                                }}
                              />
                              <div className="custom align-items-center text-center rounded ps-2">
                                <div className="mr-3 text-center">
                                  {abjads[i]}.
                                </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginAssessmentMultipleChoice;
