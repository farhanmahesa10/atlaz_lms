import React, { useEffect } from "react";
import MainLayout from "../../../Layout/Mainlayout";
import { useGradeOverview } from "../../../../services";
import { BreadCrumb } from "../../../atoms";
import { TableMasterGradeOverview, TableStudentGradeOverview, TableTeacherGradeOverview } from "../../../molecules";
import { Can } from "../../../../permission";

const GradeOverviewOrg = () => {
  const { breadcrumbsData } =
    useGradeOverview();

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
          <p className="h5 xl-h4 ">Grade Overview</p>
          <div className="rectangle w-64 bg-primary-500 h-2 "></div>
        </div>
        <div>
          <Can allowAccess="SUPERUSER,ADMINISTRATOR">
            <TableMasterGradeOverview />
          </Can>
          <Can allowAccess="TEACHER">
            <TableTeacherGradeOverview />
          </Can>
          <Can allowAccess="HEADMASTER,SCHOOLADMIN">
            HEADMASTER,SCHOOLADMIN
          </Can>
          <Can allowAccess="STUDENT">
            <TableStudentGradeOverview />
          </Can>
        </div>
      </div>

    </MainLayout>
  );
};

export default GradeOverviewOrg;
