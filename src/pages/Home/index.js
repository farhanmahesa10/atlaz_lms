import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CarouselCenter,
  DashboardHead,
  InputComponent,
  ProductXCard,
  ProductYCard,
  WhatTheySayCard,
} from "../../components";
import PurchaseCard from "../../components/Dashboard/PurchaseCard";
import MainLayout from "../../components/Layout/Mainlayout";
import EmblaSlider from "../../components/Library/EmblaSlider";
import Clock from "../../components/SVG/Clock";
import LineIcon from "../../components/SVG/LineIcon";

const Home = () => {
  return (
    <>
      <MainLayout beforeChildren={<DashboardHead />} navbarBg="secondary-200">
        {/* <div className="md-px-32 px-12  ">
          <EmblaSlider
            content={[
              <ProductXCard />,
              <ProductXCard />,
              <ProductXCard />,
              <ProductXCard />,
              <ProductXCard />,
              <ProductXCard />,
              <ProductXCard />,
              <ProductXCard />,
            ]}
            header={
              <>
                <div className="d-flex gap-24  align-items-center">
                  <h3 className="m-0 fs-20 sm-fs-24">Limited Deals</h3>
                  <p className="m-0 text-neutral-300 fs-12 sm-fs-14">Ends in</p>
                  <div className="d-flex align-items-center gap-11">
                    <Clock />
                    <p className="text-primary-500 m-0 fs-12 sm-fs-14">
                      2 Days
                    </p>
                  </div>
                </div>
                <div className="pb-24" style={{ marginTop: "-12px" }}>
                  <LineIcon />
                </div>
              </>
            }
          />
        </div> */}
        <div
          className="sm-px-130   px-12  pt-99 pb-104"
          style={{
            backgroundImage: "url('/images/bg-htp.png')",
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
        <div className=" md-px-32 px-12 ">
          <EmblaSlider
            wDefault={5}
            w1035={3}
            w980={3}
            w768={2}
            content={[
              <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer" />,
              <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer" />,
              <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer" />,
              <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer" />,
              <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer" />,
              <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer" />,
              <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer" />,
              <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer" />,
              <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer" />,
              <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer" />,
              <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer" />,
              <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer" />,
              <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer" />,
            ]}
            header={
              <>
                <div className="d-flex gap-24  align-items-center">
                  <h3 className="m-0 fs-20 sm-fs-24">Our Book List</h3>
                  <Link
                    to="/"
                    className="mt-1 text-primary-500 hover-text-primary-300 "
                  >
                    View all
                  </Link>
                </div>
                <div className="pb-24" style={{ marginTop: "-12px" }}>
                  <LineIcon />
                </div>
              </>
            }
          />
        </div>
        <div className=" sm-px-48  px-12 ">
          <div className=" mt-104 ">
            <h3 className=" fs-20 sm-fs-24">Redeem Activation Code</h3>
            <div style={{ marginTop: "-12px" }}>
              <LineIcon />
            </div>
            <div className="w-full d-lg-flex align-items-center border radius-8 mt-24 ">
              <img
                src="/images/redem.png"
                alt=""
                className="d-none d-lg-block radius-8"
              />
              <div className=" lg-pb-0    p-24 lg-w-432 flex-grow-0 flex-shrink-0">
                <h3 className="">Where is the code?</h3>
                <p className="">
                  You can be found on the first page after cover of the book you
                  have purchased.
                </p>
              </div>
              <div className=" lg-w-p-100 p-24">
                <InputComponent
                  type="text"
                  placeholder="Input activation code here "
                  icon2={
                    <div className="p-4">
                      <button className="btn-secondary">Redeem</button>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" row gx-0 bg-secondary-200  px-32 py-41 mt-104  align-items-center">
          <div className="col-lg-3 col-12">
            <h4 className="m-0 text-left">Our Partnership</h4>
            <LineIcon />
          </div>
          <div className="col ">
            <div className="row justify-content-between mt-38 lg-mt-0 ">
              <div className="col-6 col-md">
                <img src="/images/partner-1.png" alt="" />
              </div>
              <div className="col-6 col-md text-end text-md-start">
                <img src="/images/partner-2.png" alt="" />
              </div>
              <div className="col-6 col-md mt-24 md-mt-0">
                <img src="/images/partner-3.png" alt="" />
              </div>
              <div className="col-6 col-md  mt-24 md-mt-0 text-end text-md-start">
                <img src="/images/partner-4.png" alt="" />
              </div>
              <div className="col col-md text-center text-md-start">
                <img src="/images/partner-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=" px-25 mt-128 ">
          <div className="text-center mb-54">
            <h3 className="m-0">What they say</h3>
            <div style={{ marginTop: "-10px" }}>
              <LineIcon />
            </div>
          </div>
          <div className="">
            <CarouselCenter
              content={[
                <WhatTheySayCard />,
                <WhatTheySayCard />,
                <WhatTheySayCard />,
                <WhatTheySayCard />,
                <WhatTheySayCard />,
              ]}
            />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
