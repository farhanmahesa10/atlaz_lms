import React from "react";
import { ProgressComponent } from "../..";
const Header = (props) => {
  return (
    <div className="row w-full bg-white">
      <div className="col-4 col-md-3 ">
        {!props.hideBackButton ? (
          <div className="mt-3 ms-4 back-link ">
            <a href="" className="text-gray-900 text-decoration-none d-flex">
              <i className="bi bi-chevron-left d-sm-none"></i>
              <span className="d-none d-sm-block">
                <i className="bi bi-arrow-left"></i>&nbsp; Back to Home
              </span>
            </a>
            &nbsp;
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="col-5 col-md-6 ">
        <div className=" justify-content-center  ">
          <div className="d-flex justify-content-center mt-3">
            <div>
              <img src="/images/logo.png" className="img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
