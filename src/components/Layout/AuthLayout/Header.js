import React from "react";

const Header = (props) => {
  return (
    <div>
      {!props.hideBackButton ? (
        <div className="mt-3 ms-4 back-link position-absolute">
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

      <div className="row justify-content-center w-full">
        <div className="d-flex justify-content-center mt-3">
          <div>
            <img src="images/Logo.png" className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
