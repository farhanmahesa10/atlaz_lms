import React from "react";

const HomeScore = () => {
  return (
    <>
      <div className="mt-152 row">
        <div className="col-4  d-flex  justify-content-end">
          <div className="text-center">
            <h1 className="fs-60">20+</h1>
            <p>School Trust</p>
          </div>
        </div>

        <div className="col-4  text-center">
          <h1 className="fs-60">10+</h1>
          <p>Interactive Book</p>
        </div>
        <div className="col-4 d-flex  justify-content-start">
          <div className="text-center ">
            <h1 className="fs-60 text-center">300+</h1>
            <p className="text-center">Book sold</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScore;
