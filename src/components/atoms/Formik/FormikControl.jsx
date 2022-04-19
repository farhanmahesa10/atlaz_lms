import React from "react";
import InputCheckbox from "./InputCheckbox";
import InputIcon from "./InputIcon";
import InputImage from "./InputImage";
import InputPassword from "./InputPassword";
import SelectOption from "./SelectOption";
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <InputIcon {...rest} />;
    case "inputPassword":
      return <InputPassword {...rest} />;
    case "checkbox":
      return <InputCheckbox {...rest} />;
    case "inputImage":
      return <InputImage {...rest} />;
    case "select":
      return <SelectOption {...rest} />;
    default:
      return null;
  }
};
export default FormikControl;
