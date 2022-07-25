import React, { useEffect, useState } from "react";
import {
  TeacherResourceLessonPlan,
  TeacherResourceTraining,
  TeacherResourceWorksheet,
} from "../../components/molecules";
import useGlobalFunction from "../GlobalFuntions/useGlobalFunction";

const useTeacherResource = () => {
  const { getUserInfo } = useGlobalFunction();
  const user = getUserInfo();

  const [TabBarData, SetTabBarData] = useState([])
 
  useEffect(() =>  {
    if(user.role <=5) {
      SetTabBarData([
        {
          name: "Lesson plan",
          component: <TeacherResourceLessonPlan />,
        },
        {
          name: "Teacher training",
          component: <TeacherResourceTraining />,
        },
        {
          name: "Worksheet",
          component: <TeacherResourceWorksheet />,
        },
      ])
    } else if(user.role === 7) {
      SetTabBarData([
        {
          name: "Lesson plan",
          component: <TeacherResourceLessonPlan />,
        },
      ])
    }
  }, [])
  
  return { TabBarData };
};

export default useTeacherResource;
