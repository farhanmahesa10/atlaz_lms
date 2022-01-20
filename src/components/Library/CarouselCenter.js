import React, { useState } from "react";
import Slider from "react-slick";

const CarouselCenter = (props) => {
  const [settings, setSettings] = useState({
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "100px",

    slidesToShow: 1,
    initialSlide: 1,
    speed: 500,
  });
  return (
    <div>
      <Slider {...settings}>
        {props.content.map((r) => {
          <div key={Math.random()}>{r}</div>;
        })}
      </Slider>
    </div>
  );
};

export default CarouselCenter;
