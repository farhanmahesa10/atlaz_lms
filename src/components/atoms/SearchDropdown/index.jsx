import React, { useState, useEffect } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Link, useNavigate } from "react-router-dom";
import FormikControl from "../Formik/FormikControl";
import { Form, Formik } from "formik";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const SearchDropdown = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchRecomend, setSearchRecomend] = useState(props.searchRecomend);
  useEffect(() => {
    setSearchRecomend(props.searchRecomend);
  }, [props.searchRecomend]);

  const initialValues = {
    keyword: props.defaultValue,
  };

  let navigate = useNavigate();
  const handleSearch = () => {
    setShowPopup(true);
  };
  const handleClickAway = () => {
    setShowPopup(false);
  };

  const handleChange = (val) => {
    props.onChange(val);
    setShowPopup(true);
  };

  const handleClear = (formik) => {
    formik.setFieldValue("keyword", "");
  };

  const onSubmit = (values, formik) => {
    navigate(props.submitLink + "/" + values.keyword);
  };

  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  return (
    <>
      <div>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validateOnBlur={false}
            enableReinitialize={true}
          >
            {(formik) => (
              <Form>
                <div className=" ">
                  <FormikControl
                    control="input"
                    name="keyword"
                    type="text"
                    placeholder="Search anything here"
                    onInput={handleChange}
                    autoComplete={"off"}
                    icon2={
                      <span
                        className={`text-neutral-200 pr-16 cursor-pointer ${
                          !showPopup ? "d-none" : "d-block"
                        }`}
                        onClick={() => {
                          handleClear(formik);
                        }}
                      >
                        &times;
                      </span>
                    }
                    icon={<i className="bi bi-search text-neutral-400"></i>}
                  />
                  <div className="input-group  w-full book-shadow  ">
                    <div style={{ width: "100%" }}>
                      {showPopup ? (
                        <div
                          style={{ zIndex: 99 }}
                          className="bg-white text-center radius-8 mt-8 position-absolute book-shadow   w-full  py-24 text-neutral-300 font-size-14"
                        >
                          {searchRecomend.length < 1 ? (
                            <div className="m-0 px-24">
                              You can search by book name or any keyword here.
                              Try "Simple past tense"
                              <hr />
                            </div>
                          ) : (
                            searchRecomend.map((r, i) => {
                              return (
                                <Link
                                  key={i}
                                  to={`/search-result/${r.name}`}
                                  className="font-size-16  pr-11 h-40 hover-bg-neutral-50 cursor-pointer  px-24 d-flex align-items-center "
                                >
                                  <i className="bi bi-search text-neutral-200 pr-12"></i>
                                  {r.name}
                                </Link>
                              );
                            })
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </ClickAwayListener>
      </div>
    </>
  );
};
export default SearchDropdown;
