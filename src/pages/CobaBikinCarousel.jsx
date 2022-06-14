import React, { useEffect, useRef, useState } from "react";
import "./carousel.scss";
import { ProductYCard } from "../components/molecules";

const CobaBikinCarousel = () => {
  const [leftDisable, setLeftDisable] = useState(true);
  const [rightDisable, setRightDisable] = useState(false);
  const [totalScrollCarousel, setTotalScrollCarousel] = useState(0);
  const [sisa, setSisa] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [carouselTotalWidth, setCarouselTotalWidth] = useState(0);

  const data = [
    {
      imageCover: "/images/product-1.png",
      name: 1,
      author: "atlaz",
      discountPrice: {
        total: 0,
      },
      originalPrice: "",
    },
    {
      imageCover: "/images/product-1.png",
      name: 2,
      author: "atlaz",
      discountPrice: {
        total: 0,
      },
      originalPrice: "",
    },
    {
      imageCover: "/images/product-1.png",
      name: 3,
      author: "atlaz",
      discountPrice: {
        total: 0,
      },
      originalPrice: "",
    },
    {
      imageCover: "/images/product-1.png",
      name: 4,
      author: "atlaz",
      discountPrice: {
        total: 0,
      },
      originalPrice: "",
    },
    {
      imageCover: "/images/product-1.png",
      name: 5,
      author: "atlaz",
      discountPrice: {
        total: 0,
      },
      originalPrice: "",
    },
    {
      imageCover: "/images/product-1.png",
      name: 6,
      author: "atlaz",
      discountPrice: {
        total: 0,
      },
      originalPrice: "",
    },
    {
      imageCover: "/images/product-1.png",
      name: 7,
      author: "atlaz",
      discountPrice: {
        total: 0,
      },
      originalPrice: "",
    },
    {
      imageCover: "/images/product-1.png",
      name: 8,
      author: "atlaz",
      discountPrice: {
        total: 0,
      },
      originalPrice: "",
    },
    {
      imageCover: "/images/product-1.png",
      name: 9,
      author: "atlaz",
      discountPrice: {
        total: 0,
      },
      originalPrice: "",
    },
  ];
  const carouselRef = useRef();

  const scrollRight = () => {
    let doc = document.querySelector(".content");
    let offsetWidth = doc.offsetWidth;
    let countScoll = offsetWidth * 2;

    carouselRef.current.scrollBy({
      left: countScoll,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    let doc = document.querySelector(".content");
    let offsetWidth = doc.offsetWidth;
    let countScoll = offsetWidth * 2;
    if (totalScrollCarousel >= carouselTotalWidth) {
      countScoll = offsetWidth * 3 - 502;
      console.log(totalScrollCarousel, carouselTotalWidth);
    } else {
      countScoll = offsetWidth * 2;
    }
    console.log(countScoll);
    carouselRef.current.scrollBy({
      left: -countScoll,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    //totalContent = 9;
    //totalWidth
    //sisa = contentWidth *totalContent -  totalWidth
    //jika totalWidth == totalScroll maka ketika tombol kiri di klik caount scrollnya ditambah csisa

    let contents = document.querySelectorAll(".content");
    let carouselWidth =
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

    let totalContent = contents.length;
    let contentWidth = contents[0].clientWidth;
    setCarouselTotalWidth(carouselWidth);

    let sisa = contentWidth * totalContent - carouselWidth;
    setSisa(sisa);
    setCarouselWidth(carouselRef.current.offsetWidth);
    console.log("carouselWidth", carouselRef.current.offsetWidth);
    document.querySelector(".carou").addEventListener(
      "scroll",
      function () {
        let scrolledScore = carouselRef.current.scrollLeft;
        let totalScroll =
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        setTotalScrollCarousel(scrolledScore);
        if (scrolledScore < 1) {
          setLeftDisable(true);
        } else {
          setLeftDisable(false);
        }
        if (scrolledScore >= totalScroll) {
          setRightDisable(true);
        } else {
          setRightDisable(false);
        }
      },
      false
    );
  }, []);
  return (
    <div className="w-full h-screen d-flex align-items-center justify-content-center">
      <button
        onClick={scrollLeft}
        className={leftDisable ? "btn-disable" : "btn-primary"}
      >
        geser kiri
      </button>
      <button
        onClick={scrollRight}
        className={rightDisable ? "btn-disable" : "btn-primary"}
      >
        geser kanan
      </button>
      <div className="carou" style={{}} ref={carouselRef}>
        {data.map((r, i) => {
          return (
            <div className="content" key={i}>
              <ProductYCard
                withCanvas
                data={r}
                responsiveClass="card-product-y-mob md-card-product-y-tab xl-card-product-y-desk cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CobaBikinCarousel;
