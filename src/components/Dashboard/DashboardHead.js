import React, { useState } from "react";
import Carousel from "../Library/Carousel";
import { InputText } from "../Form";
import { SearchDropdown } from "../utilities";
const DashboardHead = () => {
  const [searchData, setSearchData] = useState([]);
  const handleChange = (val) => {
    setSearchData([
      { text: " English Play 01", link: "/search-result" },
      { text: " English Play 02", link: "/search-result" },
      { text: " English Play 03", link: "/search-result" },
      { text: " English Play 04", link: "/search-result" },
    ]);
    // console.log(val);
  };
  return (
    <div className="bg-secondary-200">
      <div className=" m-auto px-12" style={{ maxWidth: "1440px" }}>
        <div className="pb-24 d-flex justify-content-center ">
          <div className="mt-24" style={{ width: "432px" }}>
            <SearchDropdown
              searchRecomend={searchData}
              submitLink="/search-result"
              onChange={handleChange}
            />
          </div>
        </div>
        <Carousel />
        <div className="text-center mb-12 mt-40">
          <h5>Trusted on 10+ Marketplace</h5>
        </div>
        <div className="row gx-0  text-center pb-32 justify-content-center">
          <div className="col-4 col-md-2">
            <img
              src="/images/blibli-thumb.png"
              alt=""
              style={{ opacity: "0.5" }}
            />
          </div>
          <div className="col-4 col-md-2">
            <img
              src="/images/tokopedia-thumb.png"
              alt=""
              style={{ opacity: "0.5" }}
            />
          </div>
          <div className="col-4 col-md-2">
            <img
              src="/images/shopee-thumb.png"
              alt=""
              style={{ opacity: "0.5" }}
            />
          </div>
          <div className="col-4 col-md-2">
            <img
              src="/images/gramedia-thumb.png"
              alt=""
              style={{ opacity: "0.5" }}
            />
          </div>
          <div className="col-4 col-md-2">
            <img
              src="/images/bukalapak-thumb.png"
              alt=""
              style={{ opacity: "0.5" }}
            />
          </div>
          <div className="col-4 col-md-2">
            <img
              src="/images/blibli-thumb.png"
              alt=""
              style={{ opacity: "0.5" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHead;
