import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", (e) => {
    setwindowWidth(e.target.innerWidth);
  });

  const [showArrow, setShowArrow] = useState(false);

  return (
    <>
      <div
        id="my-carousel"
        className="carousel slide w-p-100   "
        data-bs-ride="carousel"
        onMouseOver={() => setShowArrow(true)}
        onMouseLeave={() => setShowArrow(false)}
        // style={{ width: "1440px" }}
      >
        <div
          className="carousel-indicators   position-absolute "
          style={{ bottom: "-12px" }}
        >
          <div className="bg-white radius-14 h-16 px-8 d-flex align-items-center">
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
            <button
              type="button"
              data-bs-target="#my-carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#my-carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
        </div>
        <div className="carousel-inner d-none d-sm-block">
          <div className="carousel-item active " data-bs-interval="10000">
            <img
              src="/images/example-car.png"
              className="d-block "
              style={{ width: "100%" }}
              alt="/images/example-car.png"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div
            className="carousel-item"
            data-bs-interval="10000"
            style={{ width: "100%" }}
          >
            <img
              src="/images/example-car.png"
              className="d-block "
              style={{ width: "100%" }}
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
        <div className="carousel-inner d-sm-none">
          <div
            className="carousel-item active d-flex  justify-content-center"
            data-bs-interval="10000"
          >
            <img
              src="/images/car-y.png"
              className="d-block w-p-100"
              alt="/images/car.png"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className={` carousel-control-prev cursor-pointer text-white d-none d-md-block`}
          type="button"
          data-bs-target="#my-carousel"
          data-bs-slide="prev"
        >
          <span
            className={`${
              !showArrow ? "d-none" : ""
            } radius-8  h-48 w-48  d-flex align-items-center justify-content-center`}
            aria-hidden="true"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <i className="bi bi-chevron-left fw-bold fs-24 text-white"></i>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className={`carousel-control-next cursor-pointer d-none d-md-flex justify-content-end  `}
          type="button"
          data-bs-target="#my-carousel"
          data-bs-slide="next"
        >
          <span
            className={`${
              !showArrow ? "d-none" : ""
            }  radius-8 h-48 w-48 position-relative end-0 d-flex align-items-center justify-content-center`}
            aria-hidden="true"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <i className="bi bi-chevron-right fw-bold fs-24 text-white"></i>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
