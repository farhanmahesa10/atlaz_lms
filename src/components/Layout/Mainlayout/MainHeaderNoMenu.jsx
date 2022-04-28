import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { ModalLink, ModalTrigger } from "../../atoms";
const MainHeaderNoMenu = (props) => {
  return (
    <>
      <ModalLink id="navBack" />
      <nav
        className="h-64 bg-white d-flex justify-content-between  align-items-center position-fixed w-full"
        style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)", zIndex: "9" }}
      >
        <div className="w-full pl-24 md-pl-48 d-flex justify-content-between">
          <img src="/images/logo.png" className="d-none d-md-block" />
          <img src="/images/logo-icon.png" className="d-md-none h-32 w-32" />
        </div>

        {props.isNeedConfirm ? (
          <ModalTrigger
            target="navBack"
            className="pr-24 md-pr-48"
            data={{ redirect: props.redirectOnClose }}
          >
            <CloseIcon />
          </ModalTrigger>
        ) : (
          <Link to={props.redirectOnClose} className="pr-24 md-pr-48">
            <CloseIcon />
          </Link>
        )}
      </nav>
    </>
  );
};

export default MainHeaderNoMenu;
