import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "../../atoms";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Settings } from "@mui/icons-material";

import Can from "../../../Permission/Can";

const Sidebar = (props) => {
  const {
    menus,
    settings,
    activeMenu,
    showCanvas,
    setShowCanvas,
    pages,
    auth,
  } = props;

  const handleClose = () => setShowCanvas(false);
  const handleShow = () => setShowCanvas(true);
  return (
    <Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      className="radius-tl-8 radius-bl-8 w-306 "
      style={{ padding: "0" }}
      placement="end"
      show={showCanvas}
      onHide={handleClose}
    >
      {/* off canvas */}
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="px-0">
        <Divider lineColor="bg-secondary-300" />

        <Nav className="justify-content-end flex-grow-1 px-24 pt-24">
          {pages.map((r, i) => {
            if (r.shouldLogin === 0) {
              if (auth) {
                return "";
              }
            } else if (r.shouldLogin === 1) {
              if (!auth) {
                return "";
              }
            }
            return (
              <React.Fragment key={i}>
                {r.label && (
                  <p className="text-neutral-300 mb-16 ">{r.label}</p>
                )}
                {r.menus.map((res, ind) => {
                  return (
                    <React.Fragment key={`menus-${ind}`}>
                      {res.childs ? (
                        <AccordionMenu
                          res={res}
                          auth={auth}
                          activeMenu={activeMenu}
                          childs={res.childs}
                          id={`menus-${ind}`}
                        />
                      ) : (
                        <NormalMenu
                          res={res}
                          auth={auth}
                          activeMenu={activeMenu}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
            );
          })}
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

const NormalMenu = (props) => {
  const { res, auth } = props;

  if (res.shouldLogin === 0) {
    if (auth) {
      return "";
    }
  } else if (res.shouldLogin === 1) {
    if (!auth) {
      return "";
    }
  }

  return (
    <Can allowAccess={res.allowAccess}>
      <Link
        to={res.link}
        className={`pt-8 mb-16 hover-bg-secondary-200 pl-24 radius-8 d-flex align-items-center text-neutral-300 
                    ${
                      res.activeTo === props.activeMenu &&
                      "bg-secondary-400 text-neutral-500 font-bold"
                    }`}
      >
        <div className="d-flex">
          <span className="mr-24">{res.icon}</span>
          <span>{res.label}</span>
        </div>
      </Link>
    </Can>
  );
};

const AccordionMenu = (props) => {
  const { res, id, childs, auth } = props;
  if (res.shouldLogin === 0) {
    if (auth) {
      return "";
    }
  } else if (res.shouldLogin === 1) {
    if (!auth) {
      return "";
    }
  }
  return (
    <Can allowAccess={res.allowAccess}>
      <div
        className={`py-8 mb-16 hover-bg-secondary-200 cursor-pointer pl-24 radius-8 d-flex align-items-center text-neutral-300 
                      ${
                        res.activeTo === props.activeMenu &&
                        "bg-secondary-400 text-neutral-500 font-bold"
                      }
                      `}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded="false"
        aria-controls={id}
      >
        <p className="mr-24  d-flex ">{res.icon}</p>
        <p className="nowrap  d-flex ">{res.label}</p>{" "}
        <p className="text-end w-full pr-16  d-flex justify-content-end">
          <ArrowDropDownIcon />
        </p>
      </div>
      <div class="collapse" id={id}>
        <div class="card card-body">
          {childs.map((r, i) => {
            return (
              <React.Fragment key={`acc-${i}`}>
                <Link
                  to={r.link}
                  className={`pt-8 pb-8 ml-24 mb-16 hover-bg-secondary-200 pl-24 radius-8 d-flex align-items-center text-neutral-300 
                    ${
                      r.activeTo === props.activeMenu &&
                      "bg-secondary-400 text-neutral-500 font-bold"
                    }`}
                >
                  <span>{r.label}</span>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </Can>
  );
};
export default connect()(Sidebar);
