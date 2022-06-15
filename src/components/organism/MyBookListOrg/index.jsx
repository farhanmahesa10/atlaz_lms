import React from "react";
import { useMyBookList } from "../../../services";
import MainLayout from "../../Layout/Mainlayout";
import MyBookListHero from "./MyBookListHero";
import MyBookListContent from "./MyBookListContent";
const MyBookListOrg = () => {
  const { breadCrumbData } = useMyBookList();
  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <MyBookListHero breadCrumbData={breadCrumbData} />
      <MyBookListContent />
    </MainLayout>
  );
};

export default MyBookListOrg;
