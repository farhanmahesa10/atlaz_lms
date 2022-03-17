import React from "react";
import { Link } from "react-router-dom";
import { ProductSlider } from "../../atoms";
import LineIcon from "../../SVG/LineIcon";
import { ProductYCard } from "../../molecules";
const HomeBookList = () => {
  return (
    <>
      <div className=" lg-px-48 px-24 md-px-32">
        <ProductSlider
          wDefault={4}
          w1035={3}
          w980={3}
          w768={2}
          content={[
            <ProductYCard
              withCanvas
              responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
            />,
            <ProductYCard
              withCanvas
              responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
            />,
            <ProductYCard
              withCanvas
              responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
            />,
            <ProductYCard
              withCanvas
              responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
            />,
            <ProductYCard
              withCanvas
              responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
            />,
            <ProductYCard
              withCanvas
              responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
            />,
            <ProductYCard
              withCanvas
              responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
            />,
            <ProductYCard
              withCanvas
              responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
            />,
            <ProductYCard
              withCanvas
              responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
            />,
            <ProductYCard
              withCanvas
              responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
            />,
            <ProductYCard
              withCanvas
              responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
            />,
            <ProductYCard
              withCanvas
              responsiveClass="card-product-y-mob md-card-product-y-tab lg-card-product-y-desk cursor-pointer"
            />,
          ]}
          header={
            <>
              <div className="d-flex   align-items-center">
                <h3 className="mr-24 ">Atlaz Book List</h3>
                <Link
                  to="/"
                  className="mt-1 text-primary-500 hover-text-primary-300 "
                >
                  View all
                </Link>
              </div>
              <div className="pb-24" style={{ marginTop: "-12px" }}>
                <LineIcon />
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default HomeBookList;
