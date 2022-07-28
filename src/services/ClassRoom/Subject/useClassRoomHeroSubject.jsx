import React, { useEffect, useState } from "react";
import { ClassRoomHero1 } from "../../../assets/images";
import { useNavigate, useParams } from "react-router-dom";
import { defConfig, GET, PUT } from "../../../config/RestAPI";
const useClassRoomHeroSubject = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isBgLoading, setIsBgLoading] = useState(true);
  const [data, setData] = useState({});
  const [bgData, setBgData] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  const banner = ClassRoomHero1;
  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      link: "/classroom",
      label: "Classroom",
    },
  ]);

  useEffect(() => {
    getClass();
    getBackground();
  }, []);

  const getBackground = () => {
    setIsBgLoading(true);
    GET("/client/classrooms/banner", defConfig()).then((r) => {
      console.log(r.data)
      setBgData(r.data);
      setIsBgLoading(false);
    });
  };

  const getClass = () => {
    setIsLoading(true);
    GET("/client/classrooms/" + params.classId, defConfig())
      .then((r) => {
        let newBread = [...breadcrumbsData];
        newBread.push({
          link: "",
          label: r.data.classlist.name,
        });
        setBreadcrumbsData(newBread);
        setData(r.data.classlist);
        setIsLoading(false);
      })
      .catch((err) => {
        navigate("/page-not-found");
        setIsLoading(false);
      });
  };

  const handleSubmitChangeBg = (values) => {
    PUT("/client/classrooms/banner/" + params.classId, values, defConfig())
      .then((r) => {
        getClass();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return {
    data,
    banner,
    breadcrumbsData,
    isLoading,
    bgData,
    isBgLoading,
    handleSubmitChangeBg,
  };
};

export default useClassRoomHeroSubject;
