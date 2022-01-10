import React from "react";

const InputComponent = (props) => {
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
            type={props.type ? props.type : "text"}
            className="form-control border-gray-400   border-left-none py-2"
            id="autoSizingInputGroup"
            placeholder={props.placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
