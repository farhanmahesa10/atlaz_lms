import React, { useEffect, useState } from "react";
import StarIcon from "../../../SVG/StarIcon";

const LearningBookDetail = () => {
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

  useEffect(() => {
    let str =
      "Lorem,;ipsum;dolor;sit;amet;consectetur;adipisicing;elit.;Asperiores;tempora;rerum;deleniti;alias;animi;consequuntur;impedit;aspernatur;quae;dolorum;repudiandae?";
    setSubjectFocus(str.split(";"));
  }, []);

  return (
    <div>
      <h3 className="h4 md-h3"> English Play 01</h3>

      <div className="d-flex align-items-center  ">
        <p className="font-sm md-font-normal  mr-8">Atlaz Belajar Bahasa</p>
        <div className="d-flex align-items-center">
          <StarIcon size="10" />
          <StarIcon size="10" />
          <StarIcon size="10" />
          <StarIcon size="10" />
          <StarIcon size="10" isHalf />
          <span className="fs-9">&nbsp; 5.0/5.0</span>
        </div>
      </div>
      <p className="mt-8">
        Up is opinion message manners correct hearing husband my. Disposing
        commanded dashwoods cordially depending at at. Its strangers who you
        certainty earnestly resources suffering she. Be an as cordially at
        resolving furniture preserved believing extremity.
      </p>

      <div className="mt-32">
        <div className="mb-16">
          <p className="h5 xl-h4 ">Subject Focus</p>
          <div className="rectangle w-64 bg-primary-500 h-2 "></div>
        </div>
        <div className="text-danger">
          {subjectFocus.map((r, i) => {
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

export default LearningBookDetail;
