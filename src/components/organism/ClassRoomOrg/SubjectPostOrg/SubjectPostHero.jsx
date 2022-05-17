import React from "react";
import { Link } from "react-router-dom";
import { useSubjectPostHero } from "../../../../services";
import { BreadCrumb, Divider } from "../../../atoms";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const SubjectPostHero = () => {
  const { banner, breadcrumbsData, navMenu, classId, subjectId, section } =
    useSubjectPostHero();

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
        className="min-h-188 md-min-h-312  hero-classroom"
      >
        <div className=" d-flex flex-column justify-content-between   h-full  ">
          <div className="">
            <div className="d-none d-xl-block mt-16 mx-48 ">
              <BreadCrumb data={breadcrumbsData} activeColor="text-white" />
            </div>
            <Link
              to={`/classroom/class/${classId}`}
              className="d-flex align-items-center px-16 md-px-48 pt-24 md-pt-32 "
            >
              <ArrowBackIcon className="text-white fs-18" />
              <span className="ml-19 font-sm text-white">Back</span>
            </Link>
          </div>
          <div className="px-16 pt-16 md-px-48 md-pt-48 pb-16 md-pb-24 xl-pb-32 d-md-flex align-items-center mt-32">
            <img
              src="/images/product.png"
              className="h-88 md-h-160 w-88 md-w-160 mr-16 xl-h-176 xl-w-176 "
              alt=""
            />
            <div>
              <p className="font-sm-bold text-white font-sm md-h3 xl-h2">
                English Play 01
              </p>
              <p className="text-neutral-400 mt-4 text-white font-xs md-font-medium mb-8 md-mb-20">
                Kelas 1A IPA - 2020/2021
              </p>
              <Link to="/classroom/start-learning-view/1">
                <button className="btn btn-primary font-xs md-font-sm xl-font-normal">
                  Start Learning
                </button>
              </Link>
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
