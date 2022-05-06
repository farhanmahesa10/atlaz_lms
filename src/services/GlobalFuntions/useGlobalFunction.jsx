import React from "react";
import jwt_decode from "jwt-decode";
const useGlobalFunction = () => {
  const getUserInfo = () => {
    let token = localStorage.getItem(
      process.env.REACT_APP_BASE_URL + "/accessToken"
    );
    if (token) {
      let decode = jwt_decode(token);
      if (new Date().getTime() > decode.exp) {
        return decode;
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

  return { getUserInfo, getRoleData };
};

export default useGlobalFunction;
