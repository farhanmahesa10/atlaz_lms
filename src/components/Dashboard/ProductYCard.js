import React from "react";

const ProductYCard = () => {
  return (
    <div className="lg-w-432 w-300 mr-10 lg-mr-15 flex-grow-0 book-shadow radius-14 flex-shrink-0  d-flex gap-20 align-items-center p-1">
      <div
        className="lg-w-196 lg-h-196 lg-w-160 lg-h-160 w-104 h-104  
       radius-14 d-flex align-items-center position-relative justify-content-center bg-book-product"
      >
        <div
          className="w-79 h-36 bg-white position-absolute start-0 top-0 py-8 px-8"
          style={{ borderRadius: "0px 4px 8px" }}
        >
          <span className="text-success-500 fw-bold">00% Off</span>
        </div>
        <div className="lg-w-76 lg-w-63 w-40">
          <img src="/images/book.png" alt="" width="100%" />
        </div>
      </div>
      <div className="">
        <h6 className="m-0 font-size-14 lg-font-size-16">
          English Escalate - Fourth
        </h6>
        <p className="text-neutral-300 m-0 pb-0  lg-pb-24 lg-pb-24 font-size-11 lg-font-size-14">
          Atlaz
        </p>
        <div className="d-flex justify-content-between pb-0 lg-pb-24">
          <div>
            <h6 className="m-0 text-center font-size-12 lg-font-size-16">6</h6>
            <p className="m-0 text-neutral-200 pb-0  lg-pb-24   font-size-9 lg-font-size-12">
              Lesson
            </p>
          </div>
          <div>
            <h6 className="m-0 text-center  font-size-12 lg-font-size-16">
              10k
            </h6>
            <p className="m-0 text-neutral-200  font-size-9 lg-font-size-12">
              Sold
            </p>
          </div>
          <div>
            <h6 className="m-0 text-center font-size-12 lg-font-size-16">
              4.5
            </h6>
            <p className="m-0 text-neutral-200  font-size-9 lg-font-size-12">
              Ratings
            </p>
          </div>
        </div>
        <div className="d-flex gap-2 align-items-center font-size-14 ">
          <h5 className="font-size-14 lg-font-size-16">Rp 120.000</h5>
          <p className="text-neutral-200 m-0 font-size-9 lg-font-size-12">
            <s>Rp 999.999</s>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductYCard;
