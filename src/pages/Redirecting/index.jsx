import React from "react";

const Redirecting = () => {
  return (
    <div className="d-flex px-2 align-items-center h-screen justify-content-between flex-column">
      <div className="pt-24">
        <img src="/images/logo.png" className="img-fluid" alt="..." />
      </div>
      <div className="text-center">
        <h2 className="m-0 pb-8">Redirecting...</h2>
        <p>We bring you to www.hiatlaz.com. Please log in again after this.</p>
      </div>
      <div className="text-center m-0 pb-64">
        <h6 className="m-0 pb-2 ">Wait to long? </h6>
        <a href="" className="m-0 p-0">
          Click here to redirect manually
        </a>
      </div>
    </div>
  );
};

export default Redirecting;
