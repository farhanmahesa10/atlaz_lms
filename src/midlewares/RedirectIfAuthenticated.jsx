import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const RedirectIfAuthenticated = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem(
      process.env.REACT_APP_BASE_URL + "/accessToken"
    );

    if (token) {
      let decode = jwt_decode(token);
      if (new Date().getTime() > decode.exp) {
        navigate("/");
      }
    }
  }, []);

  return props.children;
};

export default RedirectIfAuthenticated;
