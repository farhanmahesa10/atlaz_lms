import React from "react";
import { Link } from "react-router-dom";
import NavToggler from "../../SVG/NavToggler";
const MainHeader = () => {
  return (
    <>
      <nav className=" sm-px-48 px-24 border-b-1 border-neutral-100 h-82 d-flex align-items-center justify-content-between">
        <div>
          <img src="/images/logo.png" alt="" className="d-none d-sm-block" />
          <img
            src="/images/logo-icon.png"
            alt=""
            className="d-block d-sm-none"
          />
        </div>
        <div>menu</div>
        <div className="">
          <div className="d-flex d-sm-none">
            <Link to="#">
              <NavToggler />
            </Link>
          </div>

          <ul className="d-none d-sm-flex list-style-none m-0  gap-24">
            <li>
              <Link
                to="/login"
                className="py-2 px-4 border-1 border-neutral-500 rounded"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="py-2 bg-primary-500 border-1 border-primary-500   px-4  rounded"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MainHeader;
