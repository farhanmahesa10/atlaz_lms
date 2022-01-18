import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const EmblaSlider = (props) => {
  const [viewportRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
    speed: 1,
  });

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {props.content.map((r) => {
            return (
              <div className="embla__slide" key={Math.random()}>
                <div className="embla__slide__inner" style={{ height: "100%" }}>
                  {r}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmblaSlider;
