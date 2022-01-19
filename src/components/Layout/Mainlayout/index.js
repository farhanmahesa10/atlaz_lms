import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

const MainLayout = (props) => {
  return (
    <>
      <div className="d-flex flex-column " style={{ minHeight: "100vh" }}>
        <MainHeader />
        <main className="flex-shrink-0 mb-128 row justify-content-center">
          <div style={{ maxWidth: "1440px" }}>
            <div className="col">{props.children}</div>
          </div>
        </main>
        <MainFooter />
      </div>
    </>
  );
};

export default MainLayout;
