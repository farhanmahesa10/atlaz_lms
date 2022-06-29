import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useRef } from "react";
const CarouselHero = (props) => {
  const [img, setImg] = useState(props.img);
  const [activePage, setActivePage] = useState(0);
  const [showDirection, setShowDirection] = useState(false);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setActivePage(index);
    },
  };

  const sliderRef = useRef();

  const changePage = (page) => {
    sliderRef.current.slickGoTo(page);
    setActivePage(page);
  };

  const nextPage = () => {
    sliderRef.current.slickNext();
  };
  const prevPage = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div
      className="position-relative cursor-pointer"
      onMouseEnter={() => setShowDirection(true)}
      onMouseLeave={() => setShowDirection(false)}
    >
      <div className={`${!showDirection && "d-none"} `}>
        <div
          className="position-absolute d-none d-lg-block"
          style={{ zIndex: "90", top: "40%", left: "-16px" }}
          onClick={prevPage}
        >
          <div
            className="w-40 h-40 cursor-pointer radius-8 d-flex align-items-center justify-content-center text-white"
            style={{ background: "rgba(0, 0, 0, 0.5)" }}
          >
            <ChevronLeftIcon className="fs-30" />
          </div>
        </div>
        <div
          className="position-absolute d-none d-lg-block"
          style={{ zIndex: "90", top: "40%", right: "-16px" }}
          onClick={nextPage}
        >
          <div
            className="w-40 h-40 cursor-pointer radius-8 d-flex align-items-center justify-content-center text-white"
            style={{ background: "rgba(0, 0, 0, 0.5)" }}
          >
            <ChevronRightIcon className="fs-30" />
          </div>
        </div>
      </div>
      <div>
        <Slider {...settings} ref={sliderRef}>
          {img.map((r, i) => {
            return (
              <div key={i}>
                <div className="d-none d-sm-block">
                  <img
                    src={r.imageLarge}
                    className="d-block "
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="d-sm-none d-block">
                  <img
                    src={r.imageSmall}
                    className="d-block "
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="position-relative bottom-40 ">
          <div className="d-flex justify-content-center">
            <div className=" ">
              <div className="py-5 px-4  w-full radius-14 bg-white d-flex gap-8 justify-content-center">
                {img.map((res, page) => {
                  return (
                    <div
                      className={`w-8 h-8 bg-neutral-200 radius-p-100 cursor-pointer ${
                        activePage === page && "bg-neutral-500"
                      } `}
                      key={"page" + page}
                      onClick={() => changePage(page)}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselHero;
