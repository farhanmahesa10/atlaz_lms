import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
const AuthLayout = (props) => {
  return (
    <div className="d-flex flex-column h-screen">
      <div>
        <Header />
      </div>

      <div className="d-sm-flex  container py-5 justify-content-center align-items-center text-center">
        {props.children}
      </div>
      <footer className="footer mt-auto py-3 bg-white text-center">
        <div className="" style={{ marginBottom: "91px" }}>
          <small>
            New to Atlaz?
            <Link
              to="/register"
              className={`text-warning text-decoration-none`}
            >
              &nbsp;Register
            </Link>
          </small>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
