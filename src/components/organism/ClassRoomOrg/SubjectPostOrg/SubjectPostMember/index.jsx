import React from "react";
import { useSubjectPostMember } from "../../../../../services";
import { UserCard, SubjectPostMemberLoading } from "../../../../molecules";

const SubjectPostMember = () => {
  const { data, isLoading } = useSubjectPostMember();

  return (
    <div className="row mx-16 md-mx-48 mt-24 gx-0">
      <div className="col-12  ">
        <h6 className="md-h5">Teacher</h6>
        <div className="row mt-24">
          {isLoading ? (
            <SubjectPostMemberLoading />
          ) : (
            <>
              {data?.teachers?.map((r, i) => {
                if(r === null) return;
                return (
                  <div
                    className="col-12 col-md-6 col-xl-4  mb-16"
                    key={`T-${i}`}
                  >
                    <UserCard
                      variant="primary"
                      name={r.name}
                      nip={r.username}
                      avatar={r.avatar}
                    />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className="col-12 mt-48 ">
        <h6 className="md-h5">Students</h6>
        <div className="row mt-24">
          {isLoading ? (
            <SubjectPostMemberLoading />
          ) : (
            <>
              {data?.students?.map((r, i) => {
                if(r === null) return;
                return (
                  <div
                    className="col-12 col-md-6 col-xl-4  mb-16"
                    key={`T-${i}`}
                  >
                    <UserCard variant="info" name={r.name} nip={r.username} />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubjectPostMember;
