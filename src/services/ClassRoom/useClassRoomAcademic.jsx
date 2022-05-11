import React, { useEffect, useState } from "react";
import {
  ClassRoomHero1,
  ClassRoomHero2,
  ClassRoomHero3,
} from "../../assets/images";
import { GET, defConfig } from "../../config/RestAPI";

const useClassRoomAcademic = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    GET("/client/classrooms", defConfig())
      .then((r) => {
        console.log(r);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setIsLoading(false);
      });
  });

  const [data, setData] = useState([
    {
      title: "Academic Year 2021/2022",
      academicData: [
        {
          title: "Kelas 1A IPA",
          image: ClassRoomHero1,
        },
        {
          title: "Kelas 1B IPA",
          image: ClassRoomHero2,
        },
        {
          title: "Kelas 1A IPS",
          image: ClassRoomHero3,
        },
        {
          title: "Kelas 1C IPS",
          image: ClassRoomHero2,
        },
      ],
    },
    {
      title: "Academic Year 2020/2021",
      academicData: [
        {
          title: "Kelas 1A IPA",
          image: ClassRoomHero3,
        },
      ],
    },
  ]);

  return { data, isLoading };
};

export default useClassRoomAcademic;
