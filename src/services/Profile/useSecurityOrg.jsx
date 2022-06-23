import React, { useState } from "react";
import * as Yup from "yup";
import validator from "validator";
import useGlobalFunction from "../GlobalFuntions/useGlobalFunction";
import { defConfig, POST } from "../../config/RestAPI";
const useSecurityOrg = () => {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const { getUserInfo, setFlashMessage } = useGlobalFunction();

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
          setEnableSubmit(false);
          return false;
        } else {
          setEnableSubmit(true);
          return true;
        }
      }
    ),
  });

  const onSubmit = (values, formik) => {
    setEnableSubmit(false);
    setIsLoadingSubmit(true);
    values = {
      username: getUserInfo().email,
      password: values.currentPassword,
      new_password: values.newPassword,
    };

    POST("/auth/password/user", values, defConfig())
      .then((r) => {
        setFlashMessage("Success Changed", "Your request successfuly changed.");
        setEnableSubmit(false);
        setIsLoadingSubmit(false);
        formik.resetForm();
      })
      .catch((err) => {
        setEnableSubmit(true);
        setIsLoadingSubmit(false);
        setFlashMessage(
          "Failed to Update",
          "Something went wrong. Please try again later.",
          false
        );
      });
  };
  return {
    initialValues,
    validationSchema,
    onSubmit,
    enableSubmit,
    isLoadingSubmit,
  };
};
export default useSecurityOrg;
