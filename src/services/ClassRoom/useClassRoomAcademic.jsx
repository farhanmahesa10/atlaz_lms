import React, { useEffect, useState } from "react";
import {
  ClassRoomHero1,
  ClassRoomHero2,
  ClassRoomHero3,
} from "../../assets/images";
import { GET, defConfig } from "../../config/RestAPI";
import _, { values } from "lodash";
const useClassRoomAcademic = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    GET("/client/classrooms/my_classlist", defConfig())
      .then((r) => {
        let result = _.chain(r.data)
          // Group the elements of Array based on `color` property
          .groupBy("academicYear")
          // `key` is group's name (color), `value` is the array of objects
          .map((value, key) => {
            return {
              academicYear: key,
              classLists: value,
            };
          })
          .value();
        setData(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, ClassRoomHero1 };
};

export default useClassRoomAcademic;
