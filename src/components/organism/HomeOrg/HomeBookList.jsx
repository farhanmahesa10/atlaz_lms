import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Divider, ProductSlider } from "../../atoms";
import LineIcon from "../../SVG/LineIcon";
import { BookListSkeleton, ProductYCard } from "../../molecules";
import { GET, defConfig } from "../../../config/RestAPI";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
const HomeBookList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef();

  useEffect(() => {
    initData();
  }, []);
  const initData = async () => {
    try {
      const r = await GET("/client/landing/booklist?page=1&perPage=10");
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
    } catch (err) {
      setIsLoading(false);
    }
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };
  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

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
              sliderRef={sliderRef}
              wDefault={4}
              header={
                <div className="d-flex mb-42  justify-content-between align-items-center">
                  <div>
                    <div className="d-flex   align-items-center">
                      <div>
                        <h5 className="mr-24 md-h4 xl-h3">Atlaz Book List</h5>
                        <div className="w-64">
                          <Divider height="h-2" lineColor={"bg-primary-500"} />
                        </div>
                      </div>
                      <Link
                        to="/search-result"
                        className="mt-1 text-primary-500 hover-text-primary-300 "
                      >
                        View all
                      </Link>
                    </div>
                  </div>
                  <div className=" d-none d-xl-flex justify-content-center  ">
                    <div className="mr-16 ">
                      <span
                        className="d-flex cursor-pointer hover-bg-secondary-500 justify-content-center no-border align-items-center w-32 h-32 radius-4 bg-secondary-400"
                        onClick={handlePrevClick}
                      >
                        <ChevronLeftIcon className="text-primary-400 fs-38" />
                      </span>
                    </div>
                    <div className="ml-16">
                      <span
                        className="d-flex cursor-pointer hover-bg-secondary-500 justify-content-center no-border align-items-center w-32 h-32 radius-4 bg-secondary-400"
                        onClick={handleNextClick}
                      >
                        <ChevronRightIcon className="text-primary-400 fs-30" />
                      </span>
                    </div>
                  </div>
                </div>
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
