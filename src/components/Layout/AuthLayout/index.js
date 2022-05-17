import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import Header from "./Header";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
const AuthLayout = (props) => {
  const flashSelector = useSelector((state) => state.flashMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    if (flashSelector.show === true) {
      if (flashSelector.isRedirecterToast === false) {
        toast.remove();
      }
      dispatch({
        type: "SET_FLASH_MESSAGE",
        status: flashSelector.status,
        title: flashSelector.title,
        msg: flashSelector.msg,
        show: false,
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Atlaz LMS {props.title ? " | " + props.title : ""}</title>
      </Helmet>
      <div className=" h-screen bg-auth-img">
        <Header hideBackButton={props.hideBackButton} />
        <div className="mb-104 ">{props.children}</div>
      </div>
    </>
  );
};

export default connect()(AuthLayout);
