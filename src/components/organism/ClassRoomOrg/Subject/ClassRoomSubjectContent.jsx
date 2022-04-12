import React from "react";
import { useClaassRoomContentSubject } from "../../../../services";
import { SubjectCard } from "../../../molecules";

const ClassRoomSubjectContent = () => {
  const { data } = useClaassRoomContentSubject();

  return (
    <div className="px-24 md-px-48 py-24">
      <div className="row">
        {data.map((r, i) => {
          return (
            <div className="mb-24 col-12 col-md-6 col-lg-4 col-xl-3">
              <SubjectCard image={r.image} title={r.title} desc={r.desc} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassRoomSubjectContent;
