import React from "react";
import Header from "../../../components/Layout/AuthLayout/Header";

const Verify = () => {
  return (
    <div className="d-flex h-screen flex-column justify-content-between align-items-center">
      <Header hideBackButton></Header>
      <div className="text-center">
        <h2>Redirecting...</h2>
        <p>We bring you to www.hiatlaz.com. Please log in again after this.</p>
      </div>
      <div className="text-center pb-32">
        <p className="font-bold">Wait to long?</p>
        <p>Click here to redirect manually</p>
      </div>
    </div>
  );
};

export default Verify;
