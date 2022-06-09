import React from "react";
import { Field, Form, Formik } from "formik";
import Textarea from "react-expanding-textarea";
const BeginAssessmentEssay = (props) => {
  const data = props.data;
  return (
    <div>
      <div className="card-container">
        <div className="card-content">
          <div className="mb-16">
            <p className="mb-16" id={`${props.index}.userAnswer`}>
              {props.nomor}. {data.question}
            </p>
            {data.image ? (
              <div className="text-center mb-16">
                <img src={data.image} alt="" width="100%" />
              </div>
            ) : (
              ""
            )}

            <Field name="answer">
              {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                meta,
              }) => {
                return (
                  <div className="px-24 bg-info-100">
                    <Textarea
                      className="textarea"
                      {...field}
                      id=""
                      cols="7"
                      rows="7"
                      onChange={(e) => {
                        let setIsfilled = false;
                        if (e.target.value.length > 0) {
                          setIsfilled = true;
                        }
                        props.onSendProgress(
                          `${props.index}.userAnswer`,
                          setIsfilled
                        );
                        props.formik.setFieldValue(
                          `${props.index}.userAnswer`,
                          e.target.value
                        );
                      }}
                    />
                    {/* <Textarea
                      {...field}
                      className="textarea"
                      onChange={(e)=>handleChange(e)}
                      rows={7}
                      ref={textareaRef}
                    /> */}
                  </div>
                );
              }}
            </Field>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginAssessmentEssay;
