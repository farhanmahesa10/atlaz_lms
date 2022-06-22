import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const ProductSlider = (props) => {
  // const [initialState, setinitialState] = useState(second);
  const { w1440, w1035, w1260, w768, w843, w980 } = props;
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
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: w1440 ? w1440 : 4,
          slidesToScroll: w1440 ? w1440 : 4,
          // infinite: false,
          // dots: true,
        },
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: w1260 ? w1260 : 3,
          slidesToScroll: w1260 ? w1260 : 3,
          // infinite: false,
          // dots: true,
        },
      },
      {
        breakpoint: 843,
        settings: {
          slidesToShow: w843 ? w843 : 2,
          slidesToScroll: w843 ? w843 : 2,
          // infinite: false,
          // dots: true,
        },
      },
      {
        breakpoint: 1035,
        settings: {
          slidesToShow: w1035 ? w1035 : 3,
          slidesToScroll: w1035 ? w1035 : 3,
          // infinite: false,
          // dots: true,
        },
      },

      {
        breakpoint: 980,
        settings: {
          slidesToShow: w980 ? w980 : 2,
          slidesToScroll: w980 ? w980 : 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: w768 ? w768 : 2,
          slidesToScroll: w768 ? w768 : 2,
          initialSlide: 1,
        },
      },
    ],
  });
  return (
    <div style={{ maxWidth: "1400px" }}>
      {props.header}
      <Slider {...settings} ref={props.sliderRef}>
        {props.content.map((r, i) => {
          return (
            <div key={i}>
              <div className="pb-1 mr-16 md-mr-84 xl-mr-70">{r}</div>
              {/* <div className="pb-1 mr-16 md-mr-84 xl-mr-80">{r}</div> */}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
