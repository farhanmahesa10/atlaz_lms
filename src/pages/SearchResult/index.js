import React, { useState } from "react";
import MainLayout from "../../components/Layout/Mainlayout";
import { SearchDropdown, SelectCheckbox } from "../../components/utilities";
import { ProductYCard } from "../../components";
import "../../assets/css/inputcheck.css";
const SearchResult = (props) => {
  const [searchData, setSearchData] = useState([]);
  const handleChange = (val) => {
    setSearchData([
      { text: " English Play 01", link: "/search-result" },
      { text: " English Play 02", link: "/search-result" },
      { text: " English Play 03", link: "/search-result" },
      { text: " English Play 04", link: "/search-result" },
    ]);
  };

  const [sortData, setSortData] = useState([
    { value: "Ascending", label: "Ascending" },
    { value: "Descending", label: "Descending" },
    { value: "Lowest Price", label: "Lowest Price" },
    { value: "Highest Price", label: "Highest Price" },
  ]);

  const [categoryData, setCategoryData] = useState([
    { value: "Elementary", label: "Elementary" },
    { value: "Junior High School", label: "Junior High School" },
    { value: "Senior High School", label: "Senior High School" },
    { value: "Best Deal", label: "Best Deal" },
  ]);

  const [optionSelected, setOptionSelected] = useState(null);
  const handleCategoryChange = (selected) => {
    setOptionSelected(selected);
  };

  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <MainLayout>
        <div className="mt-16">
          <SearchDropdown
            submitLink="/search-result"
            onChange={handleChange}
            searchRecomend={searchData}
          />
        </div>
        <div className="row mt-16">
          <div className="col-12 mb-16 ">
            <div className="row">
              <div className="col-12 col-sm-8 mb-16">
                Showing 6 items for <strong>“Simple past tense”</strong>
              </div>
              <div className="col-12 col-sm-4 d-flex justify-content-sm-end">
                <span
                  className="btn bg-white border w-141 d-flex justify-content-between"
                  onClick={() =>
                    showFilter ? setShowFilter(false) : setShowFilter(true)
                  }
                >
                  <span>Filter</span>
                  <span>
                    <i
                      className={`bi ${
                        !showFilter ? "bi-caret-down-fill" : "bi-caret-up-fill"
                      } text-neutral-300`}
                    ></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className={`col-12 ${!showFilter ? "d-none" : ""}`}>
            <div className="row">
              <div className={`col-12 col-sm-6 col-lg-3 mb-16`}>
                <SelectCheckbox
                  inputType={"radio"}
                  label="Sort"
                  data={sortData}
                  placeholder="Sort by..."
                />
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-16">
                <SelectCheckbox
                  isMulti={true}
                  label="Category"
                  data={categoryData}
                  placeholder="Select Category"
                />
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-16">
                <label className="fw-medium">Minimum price</label>
                <input
                  type="number"
                  className="form-control border"
                  placeholder="Enter minimum price"
                />
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-16">
                <label className="fw-medium">Maximum price</label>
                <input
                  type="number"
                  className="form-control border"
                  placeholder=" Enter maximum price"
                />
              </div>

              <div className="col-12 ">
                <hr className="mt-16" />
              </div>
            </div>
          </div>
        </div>
        <div className=" row justify-content-center">
          <div className="col-6 col-sm-4 col-md-3 col-xl-2 d-flex justify-content-center mb-20 ">
            <ProductYCard />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xl-2 d-flex justify-content-center mb-20 ">
            <ProductYCard />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xl-2 d-flex justify-content-center mb-20 ">
            <ProductYCard />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xl-2 d-flex justify-content-center mb-20 ">
            <ProductYCard />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xl-2 d-flex justify-content-center mb-20 ">
            <ProductYCard />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xl-2 d-flex justify-content-center mb-20 ">
            <ProductYCard />
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="text-neutral-300 font-size-12">1-5 of 40</div>
          <div className="d-flex gap-10  align-items-center">
            <span className="text-neutral-300 font-size-12">
              You’re in page
            </span>
            <select
              name=""
              className="book-shadow border-neutral-500 border radius-4 py-1 px-1"
              id=""
            >
              <option value="">1</option>
              <option value="">2</option>
            </select>

            <button className="book-shadow bg-white radius-4 border ">
              <i className="bi bi-arrow-left-short font-size-18"></i>
            </button>
            <button className="book-shadow bg-white radius-4 border ">
              <i className="bi bi-arrow-right-short font-size-18"></i>
            </button>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default SearchResult;
