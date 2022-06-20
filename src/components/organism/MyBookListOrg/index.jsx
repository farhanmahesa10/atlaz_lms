import React from "react";
import { useMyBookList } from "../../../services";
import MainLayout from "../../Layout/Mainlayout";
import MyBookListHero from "./MyBookListHero";
import MyBookListContent from "./MyBookListContent";
import { GlobalToast } from "../../atoms";
const MyBookListOrg = () => {
  const {
    data,
    isLoading,
    category,
    keyword,
    handleCategoryChange,
    handleKeywordChange,
  } = useMyBookList();
  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <GlobalToast />
      <MyBookListHero />
      <MyBookListContent
        data={data}
        isLoading={isLoading}
        category={category}
        keyword={keyword}
        handleCategoryChange={handleCategoryChange}
        handleKeywordChange={handleKeywordChange}
      />
    </MainLayout>
  );
};

export default MyBookListOrg;
