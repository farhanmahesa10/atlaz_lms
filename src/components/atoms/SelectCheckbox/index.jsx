import React, { useState } from "react";
import { components, default as ReactSelect } from "react-select";
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

const SelectCheckbox = (props) => {
  const [items, setItems] = useState(props.data);

  const [optionSelected, setOptionSelected] = useState(null);
  const handleOptionChange = (selected) => {
    props.onChange(selected);
  };
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      color: "black",
      padding: 8,
    }),
    control: (provided, state) => ({
      ...provided,
      ":hover": {
        borderColor: "#FDBF47",
        boxShadow: "none",
      },
      height: "40px",
      border: "none",
      borderColor: state.isFocused ? "#FDBF47" : "lightgray",
      boxShadow: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#E1E9F3" : "",
      color: "black",
      borderRadius: "4px",
    }),
  };

  return (
    <div className="form-input bg-white">
      <label className="fw-medium">{props.label}</label>
      <div className="input-area bg-white ">
        <ReactSelect
          className="basic-single input-control w-p-100 "
          defaultValue={props.withDefaultValue ? [items[0]] : null}
          options={items}
          isMulti={props.inputType === "radio" ? false : true}
          closeMenuOnSelect={props.inputType === "radio" ? true : false}
          hideSelectedOptions={false}
          components={{
            Option: props.inputType === "radio" ? OptionRadio : OptionCheck,
          }}
          styles={customStyles}
          onChange={handleOptionChange}
          allowSelectAll={true}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default SelectCheckbox;
