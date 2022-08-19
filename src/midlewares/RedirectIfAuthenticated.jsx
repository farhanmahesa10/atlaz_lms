import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

const RedirectIfAuthenticated = (props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  if(searchParams.get("redirect")) {
    localStorage.setItem("redirect", atob(searchParams.get("redirect")));
  }

  useEffect(() => {
    let token = localStorage.getItem(
      process.env.REACT_APP_BASE_URL + "/accessToken"
    );
    if (token) {
      let decode = jwt_decode(token);      
      if (new Date().getTime() > decode.exp) {
        console.log('expired')
        navigate("/");
      }
      if (searchParams.get("redirect")) {
        let toLink = `${atob(searchParams.get("redirect"))}/login?key=${token}`
        window.location.href = toLink
      } 
    }
  }, []);

  return props.children;
};

export default RedirectIfAuthenticated;
