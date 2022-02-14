import React, { useState } from "react";
import SliderNoArrow from "../../components/Library/SliderNoArrow.js";
import { DropdownButton, ProductYCard } from "../../components";
import MainLayout from "../../components/Layout/Mainlayout";
import StarIcon from "../../components/SVG/StarIcon";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const [searchData, setSearchData] = useState([]);
  const [imgCore, setImgCore] = useState("/images/product.png");

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
      <div className="mt-16 px-24 mt-24">
        {/* <SearchDropdown
          submitLink="/search-result"
          onChange={handleSearchChange}
          searchRecomend={searchData}
        /> */}
        <nav aria-label="breadcrumb" style={{ "--bs-breadcrumb-divider": ">" }}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-primary-500">
                Home&nbsp;&nbsp;
                <i className="bi bi-caret-right-fill text-neutral-300 font-size-12"></i>
              </Link>
            </li>
            <li className="breadcrumb-item " aria-current="page">
              <Link to="/" className="text-primary-500">
                Book List&nbsp;&nbsp;
                <i className="bi bi-caret-right-fill text-neutral-300 font-size-12"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">
              <Link to="/" className="text-neutral-400">
                English Escalate - Fourth
              </Link>
            </li>
          </ol>
        </nav>
        <div className="row gx-0">
          <div className="col-12 col-md-5 col-lg-4 d-flex flex-column align-items-center align-items-md-start ">
            <div className="w-p-90">
              <img src={imgCore} className="w-full h-auto" alt="" />
            </div>
            <div className="w-p-90 d-grid grid-cols-4 gap-1">
              <div className="w-p-100">
                <img
                  src="/images/product.png"
                  className="w-p-100 h-auto  cursor-pointer"
                  onClick={(e) => {
                    setImgCore(e.target.src);
                  }}
                />
              </div>
              <div className="w-p-100">
                <img
                  src="/images/product-d1.png"
                  className="w-p-100 h-auto  cursor-pointer"
                  onClick={(e) => {
                    setImgCore(e.target.src);
                  }}
                />
              </div>
              <div className="w-p-100">
                <img
                  src="/images/product-d2.png"
                  className="w-p-100 h-auto  cursor-pointer"
                  onClick={(e) => {
                    setImgCore(e.target.src);
                  }}
                />
              </div>
              <div className="w-p-100">
                <img
                  src="/images/product-d3.png"
                  className="w-p-100 h-auto  cursor-pointer"
                  onClick={(e) => {
                    setImgCore(e.target.src);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-8 mt-32 md-mt-0 ">
            <div className="mb-45">
              <h3 className="h5 md-h4 lg-h3">English Play 01</h3>
              <p className="font-sm md-font-normal">Atlaz</p>

              <div className="d-flex mb-32 gap-2 align-items-center  ">
                <div className="d-flex">
                  <StarIcon size="10" />
                  <StarIcon size="10" />
                  <StarIcon size="10" />
                  <StarIcon size="10" />
                  <StarIcon size="10" isHalf />
                </div>
                <p className="text-neutral-300 m-0 font-xs md-font-sm-medium">
                  4.8 | Sold 1.1k
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center ">
                <p className="bg-danger-100 text-danger-500 px-8 py-5 font-xs md-font-sm-medium md-font-medium radius-50 ">
                  10% off
                </p>
                <h5 className="h5 md-h3 lg-h2">
                  Rp120.000 <s className="font-sm">Rp170.999</s>
                </h5>
              </div>
              <div className="mt-20 row gx-0 gap-8 lg-gap-0">
                <div className="col-12">
                  <button
                    className="btn-primary font-xs md-font-sm lg-font-normal"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#modalBuy"
                  >
                    Buy from e-commerce
                  </button>
                  <span className="mx-4 md-mx-16">or</span>
                  <button className="btn-outline font-xs md-font-sm lg-font-normal">
                    Contact marketing
                  </button>
                </div>
              </div>
            </div>
            <p className="h6 md-h5 lg-h4 mb-16">Overview</p>
            <p className="text-neutral-400 font-xs md-font-sm lg-font-normal">
              Up is opinion message manners correct hearing husband my.
              Disposing commanded dashwoods cordially depending at at. Its
              strangers who you certainty earnestly resources suffering she. Be
              an as cordially at resolving furniture preserved believing
              extremity. Easy mr pain felt in. Too northward affection additions
              nay. He no an nature ye talent houses wisdom vanity denied.
            </p>
            <p className="h6 md-h5 lg-h4 mt-48 mb-16">Subject Focus</p>
            <div className="">
              <button className="btn-outline font-xs lg-font-sm mb-8 mr-8">
                Possesive adjective
              </button>
              <button className="btn-outline font-xs lg-font-sm mb-8 mr-8">
                Greetings and leave-takings
              </button>
              <button className="btn-outline font-xs lg-font-sm mb-8 mr-8">
                Family members
              </button>
              <button className="btn-outline font-xs lg-font-sm mb-8 mr-8">
                Family members
              </button>
              <button className="btn-outline font-xs lg-font-sm mb-8 mr-8">
                Family members
              </button>
              <button className="btn-outline font-xs lg-font-sm mb-8 mr-8">
                Family members
              </button>
              <button className="btn-outline font-xs lg-font-sm mb-8 mr-8">
                Animal, plants, and their habitats
              </button>
            </div>
            <div className="mt-32">
              <p className="h6 md-h5 lg-h4 mb-16">Book Features</p>
              <div className="  row  gx-0">
                {data.map((r) => {
                  return (
                    <div className="col-6 col-md-4 mb-16" key={Math.random()}>
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
              <p className="h6 md-h5 lg-h4 mb-16">Other Recommendation</p>
              <SliderNoArrow
                wDefault={2}
                w1035={2}
                w980={2}
                w768={2}
                content={[
                  <ProductYCard responsiveClass="card-product-y-mob sm-card-product-y-tab lg-card-product-y-desk" />,
                  <ProductYCard responsiveClass="card-product-y-mob sm-card-product-y-tab lg-card-product-y-desk" />,
                  <ProductYCard responsiveClass="card-product-y-mob sm-card-product-y-tab lg-card-product-y-desk" />,
                  <ProductYCard responsiveClass="card-product-y-mob sm-card-product-y-tab lg-card-product-y-desk" />,
                  <ProductYCard responsiveClass="card-product-y-mob sm-card-product-y-tab lg-card-product-y-desk" />,
                  <ProductYCard responsiveClass="card-product-y-mob sm-card-product-y-tab lg-card-product-y-desk" />,
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade "
        id="modalBuy"
        tabIndex="-1"
        aria-labelledby="modalBuyLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content radius-16">
            <div className="modal-header">
              <h6 className="modal-title md-h5" id="modalBuyLabel">
                Choose the marketplace
                <p className="font-xs md-font-sm">
                  Deliver our book from our marketplace partnership
                </p>
              </h6>
            </div>
            <div className="modal-body px-24  ">
              <div>
                <button className="btn-secondary mb-16  md-py-16 w-full d-flex">
                  <img src="/icons/tokped.png" alt="" className="pr-17" />
                  <div className="d-flex justify-content-between w-full">
                    <p className="font-medium mr-48">
                      Buy from <span className="font-bold">Tokopedia</span>
                    </p>
                    <i className="bi bi-chevron-right "></i>
                  </div>
                </button>
                <button className="btn-secondary mb-16  md-py-16 w-full d-flex">
                  <img src="/icons/shopee.png" alt="" className="pr-17" />
                  <div className="d-flex justify-content-between w-full">
                    <p className="font-medium mr-48">
                      Buy from <span className="font-bold">Shopee</span>
                    </p>
                    <i className="bi bi-chevron-right "></i>
                  </div>
                </button>
                <button className="btn-secondary mb-16  md-py-16 w-full d-flex">
                  <img src="/icons/bukalapak.png" alt="" className="pr-17" />
                  <div className="d-flex justify-content-between w-full">
                    <p className="font-medium mr-48">
                      Buy from <span className="font-bold">Bukalapak</span>
                    </p>
                    <i className="bi bi-chevron-right "></i>
                  </div>
                </button>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
