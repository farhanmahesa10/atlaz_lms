import React from "react";
import { useGlobalFunction } from "../services";

const Can = (props) => {
  // role available = SUPERUSER,ADMINISTRATOR,HEADMASTER,SCHOOLADMIN,TEACHER,STUDENT,PUBLIC

  const { allowAccess } = props;
  const { getUserInfo, getRoleData } = useGlobalFunction();

  const user = getUserInfo();
  const canAccess = allowAccess ? allowAccess.split(",") : null;

  const roles = getRoleData();

  if (canAccess) {
    if (user) {
      let userRoleName = roles
        .find((r) => r.level === user.role)
        .name.toLowerCase();

      let isUserHaveAccess = canAccess.find(
        (r) => r.toLowerCase() === userRoleName.toLowerCase()
      );
      if (isUserHaveAccess) {
        return props.children;
      }
    }
  } else {
    return props.children;
  }

  return "";
};

export default Can;
