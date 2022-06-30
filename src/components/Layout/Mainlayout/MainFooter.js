import React from "react";

const MainFooter = (props) => {
  return (
    <>
      <footer
        className={`footer gx-0 mt-auto py-24 ${
          props.bg ? props.bg : "bg-whtie"
        } border-top`}
      >
        <div className="container text-center ">
          <span className="px-4 py-2 fs-9 md-px-8 md-py-4 md-fs-12 border border-success-600 bg-success-100 text-success-600 font-xs radius-4 mr-8">
            Beta Version
          </span>
          <span className="text-neutral-200 font-xs md-font-sm">
            © 2022 PT Atlaz Belajar Bahasa. All Right Reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
