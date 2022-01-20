import React, { useState } from "react";
import CarouselDot from "../SVG/CarouselDot";
import Slider from "react-slick";
const Carousel = () => {
  const [settings, setSettings] = useState({
    // dots: true,
    // dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
    ],
    // variableHeight: true,
  });

  return (
    <>
      <div
        id="my-carousel"
        className="carousel  slide d-sm-block d-none"
        data-bs-ride="carousel"
      >
        <div
          className="carousel-indicators  position-absolute "
          style={{ bottom: "-40px" }}
        >
          <button
            type="button"
            data-bs-target="#my-carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#my-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active d-flex  justify-content-center"
            data-bs-interval="10000"
          >
            <img
              src="/images/example-car.png"
              className="d-block w-p-98"
              alt="/images/example-car.png"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/images/mail-img.png"
              className="d-block w-p-98"
              alt="/images/mail-img.png"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev text-white d-none d-md-block"
          type="button"
          data-bs-target="#my-carousel"
          data-bs-slide="prev"
        >
          <span
            className=" radius-8 h-48 w-48  d-flex align-items-center justify-content-center "
            aria-hidden="true"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <i
              className="bi bi-chevron-left fw-bold"
              style={{ fontSize: "24px" }}
            ></i>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next d-none d-md-flex justify-content-end  "
          type="button"
          data-bs-target="#my-carousel"
          data-bs-slide="next"
        >
          <span
            className=" radius-8 h-48 w-48 position-relative end-0 d-flex align-items-center justify-content-center"
            aria-hidden="true"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <i
              className="bi bi-chevron-right fw-bold"
              style={{ fontSize: "24px" }}
            ></i>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="d-xs-block d-sm-none">
        <div>
          <Slider {...settings}>
            <img
              src="/images/example-car.png"
              className=""
              height="100"
              alt="/images/example-car.png"
            />

            <img
              src="/images/example-car.png"
              className=""
              height="100"
              alt="/images/example-car.png"
            />
            <img
              src="/images/example-car.png"
              className=""
              height="100"
              alt="/images/example-car.png"
            />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Carousel;
