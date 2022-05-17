import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LoginOrg } from "../../../components/organism";

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "CLEAR_AUTH_LOCAL" });
  }, []);
  return (
    <>
      <LoginOrg />
    </>
  );
};

export default Login;
