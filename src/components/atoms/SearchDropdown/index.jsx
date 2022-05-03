import React, { useState, useEffect } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Link, useNavigate } from "react-router-dom";
import FormikControl from "../Formik/FormikControl";
import { Form, Formik } from "formik";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import AsyncCreatableSelect from "react-select/async-creatable";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { components, ControlProps, default as ReactSelect } from "react-select";
import SearchIcon from "@mui/icons-material/Search";
import { GET } from "../../../config/RestAPI";

import AsyncSelect from "react-select/async";
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
    console.log(searchRecomend);
    // setShowPopup(true);
  };

  const handleClear = (formik) => {
    formik.setFieldValue("keyword", "");
  };

  const onSubmit = (values, formik) => {
    setShowPopup(false);
    navigate(props.submitLink + "/" + values.keyword);
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      color: "black",
      padding: 8,
      borderColor: "red",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.075)",
    }),

    control: (provided, state) => ({
      ...provided,
      ":hover": {
        borderColor: "#FDBF47",
        boxShadow: "none",
      },
      height: "48px",

      // borderColor: state.isFocused ? "#FDBF47" : "lightgray",
      border: "none",
      boxShadow: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#F3F6FA" : "",
      color: "black",
      borderRadius: "4px",
      cursor: "pointer",
      ":active": {
        backgroundColor: "#F3F6FA",
      },
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      backgroundColor: "rgba(0,0,0,0)",
    }),
  };

  const Control = ({ children, ...props }) => {
    // @ts-ignore
    const { emoji, onEmojiClick } = props.selectProps;
    const style = { cursor: "pointer" };

    return (
      <components.Control {...props}>
        <SearchIcon className="text-neutral-300 pl-16" />
        {children}
      </components.Control>
    );
  };

  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span>
          You can search by book name or any keyword here. Try "Simple past
          tense"
          <hr className="border-secondary-300 mt-16" />
        </span>
      </components.NoOptionsMessage>
    );
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

  const [dataOpt, setDataOpt] = useState([
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
  ]);

  const tesFunc = () => {
    return searchRecomend;
  };

  const promiseOptions = (inputValue) => {};

  return (
    <>
      <div className="form-input bg-white">
        <div className="input-area bg-white ">
          <AsyncSelect
            className="basic-single w-p-100 "
            classNamePrefix="select"
            placeholder="Search anything here"
            loadOptions={props.handleSearchChange}
            formatCreateLabel={() => undefined}
            styles={customStyles}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
              Control,
              NoOptionsMessage,
            }}
          />
        </div>
      </div>
      {/* <div>
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
      </div> */}
    </>
  );
};
export default SearchDropdown;
