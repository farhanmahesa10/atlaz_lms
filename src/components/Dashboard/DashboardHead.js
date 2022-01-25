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
    <>
      <div className="bg-secondary-200 d-md-flex justify-content-center pb-55 xs-pb-24">
        <div className="md-px-32 pl-12 m-0 " style={{ maxWidth: "1440px" }}>
          <div className="pb-24 d-flex justify-content-center ">
            <div className="" style={{ width: "432px" }}>
              <SearchDropdown
                searchRecomend={searchData}
                submitLink="/search-result"
                onChange={handleChange}
              />
            </div>
          </div>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default DashboardHead;
