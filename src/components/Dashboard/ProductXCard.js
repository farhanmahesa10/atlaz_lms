import React from "react";
import StarIcon from "../SVG/StarIcon";

const ProductXCard = () => {
  return (
    <>
      <div className=" sm-mr-28 flex-grow-0 book-shadow   radius-14 flex-shrink-0   align-items-center p-1">
        <div
          className="lg-w-196 lg-h-196 md-w-160 md-h-160 w-140 h-140  
       radius-14 d-flex align-items-center gap-2  flex-column bg-book-product"
        >
          <div
            className=" md-h-36 h-26 bg-white  d-flex align-items-center justify-content-center py-8 px-8"
            style={{ borderRadius: "0px 8px 0px 8px", alignSelf: "flex-end" }}
          >
            <span className="text-success-500 fw-bold font-size-12 md-font-size-16">
              Best Seller
            </span>
          </div>
          <div
            className="lg-w-76 md-w-63 w-40 "
            style={{ alignSelf: "center" }}
          >
            <img src="/images/book.png" alt="" width="100%" />
          </div>
        </div>
        <div className="">
          <h6
            className="m-0 font-size-12 pt-2 md-font-size-16 p-0"
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
        <div className="d-flex gap-2 align-items-center pb-8">
          <StarIcon />
          <p className="text-neutral-300 m-0 font-size-9 sm-font-size-12">
            4.8 | Sold 1.1k
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductXCard;
