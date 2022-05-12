import React from "react";
import AcademicCard from "../../molecules/Cards/AcademicCard";
import useClassRoomAcademic from "../../../services/ClassRoom/useClassRoomAcademic";
import { Divider } from "../../atoms";
import { Link } from "react-router-dom";
import { ClassroomAcademicLoading } from "../../molecules";

const ClassRoomAcademic = () => {
  const { data, isLoading, ClassRoomHero1 } = useClassRoomAcademic();

  return (
    <>
      {isLoading ? (
        <ClassroomAcademicLoading />
      ) : (
        <div className="bg-white radius-t-14 ">
          <div className="px-24 md-px-48 pt-16 md-pt-24">
            <div className="row ">
              {data.map((r, i) => {
                return (
                  <React.Fragment key={i}>
                    <Divider
                      text={"Academic Year" + r.academicYear}
                      parentClassName={"mb-23"}
                      textClassName={"px-4 text-neutral-300 font-xs "}
                    />
                    {r.classLists.map((res, ind) => {
                      return (
                        <Link
                          to={`/classroom/class/${res._id}`}
                          className="mb-24 col-12 col-md-6 col-lg-4 col-xl-3"
                          key={`${i}-${ind}`}
                        >
                          <AcademicCard
                            bgImage={res.image ? res.image : ClassRoomHero1}
                            title={res.name}
                            desc={"Academic Year" + r.academicYear}
                          />
                        </Link>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClassRoomAcademic;
