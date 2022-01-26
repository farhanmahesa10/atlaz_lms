import React, { useState } from "react";

const DropdownButton = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div
        className={` bg-primary-400 p-2 cursor-pointer ${props.width}  radius-8 font-size-12  d-flex 
      justify-content-between align-items-center`}
        onClick={() => (show ? setShow(false) : setShow(true))}
        style={{
          boxShadow: show ? "0px 4px 16px rgba(0, 0, 0, 0.16)" : "none",
        }}
      >
        Buy from e-commerce
        <i className={`bi bi-chevron-${show ? "up" : "down"}`}></i>
      </div>
      <div className={`${!show ? "d-none" : ""} `}>
        <div
          className={`bg-white  book-shadow  radius-8 mt-8  position-absolute ${props.width}`}
          style={{ boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16)" }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default DropdownButton;
