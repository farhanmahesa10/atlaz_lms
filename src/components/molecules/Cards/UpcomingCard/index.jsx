import React, { useEffect, useState } from "react";
import { Divider } from "../../../atoms";
import CircleIcon from "@mui/icons-material/Circle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const UpcomingCard = (props) => {
  const { data } = props;

  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", (e) => {
    setwindowWidth(e.target.innerWidth);
  });

  return (
    <div className=" bg-secondary-100 p-16 radius-8 border border-secondary-500 d-xl-flex">
      <div
        className={`text-center xl-pr-16 d-flex flex-xl-column ${
          windowWidth >= 1140 && "border-end "
        } align-items-center justify-content-center`}
      >
        <p className="font-sm-bold">{data.date}</p>{" "}
        <p className="font-xs ml-8 xl-ml-0"> {data.month}</p>
      </div>
      <Divider lineColor="bg-secondary-500 " parentClassName="mt-8" />

      <div className="mt-8 xl-mt-0 xl-ml-16 w-full">
        <p className="font-sm-medium">{data.name}</p>

        <div className="d-flex align-items-center ">
          <p>
            <CircleIcon className="fs-8 text-success-600" />
          </p>
          <p className="font-xs-medium ml-4 text-success-600">
            {data.category}
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center mt-16 xl-mt-0 justify-content-xl-end w-full">
        <AccessTimeIcon className="fs-16 text-neutral-300" />
        <p className="font-xs-bold ml-4 ">{data.clock}</p>
      </div>
    </div>
  );
};

export default UpcomingCard;
