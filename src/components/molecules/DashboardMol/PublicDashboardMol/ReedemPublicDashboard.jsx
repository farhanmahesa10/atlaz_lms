import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { AbcStartLearning } from "../../../../assets/images";
import { defConfig, GET } from "../../../../config/RestAPI";
import { Divider, ModalTrigger } from "../../../atoms";
import ModalRedeemDashboard from "../../Modals/Dashboard/ModalRedeemDashboard";
const ReedemPublicDashboard = (props) => {
  const { isLoading, data, redeemBookAction } = props;

  return (
    <>
      <ModalRedeemDashboard
        id="modal-redeem-dashboard"
        onSubmit={redeemBookAction}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data ? (
            <ContinueLearning data={data} />
          ) : (
            <div className="border border-secondary-500 radius-14 p-16 xl-p-24">
              <div className="d-flex align-items-center flex-column flex-md-row">
                <img
                  src={data?.imageCover ? data.imageCover : AbcStartLearning}
                />
                <div className="xl-ml-22 mt-24 md-mt-0">
                  <h5 className="md-h4 xl-h3">Let’s Start Learning!</h5>
                  <p className=" font-xs md-font-sm xl-font-normal mt-16 md-h-116">
                    You haven't started studying the book you have, let's start
                    now. If you don't have a digital book, you can buy it by
                    clicking the shop menu or exchanging your book code on
                    redeem.
                  </p>
                  <div className="d-flex justify-content-md-between justify-content-lg-start flex-column flex-md-row mt-16">
                    <Link
                      to="/shop"
                      className="md-w-p-48 w-full  lg-w-180 lg-mr-16"
                    >
                      <button className="btn-primary w-full">Open shop</button>
                    </Link>
                    <ModalTrigger
                      target="modal-redeem-dashboard"
                      data={{}}
                      className="md-w-p-48 w-full  lg-w-180 lg-mr-16 mt-16 md-mt-0"
                    >
                      <button className="btn-outline w-full  ">
                        Redeem book code
                      </button>
                    </ModalTrigger>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

const ContinueLearning = ({ data }) => {
  const createMarkup = (str) => {
    return { __html: str };
  };
  return (
    <div className="border border-secondary-500 radius-14 p-16 xl-p-24">
      <div className="d-flex align-items-center flex-column flex-md-row">
        <img
          src={data.imageCover}
          className="w-full h-full max-w-280 max-h-280 md-max-w-328  md-max-h-328 xl-max-w-318
          xl-max-h-318"
          style={{ objectFit: "cover" }}
        />
        <div className="xl-ml-22 mt-24 md-mt-0">
          <span className="bg-info-100 radius-4 font-xs-medium text-info-500 px-8 py-2 nowrap">
            Continue Learning
          </span>
          <h5 className="md-h4 xl-h3">{data.name}</h5>

          <p className="font-xs-medium sm-font-sm-medium xl-font-medium text-neutral-200">
            {data.level}
          </p>

          <div
            className=" font-xs md-font-sm xl-font-normal mt-16 md-h-116 max-h-498 custom-scroll"
            style={{ overflow: "auto" }}
            dangerouslySetInnerHTML={createMarkup(data.overview)}
          ></div>
          <div className="d-flex justify-content-md-between justify-content-lg-start flex-column flex-md-row mt-16">
            <Link to={`/my-book-list/detail/${data._id}`}>
              <button className="btn-primary w-full md-w-p-48 lg-w-180 lg-mr-16">
                Open Book
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <>
      <div className="border border-secondary-500 radius-14 p-16 xl-p-24">
        <div className="d-flex align-items-center flex-column flex-md-row w-full">
          <Skeleton width={"280px"} height="280px" />
          <div className="xl-ml-22 mt-24 md-mt-0 w-full">
            <Skeleton width={"100%"} height="36px" />

            <Skeleton width={"280px"} height="20" />

            <Skeleton width={"100%"} height="116px" />
            <div className="d-flex justify-content-md-between justify-content-lg-start flex-column flex-md-row mt-16">
              <Skeleton width={"200px"} height="31px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReedemPublicDashboard;
