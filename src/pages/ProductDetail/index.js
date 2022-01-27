import React, { useState } from "react";
import SliderNoArrow from "../../components/Library/SliderNoArrow.js";
import { DropdownButton, ProductYCard } from "../../components";
import MainLayout from "../../components/Layout/Mainlayout";
import StarIcon from "../../components/SVG/StarIcon";
import { SearchDropdown } from "../../components/utilities";
import { Link } from "react-router-dom";

const ProductRecomend = (props) => {
  return (
    <div className=" sm-mr-28 mr-8 flex-grow-0 book-shadow   w-148 md-w-168 radius-14 flex-shrink-0   align-items-center p-1">
      <div
        className="   md-h-160 h-140 
       radius-14 d-flex align-items-center gap-2  flex-column"
        style={{
          backgroundImage: 'url("/images/product.png")',
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className=" md-h-36 h-26 bg-white  d-flex align-items-center justify-content-center py-8 px-8"
          style={{ borderRadius: "0px 8px 0px 8px", alignSelf: "flex-end" }}
        >
          <span className="text-success-500 fw-bold font-size-12 md-font-size-16">
            Best Seller
          </span>
        </div>
      </div>
      <div className=" pl-8">
        <h6
          className="m-0 font-size-12 pt-2 md-font-size-16 p-0 px-12"
          style={{ lineHeight: "15px" }}
        >
          English Escalate - Fourth
        </h6>
        <p className="text-neutral-300 m-0 xs-pb-12 xs-pt-2  md-pb-24 sm-pb-24 font-size-9 sm-font-size-14">
          Atlaz
        </p>

        <div className="d-md-flex d-block gap-2 align-items-center font-size-14 ">
          <h5 className="font-size-12 sm-font-size-16 m-0 p-0">Rp 120.000</h5>
          <p className="text-neutral-200 m-0 font-size-9 sm-font-size-12">
            <s>Rp 999.999</s>
          </p>
        </div>
      </div>
      <div className="d-flex gap-2 align-items-center pb-8 pl-10">
        <StarIcon />
        <p className="text-neutral-300 m-0 font-size-9 sm-font-size-12">
          4.8 | Sold 1.1k
        </p>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const [searchData, setSearchData] = useState([]);
  const handleSearchChange = (val) => {
    setSearchData([
      { text: " English Play 01", link: "/search-result" },
      { text: " English Play 02", link: "/search-result" },
      { text: " English Play 03", link: "/search-result" },
      { text: " English Play 04", link: "/search-result" },
    ]);
  };
  const [data, setData] = useState([
    {
      title: "Cerf Level",
      subTitle: "A1",
      color: "#B3FFFF",
    },
    {
      title: "Built-in",
      subTitle: "Assessment",
      color: "#B3FFFF",
    },
    {
      title: "Videos",
      subTitle: "Lecturer",
      color: "#B2FFCC",
    },
    {
      title: "Videos",
      subTitle: "Animation",
      color: "#D9B2FF",
    },
    {
      title: "Self",
      subTitle: "Learning",
      color: "#D9FFB2",
    },
    {
      title: "Online learning",
      subTitle: "Integration",
      color: "#FFB2D9",
    },
  ]);
  return (
    <MainLayout>
      <div className="mt-16 mx-14">
        {/* <SearchDropdown
          submitLink="/search-result"
          onChange={handleSearchChange}
          searchRecomend={searchData}
        /> */}
        <div className="d-flex gap-8 mt-24 align-items-center">
          <Link to="/" className="text-primary-500">
            Home
          </Link>
          <i className="bi bi-caret-right-fill text-neutral-300 font-size-12"></i>
          <Link to="/" className="text-primary-500">
            Book List
          </Link>
          <i className="bi bi-caret-right-fill text-neutral-300 font-size-12"></i>
          <Link to="/" className="text-neutral-400">
            English Escalate - Fourth
          </Link>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 col-lg-4 d-flex flex-column align-items-center mt-24">
            <div className="w-180 md-w-p-100 lg-w-p-100">
              <img src="/images/product.png" className="w-full" alt="" />
              <div className="mt-8 row gap-8 lg-gap-0">
                <div className="col-12 col-lg-6  lg-gap-0 font-size-12">
                  <DropdownButton width="w-full">
                    <div className="py-8 d-flex gap-16 hover-bg-neutral-100 cursor-pointer px-12 ">
                      <img src="/icons/tokped.png" alt="" />
                      <span className="text-neutral-400">Buy at Tokopedia</span>
                    </div>
                    <div className="py-8 d-flex gap-16  hover-bg-neutral-100 cursor-pointer px-12">
                      <img src="/icons/bukalapak.png" alt="" />
                      <span className="text-neutral-400">Buy at Bukalapak</span>
                    </div>
                    <div className="py-8 d-flex gap-16  hover-bg-neutral-100 cursor-pointer px-12">
                      <img src="/icons/shopee.png" alt="" />
                      <span className="text-neutral-400"> Buy at Shopee</span>
                    </div>
                  </DropdownButton>
                </div>
                <div className="col-12 col-lg-6">
                  <button className="bg-white border  radius-8 w-full py-2  md-mt-0 px-16  font-size-12   d-flex justify-content-between">
                    Contact marketing <i className="bi bi-whatsapp"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-8 mt-32">
            <div className="mb-45">
              <h3 className="m-0">English Play 01</h3>
              <p className="mt-0 mb-25 font-size-12 sm-font-size-14">Atlaz</p>

              <div className="d-flex mb-25 gap-2 align-items-center  ">
                <StarIcon />
                <p className="text-neutral-300 m-0 font-size-9 sm-font-size-12">
                  4.8 | Sold 1.1k
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center font-size-14 ">
                <span
                  className="bg-danger-100 text-danger-500 px-2 font-size-12  sm-font-size-14 radius-50 position-relative"
                  style={{ top: "-2px" }}
                >
                  10% off
                </span>
                <h5 className="font-size-12 sm-font-size-16 m-0 p-0">
                  Rp120.000
                </h5>
                <p className="text-neutral-200 m-0 font-size-9 sm-font-size-12">
                  <s>Rp999.999</s>
                </p>
              </div>
            </div>
            <h6 className="fw-bold font-size-16 md-font-size-20 lg-font-size-24 ">
              Overview
            </h6>
            <p className="text-neutral-400 font-size-12 font-size-12 md-font-size-14 lg-font-size-16">
              Up is opinion message manners correct hearing husband my.
              Disposing commanded dashwoods cordially depending at at. Its
              strangers who you certainty earnestly resources suffering she. Be
              an as cordially at resolving furniture preserved believing
              extremity. Easy mr pain felt in. Too northward affection additions
              nay. He no an nature ye talent houses wisdom vanity denied.
            </p>
            <h6 className="fw-bold font-size-16 md-font-size-20 lg-font-size-24 ">
              Subject Focus
            </h6>
            <div className="text-neutral-400 font-size-12 md-font-size-14 lg-font-size-16 ">
              <button className="bg-white border p-2 mr-8  radius-4 mb-8">
                Possesive adjective
              </button>
              <button className="bg-white border p-2 mr-8  radius-4 mb-8">
                Greetings and leave-takings
              </button>
              <button className="bg-white border p-2 mr-8  radius-4 mb-8">
                Family members
              </button>
              <button className="bg-white border p-2 mr-8  radius-4 mb-8">
                Family members
              </button>
              <button className="bg-white border p-2 mr-8  radius-4 mb-8">
                Family members
              </button>
              <button className="bg-white border p-2 mr-8  radius-4 mb-8">
                Family members
              </button>
              <button className="bg-white border p-2 mr-8  radius-4 mb-8">
                Animal, plants, and their habitats
              </button>
            </div>
            <div className="mt-32">
              <h6 className="fw-bold font-size-16 md-font-size-20 lg-font-size-24 ">
                Book Features
              </h6>
              <div className="  row  ">
                {data.map((r) => {
                  return (
                    <div className="col-6 mb-16" key={Math.random()}>
                      <div className="m-0 d-flex align-items-center gap-2">
                        <div
                          className="w-8 h-8 radius-p-100 "
                          style={{ backgroundColor: r.color }}
                        ></div>
                        <p className="text-neutral-200 m-0 font-size-12">
                          {r.title}
                        </p>
                      </div>
                      <div className="m-0 d-flex align-items-center gap-2">
                        <div className="w-8 h-8 radius-p-100"></div>
                        <p className="text-neutral-500 m-0  font-size-16 fw-medium">
                          {r.subTitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-56 xl-pr-12">
              <h6 className="fw-bold font-size-16 md-font-size-20 lg-font-size-24 ">
                Book FeaturesOther Recommendation
              </h6>
              <SliderNoArrow
                wDefault={2}
                w1035={2}
                w980={2}
                w768={2}
                content={[
                  <ProductRecomend />,
                  <ProductRecomend />,
                  <ProductRecomend />,
                  <ProductRecomend />,
                  <ProductRecomend />,
                  <ProductRecomend />,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
