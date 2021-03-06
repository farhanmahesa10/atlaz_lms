import React, { useEffect, useRef } from "react";
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
      // backgroundColor: "red",
      boxShadow: "none",
    }),

    control: (provided, state) => ({
      ...provided,
      ":hover": {
        borderColor: "#FDBF47",
        boxShadow: "none",
      },
      borderRadius: "8px",
      height: "40px",
      border: "none",
      // borderColor: state.isFocused ? "#FDBF47" : "lightgray",
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

  const meta = props.formik.getFieldMeta(props.name);

  useEffect(() => {
    if (props.defaultValue) {
      if (props.isMulti) {
        props.formik.setFieldValue(props.name, [props.defaultValue]);
      } else {
        props.formik.setFieldValue(props.name, props.defaultValue.value);
      }
    }
  }, []);

  return (
    <>
      <div className="form-input-  bg-white cursor-pointer">
        <div className={`input-area  bg-white`}>
          <ReactSelect
            className={`basic-single  input-control w-full ${props.className}`}
            classNamePrefix="select"
            isMulti={props.isMulti}
            placeholder={props.placeholder}
            options={data}
            ref={props.selectRef}
            isDisabled={props.isDisabled}
            defaultValue={props.defaultValue}
            hideSelectedOptions={props.hideSelectedOptions}
            onChange={(e) => {
              let value = props.isMulti ? e : e.value;
              props.formik.setFieldValue(props.name, value);
              props.formik.setFieldTouched((props.name, true));
              if (props.onInputChange) {
                props.onInputChange(e);
              }
            }}
            components={props.inputType ? component : false}
            closeMenuOnSelect={props.closeMenuOnSelect}
            styles={customStyles}
          />
        </div>
      </div>
      {meta.touched && meta.error && (
        <span className="text-danger-500">{meta.error}</span>
      )}
    </>
  );
};

export default SelectOption;
