import React from "react";

const PurchaseCard = (props) => {
  return (
    <div>
      <div className="w-48 h-48 radius-p-100  d-flex justify-content-center align-items-center  bg-neutral-600 ">
        <h4 className="text-white">{props.number}</h4>
      </div>
      <div className=" pt-24">
        <h5 className="">{props.title}</h5>
        <p className="">{props.body}</p>
      </div>
    </div>
  );
};

export default PurchaseCard;
