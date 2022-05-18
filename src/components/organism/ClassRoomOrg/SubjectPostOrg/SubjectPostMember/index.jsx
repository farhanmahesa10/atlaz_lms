import React from "react";
import { useSubjectPostMember } from "../../../../../services";
import { UserCard } from "../../../../molecules";

const SubjectPostMember = () => {
  const { data } = useSubjectPostMember();

  return (
    <div className="row mx-16 md-mx-48 mt-24 gx-0">
      <div className="col-12  ">
        <h6 className="md-h5">Teacher</h6>
        <div className="row mt-24">
          <div className="col-12 col-md-6 col-xl-4  mb-16">
            <UserCard
              variant="primary"
              name="Hisyam Halimi"
              nip="3174052607810013"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4  mb-16">
            <UserCard
              variant="primary"
              name="Hisyam Halimi"
              nip="3174052607810013"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4  mb-16">
            <UserCard
              variant="primary"
              name="Hisyam Halimi"
              nip="3174052607810013"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4  mb-16">
            <UserCard
              variant="primary"
              name="Hisyam Halimi"
              nip="3174052607810013"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4  mb-16">
            <UserCard
              variant="primary"
              name="Hisyam Halimi"
              nip="3174052607810013"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4  mb-16">
            <UserCard
              variant="primary"
              name="Hisyam Halimi"
              nip="3174052607810013"
            />
          </div>
        </div>
      </div>
      <div className="col-12 mt-48 ">
        <h6 className="md-h5">Students</h6>
        <div className="row mt-24">
          <div className="col-12 col-md-6 col-xl-4 mb-16">
            <UserCard
              variant="info"
              name="Uut Budiarto"
              nip="3174052607810013"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4 mb-16">
            <UserCard
              variant="info"
              name="Uut Budiarto"
              nip="3174052607810013"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4 mb-16">
            <UserCard
              variant="info"
              name="Uut Budiarto"
              nip="3174052607810013"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4 mb-16">
            <UserCard
              variant="info"
              name="Uut Budiarto"
              nip="3174052607810013"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4 mb-16">
            <UserCard
              variant="info"
              name="Uut Budiarto"
              nip="3174052607810013"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4 mb-16">
            <UserCard
              variant="info"
              name="Uut Budiarto"
              nip="3174052607810013"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4 mb-16">
            <UserCard
              variant="info"
              name="Uut Budiarto"
              nip="3174052607810013"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4 mb-16">
            <UserCard
              variant="info"
              name="Uut Budiarto"
              nip="3174052607810013"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4 mb-16">
            <UserCard
              variant="info"
              name="Uut Budiarto"
              nip="3174052607810013"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPostMember;
