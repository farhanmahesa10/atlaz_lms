import React, { useState } from "react";
import { Field } from "formik";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DotIcon from "../../../SVG/DotIcon";
import validator from "validator";
const InputPassword = (props) => {
  const [eye, setEye] = useState(false);
  const [type, setType] = useState("password");

  const [isLower, setIsLower] = useState("first");
  const [isUpper, setIsUpper] = useState("first");
  const [isNumeric, setIsNumeric] = useState("first");
  const [isSix, setIsSix] = useState("first");

  const validate = (val) => {
    let spliting = val ? val.split("") : [];
    let checkIfUpper = spliting.find((r) => {
      if (!validator.isNumeric(r)) return validator.isUppercase(r);
    });
    let checkIfLower = spliting.find((r) => {
      if (!validator.isNumeric(r)) return validator.isLowercase(r);
    });
    let checkIfNumeric = spliting.find((r) => {
      return validator.isNumeric(r);
    });
    let checkIfSix = val.length >= 6 ? true : false;
    checkIfUpper ? setIsUpper(true) : setIsUpper(false);
    checkIfLower ? setIsLower(true) : setIsLower(false);
    checkIfNumeric ? setIsNumeric(true) : setIsNumeric(false);
    checkIfSix ? setIsSix(true) : setIsSix(false);
  };

  const eyeIconHalde = () => {
    if (eye) {
      setType("password");
      setEye(false);
    } else {
      setType("text");
      setEye(true);
    }
  };

  const sizing = () => {
    let size = props.size;
    let mdSize = props.mdSize;
    let lgSize = props.lgSize;
    let xlSize = props.xlSize;
    let fontSize = " ";
    let height = " ";

    if (!size && !mdSize && !lgSize && !xlSize) {
      fontSize += " font-normal ";
      height += " h-40 ";
    }

    if (size) {
      if (size === "xs") {
        fontSize += " font-xs ";
        height += " h-32 ";
      } else if (size === "sm") {
        fontSize += " font-sm ";
        height += " h-36 ";
      } else if (size === "normal") {
        fontSize += " font-normal ";
        height += " h-40 ";
      }
    }

    if (mdSize) {
      if (mdSize === "xs") {
        fontSize += " md-font-xs ";
        height += " md-h-32 ";
      } else if (mdSize === "sm") {
        fontSize += " md-font-sm ";
        height += " md-h-36 ";
      } else if (mdSize === "normal") {
        fontSize += " md-font-normal ";
        height += " md-h-40 ";
      }
    }

    if (lgSize) {
      if (lgSize === "xs") {
        fontSize += " lg-font-xs ";
        height += " lg-h-32 ";
      } else if (lgSize === "sm") {
        fontSize += " lg-font-sm ";
        height += " lg-h-36 ";
      } else if (lgSize === "normal") {
        fontSize += " lg-font-normal ";
        height += " lg-h-40 ";
      }
    }

    if (xlSize) {
      if (xlSize === "xs") {
        fontSize += " xl-font-xs ";
        height += " xl-h-32 ";
      } else if (xlSize === "sm") {
        fontSize += " xl-font-sm ";
        height += " xl-h-36 ";
      } else if (xlSize === "normal") {
        fontSize += " xl-font-normal ";
        height += " xl-h-40 ";
      }
    }

    return { height, fontSize };
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
                className={`input-area  d-flex bg-white ${
                  props.coverClassName
                } ${sizing(props.size).height}  ${props.label && "mt-4"}`}
              >
                {!props.withoutLockIcon ? (
                  <p className="d-flex align-items-center px-16 h-full  ">
                    <LockOutlinedIcon className="text-neutral-200  fs-20" />
                  </p>
                ) : (
                  <span className="ml-8"></span>
                )}
                <input
                  type={type}
                  className={`w-full input-control  ${props.inputClassName} ${
                    sizing(props.size).fontSize
                  }`}
                  placeholder={props.placeholder}
                  readOnly={props.readOnly}
                  autoFocus={props.autoFocus}
                  onChange={props.onChange}
                  onInput={(e) => {
                    if (props.onInput) {
                      props.onInput(e);
                    }
                    if (props.withTemplateValidation) {
                      validate(e.target.value);
                    }
                  }}
                  {...field}
                />
                <i
                  className={`bi ${
                    eye ? "bi-eye-fill" : "bi-eye-slash-fill"
                  } px-16 text-neutral-200 cursor-pointer`}
                  onClick={eyeIconHalde}
                ></i>
              </div>

              {props.withTemplateValidation ? (
                <>
                  <div className="row mt-16  text-neutral-400">
                    <div className="col-sm-6 d-flex align-items-center text-neutral-300 font-xs">
                      <DotIcon
                        status={
                          isLower === true
                            ? "success"
                            : isLower === false
                            ? "danger"
                            : ""
                        }
                      >
                        <small className="ps-2">One lowercase characters</small>
                      </DotIcon>
                    </div>
                    <div className="col-sm-6  d-flex align-items-center text-neutral-300 font-xs">
                      <DotIcon
                        status={
                          isNumeric === true
                            ? "success"
                            : isNumeric === false
                            ? "danger"
                            : ""
                        }
                      >
                        <small className="ps-2">One numeric</small>
                      </DotIcon>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center text-neutral-300 font-xs">
                      <DotIcon
                        status={
                          isUpper === true
                            ? "success"
                            : isUpper === false
                            ? "danger"
                            : ""
                        }
                      >
                        <small className="ps-2">One uppercase characters</small>
                      </DotIcon>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center text-neutral-300 font-xs">
                      <DotIcon
                        status={
                          isSix === true
                            ? "success"
                            : isSix === false
                            ? "danger"
                            : ""
                        }
                      >
                        <small className="ps-2">6 minimum characters</small>
                      </DotIcon>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {meta.touched && meta.error && (
                    <span className="text-danger-500">{meta.error}</span>
                  )}
                </>
              )}
            </div>
          </>
        )}
      </Field>
    </>
  );
};

export default InputPassword;
