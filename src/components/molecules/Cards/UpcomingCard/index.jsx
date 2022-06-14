import React, { useEffect, useState } from "react";
import { Divider } from "../../../atoms";
import CircleIcon from "@mui/icons-material/Circle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const UpcomingCard = (props) => {
  const { date, name, clock, topic, event } = props;

  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    let isMounted = true;
    window.addEventListener("resize", (e) => {
      if (isMounted) setwindowWidth(e.target.innerWidth);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  const handleBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case "on going":
        return "border-success-600 bg-success-100 border-success-600 text-success-600";
      case "started soon":
        return "text-info-500 bg-info-100 border-info-500";
      case "submited":
        return "bg-neutral-100 border-neutral-300 text-neutral-300";
      case "not available":
        return "bg-danger-100 border-danger-500 text-danger-500";
      default:
        break;
    }
  };
  return (
    <div className=" bg-secondary-100 p-16 radius-8 border border-secondary-500 d-xl-flex">
      <div
        className={`text-center xl-pr-16 d-flex flex-xl-column ${
          windowWidth >= 1200 && "border-end "
        } align-items-center justify-content-center`}
      >
        <p className="font-sm-bold">{date}</p>{" "}
      </div>
      <Divider lineColor="bg-secondary-500 " parentClassName="mt-8" />

      <div className="mt-8 xl-mt-0 xl-ml-16 w-full">
        <p className="font-medium">{name}</p>

        <div className="d-flex align-items-center ">
          <p className="font-sm ">
            {topic.length > 22 ? topic.substring(0, 22) + "..." : topic}
          </p>
        </div>
      </div>
      <div className=" nowrap">
        <div className="d-flex align-items-center mt-16 xl-mt-0 justify-content-xl-end w-full">
          <AccessTimeIcon className="fs-16 text-neutral-300" />
          <p className="font-xs-bold ml-4 ">{clock}</p>
        </div>
        <span
          className={`nowrap d-inline-block border px-8 py-2 radius-4 font-xs ${handleBadgeColor(
            event
          )}`}
        >
          {event}
        </span>
      </div>
    </div>
  );
};

export default UpcomingCard;
