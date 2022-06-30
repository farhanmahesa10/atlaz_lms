import React, { useEffect, useState } from "react";

function useGradeDetail() {
  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      link: "/dashboard",
      label: "Dashboard",
    },
    {
      link: "/grade/grade-overview",
      label: "Grade Overview",
    },
    {
      link: "",
      label: "Grade Detail",
    },
  ]);

  return {
    breadcrumbsData
  }
}

export default useGradeDetail