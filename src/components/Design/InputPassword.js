import React, { useState } from "react";

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
    <div className={`form-input${props.error ? "-error" : ""} text-start`}>
      <label className="font-sm-bold">{props.label}</label>
      <div className="input-area pl-16">
        <i className="bi bi-lock"></i>
        <input
          type={type}
          className="w-p-100 input-control"
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          autoFocus={props.autoFocus}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
        />
        <i
          className={`bi ${
            eye ? "bi-eye-fill" : "bi-eye-slash-fill"
          } pr-16 text-neutral-400 cursor-pointer`}
          onClick={eyeIconHalde}
        ></i>
      </div>
      <span className="font-sm input-desc">{props.description}</span>
    </div>
  );
};

export default InputPassword;
