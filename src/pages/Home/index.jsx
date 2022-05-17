import React, { useEffect } from "react";
import { HomeOrg } from "../../components/organism";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "CLEAR_AUTH_LOCAL" });
  }, []);

  return (
    <>
      <HomeOrg />
    </>
  );
};

export default Home;
