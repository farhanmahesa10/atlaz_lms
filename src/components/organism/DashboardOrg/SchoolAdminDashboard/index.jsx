import React from "react";
import { useSchoolAdminDashboard } from "../../../../services";
import MainLayout from "../../../Layout/Mainlayout";
import {
  TableSchoolAdminDashboard,
  HeadSchoolAdminDashboard,
} from "../../../molecules";
const SchoolAdminDashboard = () => {
  const { tableInitialValues, tableHeader, tableBody } =
    useSchoolAdminDashboard();

  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <div className="mt-32">
        <div className="px-24 md-px-48">
          <HeadSchoolAdminDashboard />
        </div>
      </div>
      <div className="mt-24">
        <div className="px-24 md-px-48">
          <TableSchoolAdminDashboard
            initialValues={tableInitialValues}
            tableHeader={tableHeader}
            tableBody={tableBody}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default SchoolAdminDashboard;
