import React from "react";
import PersonIcon from "@mui/icons-material/Person";
const UserCard = (props) => {
  const { variant, name, nip } = props;

  return (
    <div
      className={`w-full border border-${variant}-500 bg-${variant}-100 h-64 radius-8 `}
    >
      <div className="px-16 py-8 d-flex align-items-center ">
        <div
          className={`h-48 w-48 bg-${variant}-200 d-flex justify-content-center align-items-center radius-p-100 mr-18`}
        >
          <PersonIcon className={`text-${variant}-500`} />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="mt-4 font-xs text-neutral-400">{nip}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
