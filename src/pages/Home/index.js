import React, { useEffect, useState } from "react";
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
        <div className=" md-px-32 px-12 ">
          <EmblaSlider
            wDefault={4}
            w1035={3}
            w980={3}
            w768={2}
            content={[
              <ProductYCard
                withCanvas
                responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
              />,
              <ProductYCard
                withCanvas
                responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
              />,
              <ProductYCard
                withCanvas
                responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
              />,
              <ProductYCard
                withCanvas
                responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
              />,
              <ProductYCard
                withCanvas
                responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
              />,
              <ProductYCard
                withCanvas
                responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
              />,
              <ProductYCard
                withCanvas
                responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
              />,
              <ProductYCard
                withCanvas
                responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
              />,
              <ProductYCard
                withCanvas
                responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
              />,
              <ProductYCard
                withCanvas
                responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
              />,
              <ProductYCard
                withCanvas
                responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
              />,
              <ProductYCard
                withCanvas
                responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
              />,
            ]}
            header={
              <>
                <div className="d-flex   align-items-center">
                  <h3 className="mr-24 ">Atlaz Book List</h3>
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
            <div
              className=" h-268 radius-16 row align-items-center px-24 md-px-76"
              style={{
                backgroundImage: "url('/images/bg_reedem.png')",
                backgroundSize: "cover",
              }}
            >
              <div className="  col-12 col-lg-5  ">
                <h3 className="text-white">Redeem Your E-book Code</h3>
                <div className="pb-12" style={{ marginTop: "-12px" }}>
                  <LineIcon />
                </div>
                <p className="text-white">
                  Find the redeem code in first page of book you have purchased.
                  Enjoy the feature of learn anytime with #YouLearningPal.
                </p>
              </div>
              <div className="col-lg-2 d-none d-lg-block"></div>
              <div className="  col-12 col-lg-5 ">
                <InputComponent
                  type="text"
                  placeholder="Input activation code here "
                  icon2={
                    <div className="p-4">
                      <button
                        className="btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Redeem
                      </button>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-152 row">
          <div className="col-4  d-flex  justify-content-end">
            <div className="text-center">
              <h1 className="fs-60">20+</h1>
              <p>School Trust</p>
            </div>
          </div>

          <div className="col-4  text-center">
            <h1 className="fs-60">10+</h1>
            <p>Interactive Book</p>
          </div>
          <div className="col-4 d-flex  justify-content-start">
            <div className="text-center ">
              <h1 className="fs-60 text-center">300+</h1>
              <p className="text-center">Book sold</p>
            </div>
          </div>
        </div>
        <div className="  md-mx-32 mx-12  row gx-0 bg-secondary-200  px-32 py-41 mt-152  align-items-center">
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
          <div className=" ">
            <CarouselCenter
              content={[
                <WhatTheySayCard
                  text="Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. 
                We can't understand how we've been living without it."
                />,
                <WhatTheySayCard
                  text="Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. 
                We can't understand how we've been living without it."
                />,
                <WhatTheySayCard
                  text="Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. 
                We can't understand how we've been living without it."
                />,
                <WhatTheySayCard
                  text="Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. 
                We can't understand how we've been living without it."
                />,
                <WhatTheySayCard
                  text="Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. 
                We can't understand how we've been living without it."
                />,

                <WhatTheySayCard
                  text="Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. 
                We can't understand how we've been living without it."
                />,
              ]}
            />
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content radius-24 w-480">
              <div className="w-full  d-flex justify-content-end">
                <p
                  className="cursor-pointer bg-secondary-200 radius-p-100 d-flex justify-content-center align-items-center h-32 w-32  mt-16 mr-24 "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  &times;
                </p>
              </div>
              <div className="modal-body px-32 pb-32">
                <p>Hi, there!</p>
                <h4>Please Log in first to claim your Atlaz book now!</h4>
                <p className="mt-16">
                  One more step so you can enjoy your book. Log in to Atlaz
                  using your registered email or please log in using your Google
                  account.
                </p>
                <Link to="/login" className="">
                  <button
                    className="btn-primary mt-40 w-full"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <p
                    className="text-center w-full mt-24"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Sign up
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
