import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";
const ProductYCard = (props) => {
  const [showCanvas, setShowCanvas] = useState(false);
  let navigate = useNavigate();
  const data = props.data;
  const handleClick = () => {
    if (props.withCanvas) {
      setShowCanvas(true);
    }
    if (props.linkGoTo) {
      navigate(props.linkGoTo);
    }
  };
  const handleHideCanvas = () => {
    setShowCanvas(false);
  };
  const [feature, setFeature] = useState([
    {
      title: "High Order",
      subTitle: "Thinking Skills",
      color: "#B3FFFF",
    },
    {
      title: "21st Century ",
      subTitle: "Skills",
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
      title: "Self learning",
      subTitle: "Method",
      color: "#D9FFB2",
    },
    {
      title: "Online learning",
      subTitle: "Integration",
      color: "#FFB2D9",
    },
  ]);
  const createMarkup = (str) => {
    return { __html: str };
  };
  return (
    <>
      <div onClick={handleClick} className=" cursor-pointer">
        <div
          className={` position-relative d-flex justify-content-between flex-column ${props.responsiveClass}`}
        >
          <div className="p-4">
            <div className="bg-white radius-bl-14 end-0 text-info-500 radius-rt-14 promo-label">
              Best Seller
            </div>
            <div className="card-product-img d-flex align-items-center  radius-14 ">
              <img src={data.imageCover} alt="" />
            </div>
          </div>
          <div className="d-flex card-content h-108 xl-h-128  flex-column justify-content-between">
            <div className="h-full">
              <p className="font-card-head">{data.name}</p>
              <p className="font-card-content">{data.author}</p>
            </div>

            <div className="">
              <div className="price-section align-items-end mt-8 gap-8">
                <h5 className="font-card-price">
                  <NumberFormat
                    value={data.discountPrice.total}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rp"}
                  />
                </h5>
                {data.discountPrice?.discountAmount > 0 && (
                  <s className="font-card-price-scribble text-neutral-300">
                    <NumberFormat
                      value={data.originalPrice}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp"}
                    />
                  </s>
                )}
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-star-fill text-primary-500 mr-7 fs-14"></i>
                <span className="text-neutral-300 font-card-content">
                  &gt;4.2 | Sold1.1k
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.withCanvas ? (
        <Offcanvas
          show={showCanvas}
          onHide={handleHideCanvas}
          placement="end"
          className="d-flex flex-column justify-content-between align-items-center h-full sm-radius-tl-16 sm-radius-bl-16 "
        >
          <div
            className="d-flex h-full px-24 py-40 flex-column w-full"
            style={{ overflowY: "auto" }}
          >
            <div className=" mb-24 mx-24">
              <div className="d-flex  justify-content-between align-items-center">
                <h4 className="h5 md-h4">{data.name}</h4>
                <p className=" fs-35 cursor-pointer" onClick={handleHideCanvas}>
                  &times;
                </p>
              </div>
              <p className="text-neutral-300">{data.author}</p>
            </div>
            <div className="d-flex justify-content-center mb-16">
              <div className="w-140  md-w-200 xl-w-250">
                <img src={data.imageCover} alt="" className="w-full" />
              </div>
            </div>
            <div className=" border h-56 mx-24 row py-8 align-items-center justify-content-between radius-8 mb-40 bg-secondary-200">
              <div className="text-center lh-1 col-4 border-end">
                <p className="font-medium">6</p>
                <p className="  text-neutral-200 font-xs">Lesson</p>
              </div>
              <div className="  text-center col-4 lh-1 border-end">
                <p className=" font-medium ">1K+</p>
                <p className="  text-neutral-200 font-xs">Sold</p>
              </div>
              <div className="  text-center col-4 lh-1">
                <p className=" font-medium ">&gt;4.2</p>
                <p className="   text-neutral-200 font-xs">Ratings</p>
              </div>
            </div>
            <div className=" mx-28 mb-24 d-flex flex-column gap-4">
              <div className="  row ">
                {feature.map((r) => {
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
            <div className="text-left mx-24">
              <p className="h6 md-h5 mb-8">Overview</p>
              <div
                className="font-xs text-neutral-400 md-font-sm "
                dangerouslySetInnerHTML={createMarkup(data.overview)}
              ></div>
            </div>
          </div>
          <div className="bg-white py-24 border-top border-secondary-500 w-full d-flex justify-content-center">
            <div className="w-280 btn-secondary text-center">
              <Link to={`/product-detail/${data._id}`} className="">
                View Detail
              </Link>
            </div>
          </div>
        </Offcanvas>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductYCard;
