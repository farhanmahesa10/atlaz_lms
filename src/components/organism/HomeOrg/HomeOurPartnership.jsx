import React from "react";
import LineIcon from "../../SVG/LineIcon";

const HomeOurPartnership = () => {
  return (
    <>
      <div className=" row gx-0 bg-secondary-200  mx-24 md-mx-48 px-48 md-px-32   py-40  align-items-center radius-24">
        <div className="col-xl-3 col-12">
          <h5 className="m-0 text-left">Our Partnership</h5>
          <div className="rectangle bg-primary-500 w-64 h-2"></div>
        </div>

        <div className="col ">
          <div className="row justify-content-between mt-38 ">
            <div className="col-4">
              <img src="/images/partner-1.png" alt="" />
            </div>
            <div className="col-4 text-center d-flex justify-content-center ">
              <img src="/images/partner-2.png" alt="" />
            </div>
            <div className="col-4 text-end ">
              <img src="/images/partner-3.png" alt="" />
            </div>
            <div className="col-6 text-center ">
              <img src="/images/partner-4.png" alt="" />
            </div>
            <div className="col-6 ">
              <img src="/images/partner-5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOurPartnership;
