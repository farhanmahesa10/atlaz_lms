import React from "react";
import { PurchaseCard } from "../../molecules";

import LineIcon from "../../SVG/LineIcon";
const HomeHowToPurchase = () => {
  return (
    <>
      <div
        className="sm-px-130   px-12  pt-211 pb-210"
        style={{
          backgroundImage: "url('/images/contour.png')",
        }}
      >
        <div className=" ">
          <div className="d-flex gap-100 align-items-center ">
            <div className=" rounded d-lg-flex  justify-content-between align-items-center">
              <div className=" d-none d-lg-block">
                <img
                  src="/images/english-book.png"
                  alt=""
                  className="w-p-100"
                />
              </div>
              <div className="lg-w-p-50 w-p-100 ">
                <div className="row">
                  <h3 className="m-0 ">How to Purchase</h3>
                  <div className="text-left " style={{ marginTop: "-12px" }}>
                    <LineIcon />
                  </div>
                  <div className=" col-sm-6  pt-24 ">
                    <PurchaseCard
                      number={1}
                      title="Pick your favorite"
                      body="Choose the book you want to purchase."
                    />
                  </div>
                  <div className=" col-sm-6  pt-24">
                    <PurchaseCard
                      number={2}
                      title="Proceed to purchase"
                      body="Please select an available marketplace to continue the purchase process."
                    />
                  </div>
                  <div className=" col-sm-6  pt-24">
                    <PurchaseCard
                      number={3}
                      title="Book is on its way"
                      body="The marketplace will process the purchase, please wait for your book to arrive."
                    />
                  </div>
                  <div className=" col-sm-6  pt-24">
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
      </div>
    </>
  );
};

export default HomeHowToPurchase;
