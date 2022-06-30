import React from "react";
import { Link } from "react-router-dom";
import { Can } from "../../../../permission";
import { useClaassRoomContentSubject } from "../../../../services";
import { ModalTrigger } from "../../../atoms";
import {
  SubjectCard,
  ClassroomSubjectContentLoading,
} from "../../../molecules";
import { AddSubjectModal } from "../../../molecules";
const ClassRoomSubjectContent = () => {
  const { isLoading, subjects, subjectListModal, handleAddSubject, params } =
    useClaassRoomContentSubject();

  return (
    <>
      {isLoading ? (
        <ClassroomSubjectContentLoading />
      ) : (
        <>
          {/* sementara belom ada yg bisa dd subject */}
          <AddSubjectModal id="addSubjectModal" onSubmit={handleAddSubject} />
          <div className="px-24 md-px-48 py-24">
            {/* sementara belom ada yg bisa dd subject */}
            <Can allowAccess="TEACHER">
              <ModalTrigger
                target="addSubjectModal"
                data={{
                  subjectList: subjectListModal,
                  checkedSubject: subjects,
                }}
              >
                <button className="btn btn-primary font-normal">
                  Add New Subject
                </button>
              </ModalTrigger>
            </Can>
            <div className="row mt-24">
              {subjects.map((r, i) => {
                return (
                  <Link
                    to={`/classroom/assessment/${params.classId}/${r.subject._id}/dashboard`}
                    className="mb-24 col-12 col-md-6 col-lg-4 col-xl-3"
                    key={i}
                  >
                    <SubjectCard
                      image={r.subject.imageCover}
                      title={r.subject.name}
                      creator={r.subject.author}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ClassRoomSubjectContent;
