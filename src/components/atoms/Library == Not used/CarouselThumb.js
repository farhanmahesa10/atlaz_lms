import React, { Component, useState } from "react";
import Slider from "react-slick";

const CarouselThumb = (props) => {
  const [settings, setSettings] = useState({
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <p className="w-55 ">
          <img src={`/images/product.png`} className="w-p-100" />
        </p>
      );
    },
  });

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="/images/product.png" className="w-p-100" />
        </div>
        <div>
          <img src="/images/product-d1.png" className="w-p-100" />
        </div>
        <div>
          <img src="/images/product-d2.png" className="w-p-100" />
        </div>
        <div>
          <img src="/images/product-d3.png" className="w-p-100" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselThumb;
