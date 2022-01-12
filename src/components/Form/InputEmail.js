import React, { useState } from "react";
import validator from "validator";

const InputEmail = (props) => {
  const [isEmail, setIsEmail] = useState("");
  const validation = (val) => {
    if (!validator.isEmail(val)) {
      setIsEmail("Please input the correct format email address!");
      props.onError(true);
    } else {
      setIsEmail("");
      props.onError(false);
    }
  };
  return (
    <div className={`text-start  ${props.className}`}>
      <label htmlFor="" className="form-label text-start">
        {props.label}
      </label>
      <div className="col-auto">
        <div className="input-group bg-white   input-icon-rounded ">
          <div
            className={`input-group-text ${
              isEmail ? "border-danger" : ""
            } bg-white  border-gray-400`}
          >
            <span className="text-gray-400"> {props.icon}</span>
          </div>
          <input
            type="email"
            className={`form-control border-gray-400  ${
              isEmail ? "border-danger border-right-none" : ""
            }   border-left-none  py-2 
            }`}
            placeholder={props.placeholder}
            onChange={(e) => {
              props.onChange(e.target.value);
              validation(e.target.value);
            }}
          />
          {isEmail ? (
            <div className="input-group-text cursor-pointer bg-white border-danger border-left-none border-gray-400 ">
              <span className="text-gray-400">
                <i className="bi bi-exclamation-circle text-danger"></i>
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <small className="text-danger text-start">{isEmail}</small>
    </div>
  );
};

export default InputEmail;
