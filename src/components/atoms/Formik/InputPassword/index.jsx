import React, { useState } from "react";
import { ErrorMessage, Field } from "formik";
const InputPassword = (props) => {
  const [eye, setEye] = useState(false);
  const [type, setType] = useState("password");
  const eyeIconHalde = () => {
    if (eye) {
      setType("password");
      setEye(false);
    } else {
      setType("text");
      setEye(true);
    }
  };
  return (
    <>
      <Field name={props.name}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => (
          <>
            <div
              className={`form-input${
                meta.touched && meta.error ? "-error" : ""
              } text-start`}
            >
              <label className="font-sm-bold">{props.label}</label>
              <div className="input-area pl-16">
                <i className="bi bi-lock"></i>
                <input
                  type={type}
                  className={`w-full input-control ${props.inputClassName}`}
                  placeholder={props.placeholder}
                  readOnly={props.readOnly}
                  autoFocus={props.autoFocus}
                  onChange={props.onChange}
                  onInput={props.onInput}
                  {...field}
                />
                <i
                  className={`bi ${
                    eye ? "bi-eye-fill" : "bi-eye-slash-fill"
                  } pr-16 text-neutral-400 cursor-pointer`}
                  onClick={eyeIconHalde}
                ></i>
              </div>
              {meta.touched && meta.error && (
                <span className="text-danger-500">{meta.error}</span>
              )}
            </div>
          </>
        )}
      </Field>
    </>
  );
};

export default InputPassword;
