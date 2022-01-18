import React from "react";
import StarIcon from "../SVG/StarIcon";

const ProductXCard = () => {
  return (
    <div className="w-196  flex-grow-0 book-shadow gap-20 align-items-center p-1">
      <div className="w-196 h-196   radius-14 d-flex align-items-center justify-content-center bg-book-product">
        <div
          className="w-79 bg-white position-absolute start-0 top-0 py-8 px-8"
          style={{ borderRadius: "0px 4px 8px" }}
        >
          <span className="text-success-500 fw-bold">00% Off</span>
        </div>
        <img src="/images/book.png" alt="" />
      </div>
      <div className="w-196 px-14">
        <h6 className="m-0">English Escalate - Fourth</h6>
        <p className="text-neutral-300 m-0 pb-24" style={{ fontSize: "14px" }}>
          Atlaz
        </p>

        <div className="d-flex gap-2 align-items-center">
          <h6>Rp 120.000</h6>
          <p className="text-neutral-200 m-0" style={{ fontSize: "14px" }}>
            <s>Rp 999.999</s>
          </p>
        </div>
        <div className="d-flex gap-2 align-items-center pb-8">
          <StarIcon />
          <p className="text-neutral-300 m-0">4.8 | Sold 1.1k</p>
        </div>
      </div>
    </div>
  );
};

export default ProductXCard;
