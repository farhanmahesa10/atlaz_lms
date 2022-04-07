import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SliderNoArrow } from "../../../atoms";

const ProductDetailSkeleton = () => {
  return (
    <>
      <div className="row gx-0 justify-content-center">
        <div style={{ maxWidth: "1440px" }}>
          <div className=" m-24 md-m-32 xl-mx-186">
            <div className="d-none d-xl-block mb-32">
              <Skeleton width={"243px"} />
            </div>
            <div className="row gx-0 justify-content-center">
              <div className="col-12 md-w-430 mb-24  md-mb-40 col-xl-4  d-flex justify-content-between flex-column">
                <div className=" mb-8 boom ">
                  <div className="h-p-100 w-p-100">
                    <Skeleton width="100%" height="100%" />
                  </div>
                </div>
                <div className="w-p-100 d-grid grid-cols-4  justify-content-between gap-2 align-items-center ">
                  <div className="w-p-100">
                    <Skeleton width="100%" height="100px" />
                  </div>
                  <div className="w-p-100">
                    <Skeleton width="100%" height="100px" />
                  </div>
                  <div className="w-p-100">
                    <Skeleton width="100%" height="100px" />
                  </div>
                  <div className="w-p-100">
                    <Skeleton width="100%" height="100px" />
                  </div>
                </div>
              </div>
              <div className="col-xl-1"></div>
              <div className=" col-12 md-px-104 xl-px-0 mb-56 md-mb-72 col-xl">
                <div className="mt-5">
                  <p className="mb-12">
                    <Skeleton width={"260px"} height="30px" />
                  </p>
                  <Skeleton width={"200px"} />

                  <div className="mb-30 xl-mb-38">
                    <p
                      className="text-neutral-400 font-xs md-font-sm xl-font-normal "
                      style={{ textAlign: "justify" }}
                    >
                      <Skeleton width={"100%"} height="150px" />
                    </p>
                  </div>
                  <div>
                    <div className="d-flex gap-2 align-items-end ">
                      <p className="">
                        <Skeleton width={"150px"} height="30px" />
                      </p>
                      <p className="">
                        <Skeleton width={"100px"} height="10px" />
                      </p>
                      <p className="">
                        <Skeleton width={"40px"} height="30px" />
                      </p>
                    </div>
                  </div>
                  <div className="mt-16">
                    <p>
                      <Skeleton width={"150px"} height="10px" />
                    </p>
                    <div className="mt-6 d-flex">
                      <p className="mr-4">
                        <Skeleton width={"100px"} height="30px" />
                      </p>
                      <p>
                        <Skeleton width={"100px"} height="30px" />
                      </p>
                    </div>
                  </div>
                  <div className="mt-34 row gx-0 ">
                    <div className="col-12">
                      <Skeleton width={"100%"} height="40px" />
                    </div>
                    <div className="col-12 mt-20 d-md-flex align-items-center">
                      <p className="mr-4">
                        <Skeleton width={"150px"} height="40px" />
                      </p>
                      <p className="w-p-100">
                        <Skeleton width={"100%"} height="10px" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12  md-px-104 xl-px-0">
                <div className="xl-mx-32">
                  <div className="mb-16">
                    <Skeleton width={"250px"} height="30px" />
                  </div>
                  <div className="text-danger row">
                    <p className="col ">
                      <Skeleton width={"100%"} height="40px" />
                    </p>
                    <p className="col">
                      <Skeleton width={"100%"} height="40px" />
                    </p>
                    <p className="col">
                      <Skeleton width={"100%"} height="40px" />
                    </p>
                  </div>
                  <div className="mt-68 xlmt-88">
                    <div className="mb-16">
                      <Skeleton width={"250px"} height="30px" />
                    </div>
                    <div className=" row d-flex gap-2  gx-0">
                      <div className="col">
                        <Skeleton width={"150px"} height="10px" />
                        <Skeleton width={"150px"} height="10px" />
                      </div>
                      <div className="col">
                        <Skeleton width={"150px"} height="10px" />
                        <Skeleton width={"150px"} height="10px" />
                      </div>
                      <div className="col">
                        <Skeleton width={"150px"} height="10px" />
                        <Skeleton width={"150px"} height="10px" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-48">
                    <div className="mb-16">
                      <p className="h5 xl-h4 ">
                        <Skeleton width={"250px"} height="30px" />
                      </p>
                    </div>
                    <SliderNoArrow
                      wDefault={4}
                      w1035={2}
                      w980={2}
                      w768={2}
                      content={[
                        <Skeleton width={"160px"} height="160px" />,
                        <Skeleton width={"160px"} height="160px" />,
                        <Skeleton width={"160px"} height="160px" />,
                        <Skeleton width={"160px"} height="160px" />,
                        <Skeleton width={"160px"} height="160px" />,
                        <Skeleton width={"160px"} height="160px" />,
                        <Skeleton width={"160px"} height="160px" />,
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailSkeleton;
