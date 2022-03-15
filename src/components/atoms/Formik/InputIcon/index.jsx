import React from "react";
import { Field } from "formik";
const InputIcon = (props) => {
  return (
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
            } text-start `}
          >
            <label className="font-sm-bold ">{props.label}</label>
            <div className="input-area pl-16 bg-white">
              {props.icon}
              <input
                type={props.type}
                className={`w-full input-control ${props.inputClassName}`}
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                autoFocus={props.autoFocus}
                defaultValue={props.defaultValue}
                disabled={props.disabled}
                onChange={props.onChange}
                onInput={props.onInput}
                {...field}
              />
              {props.icon2}
            </div>
            {meta.touched && meta.error && (
              <span className="text-danger-500">{meta.error}</span>
            )}
          </div>
        </>
      )}
    </Field>
  );
};

export default InputIcon;
