import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  const [max, setMax] = useState(false);
  useEffect(() => {
    if (onClick === null) {
      setMax(true);
    } else {
      setMax(false);
    }
  });
  return (
    <div
      className=" d-none d-md-block text-primary-500 fw-bold px-1 cursor-pointer "
      style={{
        position: "absolute",
        right: "44%",
        bottom: "-35px",
      }}
      onClick={onClick}
    >
      <button
        className={`embla__button  d-flex align-items-center justify-content-center  text-primary-500  ${
          max ? "bg-secondary-200" : "bg-secondary-400"
        }  radius-8 embla__button--next`}
      >
        <ChevronRightIcon style={{ fontSize: "30px" }} />
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  const [max, setMax] = useState(false);
  useEffect(() => {
    if (onClick === null) {
      setMax(true);
    } else {
      setMax(false);
    }
  });

  return (
    <div
      className=" d-none d-md-block text-primary-500 fw-bold px-1 cursor-pointer "
      style={{
        position: "absolute",
        left: "41%",
        bottom: "-35px",
      }}
      onClick={onClick}
    >
      <button
        className={`embla__button   d-flex align-items-center justify-content-center  text-primary-500   ${
          max ? "bg-secondary-200" : "bg-secondary-400"
        }  radius-8  embla__button--next`}
      >
        <ChevronLeftIcon style={{ fontSize: "30px" }} />
      </button>
    </div>
  );
};
const CarouselCenter = (props) => {
  const [settings, setSettings] = useState({
    className: "center slider variable-width",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rows: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          variableWidth: true,
          adaptiveHeight: true,
          rows: 1,
          infinite: true,
        },
      },
    ],
  });
  return (
    <div className="w-full">
      <Slider {...settings}>
        {props.content.map((r) => {
          return (
            <div className=" m-8 sm-m-8 md-m-16 " key={Math.random()}>
              {r}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselCenter;
