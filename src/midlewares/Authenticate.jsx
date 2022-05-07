import React, { useState } from "react";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
const Authenticate = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem(
      process.env.REACT_APP_BASE_URL + "/accessToken"
    );

    if (token) {
      let decode = jwt_decode(token);
      if (new Date().getTime() > decode.exp) {
        dispatch({
          type: "SET_AUTH",
          value: { isLogin: true, userInfo: decode },
        });
      }
    }
  }, []);
  return props.children;
};

export default connect()(Authenticate);
