import React from "react";

const ProgressBar = (props) => {
  const { bgColor, radius, value, activeColor, height } = props;

  // example props
  // bgColor = bg-white
  // radius = 8,
  // value = 50, //artinya 50%
  // activeColor = primary-500,
  // height = 2

  return (
    <div className={`w-full ${bgColor} radius-${radius}`}>
      <div
        className={`w-p-${value ? value : "5"} bg-${
          activeColor ? activeColor : "primary-500"
        } h-${height ? height : "10"}   radius-${radius}`}
      ></div>
    </div>
  );
};

export default ProgressBar;
