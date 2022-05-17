import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const disPatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    localStorage.removeItem(process.env.REACT_APP_BASE_URL + "/accessToken");
    disPatch({ type: "SET_AUTH", value: { ...auth, isLogin: false } });
    navigate("/");
  });
  return "";
};

export default Logout;
