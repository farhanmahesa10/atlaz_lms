import React, { useEffect, useState } from "react";
import useGlobalFunction from "../GlobalFuntions/useGlobalFunction";
import { useParams } from "react-router-dom";
import { defConfig, GET, POST } from "../../config/RestAPI";

function useGradeBook() {
  const { id, idSubject, idClass } = useParams()
  const { getUserInfo, getRoleData } = useGlobalFunction();
  const user = getUserInfo();
  const roles = getRoleData();

  const [isLoading, setIsLoading] = useState(true)
  const [dataStudent, setDataStudent] = useState()
  const [dataGradeBook, setDataGradeBook] = useState()
  const [averageGrade, setAverageGrade] = useState()

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
      link: `/grade/grade-overview/detail/${idSubject}/${idClass}`,
      label: "Grade Detail",
    },
    {
      link: "",
      label: <span className="text-white">Gradebook</span>,
    },
  ]);

  const [breadcrumbsDataStudent, setBreadcrumbsDataStudent] = useState([
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
      label: <span className="text-white">Gradebook</span>,
    },
  ]);

  const styleShadow = {
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)'
  }
  const styleTableTd = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100px"
  }

  useEffect(() => {
    setIsLoading(true)
    let userRoleName = roles
        .find((r) => r.level === user.role)
        .name.toLowerCase();
    if(userRoleName === 'student') {
      setBreadcrumbsData(breadcrumbsDataStudent)
    }

    GET(`/report/${userRoleName}/student_detail?classlistId=${idClass}&subjectId=${idSubject}&student=${id}`, defConfig())
      .then(res => {
        setDataStudent({
          name: res.data.student.name,
          detail: `${res.data.school.name} - ${res.data.subject.name}`,
        })
        setDataGradeBook(res.data)

        let totalGrade = 0
        res.data.lessons.map(item => {
          const count = parseFloat(item.lesson.average) ? parseFloat(item.lesson.average) : 0
          totalGrade += count 
        })
        setAverageGrade({
          totalGrade: totalGrade,
          avgGrade: totalGrade/res.data.lessons.length
        })
        setIsLoading(false)
      }
      )
      .catch(err => {
        setIsLoading(false)
        console.log('error', err)
      })
  }, [])

  return {
    isLoading,
    breadcrumbsData,
    styleShadow,
    styleTableTd,
    dataStudent,
    dataGradeBook,
    averageGrade,
  }
}

export default useGradeBook