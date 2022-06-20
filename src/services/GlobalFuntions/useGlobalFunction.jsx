import React from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import moment from "moment";
const useGlobalFunction = () => {
  const dispatch = useDispatch();
  const getUserInfo = () => {
    let token = localStorage.getItem(
      process.env.REACT_APP_BASE_URL + "/accessToken"
    );
    if (token) {
      let decode = jwt_decode(token);
      let dateExp = moment(decode.exp);
      let dateNow = moment();
      if (dateNow.diff(dateExp) >= 0) {
        let roleData = getRoleData().find((r) => r.level === decode.role);
        decode = { ...decode, roleData };

        return decode;
      } else {
        localStorage.removeItem(
          process.env.REACT_APP_BASE_URL + "/accessToken"
        );
      }
    }
    return false;
  };

  const getRoleData = () => {
    return [
      {
        name: "SUPERUSER",
        title: "Super User",
        level: 1,
      },
      {
        name: "ADMINISTRATOR",
        title: "Adminsitrator",
        level: 2,
      },
      {
        name: "HEADMASTER",
        title: "Headmaster",
        level: 3,
      },
      {
        name: "SCHOOLADMIN",
        title: "School Admin",
        level: 4,
      },
      {
        name: "TEACHER",
        title: "Teacher",
        level: 5,
      },
      {
        name: "STUDENT",
        title: "Student",
        level: 6,
      },
      {
        name: "PUBLIC",
        title: "Public",
        level: 7,
      },
    ];
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);

    dispatch({
      type: "SET_FLASH_MESSAGE",
      status: true,
      title: "Link copied",
      msg: "This link copied to your clipboard",
      show: true,
      isRedirecterToast: false,
    });
  };

  const setFlashMessage = (title, message, status = true) => {
    dispatch({
      type: "SET_FLASH_MESSAGE",
      status: status,
      title: title,
      msg: message,
      show: true,
      isRedirecterToast: true,
    });
  };
  return { getUserInfo, getRoleData, copyToClipboard, setFlashMessage };
};

export default useGlobalFunction;
