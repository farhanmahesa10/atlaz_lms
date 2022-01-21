import React from "react";
import StarIcon from "../SVG/StarIcon";
const WhatTheySayCard = (props) => {
  return (
    <div
      // style={{ boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16) " }}
      style={props.style}
      className={` py-24  d-flex   flex-column justify-content-between ${props.className}`}
    >
      <div>
        <div className=" d-flex  mr-60  align-items-center gap-2 mb-24">
          <img
            src="/images/english-book.png"
            height="32"
            width="32"
            alt=""
            className="bg-danger rounded-circle"
          />
          <div>
            <h6 className="m-0">Devon Lane</h6>
            <p className="m-0">Teacher</p>
          </div>
        </div>
        <div className="content text-neutral-400 pb-27">
          The Dropbox HQ in San Francisco is one of the best designed & most
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
