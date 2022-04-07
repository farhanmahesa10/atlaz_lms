import React from "react";
import Skeleton from "react-loading-skeleton";
import { ProductSlider, SliderNoArrow } from "../../../atoms";

const BookListSkeleton = () => {
  return (
    <>
      <div className="row gx-0 justify-content-center">
        <div
          className=" pl-24 xl-px-48 md-px-32 pt-48 md-pt-64 xl-pt-104  "
          style={{ maxWidth: "1440px" }}
        >
          <ProductSlider
            wDefault={4}
            w1035={2}
            w980={2}
            w768={2}
            content={[
              <Skeleton width={"160px"} height="160px" />,
              <Skeleton width={"160px"} height="160px" />,
              <Skeleton width={"160px"} height="160px" />,
              <Skeleton width={"160px"} height="160px" />,
              <Skeleton width={"160px"} height="160px" />,
              <Skeleton width={"160px"} height="160px" />,
              <Skeleton width={"160px"} height="160px" />,
            ]}
            header={
              <>
                <div className="d-flex  mb-24 align-items-center">
                  <Skeleton width={"260px"} height="20px" />,
                </div>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default BookListSkeleton;
