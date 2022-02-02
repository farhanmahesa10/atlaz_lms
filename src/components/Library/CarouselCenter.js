import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  const [max, setMax] = useState(false);
  useEffect(() => {
    if (onClick == null) {
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
        left: "53%",
        bottom: "-35px",
      }}
      onClick={onClick}
    >
      <button
        className={`embla__button ${
          max ? "bg-secondary-200" : "bg-secondary-400"
        }  radius-14 embla__button--next`}
      >
        <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
          <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
        </svg>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  const [max, setMax] = useState(false);
  useEffect(() => {
    if (onClick == null) {
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
        right: "53%",
        bottom: "-18.8px",
      }}
      onClick={onClick}
    >
      <button
        className={`embla__button ${
          max ? "bg-secondary-200" : "bg-secondary-400"
        }  radius-14  embla__button--prev`}
      >
        <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
          <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
        </svg>
      </button>
    </div>
  );
};
const CarouselCenter = (props) => {
  const [settings, setSettings] = useState({
    className: "center slider variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  });
  return (
    <div className="w-full">
      <Slider {...settings}>
        {props.content.map((r) => {
          return (
            <div className=" m-12 sm-m-16 md-m-30 " key={Math.random()}>
              {r}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselCenter;
