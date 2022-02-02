import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

const MainLayout = (props) => {
  return (
    <>
      <div className="d-flex flex-column " style={{ minHeight: "100vh" }}>
        <MainHeader navbarBg={props.navbarBg} />
        <main className="flex-shrink-0 mb-128  justify-content-center ">
          {props.beforeChildren}
          <div className="row gx-0 justify-content-center">
            <div style={{ maxWidth: "1440px" }} className="">
              {props.children}
            </div>
          </div>
        </main>

        <MainFooter />
      </div>
    </>
  );
};

export default MainLayout;
