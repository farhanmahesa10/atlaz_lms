import React from "react";
import { components, default as ReactSelect } from "react-select";
import { Close } from "@mui/icons-material";
import { Field } from "formik";
const SelectOption = (props) => {
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

      borderColor: state.isFocused ? "#FDBF47" : "lightgray",
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

  const data = props.options;

  return (
    <>
      <ReactSelect
        className="basic-single input-control"
        classNamePrefix="select"
        placeholder={props.placeholder}
        options={data}
        onChange={(e) => {
          props.formik.setFieldValue(props.name, e.value);
          props.formik.setFieldTouched((props.name, true));
        }}
        onInputChange={props.onInputChange}
        styles={customStyles}
      />
    </>
  );
};

export default SelectOption;
