import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

const MainLayout = (props) => {
  return (
    <>
      <div className="d-flex flex-column gx-0" style={{ minHeight: "100vh" }}>
        <MainHeader />
        <main className="flex-shrink-0 mb-128  justify-content-center mt-76">
          {props.beforeChildren}
          <div className="row gx-0 justify-content-center mt-7">
            <div className="">{props.children}</div>
          </div>
        </main>

        <MainFooter />
      </div>
    </>
  );
};

export default MainLayout;
