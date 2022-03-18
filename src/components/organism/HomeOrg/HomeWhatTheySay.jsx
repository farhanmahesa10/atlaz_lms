import React from "react";
import { WhatTheySayCard } from "../../molecules";
import { CarouselCenter } from "../../atoms";
import LineIcon from "../../SVG/LineIcon";

const HomeWhatTheySay = () => {
  return (
    <>
      <div className=" mt-48 md-mt-64 xl-mt-104">
        <div className="text-center mb-54">
          <h3 className="m-0">What they say</h3>
          <div style={{ marginTop: "-10px" }}>
            <LineIcon />
          </div>
        </div>
        <div className=" ">
          <CarouselCenter
            content={[
              <WhatTheySayCard
                text="Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. 
                We can't understand how we've been living without it."
              />,
              <WhatTheySayCard
                text="Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. 
                We can't understand how we've been living without it."
              />,
              <WhatTheySayCard
                text="Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. 
                We can't understand how we've been living without it."
              />,
              <WhatTheySayCard
                text="Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. 
                We can't understand how we've been living without it."
              />,
              <WhatTheySayCard
                text="Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. 
                We can't understand how we've been living without it."
              />,

              <WhatTheySayCard
                text="Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. 
                We can't understand how we've been living without it."
              />,
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default HomeWhatTheySay;
