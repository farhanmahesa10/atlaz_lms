import React from "react";
import { useMyBookList } from "../../../services";
import MainLayout from "../../Layout/Mainlayout";
import MyBookListHero from "./MyBookListHero";
import MyBookListContent from "./MyBookListContent";
import { GlobalToast } from "../../atoms";
const MyBookListOrg = () => {
  const { breadCrumbData } = useMyBookList();
  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <GlobalToast />
      <MyBookListHero breadCrumbData={breadCrumbData} />
      <MyBookListContent />
    </MainLayout>
  );
};

export default MyBookListOrg;
