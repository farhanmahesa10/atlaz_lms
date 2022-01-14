import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <div className="row w-full px-2 align-items-center app-pt-24 mob-mb-48 app-mb-99">
      <div className="col-4 col-md-3 ">
        {!props.hideBackButton ? (
          <div className="d-flex align-items-center h-full">
            <Link to="/" className="text-gray-900 text-decoration-none d-flex">
              <i className="bi bi-chevron-left d-sm-none"></i>
              <span className="d-none d-sm-block">
                <i className="bi bi-arrow-left"></i>&nbsp; Back to Home
              </span>
            </Link>
            &nbsp;
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="col-5 col-md-6 ">
        <div className=" justify-content-center  ">
          <div className="d-flex justify-content-center ">
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
