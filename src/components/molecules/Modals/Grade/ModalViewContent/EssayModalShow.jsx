import React from "react";
import { Field, Form, Formik } from "formik";
import Textarea from "react-expanding-textarea";
const EssayModalShow = (props) => {
  const { data } = props;
  return (
    <div className="  begin-assessments">
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

            <div className="px-24 bg-info-100">
              <Textarea
                className="textarea"
                id=""
                cols="7"
                rows="7"
                readOnly
                value={data.userAnswer}
              />
              {/* <Textarea
                  {...field}
                  className="textarea"
                  onChange={(e)=>handleChange(e)}
                  rows={7}
                  ref={textareaRef}
                /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssayModalShow;
