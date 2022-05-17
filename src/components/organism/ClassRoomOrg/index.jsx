import React from "react";
import MainLayout from "../../Layout/Mainlayout";
import ClassRoomAcademic from "./ClassRoomAcademic";
import ClassRoomHero from "./ClassRoomHero";
const ClassRoomOrg = () => {
  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <div style={{ backgroundColor: "#F1F1F1" }}>
        <ClassRoomHero />
        <ClassRoomAcademic />
      </div>
    </MainLayout>
  );
};

export default ClassRoomOrg;
