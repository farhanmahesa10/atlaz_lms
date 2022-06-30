import React, { useEffect } from "react";
import MainLayout from "../../../Layout/Mainlayout";
import { useGradeBook } from "../../../../services";
import { BreadCrumb } from "../../../atoms";
import { Can } from "../../../../permission";
import Header from "../../../../assets/images/grade/hero-grade.png"
import { TableMasterGradeBook } from "../../../molecules";

const GradeBookOrg = () => {
  const { breadcrumbsData, dataStudent } = useGradeBook();

  const styleHeader = {
    backgroundImage: `url("${Header}")`,
    backgroundRepeat: 'no-repeat',
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white" >
      <div className="px-24 md-px-48" style={styleHeader} >
        <div className="pt-16 d-none d-xl-block mb-32">
          <BreadCrumb data={breadcrumbsData} />
        </div>
        <div className="mb-64">
          <p className="text-primary-500 mb-4">Gradebook</p>
          <p className="text-neutral-50 h3 mb-8">{dataStudent?.name}</p>
          <p className="text-neutral-50 font-normal">{dataStudent?.detail}</p>
        </div>
        <div>
          <Can allowAccess="SUPERUSER,ADMINISTRATOR,HEADMASTER,SCHOOLADMIN,TEACHER,STUDENT">
            <TableMasterGradeBook />
          </Can>    
        </div>
      </div>
    </MainLayout>
  );
};

export default GradeBookOrg;