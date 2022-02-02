import React, { useState } from "react";
import StarIcon from "../SVG/StarIcon";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductYCard = () => {
  const [showCanvas, setShowCanvas] = useState(false);
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
  const handleShowCanvas = () => setShowCanvas(true);
  const handleHideCanvas = () => {
    setShowCanvas(false);
  };
  return (
    <>
      <div onClick={handleShowCanvas} className=" mr-12 md-mr-24 lg-mr-32">
        <div className="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk position-relative">
          <div className="bg-white radius-bl-8 end-0 text-success-500 radius-rt-8 promo-label">
            Best Seller
          </div>
          <div className="card-product-img">
            <img src="/images/product.png" alt="" />
          </div>
          <div className="d-flex card-content flex-column justify-content-between">
            <div className="">
              <p className="font-card-head">English Escalate - Fourth</p>
              <p className="font-card-content">Atlaz</p>
            </div>

            <div className="price-section align-items-end mt-8 gap-8">
              <h5 className="font-card-price">Rp111.111</h5>
              <s className="font-card-price-scribble text-neutral-300">
                Rp999.999
              </s>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-star-fill text-primary-500 mr-7 fs-14"></i>
              <span className="text-neutral-300 font-card-content">
                4.8 | Sold1.1k
              </span>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas
        show={showCanvas}
        onHide={handleHideCanvas}
        placement="end"
        className="sm-radius-l-14 sm-w-366 d-flex  flex-column justify-content-between align-items-center xs-radius-t-14 px-40 py-40 "
        // style={{ background: "none" }}
      >
        <div
          className="d-flex h-screen  flex-column "
          style={{ maxHeight: "668px" }}
        >
          <div className="lh-1 mb-32">
            <div className="d-flex  justify-content-between align-items-center">
              <h4 className="m-0 font-size-20">English Escalate Fourth</h4>
              <p
                className="m-0 p-0  font-size-35 cursor-pointer"
                onClick={handleHideCanvas}
              >
                &times;
              </p>
            </div>
            <p className="m-0 font-size-16 text-neutral-300">Atlaz</p>
          </div>
          <div className="d-flex mt-2 justify-content-center mb-32">
            <div className="w-140  ">
              <img src="/images/product.png" alt="" className="w-full" />
            </div>
          </div>
          <div className=" border h-56 mt-2 row align-items-center justify-content-between radius-8 mb-40">
            <div className="text-center lh-1 col-4 border-end">
              <h6 className="m-0">6</h6>
              <p className=" m-0 text-neutral-200">Lesson</p>
            </div>
            <div className=" m-0 text-center col-4 lh-1 border-end">
              <h6 className=" m-0 ">1.1K</h6>
              <p className=" m-0 text-neutral-200">Sold</p>
            </div>
            <div className=" m-0 text-center col-4 lh-1">
              <h6 className=" m-0 ">4.8</h6>
              <p className="  m-0 text-neutral-200">Ratings</p>
            </div>
          </div>
          <div className=" mx-28 mb-24 d-flex flex-column gap-4">
            <div className="  row ">
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
          <div className="">
            <p className="fw-medium mb-8">Overview</p>
            <p className="font-size-12 m-0">
              Cut from geometric cotton lace mimicking decorative fretwork, this
              blouse reveals hints of skin...
            </p>
          </div>
        </div>
        <div className="w-280 mt-8 h-36 py-2 align-items-center d-flex justify-content-center rounded-8 bg-secondary-400">
          <Link to="/" className="">
            View Detail
          </Link>
        </div>
      </Offcanvas>
    </>
  );
};

export default ProductYCard;
