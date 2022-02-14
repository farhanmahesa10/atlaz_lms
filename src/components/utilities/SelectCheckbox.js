import React, { useEffect, useState } from "react";
import { default as ReactSelect, components } from "react-select";
const OptionCheck = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type={"checkbox"}
          checked={props.isSelected}
          className="mr-12 form-check-input"
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
          className="mr-12 form-check-input"
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
  const handleCategoryChange = (selected) => {
    setOptionSelected(selected);
  };
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      color: "black",
      padding: 20,
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
      backgroundColor: state.isFocused ? "#E1E9F3" : "",
      color: "black",
    }),
  };

  return (
    <div>
      <label className="fw-medium">{props.label}</label>
      <ReactSelect
        options={items}
        isMulti={props.inputType == "radio" ? false : true}
        closeMenuOnSelect={props.inputType == "radio" ? true : false}
        hideSelectedOptions={false}
        components={{
          Option: props.inputType == "radio" ? OptionRadio : OptionCheck,
        }}
        styles={customStyles}
        onChange={handleCategoryChange}
        allowSelectAll={true}
        placeholder={props.placeholder}
        value={optionSelected}
      />
    </div>
  );
};

export default SelectCheckbox;
