import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const RedirectGoogleAuthenticated = (props) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = () => {
      fetch(process.env.REACT_APP_BASE_API_URL + "/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("login gagal");
        })
        .then((obj) => {
          setUser(obj.user);
          localStorage.setItem(
            process.env.REACT_APP_BASE_URL + "/accessToken",
            obj.token
          );
          props.setLoginStatus(true);
          navigate("/");
        })
        .catch((err) => navigate("/login"));
    };
    getUser();
  }, []);
  return <></>;
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedirectGoogleAuthenticated);
