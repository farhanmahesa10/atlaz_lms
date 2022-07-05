import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

const MyBookListContentLoading = (props) => {
  const [count, setCount] = useState([]);
  useEffect(() => {
    let amountBox = !props.count ? 4 : props.count;
    let arr = [];
    for (let index = 0; index < amountBox; index++) {
      arr.push("");
    }
    setCount(arr);
  }, []);
  return (
    <div className="mt-24">
      <div className="row">
        {count.map((r, i) => {
          return (
            <div key={`load-${i}`} className="col-6 col-sm-4 col-lg-3  mb-24">
              <div className="max-w-127 md-max-w-188 h-200">
                <Skeleton height={"100%"} width="100%" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyBookListContentLoading;
