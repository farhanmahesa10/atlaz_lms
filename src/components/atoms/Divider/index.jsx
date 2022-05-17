import React from "react";

const Divider = ({
  text,
  parentClassName,
  textClassName,
  lineColor,
  height,
  parentStyle,
}) => {
  return (
    <div
      className={`d-flex align-items-center  ${parentClassName}`}
      style={parentStyle}
    >
      <div
        className={`w-full radius-8  ${
          lineColor ? lineColor : "bg-secondary-500"
        } ${height ? height : "h-1"}`}
      ></div>
      <div className={`${textClassName}`} style={{ whiteSpace: "nowrap" }}>
        {text}
      </div>
      <div
        className={` w-full radius-8  ${
          lineColor ? lineColor : "bg-secondary-500"
        }  ${height ? height : "h-1"}`}
      ></div>
    </div>
  );
};

export default Divider;
