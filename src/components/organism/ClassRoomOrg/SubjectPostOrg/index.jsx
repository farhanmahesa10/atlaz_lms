import React from "react";
import { useSubjectPost } from "../../../../services";
import MainLayout from "../../../Layout/Mainlayout";
import SubjectPostDashboard from "./SubjectPostDashboard";
import SubjectPostHero from "./SubjectPostHero";
import SubjectPostMember from "./SubjectPostMember";

const SubjectPostOrg = () => {
  const { section } = useSubjectPost();

  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <SubjectPostHero />
      {section === "dashboard" && <SubjectPostDashboard />}
      {section === "member" && <SubjectPostMember />}
    </MainLayout>
  );
};

export default SubjectPostOrg;
