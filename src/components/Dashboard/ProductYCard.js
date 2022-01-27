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
      <div
        className=" sm-mr-28 mr-8 flex-grow-0 book-shadow  cursor-pointer w-148 md-w-168 lg-w-204 radius-14 flex-shrink-0   align-items-center p-1"
        onClick={handleShowCanvas}
      >
        <div
          className=" lg-h-196  md-h-160 h-140 
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
            English Escalate - <br className="d-lg-none d-block" /> Fourth
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
          <Link to="/product-detail" className="">
            View Detail
          </Link>
        </div>
      </Offcanvas>
    </>
  );
};

export default ProductYCard;
