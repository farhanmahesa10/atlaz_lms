import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CarouselCenter,
  DashboardHead,
  ProductXCard,
  ProductYCard,
  WhatTheySayCard,
} from "../../components";
import PurchaseCard from "../../components/Dashboard/PurchaseCard";
import { InputText } from "../../components/Form";
import MainLayout from "../../components/Layout/Mainlayout";
import Carousel from "../../components/Library/Carousel";
import EmblaSlider from "../../components/Library/EmblaSlider";
import Clock from "../../components/SVG/Clock";
import LineIcon from "../../components/SVG/LineIcon";

const Home = () => {
  return (
    <>
      <MainLayout beforeChildren={<DashboardHead />} navbarBg="secondary-200">
        <div className="pt-48 sm-px-48 px-12 m-0 xl-pr-12">
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
                  <h3 className="m-0 font-size-20 sm-font-size-24">
                    Limited Deals
                  </h3>
                  <p className="m-0 text-neutral-300 font-size-12 sm-font-size-14">
                    Ends in
                  </p>
                  <div className="d-flex align-items-center gap-11">
                    <Clock />
                    <p className="text-primary-500 m-0 font-size-12 sm-font-size-14">
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
        </div>
        <div className="sm-px-48 px-12 m-0 xl-pr-12">
          <div className=" pt-64">
            <h3 className="m-0 font-size-20 sm-font-size-24">
              Redeem Activation Code
            </h3>
            <div style={{ marginTop: "-12px" }}>
              <LineIcon />
            </div>
            <div className="w-full  border-1 border-neutral-100 rounded d-lg-flex flex-grow-0 flex-shrink-0 align-items-center gap-24 pr-24 lg-pl-0 pl-24 mt-24 lg-py-0 py-24 ">
              <img
                src="/images/redem.png"
                alt=""
                className="d-none d-lg-block"
              />
              <div className=" lg-pb-0 pb-24 lg-w-432 flex-grow-0 flex-shrink-0">
                <h3 className="m-0">Where is the code?</h3>
                <p className="m-0">
                  You can be found on the first page after cover of the book you
                  have purchased.
                </p>
              </div>
              <div className="d-sm-flex w-full  ">
                <input
                  type="text"
                  className="form-control sm-radius-l-8 radius-8"
                  placeholder="Input activation code here "
                />
                <button
                  className="input-group-text sm-radius-r-8 radius-8 btn cursor-pointer w-full  sm-w-210 mt-24 sm-mt-0  bg-primary-400 border-primary-400"
                  id="basic-addon2"
                >
                  Redeem
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-128 sm-pl-48 pl-12 m-0 xl-pr-12">
          <EmblaSlider
            wDefault={5}
            w1035={3}
            w980={3}
            w768={2}
            content={[
              <ProductYCard />,
              <ProductYCard />,
              <ProductYCard />,
              <ProductYCard />,
              <ProductYCard />,
              <ProductYCard />,
            ]}
            header={
              <>
                <div className="d-flex gap-24  align-items-center">
                  <h3 className="m-0 font-size-20 sm-font-size-24">
                    Our Book List
                  </h3>
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
        <div className="sm-px-48 px-12 m-0">
          <div className="pb-128 ">
            <div className="d-flex gap-100 align-items-center ">
              <div className="pt-128  rounded d-lg-flex  justify-content-between align-items-center">
                <div className=" d-none d-lg-block">
                  <img src="/images/english-book.png" alt="" />
                </div>
                <div className="lg-w-p-50 w-p-100 ">
                  <div className="row">
                    <h3 className="m-0 ">How to Purchase</h3>
                    <div className="text-left " style={{ marginTop: "-12px" }}>
                      <LineIcon />
                    </div>
                    <div className=" col-sm-6 pt-24 ">
                      <PurchaseCard
                        number={1}
                        title="Pick your favorite"
                        body="Choose the book you want to purchase."
                      />
                    </div>
                    <div className=" col-sm-6 pt-24">
                      <PurchaseCard
                        number={2}
                        title="Proceed to purchase"
                        body="Please select an available marketplace to continue the purchase process."
                      />
                    </div>
                    <div className=" col-sm-6 pt-24">
                      <PurchaseCard
                        number={3}
                        title="Book is on its way"
                        body="The marketplace will process the purchase, please wait for your book to arrive."
                      />
                    </div>
                    <div className=" col-sm-6 pt-24">
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
        <div className=" row  bg-secondary-200  px-32 py-41  align-items-center">
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
        <div className=" mt-148" style={{ maxWidth: "1440" }}>
          <div className="text-center mb-54">
            <h3 className="m-0">What they say</h3>
            <div style={{ marginTop: "-10px" }}>
              <LineIcon />
            </div>
          </div>
          <div className="d-flex gap-24 align-items-center flex-column flex-md-row">
            <div className="">
              <WhatTheySayCard
                className="radius-r-14  pl-16 pr-16 md-pl-0 lg-pl-16"
                style={{ boxShadow: "5px 4px 16px rgba(0, 0, 0, 0.16) " }}
              />
            </div>
            <div className="">
              <WhatTheySayCard
                className="radius-14 md-h-320 md-w-360 lg-w-660  px-16 md-px-46"
                style={{ boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16) " }}
              />
            </div>
            <div className="">
              <WhatTheySayCard
                className="w-full radius-l-14  pl-16 pr-16  md-pr-0 lg-pr-16"
                style={{ boxShadow: "-9px 4px 16px rgba(0, 0, 0, 0.16) " }}
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
