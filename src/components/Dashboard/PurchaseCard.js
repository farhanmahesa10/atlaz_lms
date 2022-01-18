import React from "react";

const PurchaseCard = (props) => {
  return (
    <div>
      <div className="w-48 h-48 rounded-full  d-flex justify-content-center align-items-center m-0 p-0 fw-bold text-white bg-neutral-500 fs-4">
        <span>{props.number}</span>
      </div>
      <div className="m-0 pt-24">
        <h5 className="m-0">{props.title}</h5>
        <p className="m-0">{props.body}</p>
      </div>
    </div>
  );
};

export default PurchaseCard;
