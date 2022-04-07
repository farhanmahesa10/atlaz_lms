import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductSlider } from "../../atoms";
import LineIcon from "../../SVG/LineIcon";
import { BookListSkeleton, ProductYCard } from "../../molecules";
import { GET, defConfig } from "../../../config/RestAPI";
const HomeBookList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    GET("/client/landing/booklist?page=1&perPage=10").then((r) => {
      let result = [];
      r.data.map((r, i) => {
        result.push(
          <ProductYCard
            withCanvas
            key={i}
            data={r}
            responsiveClass="card-product-y-mob md-card-product-y-tab xl-card-product-y-desk cursor-pointer"
          />
        );
      });
      setData(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <BookListSkeleton />
      ) : (
        <div className="row gx-0 justify-content-center">
          <div
            className=" pl-24 xl-px-48 md-px-32 pt-48 md-pt-64 xl-pt-104  "
            style={{ maxWidth: "1440px" }}
          >
            <ProductSlider
              wDefault={4}
              w1440={5}
              w1035={3}
              w980={3}
              w768={2}
              header={
                <>
                  <div className="d-flex   align-items-center">
                    <h5 className="mr-24 md-h4 xl-h3">Atlaz Book List</h5>
                    <Link
                      to="/shop"
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
              content={data}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HomeBookList;
