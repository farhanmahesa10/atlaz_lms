import React from "react";
import { MainFooter, WhatTheySayCard } from "../../components";
import PurchaseCard from "../../components/Dashboard/PurchaseCard";
import { InputText } from "../../components/Form";
import MainLayout from "../../components/Layout/Mainlayout";
import MainHeader from "../../components/Layout/Mainlayout/MainHeader";
import Carousel from "../../components/Library/Carousel";
import StarIcon from "../../components/SVG/StarIcon";

const Home = () => {
  return (
    <>
      <MainLayout>
        <div className="sm-px-48 px-24 m-0">
          <InputText
            placeholder="Search anything here"
            icon={<i className="bi bi-search pl-24"></i>}
            onChange={(e) => {
              console.log(e);
            }}
          />
          <div className="pt-24">
            <Carousel />
          </div>

          <div className="pb-128 pt-64">
            <h3 className="m-0">Redeem Activation Code</h3>
            <div className="w-full border-1 border-neutral-100 rounded d-lg-flex align-items-center gap-24 pr-24 lg-pl-0 pl-24 mt-24 lg-py-0 py-24 ">
              <img
                src="/images/redem.png"
                alt=""
                className="d-none d-lg-block"
              />
              <div className="">
                <h3 className="m-0">Where is the code?</h3>
                <p className="m-0">
                  You can be found on the first page after cover of the book you
                  have purchased.
                </p>
              </div>
              <div className="input-group mb-3  ">
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Input activation code here"
                />
                <span
                  className="input-group-text cursor-pointer px-64 bg-primary-400 border-primary-400"
                  id="basic-addon2"
                >
                  Redeem
                </span>
              </div>
            </div>
          </div>
          <div className="pb-128 ">
            <div className="d-flex gap-100 align-items-center ">
              <div className="py-58 lg-w-p-50 w-p-100 d-none bg-neutral-50 rounded d-lg-flex justify-content-center align-items-center">
                <img src="/images/english-book.png" alt="" />
              </div>
              <div className="lg-w-p-50 w-p-100">
                <div className="row">
                  <h3 className="m-0 ">How to Purchase</h3>
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
        <div className="h-149 w-full bg-secondary-200 px-48 py-41 d-flex align-items-center gap-200 mb-128">
          <h4 className="m-0">Our Partnership</h4>
          <div className="d-flex gap-114">
            <img src="/images/partner-1.png" alt="" />
            <img src="/images/partner-2.png" alt="" />
            <img src="/images/partner-3.png" alt="" />
            <img src="/images/partner-4.png" alt="" />
            <img src="/images/partner-5.png" alt="" />
          </div>
        </div>
        <div className="px-48">
          <div className="text-center mb-54">
            <h3>What they say</h3>
          </div>
          <div className="d-flex gap-4 ">
            <div className=" radius-14 shadow-lg px-24 py-24  w-p-30">
              <WhatTheySayCard />
            </div>
            <div className=" radius-14 shadow-lg px-24 py-24  w-p-60">
              <WhatTheySayCard />
            </div>
            <div className=" radius-14 shadow-lg px-24 py-24  w-p-30">
              <WhatTheySayCard />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
