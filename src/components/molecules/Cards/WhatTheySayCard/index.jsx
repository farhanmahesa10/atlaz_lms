import React from "react";
import StarIcon from "../../../SVG/StarIcon";
const WhatTheySayCard = (props) => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16) ",
      }}
      // style={props.style}
      className={` py-8 px-16 md-py-24  md-px-46 h-256 w-250 md-w-450 lg-w-520 d-flex slick-opacity-50  radius-14 flex-column justify-content-between ${props.className}`}
    >
      <div>
        <div className=" d-flex   align-items-center gap-2 ">
          <img
            src="/images/english-book.png"
            height="32"
            width="32"
            alt=""
            className="bg-danger rounded-circle"
          />
          <div>
            <p className="font-xs-bold md-font-sm-bold">Devon Lane</p>
            <p className="font-xs md-font-sm">Teacher</p>
          </div>
        </div>
        <div className="pb-42 pt-24">
          <p className="font-xs md-font-medium ">{props.text}</p>
        </div>
      </div>

      <div>
        <div className="d-flex gap-2">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon isHalf={true} />
        </div>
        <p className="text-neutral-200">4.5 / 5.0</p>
      </div>
    </div>
  );
};

export default WhatTheySayCard;
