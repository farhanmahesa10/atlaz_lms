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
  const [detailAverageGrade, setDetailAverageGrade] = useState()
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

    let endpoint = ''
    if(userRoleName === 'student') {
      endpoint = `/report/student/student_detail?classlistId=${idClass}&subjectId=${idSubject}`
    } else if(userRoleName === 'teacher') {
      endpoint = `/report/teacher/student_detail?classlistId=${idClass}&subjectId=${idSubject}&student=${id}`
    }

    GET(endpoint, defConfig())
      .then(res => {
        setDataStudent({
          name: res.data.student?.name,
          detail: `${res.data.school?.name} - ${res.data.subject?.name}`,
        })
        setDataGradeBook(res.data)
        
        let newDetailAvg = []
        res.data.lessons?.map(item => {
          let score = 0
          item.subtopics?.map(r => {
            score += parseFloat(r.score) ? parseFloat(r.score) : 0
          })
          newDetailAvg.push({
            lesson: item.name,
            average: item.subtopics.length > 0 ? score/item.subtopics.length : 0
          })
        })
        setDetailAverageGrade(newDetailAvg)

        let total = 0
        newDetailAvg.map(item => {
          total += parseFloat(item.average)
        })
        setAverageGrade({
          totalGrade: total,
          avgGrade: total/newDetailAvg.length
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
    detailAverageGrade,
    averageGrade,
  }
}

export default useGradeBook