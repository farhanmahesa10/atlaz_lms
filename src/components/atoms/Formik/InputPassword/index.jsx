import React, { useState } from "react";
import { Field } from "formik";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
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

  const sizing = (size) => {
    switch (size) {
      case "xs":
        return {
          fontSize: "font-xs",
          height: "h-30",
        };
      case "sm":
        return {
          fontSize: "font-sm",
          height: "h-34",
        };

      default:
        return {
          fontSize: "font-normal",
          height: "h-38",
        };
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
              <div
                className={`input-area  d-flex ${props.coverClassName} ${
                  sizing(props.size).height
                } `}
              >
                <p className="d-flex align-items-center px-16 h-full  ">
                  <LockOutlinedIcon className="text-neutral-200  fs-20" />
                </p>
                <input
                  type={type}
                  className={`w-full input-control  ${props.inputClassName} ${
                    sizing(props.size).fontSize
                  }`}
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
                  } px-16 text-neutral-200 cursor-pointer`}
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
