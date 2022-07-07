import React, { useState } from "react";
import { Divider } from "../../atoms";
import "./tabBar.scss";
const TabBar = (props) => {
  const [active, setActive] = useState(props.activeDefault);

  const { data } = props;

  return (
    <>
      <div className="d-flex">
        {data.map((r, i) => {
          return (
            <React.Fragment key={i}>
              <p
                className={`font-medium cursor-pointer border-primary-500 position-relative  mr-40 ${
                  active.toLowerCase() === r.name.toLowerCase() &&
                  "activeTabBar"
                }`}
                onClick={() => {
                  setActive(r.name);
                }}
              >
                {r.name}
              </p>
            </React.Fragment>
          );
        })}
      </div>
      <Divider height="h-2" parentStyle={{ marginTop: "-2px" }} />

      <div className="mt-16">
        {data.map((res, ind) => {
          if (active.toLowerCase() === res.name.toLowerCase()) {
            return <React.Fragment key={ind}>{res.component}</React.Fragment>;
          }
        })}
      </div>
    </>
  );
};

export default TabBar;
