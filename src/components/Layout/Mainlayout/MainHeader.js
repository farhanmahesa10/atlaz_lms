import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import NavToggler from "../../SVG/NavToggler";
const MainHeader = (props) => {
  const [navBg, setNavBg] = useState(props.navbarBg);

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
    return () => {
      isMounted = false;
    };
  }, []);

  const menus = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/tes/1",
      label: "tes 1",
    },
    {
      link: "/tes/1",
      label: "tes 2",
    },
    {
      link: "/tes/1",
      label: "tes 3",
    },
  ];

  return (
    <>
      <Navbar
        bg={`${props.navbarBg ? navBg : "bg-white"}`}
        className="border-bottom m-0 p-0 border-secondary-300 position-fixed h-82 bg-white w-full"
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
            {menus.map((r) => {
              return (
                <Link key={Math.random()} to={r.link} className="px-12">
                  {r.label}
                </Link>
              );
            })}
          </Nav>
          <Nav
            className=" d-none d-lg-flex gap-3 position-relative"
            style={{ zIndex: 9 }}
          >
            <Link to="/login" className="">
              <button className="btn-outline px-25 font-xs">Login</button>
            </Link>

            <Link to="/register" className="p-0">
              <button className="btn-primary px-25 font-xs">Sign up</button>
            </Link>
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
                {menus.map((r) => {
                  return (
                    <Link key={Math.random()} to={r.link} className="py-12">
                      {r.label}
                    </Link>
                  );
                })}
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className="d-flex justify-content-center gap-2">
                <Link to="/login" className="">
                  <button className="btn-outline px-25 font-xs">Login</button>
                </Link>

                <Link to="/register" className="p-0">
                  <button className="btn-primary px-25 font-xs">Sign up</button>
                </Link>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* <nav className=" sm-px-48 px-24 border-b-1 border-neutral-100 h-82 d-flex align-items-center justify-content-between">
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
      </nav> */}
    </>
  );
};

export default MainHeader;
