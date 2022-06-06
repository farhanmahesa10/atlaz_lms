import React from "react";
import Skeleton from "react-loading-skeleton";
const WelcomeAssessmentLoading = () => {
  return (
    <>
      <div className="mt-16 d-none d-xl-block mx-48">
        <Skeleton height={"16px"} width="300px" />
      </div>
      <div className="my-24 mx-24">
        <div className="mt-40 d-flex align-items-center flex-column">
          <div className="mt-20 md-mt-32 xl-max-w-888 md-max-w-500 w-full">
            <div className="row">
              <div className="col-12 col-xl-6">
                <Skeleton height={"20px"} width="100px" />
                <div className="mt-8">
                  <Skeleton height={"75px"} width="100%" />
                  <Skeleton height={"75px"} width="100%" />

                  <Skeleton height={"10px"} width="300px" />
                </div>
                <div className="mt-40">
                  <Skeleton height={"16px"} width="100px" />
                  <div className="mt-18 d-flex align-items-center ">
                    <Skeleton height={"20px"} width="200px" />
                  </div>
                  <div className="mt-18 d-flex align-items-center mt-16">
                    <Skeleton height={"20px"} width="200px" />
                  </div>
                  <div className="mt-18 d-flex align-items-center mt-16">
                    <Skeleton height={"20px"} width="200px" />
                  </div>
                  <div className="mt-40">
                    <Skeleton height={"50px"} width="200px" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6 mt-40 xl-mt-0">
                <Skeleton height={"500px"} width="100%" />
              </div>
            </div>
          </div>

          <div className="mt-24 md-mt-40 d-flex w-full justify-content-between justify-content-md-center">
            <div className="d-flex  md-mr-68 w-148">
              <div className="ml-8 d-flex justify-content-between flex-column ">
                <Skeleton height={"30px"} width="30px" />
              </div>
            </div>
            <div className="d-flex md-ml-68 w-148 justify-content-end">
              <Skeleton height={"30px"} width="30px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeAssessmentLoading;
