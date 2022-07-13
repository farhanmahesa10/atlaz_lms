import React from "react";
import { Link } from "react-router-dom";
import { useSubjectPostHero } from "../../../../services";
import { BreadCrumb, Divider } from "../../../atoms";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import { SubjectPostHeroLoading } from "../../../molecules";
import { Can } from "../../../../permission";
const SubjectPostHero = () => {
  const {
    banner,
    breadcrumbsData,
    navMenu,
    classId,
    subjectId,
    section,
    data,
    isLoading,
  } = useSubjectPostHero();

  return (
    <>
      <div
        style={{
          backgroundImage: `url("${banner}")`,
          backgroundColor: "#7194CC",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          backgroundBlendMode: "darken",
        }}
        className="min-h-188 md-min-h-312  "
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
          {isLoading ? (
            <SubjectPostHeroLoading />
          ) : (
            <div className="px-16  md-px-48  pb-16 md-pb-24 xl-pb-32 d-md-flex align-items-center mt-48">
              <img
                src={data.imageCover}
                className="h-88 md-h-160 w-88 md-w-160 mr-16 xl-h-176 xl-w-176 radius-8"
                style={{ objectFit: "cover" }}
                alt=""
              />
              <div>
                <p className="font-sm-bold text-white font-sm md-h3 xl-h2">
                  {data.name}
                </p>
                <p className="text-neutral-400 mt-4 text-white font-xs md-font-medium mb-8 md-mb-20">
                  {data.author}
                </p>
                <div className="d-flex">
                  <Link
                    to={`/classroom/start-learning-view/${classId}/${subjectId}`}
                  >
                    <button className="btn btn-primary font-xs md-font-sm xl-font-normal">
                      Start Learning
                    </button>
                  </Link>
                  {/* <Can allowAccess="teacher">
                    <a href="" download="lesson.pdf" className="ml-8">
                      <button className="btn-secondary font-normal d-flex align-items-center ">
                        <DownloadIcon className="fs-20 mr-8" /> Lesson Plan
                      </button>
                    </a>
                  </Can> */}
                </div>
              </div>
            </div>
          )}
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
