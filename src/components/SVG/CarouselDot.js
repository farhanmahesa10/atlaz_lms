import React from "react";

const CarouselDot = (props) => {
  if (props.isActive) {
    return (
      <>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="8" height="8" rx="4" fill="#2A384C" />
        </svg>
      </>
    );
  }
  return (
    <>
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        className="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="8" height="8" rx="4" fill="#AAAFB7" />
      </svg>
    </>
  );
};

export default CarouselDot;
