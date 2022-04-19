import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
const MainHeaderNoMenu = () => {
  return (
    <nav
      className="h-64 px-48 bg-white d-flex justify-content-between align-items-center position-fixed w-full"
      style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}
    >
      <div>
        <img src="/images/logo.png" />
      </div>
      <Link to="/">
        <CloseIcon />
      </Link>
    </nav>
  );
};

export default MainHeaderNoMenu;
