import React from "react";

const HomeScore = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="row gx-0 my-48 md-my-104  w-full xl-my-152 md-px-104 xl-px-304"
        style={{ maxWidth: "1440px" }}
      >
        <div className="col-12 col-md-4  mb-40  border-end border-secondary-500 ">
          <div className="text-center">
            <h1 className="h2 md-h1 mb-8">20+</h1>
            <h6 className="text-neutral-200">School Trust</h6>
          </div>
        </div>
        <div className="col-12 d-md-none  mb-40 d-flex justify-content-center">
          <div className="rectangle w-136 "></div>
        </div>
        <div className="col-12 col-md-4 mb-40  border-end border-secondary-500 ">
          <div className="text-center ">
            <h1 className="h2 md-h1  mb-8">10+</h1>
            <h6 className="text-neutral-200">Interactive Book</h6>
          </div>
        </div>
        <div className="col-12 d-md-none  mb-40 d-flex justify-content-center">
          <div className="rectangle w-136 "></div>
        </div>
        <div className="col-12 col-md-4 ">
          <div className="text-center ">
            <h1 className="h2 md-h1  mb-8">300+</h1>
            <h6 className="text-center text-neutral-200">Book sold</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScore;
