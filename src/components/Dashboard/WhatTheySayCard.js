import React from "react";
import StarIcon from "../SVG/StarIcon";
const WhatTheySayCard = () => {
  return (
    <div className=" p-1">
      <div
        style={{ boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16) " }}
        className="p-2 radius-20"
      >
        <div className=" w-256 md-w-660  d-flex flex-shrink-0 mr-60 flex-grow-0    align-items-center gap-2 mb-24">
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
        <div className="content text-neutral-400 mb-64">
          The Dropbox HQ in San Francisco is one of the best designed & most
          comfortable offices I have ever witnessed. Great stuff! If you happen
          to visit SanFran, don't miss the chance to witness it yourself.
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
    </div>
  );
};

export default WhatTheySayCard;
