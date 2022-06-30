import React, { useEffect, useState } from "react";

function useGradeOverview() {
    const [breadcrumbsData, setBreadcrumbsData] = useState([
        {
          link: "/dashboard",
          label: "Dashboard",
        },
        {
          link: "",
          label: "Grade Overview",
        },
      ]);
      
  return {
    breadcrumbsData
  }
}

export default useGradeOverview