import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { Divider } from "../../../atoms";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
const ActiveAssessmentPreview = (props) => {
  const { data } = props;
  return (
    <>
      <div
        className="bg-info-200 px-24 py-8 md-px-48 md-py-16 xl-py-24"
        style={{
          marginTop: "-20px",
        }}
      >
        <h5>Confirmation Assessment</h5>
        <p className="mt-8">
          Please confirm this section to activate & publush the assessment to
          your student, The submited data will appears in feed list.
        </p>
      </div>
      <div
        className="mx-24 my-24 md-mx-48"
        style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}
      >
        <div className="border border-secondary-500 radius-8 px-16 py-12 d-xl-flex align-items-center">
          <h6 className="text-neutral-200 w-90">Summary :</h6>
          <div className="row w-full ">
            <div className="col-12 col-xl-4 font-xs md-font-sm xl-font-normal pl-32 border-end border-secondary-500 d-flex align-items-center my-12">
              <MenuBookIcon className="fs-16 md-fs-18 xl-fs-20" />{" "}
              <span className="ml-16">English play 01</span>
            </div>
            <Divider height="h-1" parentClassName="d-xl-none" />
            <div className="col-12 col-xl-4 font-xs md-font-sm xl-font-normal pl-32 border-end border-secondary-500  d-flex align-items-center my-12">
              <LocalLibraryIcon className="fs-16 md-fs-18 xl-fs-20" />{" "}
              <span className="ml-16">Unit 1 - Meet My New Friends!</span>
            </div>
            <Divider height="h-1" parentClassName="d-xl-none" />
            <div className="col-12 col-xl-4 font-xs md-font-sm xl-font-normal pl-32  d-flex align-items-center my-12">
              <LabelImportantIcon className="fs-16 md-fs-18 xl-fs-20" />{" "}
              <span className="ml-16">Assessment</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-24 md-mx-48 mt-8">
        <div className="px-16 pt-8 pb-16 d-xl-flex">
          <h6 className="text-neutral-200 mb-16 mr-16">Class : </h6>
          <div>
            <span className="px-8 d-inline-block py-2 text-info-500 border border-info-500 radius-4 font-xs-medium md-font-sm-medium mr-8 mb-16 md-mr-16">
              Kelas 1A IPA
            </span>
            <span className="px-8 d-inline-block  py-2 text-info-500 border border-info-500 radius-4 font-xs-medium md-font-sm-medium mr-8 mb-16 md-mr-16">
              Kelas 1A IPA
            </span>
            <span className="px-8 d-inline-block  py-2 text-info-500 border border-info-500 radius-4 font-xs-medium md-font-sm-medium mr-8 mb-16 md-mr-16">
              Kelas 1A IPA
            </span>
            <span className="px-8 d-inline-block  py-2 text-info-500 border border-info-500 radius-4 font-xs-medium md-font-sm-medium mr-8 mb-16 md-mr-16">
              Kelas 1A IPA
            </span>
          </div>
        </div>
      </div>

      <div className="mx-24 md-mx-48">
        <Divider height="h-1" parentClassName="mb-48 d-block d-md-none" />
        <DateTimePreview />
        <Divider height="h-1" parentClassName="mb-48 d-block d-md-none" />
        <DateTimePreview />
        <Divider height="h-1" parentClassName="mb-48 d-block d-md-none" />
        <DateTimePreview />
      </div>
    </>
  );
};

const DateTimePreview = () => {
  return (
    <>
      <div className=" d-flex mb-48">
        <div className="h-44 d-none d-md-flex mr-24 bg-secondary-300 radius-p-100 w-44  align-items-center justify-content-center ml-16">
          <WysiwygIcon className="fs-20" />
        </div>
        <div className="row w-full">
          <div className="col-6 col-xl-3 mb-16">
            <p className="font-xs xl-font-sm text-neutral-300">Subtopic</p>
            <p className="font-xs-bold md-font-sm-bold xl-font-bold mt-8">
              Reading Assessment
            </p>
          </div>
          <div className="col-6 col-xl-3 mb-16">
            <p className="font-xs xl-font-sm text-neutral-300">
              Start date & time
            </p>
            <p className="font-xs-bold md-font-sm-bold xl-font-bold mt-8">
              11 Apr 2022, 10:00 AM
            </p>
          </div>
          <div className="col-6 col-xl-3 mb-16">
            <p className="font-xs xl-font-sm text-neutral-300">
              End date & time
            </p>
            <p className="font-xs-bold md-font-sm-bold xl-font-bold mt-8">
              11 Apr 2022, 10:10 AM
            </p>
          </div>
          <div className="col-6 col-xl-3 mb-16">
            <p className="font-xs xl-font-sm text-neutral-300">
              Total duration
            </p>
            <p className="font-xs-bold md-font-sm-bold xl-font-bold mt-8">
              0d 0hr 10min
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ActiveAssessmentPreview;
