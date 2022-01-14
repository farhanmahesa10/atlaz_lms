import React, { useState } from "react";
import validator from "validator";

const InputText = (props) => {
  const [isRequired, setIsRequired] = useState(false);
  const validation = (val) => {
    if (props.required) {
      if (validator.isEmpty(val)) {
        setIsRequired("Field is required");
        props.onError(true);
      } else {
        setIsRequired("");
        props.onError(false);
      }
    }
  };
  return (
    <div className={`text-start ${props.className}`}>
      <label htmlFor="" className="form-label text-start">
        {props.label}
      </label>
      <div className="col-auto">
        <div className="input-group bg-white   input-icon-rounded ">
          <div
            className={`input-group-text ${
              isRequired ? "border-danger" : ""
            } bg-white  border-gray-400`}
          >
            <span className="text-gray-400"> {props.icon}</span>
          </div>
          <input
            type="text"
            className={`form-control border-gray-400 ${
              isRequired ? "border-danger " : ""
            }   border-left-none    py-2 
            }`}
            placeholder={props.placeholder}
            onChange={(e) => {
              props.onChange(e.target.value);
              validation(e.target.value);
            }}
          />
        </div>
      </div>
      <small className="text-danger text-start">{isRequired}</small>
    </div>
  );
};

export default InputText;
