import React from "react";
import { useClassRoomHeroSubject } from "../../../../services";
import { BreadCrumb, ModalTrigger } from "../../../atoms";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import "./index.scss";
import { EditHeroModal } from "../../../molecules";
import { connect } from "react-redux";

const ClassRoomSubjectHero = () => {
  const { banner, breadcrumbsData } = useClassRoomHeroSubject();

  return (
    <>
      <EditHeroModal id="modalChangeHero" />
      <div
        style={{
          backgroundImage: `url("${banner}")`,
          backgroundColor: "rgba(0,0,0,0.7)",
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
              to="/classroom"
              className="d-flex align-items-center px-24 md-px-48 pt-24 md-pt-32 "
            >
              <ArrowBackIcon className="text-white fs-18" />
              <span className="ml-19 font-sm text-white">Back</span>
            </Link>
          </div>
          <div className="d-flex justify-content-between align-items-end px-24 md-px-48 pb-16 md-pb-24 ">
            <div className="">
              <p className="h4 md-h2 text-neutral-50">Kelas 1A IPA</p>
              <p className=" mt-8 text-neutral-50">Academic Year 2021/2022</p>
            </div>
            <ModalTrigger
              target="modalChangeHero"
              className="h-36 w-36 radius-8 d-flex justify-content-center align-items-center animation-widths mb-4 cursor-pointer "
              style={{ backgroundColor: "rgba(231, 237, 245,0.2)" }}
            >
              <div className="w-full d-flex align-items-center md-px-16 cursor-pointer ">
                <span
                  style={{ minWidth: "36px" }}
                  className=" d-flex justify-content-center  align-items-center"
                >
                  <ModeEditIcon className="text-white" />
                </span>
                <span
                  className="animation-controls text-white"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Change Background
                </span>
              </div>
            </ModalTrigger>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect()(ClassRoomSubjectHero);
