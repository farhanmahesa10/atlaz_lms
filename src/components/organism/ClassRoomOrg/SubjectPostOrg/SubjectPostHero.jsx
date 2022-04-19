import React from "react";
import { Link } from "react-router-dom";
import { useSubjectPostHero } from "../../../../services";
import { BreadCrumb, Divider } from "../../../atoms";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const SubjectPostHero = () => {
  const { banner, breadcrumbsData, navMenu, section } = useSubjectPostHero();

  return (
    <>
      <div
        style={{
          // backgroundImage: `url("${banner}")`,
          backgroundColor: "#7194CC",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          backgroundBlendMode: "darken",
        }}
        className="h-188 md-h-312  hero-classroom"
      >
        <div className=" d-flex flex-column justify-content-between   h-full  ">
          <div className="">
            <div className="d-none d-xl-block mt-16 mx-48">
              <BreadCrumb data={breadcrumbsData} activeColor="text-white" />
            </div>
            <Link
              to="/classroom/1"
              className="d-flex align-items-center px-24 md-px-48 pt-24 md-pt-32 "
            >
              <ArrowBackIcon className="text-white fs-18" />
              <span className="ml-19 font-sm text-white">Back</span>
            </Link>
          </div>
          <div className="p-16 md-p-48 d-flex align-items-center">
            <img
              src="/images/product.png"
              className="h-52 md-h-96 w-52 md-w-96 mr-16 "
              alt=""
            />
            <div>
              <p className="h5 md-h2  text-white">English Play 01</p>
              <p className="text-neutral-400 mt-8 text-white font-sm md-font-medium">
                Uut Budiarto
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav className="h-40 md-h-56 bg-neutral-500 d-flex align-items-center px-16 md-px-48">
        {navMenu.map((r, i) => {
          return (
            <Link
              to={r.link}
              className="font-sm-medium md-font-medium text-white mr-32"
              key={i}
            >
              {r.label}
              {section === r.activeTo && (
                <Divider lineColor="bg-primary-500" height="h-2" />
              )}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default SubjectPostHero;
