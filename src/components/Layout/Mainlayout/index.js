import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import MainHeaderNoMenu from "./MainHeaderNoMenu";
import { Helmet } from "react-helmet";
const MainLayout = (props) => {
  return (
    <>
      <Helmet>
        <title>Atlaz LMS {props.title ? " | " + props.title : ""}</title>
      </Helmet>
      <div className="d-flex flex-column gx-0" style={{ minHeight: "100vh" }}>
        {!props.navNoMenu ? (
          <MainHeader
            navbarBg={props.navbarBg ? props.navbarBg : "bg-secondary-100"}
          />
        ) : (
          <MainHeaderNoMenu
            redirectOnClose={props.redirectOnNavClose}
            isNeedConfirm={props.isNeedConfirm}
            title={props.title}
          />
        )}
        <main
          className={`flex-shrink-0 mb-128  justify-content-center mt-76 ${props.mainClassName}`}
        >
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
