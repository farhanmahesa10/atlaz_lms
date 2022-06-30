import React, { useEffect } from "react";
import MainLayout from "../../../Layout/Mainlayout";
import { useGradeDetail } from "../../../../services";
import { BreadCrumb } from "../../../atoms";
import { TableMasterGradeDetail, TableTeacherGradeDetail } from "../../../molecules";
import { Can } from "../../../../permission";

const GradeDetailOrg = () => {
  const { breadcrumbsData } =
    useGradeDetail();

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
          <p className="h5 xl-h4 ">Grade Detail</p>
          <div className="rectangle w-64 bg-primary-500 h-2 "></div>
        </div>
        <div>
          <Can allowAccess="SUPERUSER,ADMINISTRATOR">
            <TableMasterGradeDetail />
          </Can>
          <Can allowAccess="TEACHER">
            <TableTeacherGradeDetail />
          </Can>
          <Can allowAccess="HEADMASTER,SCHOOLADMIN">
            HEADMASTER,SCHOOLADMIN
          </Can>
          <Can allowAccess="STUDENT">
            STUDENT
          </Can>
        </div>
      </div>

    </MainLayout>
  );
};

export default GradeDetailOrg;
