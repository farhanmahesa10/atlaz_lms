import React from "react";
import LineIcon from "../../SVG/LineIcon";

const HomeOurPartnership = () => {
  return (
    <>
      <div className="  lg-px-48 px-24 md-px-32 row gx-0 bg-secondary-200  py-41 mt-152  align-items-center">
        <div className="col-lg-3 col-12">
          <h4 className="m-0 text-left">Our Partnership</h4>
          <LineIcon />
        </div>
        <div className="col ">
          <div className="row justify-content-between mt-38 lg-mt-0 ">
            <div className="col-6 col-md">
              <img src="/images/partner-1.png" alt="" />
            </div>
            <div className="col-6 col-md text-end text-md-start">
              <img src="/images/partner-2.png" alt="" />
            </div>
            <div className="col-6 col-md mt-24 md-mt-0">
              <img src="/images/partner-3.png" alt="" />
            </div>
            <div className="col-6 col-md  mt-24 md-mt-0 text-end text-md-start">
              <img src="/images/partner-4.png" alt="" />
            </div>
            <div className="col col-md text-center text-md-start">
              <img src="/images/partner-5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOurPartnership;
