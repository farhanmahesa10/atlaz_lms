import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ClassRoomHero2 } from "../../../../assets/images";
import { ClassRoomHero3 } from "../../../../assets/images";
import AcademicCard from "../../Cards/AcademicCard";
const ClassListTeacherDashboard = () => {
  return (
    <div className="border border-secondary-500 h-p-98 radius-14">
      <div className="py-24 px-32">
        <div className="d-flex justify-content-between">
          <h5>My Class List</h5>
          <div className="d-flex align-items-center text-primary-500">
            <NavigateBeforeIcon className="mr-16 cursor-pointer" />
            <NavigateNextIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="mt-24">
          <div className="row">
            <div className="col-6 ">
              <AcademicCard
                className={"h-219"}
                bgImage={ClassRoomHero2}
                title={"KELAS 1A IPA"}
                desc={"Academic Year 2021/2022"}
              />
            </div>
            <div className="col-6">
              <AcademicCard
                className={"h-219"}
                bgImage={ClassRoomHero3}
                title={"KELAS 1A IPA"}
                desc={"Academic Year 2021/2022"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassListTeacherDashboard;
