import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Can } from "../../../permission";
import { NavbarNotification } from "../../molecules";
import { Divider } from "../../atoms";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import { useGlobalFunction } from "../../../services";
const NavbarContainer = (props) => {
  const { menus, settings, activeMenu, setShowCanvas, auth } = props;
  const { getUserInfo } = useGlobalFunction();
  const user = getUserInfo();

  return (
    <Container
      fluid
      className="m-0 pl-12 md-pl-24 lg-pl-48 pt-0 pr-12 lg-pr-48"
    >
      <Navbar.Brand
        className="pt-20 pb-24   m-0 position-relative "
        style={{ zIndex: 9 }}
      >
        <Link to="/">
          <img src="/images/logo.png" className=" d-none d-lg-flex h-32" />
          <img src="/images/logo-icon.png" className=" d-flex d-lg-none w-32" />
        </Link>
      </Navbar.Brand>

      <Nav className=" d-none d-lg-flex justify-content-center align-items-center position-absolute start-0 w-full ">
        {menus.map((r, i) => {
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
              {r.childs ? (
                <DropDownMenu res={r} auth={auth} activeMenu={activeMenu} />
              ) : (
                <NormalMenu res={r} auth={auth} activeMenu={activeMenu} />
              )}
            </React.Fragment>
          );
        })}
      </Nav>
      <Nav className=" d-flex gap-3 position-relative" style={{ zIndex: 9 }}>
        <div className="d-flex align-items-center">
          {/* sementara dihilangkan dulu <NavbarNotification /> */}
          <div
            className="cursor-pointer d-lg-none text-neutral-400  d-flex align-items-center"
            onClick={() => {
              setShowCanvas(true);
            }}
          >
            <MenuIcon className="ml-16 mr-12 md-mr-32" />
          </div>
        </div>
        {!auth ? (
          <div className="d-none d-lg-block">
            <Link to="/login" className="mr-16">
              <button className="btn-outline px-25 font-xs">Login</button>
            </Link>

            <Link to="/register" className="p-0">
              <button className="btn-primary px-25 font-xs">Sign up</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="btn-group dropstart d-none d-lg-block">
              <div
                type="button"
                className="cursor-pointer dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user?.avatar || "/images/profile.png"}
                  className="h-32 w-32  radius-p-100"
                />
              </div>
              <ul className="dropdown-menu bg-white p-16 radius-8 w-318  top-35 right-8">
                <div className="w-full  ">
                  <div className="p-12 radius-8 bg-secondary-500 d-flex align-items-center">
                    <div className="w-40 h-40">
                      <img
                        src={user?.avatar || "/images/profile.png"}
                        className="h-40 w-40  radius-p-100"
                      />
                    </div>
                    <h6 className="ml-8"> {auth.name}</h6>
                  </div>
                  <div className="my-16">
                    <Divider />
                  </div>
                  {settings.map((r, i) => {
                    return (
                      <React.Fragment key={"settings-" + i}>
                        <Can allowAccess={r.allowAccess}>
                          <Link
                            to={r.link}
                            key={`setting-` + i}
                            className={`d-flex  mb-4 align-items-center p-8 hover-bg-secondary-200 cursor-pointer radius-4 ${
                              r.activeTo === props.activeMenu &&
                              "bg-secondary-200"
                            }`}
                          >
                            {r.icon}
                            <p className="font-sm ml-17">{r.label}</p>
                          </Link>
                        </Can>
                      </React.Fragment>
                    );
                  })}
                  <div className="mt-104">
                    <Divider />
                  </div>
                  <Link
                    to="/logout"
                    className="mt-16 p-8 d-flex align-items-center hover-bg-secondary-200 radius-4 hover-text-neutral-400"
                  >
                    <ExitToAppIcon className="text-neutral-400 pr-18" /> Logout
                  </Link>
                </div>
              </ul>
            </div>
          </>
        )}
      </Nav>
    </Container>
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
        className="px-24 d-flex align-items-center flex-column justify-content-center"
      >
        {res.label}
        {res.activeTo === props.activeMenu && (
          <div className="h-2 w-24 bg-primary-500"></div>
        )}
      </Link>
    </Can>
  );
};

const DropDownMenu = (props) => {
  const { res, id, auth } = props;
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
      <div className="btn-group dropdown px-24">
        <div
          type="button"
          className="cursor-pointer dropdown-toggle d-flex align-items-center"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {res.label}
          <ArrowDropDownIcon className="text-neutral-400" />
        </div>
        <ul className="dropdown-menu bg-white p-14 radius-8">
          {res.childs.map((child, index) => {
            return (
              <li
                className="pb-8 nowrap hover-text-primary-400 cursor-pointer"
                key={`${id}-${index}`}
              >
                <Link to={child.link}>{child.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Can>
  );
};
export default connect()(NavbarContainer);
