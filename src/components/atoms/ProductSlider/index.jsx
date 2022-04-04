import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
const NextArrow = (props) => {
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
      className="0 d-none d-xl-block text-primary-500 fw-bold px-1 cursor-pointer "
      style={{
        position: "absolute",
        right: "30px",
        top: "-50px",
      }}
      onClick={onClick}
    >
      <button
        className={`embla__button d-flex align-items-center justify-content-center text-primary-500  ${
          max ? "bg-secondary-200" : "bg-secondary-400"
        }  radius-4 embla__button--next`}
      >
        <ChevronRightIcon style={{ fontSize: "30px" }} />
      </button>
    </div>
  );
};

const PrevArrow = (props) => {
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
      className=" d-none d-xl-block text-primary-500 fw-bold px-1 cursor-pointer "
      style={{
        position: "absolute",
        right: "90px",
        top: "-66.5px",
      }}
      onClick={onClick}
    >
      <button
        className={`embla__button d-flex align-items-center justify-content-center text-primary-500  ${
          max ? "bg-secondary-200" : "bg-secondary-400"
        }  radius-4 embla__button--prev`}
      >
        <ChevronRightIcon style={{ fontSize: "30px" }} />
      </button>
    </div>
  );
};
const ProductSlider = (props) => {
  // const [initialState, setinitialState] = useState(second);
  const [w768, setW768] = useState(props.w768 ? props.w768 : 1);
  const [w980, setW980] = useState(props.w980 ? props.w980 : 2);
  const [w1035, setW1035] = useState(props.w1035 ? props.w1035 : 1);
  const [w1440, setW1440] = useState(props.w1440 ? props.w1440 : 2);
  const [wDefault, setWDefault] = useState(props.wDefault ? props.wDefault : 2);

  const [settings, setSettings] = useState({
    // dots: true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: wDefault,
    slidesToScroll: wDefault,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: w1440,
          slidesToScroll: w1440,
          infinite: false,
          // dots: true,
        },
      },
      {
        breakpoint: 1035,
        settings: {
          slidesToShow: w1035,
          slidesToScroll: w1035,
          infinite: false,
          // dots: true,
        },
      },

      {
        breakpoint: 980,
        settings: {
          slidesToShow: w980,
          slidesToScroll: w980,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: w768,
          slidesToScroll: w768,
          initialSlide: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  });
  return (
    <div style={{ maxWidth: "1400px" }}>
      {props.header}
      <Slider {...settings}>
        {props.content.map((r) => {
          return (
            <div className="pb-1 mr-16 md-mr-84 xl-mr-81" key={Math.random()}>
              {r}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
