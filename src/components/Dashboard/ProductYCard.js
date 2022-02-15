import React, { useState } from "react";
import StarIcon from "../SVG/StarIcon";
import { Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const ProductYCard = (props) => {
  const [showCanvas, setShowCanvas] = useState(false);
  let navigate = useNavigate();
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
  const handleClick = () => {
    if (props.withCanvas) {
      setShowCanvas(true);
    }
    if (props.linkGoTo) {
      navigate(props.linkGoTo);
      console.log("oke");
    }
  };
  const handleHideCanvas = () => {
    setShowCanvas(false);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className=" mr-12 md-mr-24 lg-mr-24 cursor-pointer"
      >
        <div className={` position-relative ${props.responsiveClass}`}>
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
      {props.withCanvas ? (
        <Offcanvas
          show={showCanvas}
          onHide={handleHideCanvas}
          placement="end"
          className="d-flex flex-column justify-content-between align-items-center pb-40 sm-radius-tl-16 sm-radius-bl-16"
          // style={{ background: "none" }}
        >
          <div
            className="d-flex h-screen px-24 py-40 flex-column "
            style={{ maxHeight: "668px" }}
          >
            <div className=" mb-32">
              <div className="d-flex  justify-content-between align-items-center">
                <h4 className="h5 md-h4">English Escalate Fourth</h4>
                <p className=" fs-35 cursor-pointer" onClick={handleHideCanvas}>
                  &times;
                </p>
              </div>
              <p className="">Atlaz</p>
            </div>
            <div className="d-flex mt-2 justify-content-center mb-32">
              <div className="w-140  ">
                <img src="/images/product.png" alt="" className="w-full" />
              </div>
            </div>
            <div className=" border h-56 mt-2 row align-items-center justify-content-between radius-8 mb-40">
              <div className="text-center lh-1 col-4 border-end">
                <p className="font-medium">6</p>
                <p className="  text-neutral-200 font-xs">Lesson</p>
              </div>
              <div className="  text-center col-4 lh-1 border-end">
                <p className=" font-medium ">1.1K</p>
                <p className="  text-neutral-200 font-xs">Sold</p>
              </div>
              <div className="  text-center col-4 lh-1">
                <p className=" font-medium ">4.8</p>
                <p className="   text-neutral-200 font-xs">Ratings</p>
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
                        <p className="font-xs text-neutral-300">{r.title}</p>
                      </div>
                      <div className="m-0 d-flex align-items-center gap-2">
                        <div className="w-8 h-8 radius-p-100"></div>
                        <p className="font-sm-medium">{r.subTitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="">
              <p className="h6 md-h5">Overview</p>
              <p className="font-size-12 m-0">
                Cut from geometric cotton lace mimicking decorative fretwork,
                this blouse reveals hints of skin...
              </p>
            </div>
          </div>
          <div className="w-280 btn-secondary text-center">
            <Link to="/product-detail" className="">
              View Detail
            </Link>
          </div>
        </Offcanvas>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductYCard;
