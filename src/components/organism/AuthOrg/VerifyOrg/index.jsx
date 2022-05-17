import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../../Layout/AuthLayout/Header";
const VerifyOrg = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    let email = searchParams.get("e");
    let token = searchParams.get("t");
    axios
      .post(process.env.REACT_APP_BASE_API_URL + "/auth/verify", {
        email,
        token,
      })
      .then((r) => {
        dispatch({
          type: "SET_FLASH_MESSAGE",
          status: true,
          title: "Account verification success!",
          msg: r.data.message,
          show: true,
          isRedirecterToast: true,
        });
        navigate("/login");
      })
      .catch((err) => {
        dispatch({
          type: "SET_FLASH_MESSAGE",
          status: false,
          title: "Account verification failed!",
          msg: err.response.data.message,
          show: true,
          isRedirecterToast: true,
        });

        navigate("/login");
      });
  }, []);

  return (
    <div className="d-flex h-screen flex-column justify-content-between align-items-center">
      <Header hideBackButton></Header>
      <div className="text-center">
        <h2>Redirecting...</h2>
        <p>We bring you to www.hiatlaz.com. Please log in again after this.</p>
      </div>
      <div className="text-center pb-32">
        <p className="font-bold">Wait to long?</p>
        <p>Click here to redirect manually</p>
      </div>
    </div>
  );
};

export default connect()(VerifyOrg);
