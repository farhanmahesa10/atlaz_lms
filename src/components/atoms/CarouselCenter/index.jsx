import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const CarouselCenter = (props) => {
  const sliderRef = useRef();

  const [settings, setSettings] = useState({
    className: "center ",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
    adaptiveHeight: true,
    rows: 1,
    arrows: false,
  });

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };
  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="w-p-100">
      <Slider {...settings} ref={sliderRef}>
        {props.content.map((r) => {
          return (
            <div className=" m-8 sm-m-8 md-m-16 " key={Math.random()}>
              {r}
            </div>
          );
        })}
      </Slider>
      <div className="mt-24 d-flex justify-content-center ">
        <div className="mr-32">
          <span
            className="d-flex cursor-pointer hover-bg-secondary-500 justify-content-center no-border align-items-center w-40 h-40 radius-14 bg-secondary-400"
            onClick={handlePrevClick}
          >
            <ChevronLeftIcon className="text-primary-400 fs-38" />
          </span>
        </div>
        <div className="ml-32">
          <span
            className="d-flex cursor-pointer hover-bg-secondary-500 justify-content-center no-border align-items-center w-40 h-40 radius-14 bg-secondary-400"
            onClick={handleNextClick}
          >
            <ChevronRightIcon className="text-primary-400 fs-38" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarouselCenter;
