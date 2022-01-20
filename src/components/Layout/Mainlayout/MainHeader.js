import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import NavToggler from "../../SVG/NavToggler";
const MainHeader = () => {
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
        bg="secondary-200"
        className="border-b-1 m-0 p-0 border-secondary-300"
        expand="lg"
      >
        <Container fluid className="m-0 pl-24 lg-pl-72 pt-0 pr-24 lg-pr-48">
          <Navbar.Brand href="#" className="pt-20 pb-24  m-0 ">
            <img src="/images/logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav "
            style={{ border: "none" }}
          />
          <Nav className=" d-none d-lg-flex justify-content-center align-items-center">
            {menus.map((r) => {
              return (
                <Nav.Link href="/features" key={Math.random()}>
                  <Link to={r.link}> {r.label}</Link>
                </Nav.Link>
              );
            })}

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className=" d-none d-lg-flex">
            <Nav.Link>
              <Link
                to="/login"
                className="py-2 px-4 border-1 border-neutral-500 rounded"
              >
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/register"
                className="py-2 bg-primary-500 border-1 text-black hover-text-neutral-500 border-primary-500   px-4  rounded"
              >
                Sign up
              </Link>
            </Nav.Link>
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
                    <Nav.Link href="/features" key={Math.random()}>
                      <Link to={r.link}> {r.label}</Link>
                    </Nav.Link>
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
              <div className="d-flex justify-content-center">
                <Nav.Link>
                  <Link
                    to="/login"
                    className="py-2 px-4 border-1 border-neutral-500 rounded"
                  >
                    Login
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/register"
                    className="py-2 bg-primary-500 border-1 text-black hover-text-neutral-500 border-primary-500   px-4  rounded"
                  >
                    Sign up
                  </Link>
                </Nav.Link>
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
