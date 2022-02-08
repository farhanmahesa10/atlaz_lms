import React from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const IsAuthenticated = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/search-result/sdsdsd");
  }, []);

  return <Navigate to="/" />;
};

export default IsAuthenticated;
