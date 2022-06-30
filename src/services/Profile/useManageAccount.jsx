import React, { useEffect, useState } from "react";
import { defConfig, GET, POST, PUT } from "../../config/RestAPI";
import useGlobalFunction from "../GlobalFuntions/useGlobalFunction";
import * as Yup from "yup";
import validator from "validator";
const useManageAccount = () => {
  const { setFlashMessage } = useGlobalFunction();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSubmitEmail, setIsLoadingSubmitEmail] = useState(false);

  const [isLoadingSubmitChangeName, setIsLoadingSubmitChangeName] =
    useState(false);

  const [enableSubmitEmail, setEnableSubmitEmail] = useState(false);

  const [initialValuesStudentGeneral, setInitialValuesStudentGeneral] =
    useState({
      fullname: "",
      nisn: "",
      role: "",
    });

  useEffect(() => {
    initUserData();
  }, []);

  const initUserData = () => {
    setIsLoading(true);
    GET("/users/profile", defConfig())
      .then((r) => {
        console.log(r);
        let newInit = {
          ...initialValuesStudentGeneral,
          fullname: r.data.name,
          nisn: r.data.username,
          role: r.data.role.title,
        };
        setData(r.data);
        setInitialValuesStudentGeneral(newInit);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleChangeName = (values, formik, canSubmit) => {
    if (canSubmit) {
      setIsLoadingSubmitChangeName(true);
      PUT("/users/profile", values, defConfig())
        .then((r) => {
          setFlashMessage(
            "Success Changed",
            "Your request successfuly changed."
          );

          setIsLoadingSubmitChangeName(false);
          initUserData();
        })
        .catch((err) => {
          setFlashMessage(
            "Failed to Update",
            "Something went wrong. Please try again later.",
            false
          );
          setIsLoadingSubmitChangeName(false);
          formik.resetForm();
        });
    }
  };

  const validationChangeEmail = Yup.object().shape({
    email: Yup.string().test("email", " ", function (val) {
      if (!validator.isEmail(val)) {
        setEnableSubmitEmail(false);
        return false;
      } else {
        setEnableSubmitEmail(true);
        return true;
      }
    }),
  });

  const handleSubmitEmail = (values, formik) => {
    setIsLoadingSubmitEmail(true);
    setEnableSubmitEmail(false);
    POST("/users/email", values, defConfig())
      .then((r) => {
        setIsLoadingSubmitEmail(false);

        setFlashMessage(
          "Check Your Email",
          "We send verification to your email."
        );
        formik.resetForm();
      })
      .catch((err) => {
        console.log("err", err.response);
        setFlashMessage(
          "Failed to Update",
          "Something went wrong. Please try again later.",
          false
        );
        setIsLoadingSubmitEmail(false);
      });
  };

  return {
    initialValuesStudentGeneral,
    data,
    isLoading,
    handleChangeName,
    isLoadingSubmitChangeName,
    validationChangeEmail,
    enableSubmitEmail,
    handleSubmitEmail,
    isLoadingSubmitEmail,
  };
};

export default useManageAccount;
