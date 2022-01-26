import React, { useState } from "react";
import MainLayout from "../../components/Layout/Mainlayout";
import { SearchDropdown } from "../../components/utilities";

const ProductDetail = () => {
  const [searchData, setSearchData] = useState([]);
  const handleSearchChange = (val) => {
    setSearchData([
      { text: " English Play 01", link: "/search-result" },
      { text: " English Play 02", link: "/search-result" },
      { text: " English Play 03", link: "/search-result" },
      { text: " English Play 04", link: "/search-result" },
    ]);
  };

  return (
    <MainLayout>
      <div className="mt-16">
        <SearchDropdown
          submitLink="/search-result"
          onChange={handleSearchChange}
          searchRecomend={searchData}
        />
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
