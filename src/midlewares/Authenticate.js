import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
const Authenticate = (props) => {
  useEffect(() => {
    let token = localStorage.getItem(
      process.env.REACT_APP_BASE_URL + "/accessToken"
    );

    if (token) {
      let decode = jwt_decode(token);
      if (new Date().getTime() > decode.exp) {
        props.setLoginStatus(true);
      }
    }
  }, []);
  return props.children;
};
const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setLoginStatus: (value) => dispatch({ type: "SET_LOGIN_STATUS", value }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);
