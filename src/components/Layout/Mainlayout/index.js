import React, { useEffect } from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import MainHeaderNoMenu from "./MainHeaderNoMenu";
import { Helmet } from "react-helmet";
const MainLayout = (props) => {
  const { navbarBg, ...rest } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Atlaz LMS {props.title ? " | " + props.title : ""}</title>
      </Helmet>
      <div className="d-flex flex-column gx-0" style={{ minHeight: "100vh" }}>
        {!props.navNoMenu ? (
          <MainHeader navbarBg={props.navbarBg} />
        ) : (
          <MainHeaderNoMenu
            redirectOnClose={props.redirectOnNavClose}
            isNeedConfirm={props.isNeedConfirm}
            title={props.title}
            modalMessage={props.modalMessage}
            modalTitle={props.modalTitle}
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

        <MainFooter bg={props.footerBg} />
      </div>
    </>
  );
};
MainLayout.defaultProps = {
  navbarBg: "bg-white",
};
export default MainLayout;
