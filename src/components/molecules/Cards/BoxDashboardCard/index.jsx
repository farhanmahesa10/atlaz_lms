import React from "react";
import { Link } from "react-router-dom";

const BoxDashboardCard = (props) => {
  const { title, link, isToExternal, bgImage, bgColor } = props;

  if (isToExternal) {
    return (
      <a href={link} target="_blank">
        <div
          className="w-full h-full radius-14 border border-secondary-500"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundColor: bgColor,
            backgroundPositionX: "right",
            backgroundPositionY: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="py-16 px-24">
            <h6 className="xl-h5">{title}</h6>
          </div>
        </div>
      </a>
    );
  }

  return (
    <Link to={link}>
      <div
        className="w-full h-full radius-14 border border-secondary-500"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: bgColor,
          backgroundPositionX: "right",
          backgroundPositionY: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-16 px-24">
          <h6 className="xl-h5">{title}</h6>
        </div>
      </div>
    </Link>
  );
};

BoxDashboardCard.defaultProps = {
  link: "/",
};
export default BoxDashboardCard;
