import React from "react";
import StarIcon from "../SVG/StarIcon";
const WhatTheySayCard = (props) => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16) ",
      }}
      // style={props.style}
      className={` py-24 w-150 md-w-450 lg-w-660 d-flex px-46  radius-14 flex-column justify-content-between ${props.className}`}
    >
      <div className="">
        <div className=" d-flex   align-items-center gap-2 ">
          <img
            src="/images/english-book.png"
            height="32"
            width="32"
            alt=""
            className="bg-danger rounded-circle"
          />
          <div>
            <p className="font-sm-bold">Devon Lane</p>
            <p className="font-sm">Teacher</p>
          </div>
        </div>
        <div className="pb-42 pt-24">
          <p className="font-medium">
            "Wow what great service, I love it! It's is the most valuable
            business resource we have EVER purchased. We can't understand how
            we've been living without it."
          </p>
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
