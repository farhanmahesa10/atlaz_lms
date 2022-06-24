import React, { useEffect, useRef, useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ClassRoomHero2 } from "../../../../assets/images";
import { ClassRoomHero3 } from "../../../../assets/images";
import AcademicCard from "../../Cards/AcademicCard";
import Slider from "react-slick";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
const ClassListTeacherDashboard = (props) => {
  const { isLoading, data } = props;
  const [domeWidth, setdDomeWidth] = useState(1);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: data.length > 1 ? 2 : 1,
    slidesToScroll: data.length > 1 ? 2 : 1,
    variableWidth: true,
  };

  const slickRef = useRef();
  const domeRef = useRef();
  const handleNextClick = () => {
    slickRef.current.slickNext();
  };

  const handlePrevClick = () => {
    slickRef.current.slickPrev();
  };

  useEffect(() => {
    setdDomeWidth(domeRef.current.clientWidth);
    window.addEventListener("resize", () => {
      setdDomeWidth(domeRef.current.clientWidth);
    });
  }, []);

  return (
    <div className="border border-secondary-500 h-p-98 radius-14">
      <div className="py-24 px-32">
        <div className="d-flex justify-content-between" ref={domeRef}>
          <h5>My Class List</h5>
          <div className="d-flex align-items-center text-primary-500">
            <NavigateBeforeIcon
              className="mr-16 cursor-pointer"
              onClick={handlePrevClick}
            />
            <NavigateNextIcon
              className="cursor-pointer"
              onClick={handleNextClick}
            />
          </div>
        </div>
        <div className="mt-24 w-full ">
          {isLoading ? (
            <Loading />
          ) : (
            <Slider {...settings} ref={slickRef}>
              {data.map((r, i) => {
                return (
                  <div className="" key={r._id}>
                    <div className={`px-8 w-${Math.round(domeWidth / 2 - 20)}`}>
                      <Link to={`/classroom/class/${r._id}`} className="w-full">
                        <AcademicCard
                          className={"h-152 xl-h-219"}
                          bgImage={r.banner.image}
                          title={r.name}
                          desc={`Academic Year ${r.academicYear}`}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="row">
      <div className="col-6">
        <Skeleton className="w-full h-152 xl-h-219" />
      </div>
      <div className="col-6">
        <Skeleton className="w-full h-152 xl-h-219" />
      </div>
    </div>
  );
};
export default ClassListTeacherDashboard;
