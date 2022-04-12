import React from "react";
import { ClassRoomHero1 } from "../../../assets/images";

const useClassRoomHeroSubject = () => {
  const banner = ClassRoomHero1;
  const breadcrumbsData = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/classroom",
      label: "Classroom",
    },
    {
      link: "",
      label: "Kelas IPA 1",
    },
  ];

  return { banner, breadcrumbsData };
};

export default useClassRoomHeroSubject;
