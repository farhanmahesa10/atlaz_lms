import React, { useEffect, useState } from "react";
import { Divider } from "../../../atoms";
import CircleIcon from "@mui/icons-material/Circle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const UpcomingCard = (props) => {
  const { date, name, clock } = props;

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
        <p className="font-sm-medium">{name}</p>

        <div className="d-flex align-items-center ">
          <p>
            <CircleIcon className="fs-8 text-success-600" />
          </p>
          <p className="font-xs-medium ml-4 text-success-600">Assessment</p>
        </div>
      </div>
      <div className="d-flex align-items-center mt-16 xl-mt-0 justify-content-xl-end w-full">
        <AccessTimeIcon className="fs-16 text-neutral-300" />
        <p className="font-xs-bold ml-4 ">{clock}</p>
      </div>
    </div>
  );
};

export default UpcomingCard;
