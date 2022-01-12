import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const AuthLayout = (props) => {
  return (
    <div className="d-flex flex-column h-screen ">
      <Header />
      <div className="d-sm-flex h-full w-full justify-content-center align-items-center">
        <main class="flex-shrink-0 mb-4">
          <div class="container h-full ">
            <div className="d-sm-flex justify-content-center align-items-center text-center">
              {props.children}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
