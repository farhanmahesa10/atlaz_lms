import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
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
      link: "/",
      label: "Home",
      shouldLogin: true,
      activeTo: "",
    },
    {
      link: "/shop",
      label: "Shop",
      shouldLogin: true,
      activeTo: "shop",
    },
    {
      link: "/classroom",
      label: "Classroom",
      shouldLogin: true,
      activeTo: "classroom",
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
        <Container fluid className="m-0 pl-24 lg-pl-72 pt-0 pr-12 lg-pr-48">
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
                      <Link
                        to={r.link}
                        className="px-12 d-flex align-items-center flex-column justify-content-center"
                      >
                        {r.label}
                        {r.activeTo === activeNavbar && (
                          <div className="h-2 w-24 bg-primary-500"></div>
                        )}
                      </Link>
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
              <button className="btn-primary px-25 font-xs" onClick={logout}>
                Logout
              </button>
            )}
          </Nav>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            {/* off canvas */}
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src="/images/logo.png" alt="" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {menus.map((r, i) => {
                  if (r.shouldLogin) {
                    if (props.isLogin) {
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
