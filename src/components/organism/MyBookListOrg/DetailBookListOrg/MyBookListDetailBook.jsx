import React, { useEffect, useState } from "react";
import StarIcon from "../../../SVG/StarIcon";
import { LearningSubjectBookDetailLoading } from "../../../molecules";
const MyBookListDetailBook = (props) => {
  const { data, isLoading } = props;
  const [subjectFocus, setSubjectFocus] = useState([]);
  const [feature, setFeature] = useState([
    {
      title: "Cefr Level",
      subTitle: "A1",
      color: "#B3FFFF",
    },
    {
      title: "Completion",
      subTitle: "Certificate",
      color: "#B3FFFF",
    },
    {
      title: "Videos",
      subTitle: "Lecturer",
      color: "#B2FFCC",
    },
    {
      title: "Videos",
      subTitle: "Animation",
      color: "#D9B2FF",
    },
    {
      title: "Self Learning",
      subTitle: "Method",
      color: "#D9FFB2",
    },
    {
      title: "Online learning",
      subTitle: "Integration",
      color: "#FFB2D9",
    },
  ]);
  function createMarkup(data) {
    return { __html: data };
  }
  if (isLoading) {
    return <LearningSubjectBookDetailLoading />;
  }
  return (
    <div>
      <h3 className="h4 md-h3"> {data.name}</h3>

      <div className="d-flex align-items-center  ">
        <p className="font-sm md-font-normal  mr-8">{data.author}</p>
        <div className="d-flex align-items-center">
          <StarIcon size="10" />
          <StarIcon size="10" />
          <StarIcon size="10" />
          <StarIcon size="10" />
          <StarIcon size="10" isHalf />
          <span className="fs-9">&nbsp; 4.5/5.0</span>
        </div>
      </div>
      <p
        className="mt-8"
        dangerouslySetInnerHTML={createMarkup(data.overview)}
      ></p>

      <div className="mt-32">
        <div className="mb-16">
          <p className="h5 xl-h4 ">Subject Focus</p>
          <div className="rectangle w-64 bg-primary-500 h-2 "></div>
        </div>
        <div className="text-danger">
          {data.subjectFocus &&
            data.subjectFocus.split(";").map((r, i) => {
              return (
                <button
                  className="btn-outline text-neutral-500 font-xs xl-font-sm mb-8 mr-8"
                  key={i}
                >
                  {r}
                </button>
              );
            })}
        </div>
      </div>
      <div className="mt-56">
        <div className="mb-16">
          <p className="h5 xl-h4 ">Book Features </p>
          <div className="rectangle w-64 bg-primary-500 h-2 "></div>
        </div>
        <div className="  row  gx-0">
          {feature.map((r) => {
            return (
              <div
                className="col-6 col-md-4 col-xl-2 mb-16"
                key={Math.random()}
              >
                <div className="m-0 d-flex align-items-center ">
                  <div
                    className="w-8 h-8 radius-p-100 mr-12 "
                    style={{ backgroundColor: r.color }}
                  ></div>
                  <p className="text-neutral-200 m-0 font-size-12">{r.title}</p>
                </div>
                <div className="m-0 d-flex align-items-center ">
                  <div className="w-8 h-8 radius-p-100 mr-12"></div>
                  <p className="text-neutral-500 m-0  font-size-16 fw-medium">
                    {r.subTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyBookListDetailBook;
