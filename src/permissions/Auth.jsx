import React from "react";
import { useGlobalFunction } from "../services";

const Auth = (props) => {
  const { getUserInfo } = useGlobalFunction();
  const user = getUserInfo();
  if (user) {
    return props.children;
  } else {
    return "";
  }
};

export default Auth;
