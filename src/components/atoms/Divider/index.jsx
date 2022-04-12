import React from "react";

const Divider = ({ text, parentClassName, textClassName }) => {
  return (
    <div className={`d-flex align-items-center  ${parentClassName}`}>
      <div className="w-full h-1 bg-secondary-500"></div>
      <div className={`${textClassName}`} style={{ whiteSpace: "nowrap" }}>
        {text}
      </div>
      <div className=" w-full h-1 bg-secondary-500"></div>
    </div>
  );
};

export default Divider;
