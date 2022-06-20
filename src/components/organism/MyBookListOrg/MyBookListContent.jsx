import { Form, Formik } from "formik";
import React from "react";
import { FormikControl } from "../../atoms";
import BookListDashboardCard from "../../molecules/Cards/BookListDashboardCard";
import SearchIcon from "@mui/icons-material/Search";
import { MyBookListContentLoading } from "../../molecules";
const MyBookListContent = (props) => {
  const {
    data,
    isLoading,
    category,
    keyword,
    handleCategoryChange,
    handleKeywordChange,
  } = props;
  return (
    <div className="mx-24 md-mx-48 mt-16 md-mt-24 xl-mt-32">
      <div className="row">
        <div className="col-4 d-none d-xl-block">
          <div
            className=" radius-14 p-8 border-secondary-500"
            style={{ border: "2px solid" }}
          >
            <ul>
              <li
                className={`p-8 my-2 hover-bg-primary-300  cursor-pointer radius-4 ${
                  category === "" && " bg-primary-300"
                }`}
                onClick={() => handleCategoryChange("")}
              >
                All Book
              </li>
              <li
                className={`p-8 my-2 hover-bg-primary-300 cursor-pointer radius-4 ${
                  category === "General" && " bg-primary-300"
                }`}
                onClick={() => handleCategoryChange("General")}
              >
                General
              </li>
              <li
                className={`p-8 my-2 hover-bg-primary-300 cursor-pointer radius-4 ${
                  category === "Elementary" && " bg-primary-300"
                }`}
                onClick={() => handleCategoryChange("Elementary")}
              >
                Elementary
              </li>
              <li
                className={`p-8 my-2 hover-bg-primary-300 cursor-pointer radius-4 ${
                  category === "Junior High School" && " bg-primary-300"
                }`}
                onClick={() => handleCategoryChange("Junior High School")}
              >
                Junior High School
              </li>
              <li
                className={`p-8 hover-bg-primary-300 cursor-pointer radius-4 ${
                  category === "Senior High School" && " bg-primary-300"
                }`}
                onClick={() => handleCategoryChange("Senior High School")}
              >
                Senior High School
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-xl-8">
          <div
            className=" radius-14 pt-24 px-32 border-secondary-500"
            style={{ border: "2px solid" }}
          >
            <div className="d-flex justify-content-between">
              <div>
                <h6>My Book</h6>
                <p className="font-xs text-neutral-300 ">
                  List of purchased book
                </p>
              </div>
              <Formik initialValues={{ keyword: "" }} onSubmit={() => {}}>
                <Form>
                  <div className="w-305">
                    <FormikControl
                      name="keyword"
                      control="input"
                      icon={<SearchIcon className="text-neutral-200 fs-20" />}
                      placeholder="Search book name / author name"
                      coverClassName="h-40"
                      size="small"
                      onInput={(e) => {
                        handleKeywordChange(e.target.value);
                      }}
                    />
                  </div>
                </Form>
              </Formik>
            </div>
            {isLoading ? (
              <MyBookListContentLoading />
            ) : (
              <div className="mt-24">
                <div className="row">
                  {data.map((r, i) => {
                    return (
                      <div
                        className="col-6 col-sm-4 col-lg-3  mb-24"
                        key={r._id}
                      >
                        <BookListDashboardCard
                          className="card-book-sm md-card-book-xl"
                          data={r}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookListContent;
