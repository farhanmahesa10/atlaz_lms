import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "../../atoms";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Settings } from "@mui/icons-material";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import Can from "../../../Permission/Can";
const Sidebar = (props) => {
  const { menus, settings, activeMenu, onLogout } = props;

  const auth = useSelector((state) => state.auth);

  return (
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      className="radius-tl-8 radius-bl-8 w-306 "
      style={{ padding: "0" }}
      placement="end"
    >
      {/* off canvas */}
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="px-0">
        <Divider lineColor="bg-secondary-300" />

        <Nav className="justify-content-end flex-grow-1 px-24">
          <p className="text-neutral-300 my-16">Menu</p>
          {menus.map((r, i) => {
            if (r.shouldLogin) {
              if (auth.isLogin) {
                return (
                  <React.Fragment key={i}>
                    {!r.childs ? (
                      <Can allowAccess={r.allowAccess}>
                        <Link
                          to={r.link}
                          className={`pt-8 mb-16 hover-bg-secondary-200 pl-24 radius-8 d-flex align-items-center text-neutral-300 
                  ${
                    r.activeTo === activeMenu &&
                    "bg-secondary-400 text-neutral-500 font-bold"
                  }
                  `}
                        >
                          <div className="d-flex">
                            <span className="mr-24">{r.icon}</span>
                            <span>{r.label}</span>
                          </div>
                        </Link>
                      </Can>
                    ) : (
                      <>
                        <div
                          className={`py-8 mb-16 hover-bg-secondary-200 pl-24 radius-8 d-flex align-items-center text-neutral-300 
                      ${
                        r.activeTo === activeMenu &&
                        "bg-secondary-400 text-neutral-500 font-bold"
                      }
                      `}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          <p className="mr-24  d-flex ">{r.icon}</p>
                          <p className="nowrap  d-flex ">{r.label}</p>{" "}
                          <p className="text-end w-full pr-16  d-flex justify-content-end">
                            <ArrowDropDownIcon />
                          </p>
                        </div>
                      </>
                    )}
                  </React.Fragment>
                );
              }
            } else {
              return (
                <React.Fragment key={i}>
                  <Link
                    to={r.link}
                    className="py-12 d-flex flex-column justify-content-center"
                  >
                    {r.label}
                    {r.activeTo === activeMenu && (
                      <div className="h-2 w-24 bg-primary-500"></div>
                    )}
                  </Link>
                </React.Fragment>
              );
            }
          })}
          <Divider height={`h-2`} parentClassName="mb-16" />
          <p className="text-neutral-300 mb-16">Setting</p>
          {settings.map((res, ind) => {
            if (res.shouldLogin) {
              if (auth.isLogin) {
                return (
                  <React.Fragment key={`settings-${ind}`}>
                    {!res.childs ? (
                      <Link
                        to={res.link}
                        className={`pt-8 mb-16 hover-bg-secondary-200 pl-24 radius-8 d-flex align-items-center text-neutral-300 
                    ${
                      res.activeTo === activeMenu &&
                      "bg-secondary-400 text-neutral-500 font-bold"
                    }
                    `}
                      >
                        <div className="d-flex">
                          <span className="mr-24">{res.icon}</span>
                          <span>{res.label}</span>
                        </div>
                      </Link>
                    ) : (
                      <>
                        <div
                          className={`py-8 mb-16 hover-bg-secondary-200 pl-24 radius-8 d-flex align-items-center text-neutral-300 
                        ${
                          res.activeTo === activeMenu &&
                          "bg-secondary-400 text-neutral-500 font-bold"
                        }
                        `}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          <p className="mr-24  d-flex ">{res.icon}</p>
                          <p className="nowrap  d-flex ">{res.label}</p>{" "}
                          <p className="text-end w-full pr-16  d-flex justify-content-end">
                            <ArrowDropDownIcon />
                          </p>
                        </div>
                      </>
                    )}
                  </React.Fragment>
                );
              }
            } else {
              return (
                <React.Fragment key={"settings-" + ind}>
                  <Link
                    to={res.link}
                    className="py-12 d-flex flex-column justify-content-center"
                  >
                    {res.label}
                    {res.activeTo === activeMenu && (
                      <div className="h-2 w-24 bg-primary-500"></div>
                    )}
                  </Link>
                </React.Fragment>
              );
            }
          })}
        </Nav>
        {!auth.isLogin ? (
          <>
            <Link to="/login" className="">
              <button className="btn-outline px-25 font-xs mr-12">Login</button>
            </Link>

            <Link to="/register" className="p-0">
              <button className="btn-primary px-25 font-xs">Sign up</button>
            </Link>
          </>
        ) : (
          <div
            className={`pt-8 mb-16 hover-bg-secondary-200 mx-24 pl-24 radius-8 d-flex align-items-center text-neutral-300 cursor-pointer
        `}
            onClick={onLogout}
          >
            <div className="d-flex">
              <span className="mr-24 ">
                <ExitToAppRoundedIcon />
              </span>
              <span>Logout</span>
              <br />
            </div>
          </div>
        )}
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};

export default connect()(Sidebar);
