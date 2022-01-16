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
            } bg-white  border-neutral-100`}
          >
            <span className="text-neutral-400"> {props.icon}</span>
          </div>
          <input
            type="email"
            className={`form-control border-neutral-100  ${
              isEmail ? "border-danger " : ""
            }   border-left-none  py-2 
            }`}
            placeholder={props.placeholder}
            onChange={(e) => {
              props.onChange(e.target.value);
              validation(e.target.value);
            }}
          />
        </div>
      </div>
      <small className="text-danger text-start">{isEmail}</small>
    </div>
  );
};

export default InputEmail;
