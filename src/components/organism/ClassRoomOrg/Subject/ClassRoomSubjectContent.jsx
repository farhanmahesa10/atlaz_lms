import React from "react";
import { Link } from "react-router-dom";
import { useClaassRoomContentSubject } from "../../../../services";
import { ModalTrigger } from "../../../atoms";
import { SubjectCard } from "../../../molecules";
import { AddSubjectModal } from "../../../molecules";
const ClassRoomSubjectContent = () => {
  const { data } = useClaassRoomContentSubject();

  return (
    <>
      <AddSubjectModal id="addSubjectModal" />
      <div className="px-24 md-px-48 py-24">
        <ModalTrigger target="addSubjectModal">
          <button className="btn btn-primary font-normal">
            Add New Subject
          </button>
        </ModalTrigger>
        <div className="row mt-24">
          {data.map((r, i) => {
            return (
              <Link
                to="/classroom/1/2/dashboard"
                className="mb-24 col-12 col-md-6 col-lg-4 col-xl-3"
                key={i}
              >
                <SubjectCard image={r.image} title={r.title} desc={r.desc} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ClassRoomSubjectContent;
