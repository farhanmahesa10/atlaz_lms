import React from "react";
import InputIcon from "./InputIcon";
import InputPassword from "./InputPassword";
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <InputIcon {...rest} />;
    case "inputPassword":
      return <InputPassword {...rest} />;
    default:
      return null;
  }
};
export default FormikControl;
