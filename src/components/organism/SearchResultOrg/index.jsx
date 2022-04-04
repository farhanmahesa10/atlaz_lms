import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  BreadCrumb,
  FormikControl,
  SearchDropdown,
  SelectCheckbox,
} from "../../atoms";
import MainLayout from "../../Layout/Mainlayout";
import { ProductYCard } from "../../molecules";

const SearchResultOrg = (props) => {
  const [searchParams] = useSearchParams();
  const [searchData, setSearchData] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const keyword = searchParams.get("keyword");

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

  const categoryData = [
    { value: "Elementary", label: "Elementary" },
    { value: "Junior High School", label: "Junior High School" },
    { value: "Senior High School", label: "Senior High School" },
  ];

  const [optionSelected, setOptionSelected] = useState(null);
  const handleCategoryChange = (selected) => {
    setOptionSelected(selected);
  };

  const [showFilter, setShowFilter] = useState(false);
  const breadcrumbsData = [
    {
      link: "/shop",
      label: "Shop",
    },
    {
      link: "",
      label: "Book List",
    },
  ];
  return (
    <>
      <MainLayout>
        <div className="row gx-0 justify-content-center">
          <div style={{ maxWidth: "1440px" }}>
            <div className="mx-24 mt-16">
              <div className="mb-24">
                <BreadCrumb data={breadcrumbsData} />
              </div>
              <div className="mb-24">
                <SearchDropdown
                  submitLink="/search-result"
                  onChange={handleChange}
                  searchRecomend={searchData}
                />
              </div>

              <Formik
                initialValues={{ minPrice: "", maxPrice: "" }}
                onSubmit={() => {}}
                validateOnBlur={false}
              >
                <Form>
                  <div className="row mt-16 ">
                    <div className="col-12 mb-16 ">
                      <div className="row align-items-center ">
                        <div className="col-12 col-sm-8 mb-16 md-mb-0">
                          Showing 6 items for{" "}
                          <span className="font-bold">“Simple past tense”</span>
                        </div>
                        <div className="col-12 col-sm-4 d-flex justify-content-sm-end">
                          <span
                            className="btn-outline  w-141 d-flex justify-content-between"
                            onClick={() =>
                              showFilter
                                ? setShowFilter(false)
                                : setShowFilter(true)
                            }
                          >
                            <span>Filter</span>
                            <span>
                              <i
                                className={`bi ${
                                  !showFilter
                                    ? "bi-caret-down-fill"
                                    : "bi-caret-up-fill"
                                } text-neutral-300`}
                              ></i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`col-12 ${!showFilter ? "d-none" : ""}`}>
                      <div className="row">
                        <div className={`col-12 col-sm-6 col-xl-3 mb-16`}>
                          <SelectCheckbox
                            withDefaultValue
                            inputType={"radio"}
                            label="Sort"
                            data={sortData}
                            placeholder="Sort by..."
                          />
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 mb-16">
                          <SelectCheckbox
                            isMulti={true}
                            label="Level"
                            data={categoryData}
                            placeholder="All Level"
                          />
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 mb-16">
                          <label className="fw-medium">Minimum price</label>
                          <FormikControl
                            control="input"
                            type="number"
                            name="minPrice"
                            placeholder="Enter the nominal"
                            inputClassName="hide-arrow"
                          />
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 mb-16">
                          <label className="fw-medium">Maximum price</label>
                          <FormikControl
                            control="input"
                            type="number"
                            name="maxPrice"
                            placeholder="Enter the nominal"
                            inputClassName="hide-arrow"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="rectangle mb-24"></div>
                    </div>
                  </div>
                </Form>
              </Formik>
              <div className=" row justify-content-center ">
                <div className="col-6  col-md-4 col-xl-2 col-xl-2 d-flex justify-content-center mb-20 ">
                  <ProductYCard
                    linkGoTo="/product-detail"
                    responsiveClass="card-product-y-mob md-card-product-y-desk"
                  />
                </div>
                <div className="col-6  col-md-4 col-xl-2 col-xl-2 d-flex justify-content-center mb-20 ">
                  <ProductYCard
                    linkGoTo="/product-detail"
                    responsiveClass="card-product-y-mob md-card-product-y-desk"
                  />
                </div>
                <div className="col-6  col-md-4 col-xl-2 col-xl-2 d-flex justify-content-center mb-20 ">
                  <ProductYCard
                    linkGoTo="/product-detail"
                    responsiveClass="card-product-y-mob md-card-product-y-desk"
                  />
                </div>
                <div className="col-6  col-md-4 col-xl-2 col-xl-2 d-flex justify-content-center mb-20 ">
                  <ProductYCard
                    linkGoTo="/product-detail"
                    responsiveClass="card-product-y-mob md-card-product-y-desk"
                  />
                </div>
                <div className="col-6  col-md-4 col-xl-2 col-xl-2 d-flex justify-content-center mb-20 ">
                  <ProductYCard
                    linkGoTo="/product-detail"
                    responsiveClass="card-product-y-mob md-card-product-y-desk"
                  />
                </div>
                <div className="col-6  col-md-4 col-xl-2 col-xl-2 d-flex justify-content-center mb-20 ">
                  <ProductYCard
                    linkGoTo="/product-detail"
                    responsiveClass="card-product-y-mob md-card-product-y-desk"
                  />
                </div>
              </div>
              <Formik onSubmit={() => {}} initialValues={{ pageNumber: "1" }}>
                <Form>
                  <div className="d-flex justify-content-between align-items-center bg-secondary-100 px-16 py-8 radius-4">
                    <div className="text-neutral-300 fs-12">1-5 of 40</div>
                    <div className="d-flex gap-10  align-items-center">
                      <span className="text-neutral-300 fs-12">
                        You’re in page
                      </span>
                      <FormikControl
                        control="input"
                        type="text"
                        name="pageNumber"
                        inputClassName="font-sm h-6 px-2"
                        coverClassName={"h-24 w-24 px-2"}
                      />
                      <div className="border-end mx-8">&nbsp;</div>
                      <button className="cursor-pointer hover-bg-primary-100 bg-white radius-4 border w-24 h-24">
                        <ArrowBackIcon style={{ fontSize: "12px" }} />
                      </button>
                      <button className="cursor-pointer hover-bg-primary-100 bg-white radius-4 border  w-24 h-24">
                        <ArrowForwardIcon style={{ fontSize: "12px" }} />
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default SearchResultOrg;
