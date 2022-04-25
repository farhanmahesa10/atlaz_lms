import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
const MainHeaderNoMenu = () => {
  return (
    <nav
      className="h-64 bg-white d-flex justify-content-between  align-items-center position-fixed w-full"
      style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)", zIndex: "9" }}
    >
      <div className="w-full pl-48 d-flex justify-content-between">
        <img src="/images/logo.png" />
      </div>
      <Link to="/" className="pr-48">
        <CloseIcon />
      </Link>
    </nav>
  );
};

export default MainHeaderNoMenu;
