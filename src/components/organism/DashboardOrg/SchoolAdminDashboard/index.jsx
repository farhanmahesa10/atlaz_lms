import React, { useState, useMemo } from "react";
import { Table } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import {
  TableSchoolAdminDashboard,
  HeadSchoolAdminDashboard,
} from "../../../molecules";
const SchoolAdminDashboard = () => {
  const [filter, setFilter] = useState("");
  const [dataTable, setDataTable] = useState([]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Subject Name",
        accessor: "subjectName",
      },
      {
        Header: "",
        accessor: "select",
        disableSortBy: true,
        Header: () => <div className="w-full text-end">Select</div>,
      },
    ],
    []
  );
  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <div className="mt-32">
        <div className="px-24 md-px-48">
          <HeadSchoolAdminDashboard />
          {/* <Table columns={columns} data={dataTable} filter={filter} /> */}
        </div>
      </div>
    </MainLayout>
  );
};

export default SchoolAdminDashboard;
