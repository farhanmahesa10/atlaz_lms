import React from "react";

const ProductYCard = () => {
  return (
    <div className="w-456 flex-grow-0 book-shadow flex-shrink-0  d-flex gap-20 align-items-center p-1">
      <div className="w-196 h-196  radius-14 d-flex align-items-center justify-content-center bg-book-product">
        <div
          className="w-79 bg-white position-absolute start-0 top-0 py-8 px-8"
          style={{ borderRadius: "0px 4px 8px" }}
        >
          <span className="text-success-500 fw-bold">00% Off</span>
        </div>
        <img src="/images/book.png" alt="" />
      </div>
      <div className="">
        <h6 className="m-0">English Escalate - Fourth</h6>
        <p className="text-neutral-300 m-0 pb-24" style={{ fontSize: "14px" }}>
          Atlaz
        </p>
        <div className="d-flex justify-content-between pb-24">
          <div>
            <h6 className="m-0 text-center">6</h6>
            <p className="m-0 text-neutral-200 " style={{ fontSize: "12px" }}>
              Lesson
            </p>
          </div>
          <div>
            <h6 className="m-0 text-center">10k</h6>
            <p className="m-0 text-neutral-200 " style={{ fontSize: "12px" }}>
              Sold
            </p>
          </div>
          <div>
            <h6 className="m-0 text-center">4.5</h6>
            <p className="m-0 text-neutral-200 " style={{ fontSize: "12px" }}>
              Ratings
            </p>
          </div>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <h5>Rp 120.000</h5>
          <p className="text-neutral-200 m-0" style={{ fontSize: "14px" }}>
            <s>Rp 999.999</s>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductYCard;
