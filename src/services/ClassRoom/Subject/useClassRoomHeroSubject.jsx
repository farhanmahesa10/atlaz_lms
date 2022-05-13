import React, { useEffect, useState } from "react";
import { ClassRoomHero1 } from "../../../assets/images";
import { useParams } from "react-router-dom";
import { defConfig, GET } from "../../../config/RestAPI";
const useClassRoomHeroSubject = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const params = useParams();

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
  useEffect(() => {
    getClass();
  }, []);
  const getClass = () => {
    GET("/client/classrooms/" + params.classId, defConfig())
      .then((r) => {
        setData(r.data.classlist);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };
  return { data, banner, breadcrumbsData };
};

export default useClassRoomHeroSubject;
