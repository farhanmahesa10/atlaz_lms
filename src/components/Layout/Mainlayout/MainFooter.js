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
          <span className="text-neutral-200">
            © 2022 PT Atlaz Belajar Bahasa. All Right Reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
