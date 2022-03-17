import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import Clock from "../../SVG/Clock";
import LineIcon from "../../SVG/LineIcon";

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
      className="0 d-none d-md-block text-primary-500 fw-bold px-1 cursor-pointer "
      style={{
        position: "absolute",
        right: "30px",
        top: "-50px",
      }}
      onClick={onClick}
    >
      <button
        className={`embla__button ${
          max ? "bg-secondary-200" : "bg-secondary-400"
        }  radius-4 embla__button--next`}
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
        right: "90px",
        top: "-66.5px",
      }}
      onClick={onClick}
    >
      <button
        className={`embla__button ${
          max ? "bg-secondary-200" : "bg-secondary-400"
        }  radius-4 embla__button--prev`}
      >
        <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
          <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
        </svg>
      </button>
    </div>
  );
};
const EmblaSlider = (props) => {
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  });
  return (
    <div style={{ maxWidth: "1400px" }}>
      {props.header}
      <Slider {...settings}>
        {props.content.map((r) => {
          return (
            <div className="pb-1 mr-55 " key={Math.random()}>
              {r}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default EmblaSlider;
