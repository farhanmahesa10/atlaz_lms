import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <div className="d-flex w-full  justify-content-center align-items-center  h-88">
      <div className="position-absolute start-0 pl-32 ">
        {!props.hideBackButton ? (
          <div className="d-flex align-items-center h-full pl-4">
            <Link
              to="/"
              className="text-neutral-900 text-decoration-none d-flex"
            >
              <i
                className="bi bi-arrow-left-short d-sm-none cursor-pointer text-neutral-500"
                style={{ fontSize: "30px" }}
              ></i>
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
            <Link to="/">
              <img src="/images/logo.png" className="img-fluid" alt="..." />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
