import React from "react";
import { components, default as ReactSelect } from "react-select";
import { Close } from "@mui/icons-material";
import { Field } from "formik";
const SelectOption = (props) => {
  const OptionCheck = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type={"checkbox"}
            checked={props.isSelected}
            className="mr-8 form-check-input"
            onChange={() => null}
          />
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };
  const OptionRadio = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type={"radio"}
            checked={props.isSelected}
            className="mr-8 form-check-input"
            onChange={() => null}
          />
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
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

  const component = {
    Option: props.inputType === "radio" ? OptionRadio : OptionCheck,
  };

  return (
    <>
      <ReactSelect
        className="basic-single input-control"
        classNamePrefix="select"
        isMulti={props.isMulti}
        placeholder={props.placeholder}
        options={data}
        hideSelectedOptions={props.hideSelectedOptions}
        onChange={(e) => {
          let value = props.isMulti ? e : e.value;
          props.formik.setFieldValue(props.name, value);
          props.formik.setFieldTouched((props.name, true));
        }}
        components={props.inputType ? component : false}
        closeMenuOnSelect={props.closeMenuOnSelect}
        onInputChange={props.onInputChange}
        styles={customStyles}
      />
    </>
  );
};

export default SelectOption;
