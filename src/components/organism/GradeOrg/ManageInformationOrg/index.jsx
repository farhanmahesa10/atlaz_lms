import React, { useEffect } from "react";
import MainLayout from "../../../Layout/Mainlayout";
import { useManageInformation } from "../../../../services";
import { BreadCrumb } from "../../../atoms";
import { TableTeacherManageInformation } from "../../../molecules";

const ManageInformationOrg = () => {
  const { breadcrumbsData } =
    useManageInformation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <div className="px-24 md-px-48">
        <div className="pt-16 d-none d-xl-block">
          <BreadCrumb data={breadcrumbsData} />
        </div>
        <div className="mb-40">
          <p className="h5 xl-h4 ">Grades Information</p>
          <div className="rectangle w-64 bg-primary-500 h-2 "></div>
        </div>
        <TableTeacherManageInformation />
      </div>

    </MainLayout>
  );
};

export default ManageInformationOrg;
