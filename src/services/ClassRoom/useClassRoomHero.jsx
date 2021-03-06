import React, { useEffect, useState } from "react";
import { ClassRoomHeroMain } from "../../assets/images";
import { defConfig, GET } from "../../config/RestAPI";

const useClassRoomHero = () => {
  const banner = ClassRoomHeroMain;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    GET("/client/classrooms/my_school", defConfig())
      .then((r) => {
        if (r.data) setData(r.data);
        // console.log(r);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);
  return { isLoading, data, banner };
};

export default useClassRoomHero;
