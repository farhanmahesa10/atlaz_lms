import React, { useEffect, useState } from "react";
import { WhatTheySayCard } from "../../molecules";
import { CarouselCenter } from "../../atoms";
import LineIcon from "../../SVG/LineIcon";
import { WhatTheySayLoading } from "../../molecules";
import { GET } from "../../../config/RestAPI";
const HomeWhatTheySay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    GET("/client/landing/testimony").then((r) => {
      let result = [];
      r.data.map((res) => {
        result.push(<WhatTheySayCard data={res} />);
      });
      setData(result);
    });
  }, []);

  return (
    <>
      {data.length < 1 ? (
        <WhatTheySayLoading />
      ) : (
        <div className=" mt-48 md-mt-64 xl-mt-104">
          <div className="text-center mb-54">
            <h3 className="m-0">What they say</h3>
            <div style={{ marginTop: "-10px" }}>
              <LineIcon />
            </div>
          </div>
          <div className=" ">
            <CarouselCenter content={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default HomeWhatTheySay;
