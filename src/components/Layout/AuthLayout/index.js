import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const AuthLayout = (props) => {
  return (
    <div className="d-flex flex-column h-screen">
      <Header />
      <main class="flex-shrink-0  mb-5">
        <div class="container ">
          <div className="d-sm-flex  justify-content-center align-items-center text-center">
            {props.children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
