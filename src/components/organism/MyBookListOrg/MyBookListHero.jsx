import React from "react";

const MyBookListHero = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/images/mybooklist/mybooklistbg.png")`,
          backgroundSize: "cover",
          backgroundPositionX: " right ",
          backgroundPositionY: " center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-188 md-h-312  hero-classroom"
      >
        <div className=" d-flex flex-column justify-content-xl-between  justify-content-end h-full  ">
          <div className="d-none d-xl-block pl-48 pt-16">
            {/* <BreadCrumb data={breadcrumbsData} /> */}
          </div>

          <div className="pl-24 md-pl-48  pb-24 ">
            <p className="h5 md-h2 text-neutral-500">
              Go beyond <br className="d-lg-none" /> with your book list
            </p>
            <p className="text-neutral-400 font-xs">
              Only book can satisfying your curiosity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBookListHero;
