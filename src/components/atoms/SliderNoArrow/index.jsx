import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";

const SliderNoArrow = (props) => {
  const [w768, setW768] = useState(props.w768 ? props.w768 : 1);
  const [w980, setW980] = useState(props.w980 ? props.w980 : 2);
  const [w1035, setW1035] = useState(props.w1035 ? props.w1035 : 1);
  const [w1440, setW1440] = useState(props.w1440 ? props.w1440 : 2);
  const [wDefault, setWDefault] = useState(props.wDefault ? props.wDefault : 2);

  const [settings, setSettings] = useState({
    infinite: false,
    speed: 500,
    slidesToShow: wDefault,
    slidesToScroll: wDefault,
    initialSlide: 0,
    variableWidth: true,
    arrows: false,
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
  });
  return (
    <div style={{ maxWidth: "1400px" }}>
      <Slider {...settings}>
        {props.content.map((r) => {
          return (
            <div className="pb-1  mr-16 md-mr-24" key={Math.random()}>
              {r}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderNoArrow;
