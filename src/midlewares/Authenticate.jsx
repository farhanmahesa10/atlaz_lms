import React, { useState } from "react";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useGlobalFunction } from "../services";
const Authenticate = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { getUserInfo } = useGlobalFunction();
  const user = getUserInfo();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return props.children;
};

export default connect()(Authenticate);
