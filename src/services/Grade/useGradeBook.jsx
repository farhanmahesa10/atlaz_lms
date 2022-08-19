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
    setDataGradeBook([])
    let userRoleName = roles
      .find((r) => r.level === user.role)
      .name.toLowerCase();
    if (userRoleName === 'student') {
      setBreadcrumbsData(breadcrumbsDataStudent)
    }

    let endpoint = ''
    if (userRoleName === 'student') {
      endpoint = `/report/student/student_detail?classlistId=${idClass}&subjectId=${idSubject}`
    } else if (userRoleName === 'teacher') {
      endpoint = `/report/teacher/student_detail?classlistId=${idClass}&subjectId=${idSubject}&student=${id}`
    }

    GET(endpoint, defConfig())
      .then(res => {
        setDataStudent({
          name: res.data.student?.name,
          detail: `${res.data.school?.name} - ${res.data.subject?.name}`,
        })
        console.log(res.data)
        setDataGradeBook(res.data)

        let newDetailAvg = []
        res.data.lessons?.map(res1 => {
          let avgLessons = 0
          let totalScore = 0
          let countSubtopics = 0
          res1.topics?.map(res2 => {
            res2.subtopics?.map(res3 => {
              let scoreGrades = 0
              res3.timelines?.map(res4 => {
                if (res4.grades.length > 0 && res4.grades[0].score) {
                  if (res4.grades[0].score > scoreGrades) {
                    scoreGrades = res4.grades[0].score
                  }
                }
              })
              totalScore += scoreGrades
              countSubtopics += 1
            })
          })
          if (totalScore > 0) {
            avgLessons = totalScore / countSubtopics
          }
          newDetailAvg.push({
            lesson: res1.name,
            average: avgLessons
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