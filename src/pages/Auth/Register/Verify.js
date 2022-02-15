import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../../components/Layout/AuthLayout/Header";
const Verify = (props) => {
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
        props.setFlashMassage(
          true,
          "Account verification success!",
          r.data.message,
          true
        );
        navigate("/login");
      })
      .catch((err) => {
        props.setFlashMassage(
          false,
          "Account verification failed!",
          err.response.data.message,
          true
        );
        navigate("/login");
      });
  });

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
const mapStateToProps = (state) => {
  return {
    flashMessage: state.flashMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFlashMassage: (status, title, msg, show) =>
      dispatch({ type: "SET_FLASH_MESSAGE", status, title, msg, show }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
