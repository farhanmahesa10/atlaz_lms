import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { connect, useNavigate } from "react-router-dom";
import { useGlobalFunction } from "../services";

const CheckRole = (props) => {
  // role available = SUPERUSER,ADMINISTRATOR,HEADMASTER,SCHOOLADMIN,TEACHER,STUDENT,PUBLIC

  const { allowAccess } = props;
  const { getUserInfo, getRoleData } = useGlobalFunction();
  const navigate = useNavigate();
  const user = getUserInfo();

  const canAccess = allowAccess.split(",");

  const roles = getRoleData();

  useEffect(() => {
    if (user) {
      let userRoleName = roles
        .find((r) => r.level === user.role)
        .name.toLowerCase();

      let isUserHaveAccess = canAccess.find(
        (r) => r.toLowerCase() === userRoleName.toLowerCase()
      );

      if (!isUserHaveAccess) {
        navigate("/");
      }
    }
  }, []);

  return props.children;
};

export default CheckRole;
