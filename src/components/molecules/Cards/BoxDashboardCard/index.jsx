import React from "react";
import { Link } from "react-router-dom";

const BoxDashboardCard = (props) => {
  const {
    title,
    link,
    isToExternal,
    bgImage,
    bgColor,
    dontRedirect,
    isCommingSoon,
  } = props;

  const component = (
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
        {isCommingSoon && (
          <span className="bg-neutral-100 text-neutral-300 font-xs px-12 radius-4 py-2">
            Comming soon
          </span>
        )}
      </div>
    </div>
  );

  if (isToExternal) {
    return (
      <a href={link} target="_blank">
        {component}
      </a>
    );
  }

  if (dontRedirect) {
    return component;
  }

  return <Link to={link}>{component}</Link>;
};

BoxDashboardCard.defaultProps = {
  link: "/",
};
export default BoxDashboardCard;
