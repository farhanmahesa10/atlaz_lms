import React from "react";
import { useSubjectPost } from "../../../../services";
import MainLayout from "../../../Layout/Mainlayout";
import SubjectPostDashboard from "./SubjectPostDashboard";
import SubjectPostHero from "./SubjectPostHero";

const SubjectPostOrg = () => {
  const { navMenu } = useSubjectPost();

  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <SubjectPostHero />
      <SubjectPostDashboard />
    </MainLayout>
  );
};

export default SubjectPostOrg;
