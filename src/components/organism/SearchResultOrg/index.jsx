import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  BreadCrumb,
  FormikControl,
  SearchDropdown,
  SelectCheckbox,
} from "../../atoms";
import MainLayout from "../../Layout/Mainlayout";
import { ProductYCard, SearchResultLoading } from "../../molecules";
import { BaseAPIURL, GET } from "../../../config/RestAPI";
import axios from "axios";
import { searchNoData } from "../../../assets/images";

const SearchResultOrg = (props) => {
  const { keyword } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [searchData, setSearchData] = useState([]);
  const [bookData, setBookData] = useState([]);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const [prevPage, setPrevPage] = useState(false);
  const [nextPage, setNextPage] = useState(false);

  const [sortData, setSortData] = useState([
    { value: "Ascending", label: "Ascending" },
    { value: "Descending", label: "Descending" },
    { value: "Lowest Price", label: "Lowest Price" },
    { value: "Highest Price", label: "Highest Price" },
  ]);

  const [levelChoosen, setLevelChoosen] = useState([]);
  const [sortChoosen, setSortChoosen] = useState("Ascending");

  const levelData = [
    { value: "Elementary", label: "Elementary" },
    { value: "Junior High School", label: "Junior High School" },
    { value: "Senior High School", label: "Senior High School" },
  ];

  const handleLevelChange = (selected) => {
    let result = [];
    for (const r of selected) {
      result.push(r.value);
    }

    setLevelChoosen(result);
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

  const handleChange = (e) => {
    GET("/client/landing/booklist/search?keyword=" + e.target.value).then(
      (r) => {
        setSearchData(r.data);
      }
    );
  };

  const getBookResult = () => {
    setIsLoading(true);
    let url = `${BaseAPIURL}/client/landing/booklist/filter`;
    let req = {
      keyword: keyword,
      minPrice: minPrice,
      maxPrice: maxPrice,
      sort: sortChoosen,
      level: levelChoosen,
    };

    GET(url, { params: req }).then((response) => {
      setIsLoading(false);
      setBookData(response.data);

      let { paginate } = response;

      if (paginate.current_page !== 1) {
        setPrevPage(true);
      }

      if (paginate.total_item / paginate.per_page > 1) {
        setNextPage(true);
      }
    });
  };

  // keyword, minPrice, maxPrice, sortChoosen, levelChoosen

  useEffect(() => {
    getBookResult();
  }, [keyword, minPrice, maxPrice, sortChoosen, levelChoosen]);

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
                  defaultValue={keyword}
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
                    {!isLoading && bookData.length < 1 ? (
                      <>
                        <div
                          className="   d-flex justify-content-center align-items-center"
                          style={{ height: "60vh" }}
                        >
                          <div className="text-center ">
                            <img
                              src={searchNoData}
                              alt=""
                              className=" w-178 md-w-240 xlw--270"
                            />
                            <p className="h6">
                              Sorry we couldn’t find any match
                            </p>
                            <p className="text-sm">
                              Please try searching with another keyword
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-12 mb-16 ">
                          <div className="row align-items-center ">
                            <div className="col-12 col-sm-8 mb-16 md-mb-0">
                              Showing 6 items for{" "}
                              <span className="font-bold">
                                “Simple past tense”
                              </span>
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

                        <div
                          className={`col-12 ${!showFilter ? "d-none" : ""}`}
                        >
                          <div className="row">
                            <div className={`col-12 col-sm-6 col-xl-3 mb-16`}>
                              <SelectCheckbox
                                withDefaultValue
                                inputType={"radio"}
                                label="Sort"
                                data={sortData}
                                onChange={(r) => {
                                  setSortChoosen(r.value);
                                }}
                                placeholder="Sort by..."
                              />
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 mb-16">
                              <SelectCheckbox
                                isMulti={true}
                                label="Level"
                                data={levelData}
                                onChange={handleLevelChange}
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
                                onInput={(e) => {
                                  if (e.target.value === "") {
                                    setMinPrice(0);
                                  } else {
                                    setMinPrice(e.target.value);
                                  }
                                }}
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
                                onInput={(e) => {
                                  if (e.target.value === "") {
                                    setMaxPrice(Infinity);
                                  } else {
                                    setMaxPrice(e.target.value);
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="rectangle mb-24"></div>
                        </div>
                      </>
                    )}
                  </div>
                </Form>
              </Formik>
              {isLoading && bookData.length > 0 ? (
                <SearchResultLoading />
              ) : (
                <>
                  <div className=" row justify-content-start">
                    {bookData.map((r, i) => {
                      return (
                        <div
                          className="col-6  col-md-4 col-xl-2 col-xl-2 d-flex justify-content-center mb-20 "
                          key={i}
                        >
                          <ProductYCard
                            linkGoTo="/product-detail"
                            data={r}
                            responsiveClass="card-product-y-mob md-card-product-y-desk"
                          />
                        </div>
                      );
                    })}
                  </div>
                  {!isLoading && bookData.length < 1 ? (
                    ""
                  ) : (
                    <Formik
                      onSubmit={() => {}}
                      initialValues={{ pageNumber: "1" }}
                    >
                      <Form>
                        <div className="d-flex justify-content-between align-items-center bg-secondary-100 px-16 py-8 radius-4">
                          <div className="text-neutral-300 fs-12">
                            1-5 of 40
                          </div>
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
                            <button
                              className={`cursor-pointer ${
                                !prevPage
                                  ? "border-secondary-100 text-neutral-200 bg-white"
                                  : "bg-white"
                              } hover-bg-primary-100 radius-4 border d-flex align-items-center w-24 h-24`}
                            >
                              <ArrowBackIcon style={{ fontSize: "12px" }} />
                            </button>
                            <button
                              className={`cursor-pointer ${
                                !nextPage
                                  ? "border-secondary-100 text-neutral-200 bg-white"
                                  : "bg-white"
                              } hover-bg-primary-100 radius-4 border  d-flex align-items-center  w-24 h-24`}
                            >
                              <ArrowForwardIcon style={{ fontSize: "12px" }} />
                            </button>
                          </div>
                        </div>
                      </Form>
                    </Formik>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default SearchResultOrg;
