import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Divider } from "../../atoms";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BookIcon from "@mui/icons-material/Book";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const MainHeader = (props) => {
  const [navBg, setNavBg] = useState(props.navbarBg);

  const [activeNavbar, setActiveNavbar] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    let isMounted = true;
    window.addEventListener(
      "scroll",
      () => {
        if (isMounted) {
          if (window.pageYOffset >= 50) {
            setNavBg("white");
          } else {
            setNavBg(props.navbarBg);
          }
        }
      },
      { passive: true }
    );

    let fullUrl = window.location.pathname;
    let activeUrlForMenu = fullUrl.split("/");
    setActiveNavbar(activeUrlForMenu[1]);

    return () => {
      isMounted = false;
    };
  }, []);

  const menus = [
    {
      icon: <DashboardIcon />,
      link: "/",
      label: "Dashboard",
      shouldLogin: true,
      activeTo: "",
    },
    {
      icon: <StorefrontIcon />,
      link: "/shop",
      label: "Shop",
      shouldLogin: true,
      activeTo: "shop",
    },
    {
      icon: <SchoolIcon />,
      link: "/classroom",
      label: "Classroom",
      shouldLogin: true,
      activeTo: "classroom",
    },
    {
      icon: <BookIcon />,
      link: "/mybooks",
      label: "My Books",
      shouldLogin: true,
      activeTo: "mybooks",
      childs: [
        {
          link: "/mybooks/1",
          label: "menu 1",
          shouldLogin: true,
          activeTo: "mybooks",
        },
        {
          link: "/mybooks/2",
          label: "menu 2",
          shouldLogin: true,
          activeTo: "mybooks",
        },
      ],
    },
    {
      icon: <GroupsIcon />,
      link: "/master",
      label: "Master Menu",
      shouldLogin: true,
      activeTo: "master",
      childs: [
        {
          link: "/master/1",
          label: "menu 1",
          shouldLogin: true,
          activeTo: "mybooks",
        },
        {
          link: "/master/2",
          label: "menu 2",
          shouldLogin: true,
          activeTo: "master",
        },
      ],
    },
  ];

  const settings = [
    {
      link: "/account-settings",
      label: "Account Settings",
      shouldLogin: true,
      activeTo: "account-settings",
    },
  ];

  const logout = () => {
    localStorage.removeItem(process.env.REACT_APP_BASE_URL + "/accessToken");
    props.setLoginStatus(false);
    navigate("/login");
  };

  return (
    <>
      <Navbar
        bg={`${props.navbarBg ? navBg : "bg-white "}`}
        className={`border-bottom m-0 p-0 border-secondary-300 position-fixed h-82  w-full ${props.navbarBg}`}
        expand="lg"
        style={{ zIndex: 9 }}
      >
        <Container fluid className="m-0 pl-24 lg-pl-48 pt-0 pr-12 lg-pr-48">
          <Navbar.Brand
            className="pt-20 pb-24  m-0 position-relative "
            style={{ zIndex: 9 }}
          >
            <Link to="/">
              <img src="/images/logo.png" className=" d-none d-lg-flex " />
              <img
                src="/images/logo-icon.png"
                className=" d-flex d-lg-none w-32"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav cursor-pointer"
            style={{ border: "none" }}
          />

          <Nav className=" d-none d-lg-flex justify-content-center align-items-center position-absolute start-0 w-full ">
            {menus.map((r, i) => {
              if (r.shouldLogin) {
                if (props.isLogin) {
                  return (
                    <React.Fragment key={i}>
                      {r.childs ? (
                        <div className="btn-group dropdown px-12">
                          <div
                            type="button"
                            className="cursor-pointer dropdown-toggle d-flex align-items-center"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {r.label}{" "}
                            <ArrowDropDownIcon className="text-neutral-400" />
                          </div>
                          <ul className="dropdown-menu bg-white p-14 radius-8">
                            {r.childs.map((child, index) => {
                              return (
                                <li
                                  className="pb-8 hover-text-primary-400 cursor-pointer"
                                  key={`${i}-${index}`}
                                >
                                  <Link to={child.link}>{child.label}</Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ) : (
                        <Link
                          to={r.link}
                          className="px-12 d-flex align-items-center flex-column justify-content-center"
                        >
                          {r.label}
                          {r.activeTo === activeNavbar && (
                            <div className="h-2 w-24 bg-primary-500"></div>
                          )}
                        </Link>
                      )}
                    </React.Fragment>
                  );
                }
              } else {
                return (
                  <React.Fragment key={i}>
                    <Link
                      to={r.link}
                      className="px-12 -flex align-items-center flex-column justify-content-center"
                    >
                      {r.label}
                      {r.activeTo === activeNavbar && (
                        <div className="h-2 w-24 bg-primary-500"></div>
                      )}
                    </Link>
                  </React.Fragment>
                );
              }
            })}
          </Nav>
          <Nav
            className=" d-none d-lg-flex gap-3 position-relative"
            style={{ zIndex: 9 }}
          >
            {!props.isLogin ? (
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
                    <li
                      className="hover-text-primary-500 cursor-pointer"
                      onClick={logout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </>
            )}
          </Nav>
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
                    if (props.isLogin) {
                      return (
                        <React.Fragment key={i}>
                          {!r.childs ? (
                            <Link
                              to={r.link}
                              className={`pt-8 mb-16 hover-bg-secondary-200 pl-24 radius-8 d-flex align-items-center text-neutral-300 
                            ${
                              r.activeTo === activeNavbar &&
                              "bg-secondary-400 text-neutral-500 font-bold"
                            }
                            `}
                            >
                              <div className="d-flex">
                                <span className="mr-24">{r.icon}</span>
                                <span>{r.label}</span>
                              </div>

                              {/* {r.activeTo === activeNavbar && (
                              <div className="h-2 w-24 bg-primary-500"></div>
                            )} */}
                            </Link>
                          ) : (
                            <Accordion
                              style={{ boxShadow: "none" }}
                              className="text-neutral-300 radius-16 "
                            >
                              <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className="pl-24 t"
                              >
                                <div className="d-flex">
                                  <span className="mr-24">{r.icon}</span>
                                  <span>{r.label}</span>
                                </div>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Suspendisse malesuada lacus
                                  ex, sit amet blandit leo lobortis eget.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
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
                          {r.activeTo === activeNavbar && (
                            <div className="h-2 w-24 bg-primary-500"></div>
                          )}
                        </Link>
                      </React.Fragment>
                    );
                  }
                })}
              </Nav>
              {!props.isLogin ? (
                <>
                  <Link to="/login" className="">
                    <button className="btn-outline px-25 font-xs mr-12">
                      Login
                    </button>
                  </Link>

                  <Link to="/register" className="p-0">
                    <button className="btn-primary px-25 font-xs">
                      Sign up
                    </button>
                  </Link>
                </>
              ) : (
                <Link to="/logout" className="p-0">
                  <button className="btn-primary px-25 font-xs">Logout</button>
                </Link>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.loginStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoginStatus: (value) => dispatch({ type: "SET_LOGIN_STATUS", value }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
