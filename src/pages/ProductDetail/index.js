import React, { useState } from "react";
import SliderNoArrow from "../../components/Library/SliderNoArrow.js";
import { DropdownButton, ProductYCard } from "../../components";
import MainLayout from "../../components/Layout/Mainlayout";
import StarIcon from "../../components/SVG/StarIcon";
import { SearchDropdown } from "../../components/utilities";
import { Link } from "react-router-dom";

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
              <div className="mt-24 row gap-8 lg-gap-0">
                <div className="col-6">
                  <button className="btn-primary ">Contact marketing</button>
                  <span className="mx-16">or</span>
                  <button className="btn-outline ">Contact marketing</button>
                </div>
              </div>
            </div>
            <p className="h6 md-h5 lg-h4">Overview</p>
            <p className="text-neutral-400 font-size-12 font-size-12 md-font-size-14 lg-font-size-16">
              Up is opinion message manners correct hearing husband my.
              Disposing commanded dashwoods cordially depending at at. Its
              strangers who you certainty earnestly resources suffering she. Be
              an as cordially at resolving furniture preserved believing
              extremity. Easy mr pain felt in. Too northward affection additions
              nay. He no an nature ye talent houses wisdom vanity denied.
            </p>
            <p className="h6 md-h5 lg-h4 mt-48">Subject Focus</p>
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
              <p className="h6 md-h5 lg-h4">Book Features</p>
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
            <div className="mt-48 xl-pr-12">
              <p className="h6 md-h5 lg-h4">Other Recommendation</p>
              <SliderNoArrow
                wDefault={2}
                w1035={2}
                w980={2}
                w768={2}
                content={[
                  <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk" />,
                  <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk" />,
                  <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk" />,
                  <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk" />,
                  <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk" />,
                  <ProductYCard responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk" />,
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
