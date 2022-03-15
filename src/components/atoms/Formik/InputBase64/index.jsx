import React, { useRef, useState } from "react";
import { Field, ErrorMessage, Formik } from "formik";
import TextError from "../TextError";
import propTypes from "prop-types";
import BackupIcon from "@material-ui/icons/Backup";
import CancelIcon from "@material-ui/icons/Cancel";
import "../Formik.scss";
import "./inputBase64.scss";
import DefaultImage from "../../../../../src/assets/images/default.png";
function InputBase64(props) {
  const inputRef = useRef();

  const className = ["formFormik"];
  const inputClass = ["form-control"];
  className.push(props.addClass);
  inputClass.push(props.inputClass);

  if (props.isShadow) className.push("isShadow");
  if (props.isSmall) className.push("isSmall");
  if (props.isExSmall) className.push("isExSmall");
  if (props.isTaSmall) className.push("isTaSmall");
  if (props.isTaExSmall) className.push("isTaExSmall");
  if (props.isMoSmall) className.push("isMoSmall");
  if (props.isMoExSmall) className.push("isMoExSmall");

  const { label, name, accept, onClick, ...rest } = props;
  return (
    <div className={className.join(" ")}>
      {props.isLabel && (
        <label htmlFor={name} className="form-label tx-small-po">
          {label}
        </label>
      )}
      <Field className={inputClass.join(" ")} id={name} name={name} {...rest}>
        {({ form, field, meta: { touched, error } }) => {
          let { setFieldValue } = form;
          let { value } = field;

          return (
            <>
              <input
                className={`${
                  touched && error
                    ? inputClass.join(" error")
                    : inputClass.join(" ")
                } d-none`}
                type="file"
                accept={"image/*"}
                onClick={onClick}
                ref={inputRef}
                onInput={(e) => {
                  let file = e.target.files[0];
                  let reader = new FileReader();
                  reader.onloadend = () => {
                    var result = reader.result;
                    setFieldValue(props.base64Name, result);
                  };
                  reader.readAsDataURL(file);
                }}
                {...field}
              />
            </>
          );
        }}
      </Field>
      <Field name={props.base64Name}>
        {({ form, field, meta: { touched, error } }) => {
          let { setFieldValue } = form;
          let { value } = field;

          return (
            <div
              className="frame-imagebox input-base64 cursor-pointer "
              style={{ width: "9rem", height: "9rem" }}
            >
              <span
                className="close-icon cursor-pointer "
                onClick={() => {
                  setFieldValue(props.base64Name, "");
                }}
              >
                <CancelIcon style={{ color: "red" }} />
              </span>

              <div
                className="img-preview"
                onClick={() => {
                  inputRef.current.click();
                }}
              >
                {!field.value ? (
                  <div className="text-center">
                    <img src={DefaultImage} alt="" />
                  </div>
                ) : (
                  <img src={field.value} alt="" className="image-preview" />
                )}
              </div>
            </div>
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

InputBase64.propTypes = {
  addClass: propTypes.string,
  className: propTypes.string,
  inputClass: propTypes.string,
  isLabel: propTypes.bool,
  isShadow: propTypes.bool,
  isSmall: propTypes.bool,
  isExSmall: propTypes.bool,
  isTaSmall: propTypes.bool,
  isTaExSmall: propTypes.bool,
  isMoSmall: propTypes.bool,
  isMoExSmall: propTypes.bool,
};

export default InputBase64;
