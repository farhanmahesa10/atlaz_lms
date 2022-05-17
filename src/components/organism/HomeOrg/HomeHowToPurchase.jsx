import React from "react";
import { PurchaseCard } from "../../molecules";

import LineIcon from "../../SVG/LineIcon";
const HomeHowToPurchase = () => {
  return (
    <div
      className="d-flex justify-content-center px-24  xl-pb-210  pt-24  md-pt-78 xl-pt-211 pb-24 md-pb-78 "
      style={{
        backgroundImage: "url('/images/contour.png')",
        backgroundRepeat: " no-repeat",
      }}
    >
      <div className="" style={{ maxWidth: "1440px" }}>
        <div className=" rounded d-xl-flex  justify-content-between align-items-center">
          <div className=" d-none d-xl-block  md-w-p-100 xl-h-572 mr-104">
            <img src="/images/english-book.png" alt="" className="w-p-100" />
          </div>
          <div className="xl-w-p-50 w-p-100  ">
            <div className="row  md-w-573 justify-content-center">
              <h6 className="h5 md-h4 xl-h3">How to Purchase</h6>
              <div className="text-left  mb-48" style={{ marginTop: "-12px" }}>
                <LineIcon />
              </div>

              <div className=" col-md-6  mb-32 ">
                <PurchaseCard
                  number={1}
                  title="Pick your favorite"
                  body="Choose the book you want to purchase by click one of the book below or search it."
                />
              </div>
              <div className=" col-md-6 mb-32 ">
                <PurchaseCard
                  number={2}
                  title="Proceed to purchase"
                  body="Please select an available marketplace to continue the purchase process."
                />
              </div>
              <div className=" col-md-6 mb-32">
                <PurchaseCard
                  number={3}
                  title="Book is on its way"
                  body="The marketplace will process the purchase, please wait for your book to arrive."
                />
              </div>
              <div className=" col-md-6">
                <PurchaseCard
                  number={4}
                  title="Redeem Code"
                  body="Enter the activation code on this page to be able to access the interactive book."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHowToPurchase;
