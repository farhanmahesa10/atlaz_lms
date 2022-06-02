import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useGlobalFunction } from "../services";
const Authenticate = (props) => {
  const { getUserInfo } = useGlobalFunction();
  const user = getUserInfo();
  if (!user) {
    return <Navigate to="/login" />;
  }

  return props.children;
};

export default connect()(Authenticate);
