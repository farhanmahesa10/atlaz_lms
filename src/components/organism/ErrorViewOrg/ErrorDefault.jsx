import React from "react";
import MainFooter from "../../Layout/Mainlayout/MainFooter";
import page404 from "../../../assets/images/page-404.png";
import { Link } from "react-router-dom";
const ErrorDefault = () => {
  return (
    <>
      <div className="d-flex h-screen  flex-column justify-content-between align-items-between">
        <div className="h-82 border-bottom border-secondary-500">
          <div className=" h-full align-items-center justify-content-center d-none d-lg-flex">
            <img src="/images/logo.png" alt="" className="h-32" />
          </div>
          <div className=" h-full align-items-center justify-content-center d-flex d-lg-none">
            <img src="/images/logo-icon.png" alt="" className="h-32" />
          </div>
        </div>
        <div className="w-full">
          <div className="d-flex justify-content-center">
            <div className="max-w-420 xl-max-w-637 w-full d-flex flex-column flex-xl-row justify-content-center align-items-center">
              <img src={page404} alt="" className="mr-52 w-258" />
              <div className="text-center">
                <h3 className="md-h1">Oops, Something went wrong!</h3>
                <p className="font-sm-medium mt-16">
                  We can’t seem to find the page you are looking for.
                </p>
                <p className="mt-40 font-sm">Let us take you back:</p>
                <Link to="/shop">
                  <button className="btn-primary font-normal mt-8">
                    Back to homepage
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <MainFooter bg={"bg-white"} />
        </div>
      </div>
    </>
  );
};

export default ErrorDefault;
