import React, { useState } from "react";

const InputPassword = (props) => {
  const [eye, setEye] = useState(false);
  const [type, setType] = useState("password");
  const [isRequired, setIsRequired] = useState(false);

  const eyeIconHalde = () => {
    if (eye) {
      setType("password");
      setEye(false);
    } else {
      setType("text");
      setEye(true);
    }
  };

  // let errorIcon = (
  //   <div className="input-group-text cursor-pointer bg-white border-danger border-left-none border-gray-400 ">
  //     <span className="text-gray-400">
  //       <i className="bi bi-exclamation-circle text-danger"></i>
  //     </span>
  //   </div>
  // );

  return (
    <div className={`text-start ${props.className}`}>
      <label htmlFor="" className="form-label text-start">
        {props.label}
      </label>
      <div className="col-auto">
        <div className="input-group bg-white   input-icon-rounded ">
          <div className="input-group-text bg-white  border-gray-400 ">
            <span className="text-gray-400"> {props.icon}</span>
          </div>
          <input
            type={type}
            className={`form-control border-gray-400   border-left-none border-right-none  py-2 
            `}
            placeholder={props.placeholder}
            onChange={(e) => props.onChange(e.target.value)}
          />

          <div
            className="input-group-text cursor-pointer bg-white border-left-none border-gray-400 "
            onClick={eyeIconHalde}
          >
            <span className="text-gray-400">
              <i
                className={`bi ${eye ? "bi-eye-fill" : "bi-eye-slash-fill"}`}
              ></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPassword;
