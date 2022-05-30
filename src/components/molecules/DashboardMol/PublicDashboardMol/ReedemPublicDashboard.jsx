import React from "react";
import { AbcStartLearning } from "../../../../assets/images";
import { ModalTrigger } from "../../../atoms";
import ModalRedeemDashboard from "../../Modals/Dashboard/ModalRedeemDashboard";
const ReedemPublicDashboard = () => {
  return (
    <>
      <ModalRedeemDashboard id="modal-redeem-dashboard" />
      <div className="border border-secondary-500 radius-14 p-16 xl-p-24">
        <div className="d-flex align-items-center flex-column flex-md-row">
          <img src={AbcStartLearning} />
          <div className="xl-ml-22 mt-24 md-mt-0">
            <h5 className="md-h4 xl-h3">Let’s Start Learning!</h5>
            <p className=" font-xs md-font-sm xl-font-normal mt-16 md-h-116">
              You haven't started studying the book you have, let's start now.
              If you don't have a digital book, you can buy it by clicking the
              shop menu or exchanging your book code on redeem.
            </p>
            <div className="d-flex justify-content-md-between justify-content-lg-start flex-column flex-md-row mt-16">
              <button className="btn-primary w-full md-w-p-48 lg-w-180 lg-mr-16">
                Open shop
              </button>
              <ModalTrigger target="modal-redeem-dashboard" data={{}}>
                <button className="btn-outline w-full md-w-p-48 lg-w-180 mt-16 md-mt-0">
                  Redeem book code
                </button>
              </ModalTrigger>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReedemPublicDashboard;
