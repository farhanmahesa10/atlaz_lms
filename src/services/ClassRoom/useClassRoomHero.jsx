import React from "react";
import { ClassRoomHeroMain } from "../../assets/images";

const useClassRoomHero = () => {
  const banner = ClassRoomHeroMain;
  const breadcrumbsData = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "",
      label: "Classroom",
    },
  ];

  return { banner, breadcrumbsData };
};

export default useClassRoomHero;
