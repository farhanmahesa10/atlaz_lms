import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Can } from "../../../Permission";

const NavbarContainer = (props) => {
  const { menus, settings, activeMenu, onLogout } = props;
  const navigate = useNavigate();
  const disPatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  return (
    <Container fluid className="m-0 pl-24 lg-pl-48 pt-0 pr-12 lg-pr-48">
      <Navbar.Brand
        className="pt-20 pb-24  m-0 position-relative "
        style={{ zIndex: 9 }}
      >
        <Link to="/">
          <img src="/images/logo.png" className=" d-none d-lg-flex " />
          <img src="/images/logo-icon.png" className=" d-flex d-lg-none w-32" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav cursor-pointer"
        style={{ border: "none" }}
      />

      <Nav className=" d-none d-lg-flex justify-content-center align-items-center position-absolute start-0 w-full ">
        {menus.map((r, i) => {
          if (r.shouldLogin) {
            if (!auth.isLogin) {
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
      <Nav
        className=" d-none d-lg-flex gap-3 position-relative"
        style={{ zIndex: 9 }}
      >
        {!auth.isLogin ? (
          <>
            <Link to="/login" className="">
              <button className="btn-outline px-25 font-xs">Login</button>
            </Link>

            <Link to="/register" className="p-0">
              <button className="btn-primary px-25 font-xs">Sign up</button>
            </Link>
          </>
        ) : (
          <>
            <div className="d-flex align-items-center cursor-pointer">
              <NotificationsNoneIcon className="text-neutral-400" />
              <p
                className="bg-danger fs-12 h-16 w-16 d-flex justify-content-center radius-p-100 align-items-center text-white  position-relative "
                style={{ top: "-8px", right: "12px" }}
              >
                1
              </p>
              <span className="text-secondary-400 ">|</span>
            </div>
            <div className="btn-group dropstart">
              <div
                type="button"
                className="cursor-pointer dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/images/product.png"
                  className="h-32 w-32  radius-p-100"
                />
              </div>
              <ul className="dropdown-menu bg-white p-14 radius-8">
                {settings.map((res, ind) => {
                  return (
                    <li className="hover-text-primary-500 cursor-pointer">
                      <Link
                        to={res.link}
                        className="px-12 nowrap d-flex align-items-start my-4 flex-column justify-content-start"
                      >
                        {res.label}
                        {res.activeTo === props.activeMenu && (
                          <div className="h-2 w-24 bg-primary-500"></div>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </Nav>
    </Container>
  );
};

const NormalMenu = (props) => {
  const { res } = props;
  return (
    <Can allowAccess={res.allowAccess}>
      <Link
        to={res.link}
        className="px-12 d-flex align-items-center flex-column justify-content-center"
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
  const { res, id } = props;
  return (
    <Can allowAccess={res.allowAccess}>
      <div className="btn-group dropdown px-12">
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
                className="pb-8 hover-text-primary-400 cursor-pointer"
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
