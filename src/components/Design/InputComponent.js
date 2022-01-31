import React from "react";
const InputComponent = (props) => {
  return (
    <div className={`form-input${props.error ? "-error" : ""} text-start`}>
      <label className="font-sm-bold ">{props.label}</label>
      <div className="input-area pl-16">
        {props.icon}
        <input
          type={props.type}
          className={`w-full input-control ${props.inputClassName}`}
          placeholder={props.placeholder}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
          readOnly={props.readOnly}
          autoFocus={props.autoFocus}
        />
      </div>
      <span className="font-sm input-desc">{props.description}</span>
    </div>
  );
};

export default InputComponent;
