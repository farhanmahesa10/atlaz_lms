import React, { useState } from "react";
import { ProductXCard, ProductYCard, WhatTheySayCard } from "../../components";
import PurchaseCard from "../../components/Dashboard/PurchaseCard";
import { InputText } from "../../components/Form";
import MainLayout from "../../components/Layout/Mainlayout";
import Carousel from "../../components/Library/Carousel";
import EmblaSlider from "../../components/Library/EmblaSlider";
import Clock from "../../components/SVG/Clock";
import LineIcon from "../../components/SVG/LineIcon";

const Home = () => {
  const [isGrabingList, setIsGrabingList] = useState(false);
  return (
    <>
      <MainLayout>
        <div className="sm-px-48 px-24 m-0">
          <div className="pb-24">
            <InputText
              placeholder="Search anything here"
              icon={<i className="bi bi-search pl-24"></i>}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </div>
          <Carousel />
        </div>
        <div className="pt-79 sm-pl-48 pl-24 m-0">
          <div className="d-flex gap-24 pb-24 align-items-center">
            <h3 className="m-0 font-size-20 sm-font-size-24">Limited Deals</h3>
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
          <EmblaSlider
            content={[
              <ProductYCard />,
              <ProductYCard />,
              <ProductYCard />,
              <ProductYCard />,
              <ProductYCard />,
              <ProductYCard />,
              <ProductYCard />,
              <ProductYCard />,
            ]}
          />
        </div>
        <div className="sm-px-48 px-24 m-0">
          <div className=" pt-64">
            <h3 className="m-0">Redeem Activation Code</h3>
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
        <div className="pt-64 sm-pl-48 pl-24 m-0">
          <div className="d-flex gap-24 pb-24 align-items-center">
            <h3 className="m-0">Limited Deals</h3>
            <p className="m-0 text-neutral-300">Ends in</p>
            <div className="d-flex align-items-center gap-11">
              <Clock />
              <p className="text-primary-500 m-0">2 Days</p>
            </div>
          </div>
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
              <ProductXCard />,
              <ProductXCard />,
              <ProductXCard />,
            ]}
          />
        </div>
        <div className="sm-px-48 px-24 m-0">
          <div className="pb-128 ">
            <div className="d-flex gap-100 align-items-center ">
              <div className="py-58 lg-w-p-50 w-p-100 d-none bg-neutral-50 rounded d-lg-flex justify-content-center align-items-center">
                <img src="/images/english-book.png" alt="" />
              </div>
              <div className="lg-w-p-50 w-p-100">
                <div className="row">
                  <h3 className="m-0 ">How to Purchase</h3>
                  <div className="text-left " style={{ marginTop: "-10px" }}>
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
        <div className=" row  bg-secondary-200  px-48 py-41  align-items-center">
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
        <div className="px-48">
          <div className="text-center mb-54">
            <h3 className="m-0">What they say</h3>
            <div style={{ marginTop: "-10px" }}>
              <LineIcon />
            </div>
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
