import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import "./beginAssessment.scss";
import { Field, Form, Formik } from "formik";
const BeginAssessmentSingleChoice = (props) => {
  const { data } = props;

  return (
    <div className="assessment-single-choice p-24">
      {data.questions.map((r, i) => {
        return (
          <React.Fragment key={i}>
            {r.image ? (
              <div className="text-center mb-24">
                <img src={r.image} alt="" width="100%" className="radius-4" />
              </div>
            ) : (
              ""
            )}
            <div className="row gx-0">
              <div className="col-12  mb-16 tx-body-hl">
                {i + 1}. {r.question}
              </div>
              {r.options.map((res, ind) => {
                return (
                  <React.Fragment key={ind}>
                    <div className=" col-12">
                      <div
                        className={`${
                          r.options.length !== ind + 1 ? "mb-8 " : ""
                        } ${props.index}.questions[${i}].userAnswer`}
                      >
                        <label className=" rounded mr-8 w-full">
                          <Field
                            type="radio"
                            name={`${props.index}.questions[${i}].userAnswer`}
                            value={`${ind}`}
                            className={`radio-custom `}
                            onInput={(e) => {
                              props.onSendProgress(
                                `${props.index}.questions[${i}].userAnswer`
                              );
                            }}
                          />
                          <div className="custom d-flex justify-content-between align-items-center px-24 py-16 radius-14  border bg-white single-choice-option">
                            <span>{res.text}</span>{" "}
                            <span className="isChecked">
                              <CheckCircleRoundedIcon className="text-success-600" />
                            </span>
                            <span className="noChecked">
                              <RadioButtonUncheckedRoundedIcon className="text-neutral-200" />
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BeginAssessmentSingleChoice;
