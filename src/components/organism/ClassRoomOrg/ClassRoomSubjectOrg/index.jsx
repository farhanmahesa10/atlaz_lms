import React from "react";
import MainLayout from "../../../Layout/Mainlayout";
import ClassRoomSubjectContent from "./ClassRoomSubjectContent";
import ClassRoomSubjectHero from "./ClassRoomSubjectHero";
const ClassRoomSubjectOrg = () => {
  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <ClassRoomSubjectHero />
      <ClassRoomSubjectContent />
    </MainLayout>
  );
};

export default ClassRoomSubjectOrg;
