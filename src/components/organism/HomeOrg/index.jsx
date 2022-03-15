import React from "react";
import HomeHead from "./HomeHead";
import HomeHowToPurchase from "./HomeHowToPurchase";
import HomeBookList from "./HomeBookList";
import HomeRedeem from "./HomeRedeem";
import HomeScore from "./HomeScore";
import HomeOurPartnership from "./HomeOurPartnership";
import HomeWhatTheySay from "./HomeWhatTheySay";
import MainLayout from "../../Layout/Mainlayout";
const HomeOrg = () => {
  return (
    <>
      <MainLayout beforeChildren={<HomeHead />} navbarBg="secondary-200">
        <HomeHowToPurchase />
        <HomeBookList />
        <HomeRedeem />
        <HomeScore />
        <HomeOurPartnership />
        <HomeWhatTheySay />
      </MainLayout>
    </>
  );
};

export default HomeOrg;
