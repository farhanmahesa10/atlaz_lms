import React, { Component, useState } from "react";
import Slider from "react-slick";
import Clock from "../SVG/Clock";
import LineIcon from "../SVG/LineIcon";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className="bg-secondary-400 d-none d-md-block text-primary-500 fw-bold px-1 cursor-pointer "
      style={{
        position: "absolute",
        right: "0",
        top: "-50px",
      }}
      onClick={onClick}
    >
      <button className="embla__button embla__button--next">
        <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
          <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
        </svg>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="bg-secondary-400  d-none d-md-block text-primary-500 fw-bold px-1 cursor-pointer "
      style={{
        position: "absolute",
        right: "150px",
        top: "-66.5px",
      }}
      onClick={onClick}
    >
      <button className="embla__button  embla__button--prev">
        <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
          <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
        </svg>
      </button>
    </div>
  );
};
const EmblaSlider = (props) => {
  // const [initialState, setinitialState] = useState(second);

  const [settings, setSettings] = useState({
    // dots: true,
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  });
  return (
    <div style={{ maxWidth: "1400px" }}>
      {props.header}
      <Slider {...settings}>
        {props.content.map((r) => {
          return r;
        })}
      </Slider>
    </div>
  );
};

export default EmblaSlider;
