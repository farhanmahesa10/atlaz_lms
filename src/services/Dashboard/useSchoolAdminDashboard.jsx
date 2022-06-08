import React from "react";

const useSchoolAdminDashboard = () => {
  const tableInitialValues = {
    mainSearch: "",
    nisnSearch: "",
    roleSearch: "",
    classSearch: "",
    academicYearSearch: "",
    subjectSearch: "",
    subjectExpDateSearch: "",
    lastSearch: "",
    checkedId: [],
  };

  const tableHeader = [
    {
      name: "nisnSearch",
      label: "NISN/NIK",
      placeholder: "e.g. 123456",
    },
    {
      name: "nameSearch",
      label: "Name",
      placeholder: "e.g. User 01",
    },
    {
      name: "roleSearch",
      label: "Role",
      placeholder: "e.g. Public",
    },
    {
      name: "classSearch",
      label: "Class",
      placeholder: "e.g. Class 01",
    },
    {
      name: "academicYearSearch",
      label: "Academic Year",
      placeholder: "e.g. 2022/2023",
    },
    {
      name: "subjectSearch",
      label: "Subject",
      placeholder: "e.g. English",
    },
    {
      name: "subjectExpDateSearch",
      label: "Subject Exp Date",
      placeholder: "e.g. 1 Jan 2022",
    },
    {
      name: "lastUpdateSearch",
      label: "Last Update",
      placeholder: "e.g. 1 Jan 2022",
    },
  ];

  const tableBody = [
    {
      nisn: "xxxxxxxxxxxxxxxx1 ",
      name: "User 01 ",
      role: "Student",
      class: "Class 01",
      academicYear: "2022/2023",
      subject: "English Play 01",
      subjectExpDate: "7 Oct 2021, 02:20 AM",
      lastUpdate: "20 Jan 2022, 04:00 PM",
    },
    {
      nisn: "xxxxxxxxxxxxxxxx2",
      name: "User 01",
      role: "Student",
      class: "Class 01",
      academicYear: "2022/2023",
      subject: "English Play 01",
      subjectExpDate: "7 Oct 2021, 02:20 AM",
      lastUpdate: "20 Jan 2022, 04:00 PM",
    },
    {
      nisn: "xxxxxxxxxxxxxxxx3",
      name: "User 01",
      role: "Student",
      class: "Class 01",
      academicYear: "2022/2023",
      subject: "English Play 01",
      subjectExpDate: "7 Oct 2021, 02:20 AM",
      lastUpdate: "20 Jan 2022, 04:00 PM",
    },
  ];
  return { tableInitialValues, tableHeader, tableBody };
};

export default useSchoolAdminDashboard;
