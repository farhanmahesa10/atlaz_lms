import React from "react";
import * as Yup from "yup";
import validator from "validator";
const useSecurityOrg = () => {
  const initialValues = {
    currentPassword: "",
    newPassword: "",
  };

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required("This ield is required"),
    newPassword: Yup.string().test(
      "newPassword",
      "Validation failure message",
      function (val) {
        let spliting = val ? val.split("") : [];
        let checkIfUpper = spliting.find((r) => {
          if (!validator.isNumeric(r)) return validator.isUppercase(r);
        });
        let checkIfLower = spliting.find((r) => {
          if (!validator.isNumeric(r)) return validator.isLowercase(r);
        });
        let checkIfNumeric = spliting.find((r) => {
          return validator.isNumeric(r);
        });
        let checkIfSix = spliting.length >= 6 ? true : false;
        if (!checkIfUpper || !checkIfLower || !checkIfNumeric || !checkIfSix) {
          return false;
        } else {
          return true;
        }
      }
    ),
  });
  return { initialValues, validationSchema };
};
export default useSecurityOrg;
