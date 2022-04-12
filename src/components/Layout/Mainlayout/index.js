import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

const MainLayout = (props) => {
  return (
    <>
      <div className="d-flex flex-column gx-0" style={{ minHeight: "100vh" }}>
        <MainHeader
          navbarBg={props.navbarBg ? props.navbarBg : "bg-secondary-100"}
        />
        <main className="flex-shrink-0 mb-128  justify-content-center mt-76">
          {props.beforeChildren}
          <div className="row gx-0 justify-content-center mt-7">
            <div className="">
              {props.maxWidth ? (
                <div className="row gx-0 justify-content-center">
                  <div style={{ maxWidth: props.maxWidth }}>
                    {props.children}
                  </div>
                </div>
              ) : (
                props.children
              )}
            </div>
          </div>
        </main>

        <MainFooter />
      </div>
    </>
  );
};

export default MainLayout;
