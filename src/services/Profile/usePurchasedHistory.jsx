import React from "react";

const usePurchasedHistory = () => {
  const tableInitialValues = {
    bookNameSearch: "",
    roleSearch: "",
    purchasedDateSearch: "",
    expiredDateSearch: "",
    statusSearch: "",
  };

  const tableHeader = [
    {
      name: "bookNameSearch",
      label: "Book Name",
      placeholder: "e.g. English Escalate 01",
      showSearch: true,
    },
    {
      name: "authorSearch",
      label: "Author",
      placeholder: "e.g. Atlaz",
      showSearch: true,
    },

    {
      name: "purchasedDateSearch",
      label: "Purchased Date",
      placeholder: "e.g. 1 Jan 2022",
      showSearch: true,
    },
    {
      name: "expiredDateSearch",
      label: "Expire Date",
      placeholder: "e.g. 1 Jan 2022",
      showSearch: true,
    },
    {
      name: "statusSearch",
      label: "Status",
      placeholder: "e.g. Active",
      showSearch: true,
    },
    {
      name: "openBookSearch",
      label: "Open Book",
      placeholder: "e.g. 1 Jan 2022",
      showSearch: false,
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
    },
    {
      nisn: "xxxxxxxxxxxxxxxx2",
      name: "User 01",
      role: "Student",
      class: "Class 01",
      academicYear: "2022/2023",
      subject: "English Play 01",
    },
    {
      nisn: "xxxxxxxxxxxxxxxx3",
      name: "User 01",
      role: "Student",
      class: "Class 01",
      academicYear: "2022/2023",
      subject: "English Play 01",
    },
  ];
  return { tableInitialValues, tableHeader, tableBody };
};

export default usePurchasedHistory;
