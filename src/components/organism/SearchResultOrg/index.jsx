import { Form, Formik } from "formik";
import React from "react";
import { searchNoData } from "../../../assets/images";
import { useSearchResult } from "../../../services";
import {
  BreadCrumb,
  FormikControl,
  SearchDropdown,
  SelectCheckbox,
} from "../../atoms";
import MainLayout from "../../Layout/Mainlayout";
import { Pagination, ProductYCard, SearchResultLoading } from "../../molecules";

const SearchResultOrg = () => {
  const {
    breadcrumbsData,
    keyword,
    isLoading,
    searchData,
    bookData,
    pagination,
    setMinPrice,
    setMaxPrice,
    sortData,
    setSortChoosen,
    levelData,
    handleLevelChange,
    showFilter,
    setShowFilter,
    handleChange,
    getBookResult,
    handleOnSelected,
  } = useSearchResult();

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
                  handleSearchChange={handleChange}
                  onSelected={handleOnSelected}
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
              {isLoading ? (
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
                            linkGoTo={`/product-detail/${r._id}`}
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
                    <Pagination
                      totalItem={pagination.total_item}
                      perPage={pagination.per_page}
                      currentPage={pagination.current_page}
                      onSubmit={(page) => {
                        getBookResult(page);
                      }}
                    />
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
