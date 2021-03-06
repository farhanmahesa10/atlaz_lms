import React from "react";
import { bgPartnership } from "../../../assets/images";

const HomeOurPartnership = () => {
  return (
    <>
      <div className="row gx-0 justify-content-center">
        <div style={{ maxWidth: "1440px" }}>
          <div className="col-12">
            <div
              className=" row gx-0 mx-24 md-mx-48 px-32 md-px-32   py-48 xl-py-104  align-items-center radius-24"
              style={{
                border: "2px dashed #AAAFB7",
                backgroundImage: `url('${bgPartnership}')`,
                backgroundSize: "cover",
              }}
            >
              <div className=" col-12 mb-48">
                <p className="m-0 text-left h5 md-h4 xl-h3">Our Partnership</p>
                <div className="rectangle bg-primary-500 w-64 h-2"></div>
              </div>

              <div className="row gx-0 ">
                <div className="col-6 col-xl-3 text-center ">
                  <img
                    src="/images/example-partnership/1.png"
                    alt=""
                    className="w-p-100"
                  />
                </div>
                <div className="col-6 col-xl-3 text-center ">
                  <img
                    src="/images/example-partnership/2.png"
                    alt=""
                    className="w-p-100"
                  />
                </div>
                <div className="col-6 col-xl-3 text-center ">
                  <img
                    src="/images/example-partnership/3.png"
                    alt=""
                    className="w-p-100"
                  />
                </div>
                <div className="col-6 col-xl-3 text-center ">
                  <img
                    src="/images/example-partnership/4.png"
                    alt=""
                    className="w-p-100"
                  />
                </div>
                <div className="col-6 col-xl-3 text-center ">
                  <img
                    src="/images/example-partnership/5.png"
                    alt=""
                    className="w-p-100"
                  />
                </div>
                <div className="col-6 col-xl-3 text-center ">
                  <img
                    src="/images/example-partnership/6.png"
                    alt=""
                    className="w-p-100"
                  />
                </div>
                <div className="col-6 col-xl-3 text-center ">
                  <img
                    src="/images/example-partnership/7.png"
                    alt=""
                    className="w-p-100"
                  />
                </div>
                <div className="col-6 col-xl-3 text-center ">
                  <img
                    src="/images/example-partnership/8.png"
                    alt=""
                    className="w-p-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOurPartnership;
