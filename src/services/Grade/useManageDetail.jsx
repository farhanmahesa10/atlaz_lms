import React, { useEffect, useState } from "react";
import useGlobalFunction from "../GlobalFuntions/useGlobalFunction";
import { useParams } from "react-router-dom";
import { defConfig, GET, POST } from "../../config/RestAPI";

function useManageDetail() {
  const { id, idClass, idSubject } = useParams()
  const [ isAuto, setIsAuto ] = useState(true)
  const { setFlashMessage } = useGlobalFunction()
  const [isLoading, setIsLoading] = useState(true)

  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      link: "/dashboard",
      label: "Dashboard",
    },
    {
      link: "/grade/manage-grades",
      label: "Manage Grades",
    },
    {
      link: `/grade/manage-grades/information/${idSubject}/${idClass}`,
      label: "Grades Information",
    },
    {
      link: "",
      label: "Grades Details",
    },
  ]);

  const [tableOption, setTableOption] = useState([
    {
      name: 'student',
      title: 'Student',
      value: true,
      icon: 'Person',
      backgroundIcon: '#E6FFF6',
      colorIcon: '#28FDB0',
      detail: 'Student Name here'
    },
    {
      name: 'lesson',
      title: 'Lesson',
      value: true,
      icon: 'LocalLibrary',
      backgroundIcon: '#E6FCFF',
      colorIcon: '#28E3FD',
      detail: 'Unit 1 - Unit Name here'
    },
    {
      name: 'assessment',
      title: 'Assssment',
      value: true,
      icon: 'Assessment',
      backgroundIcon: '#E6F3FF',
      colorIcon: '#2897FD',
      detail: 'Reading Assessment'
    }
  ])
  const borderStyle = { 
    border: '2px solid #E1E9F3' 
  } 
  const instructionStyle = {
    border: '2px solid #E1E9F3',
    overflowY: 'scroll',
  }
  
  const [initialGrades, setInitialGrades] = useState()
  const [initialValues1, seInitialValues1] = useState({
    remark: []
  })
  const [initialValues2, seInitialValues2] = useState({
      totalGrades: ''
  })

  const [styleRemark, setStyleRemark] = useState([])
  const [finalGrades, setFinalGrades] = useState(null)
  const [instruction, setInstruction] = useState()
  const [uploaded, setUploaded] = useState('')

  const changeRemark = (e, index) => {
    let newRemark = []
    styleRemark.map((item, i) => {
      if (i === index) {
        item = e.target.value
      }
      newRemark.push(item)
    })
    setStyleRemark(newRemark)

    const checkAnswerNA = newRemark.filter(function (value) {
      return value == 'Uncheck'
    })
    if (checkAnswerNA.length > 0) {
      setFinalGrades(null)
    } else {
      let newScore = 0;
      const checkAnswerCorrect = newRemark.filter(function (value) {
        return value == 'Correct'
      })
      if(checkAnswerCorrect.length > 0) {
        for (let i = 0; i < checkAnswerCorrect.length; i++) {
          newScore += 100 / newRemark.length
        }
      }   
      setFinalGrades(newScore)
    }
  }

  const createMarkup = (contents) => {
    return {__html: contents };
  }

  const onSubmit1 = (values) => {
    setIsLoading(true)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    if(finalGrades) {
      let arrAnswers = []
      initialGrades.map((item, index) => {
        arrAnswers.push({
          studentAssessmentId: id,
          correctionId: item.remarkId,
          correction: values.remark[index]
        })
      })      
      const setCorrection = {
        answers: arrAnswers,
        score: finalGrades
      }
      POST(
        "/report/teacher/set_correction_contents", setCorrection, defConfig()
      ).then((r) => {
        setFlashMessage('Success', 'Submit data success.')
        setIsLoading(false)
        console.log('success', r)
        
      }).catch( err => {
        setFlashMessage('Failed', 'Submit data failed.', false)
        setIsLoading(false)
        console.log('error', err)
      })
    }
  }

  const onSubmit2 = (values) => {
    setIsLoading(true)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    if(values.totalGrades !== '') {
      let arrAnswers = []
      initialGrades.map((item, index) => {
        arrAnswers.push({
          studentAssessmentId: id,
          correctionId: item.remarkId,
          correction: 'Correct'
        })
      })      
      const setCorrection = {
        answers: arrAnswers,
        score: values.totalGrades
      }
      POST(
        "/report/teacher/set_correction_contents", setCorrection, defConfig()
      ).then((r) => {
        setFlashMessage('Success', 'Submit data success.')
        setIsLoading(false)
        console.log('success', r)
      }).catch( err => {
        setFlashMessage('Failed', 'Submit data failed.', false)
        setIsLoading(false)
        console.log('error', err)
      })
    } else {
      setFlashMessage('Failed', 'Submit data failed.', false)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(false)
    GET(    
      `/report/teacher/student_list_overview_detail/${id}`,
      defConfig()
    ).then((r) => {
      let newTableOption = []
      tableOption.map((table, i) => {
        if(i === 0) {
          newTableOption.push({
            ...table,
            detail: r.data.student?.name
          })
        }
        if(i === 1) {
          newTableOption.push({
            ...table,
            detail: r.data.lesson?.name
          })
        }
        if(i === 2) {
          newTableOption.push({
            ...table,
            detail: r.data.subtopic?.name
          })
        }
      })
      setTableOption(newTableOption)

      setIsAuto(r.data.isAuto)
      let newUserAnswer = []
      if(r.data.isAuto) {
        r.data.userAnswers.map((item, index) => {
          if(item.assessmentType.path === 'single-choice') {
            newUserAnswer.push({
              id: item._id,
              answer: parseInt(item.questions[0].userAnswer) ? item.questions[0].options[parseInt(item.questions[0].userAnswer)].text : '',
              answerKey: parseInt(item.questions[0].answer) ? item.questions[0].options[parseInt(item.questions[0].answer)].text : '',
              remarkId: r.data.corrections[index]._id,
              remark: r.data.corrections[index].correction,
              modal: item
            })
          }
          if(item.assessmentType.path === 'multiple-choice') {
            const userAnswer = []
            item.questions[0].options.map(option => {
              if(option.isAnswer) {
                userAnswer.push(option.text)
              }
            })
            newUserAnswer.push({
              id: item._id,
              answer: item.questions[0].userAnswer ? item.questions[0].userAnswer.join('; ') : '',
              answerKey: userAnswer.join('; '),
              remarkId: r.data.corrections[index]._id,
              remark: r.data.corrections[index].correction,
              modal: item
            })
          }
          if(item.assessmentType.path === 'match-pairs') {
            newUserAnswer.push({
              id: item._id,
              answer: '-',
              answerKey: '-',
              remarkId: r.data.corrections[index]._id,
              remark: r.data.corrections[index].correction,
              modal: item
            })
          }
          if(item.assessmentType.path === 'short-answer') {
            newUserAnswer.push({
              id: item._id,
              answer: item.questions[0].userAnswer,
              answerKey: item.questions[0].answer,
              remarkId: r.data.corrections[index]._id,
              remark: r.data.corrections[index].correction,
              modal: item
            })
          }
          if(item.assessmentType.path === 'essay') {
            newUserAnswer.push({
              id: item._id,
              answer: item.userAnswer,
              answerKey: '-',
              remarkId: r.data.corrections[index]._id,
              remark: r.data.corrections[index].correction,
              modal: item
            })
          }
        })
        setInitialGrades(newUserAnswer)
    
        let newRemark = []
        newUserAnswer.map(item => {
          newRemark.push(item.remark)
        })
        seInitialValues1({
          ...initialValues1,
          remark: newRemark
        })
        setStyleRemark(newRemark)
    
        const checkAnswerNA = newRemark.filter(function (value) {
          return value == 'Uncheck'
        })
        if (checkAnswerNA.length > 0) {
          setFinalGrades(null)
        } else {
          let newScore = 0;
          const checkAnswerCorrect = newRemark.filter(function (value) {
            return value == 'Correct'
          })
          if(checkAnswerCorrect.length > 0) {
            for (let i = 0; i < checkAnswerCorrect.length; i++) {
              newScore += 100 / newRemark.length
            }
          } 
          setFinalGrades(newScore)
        }
      } else {
        let newInstruction = []
        r.data.userAnswers.map((item, index) => {
          if(item.assessmentType.path === 'texteditor') {
            newInstruction.push({
              contents: item.contents
            })
          }
          if(item.assessmentType.path === 'audio') {
            newUserAnswer.push({
              id: item._id,
              isAudio: true,
              answer: item.userAnswer,
              remarkId: r.data.corrections[index]._id,
              remark: r.data.corrections[index].correction,
            })
          }
          if(item.assessmentType.path === 'file-upload') {
            newUserAnswer.push({
              id: item._id,
              isAudio: false,
              answer: item.userAnswer.base64File,
              remarkId: r.data.corrections[index]._id,
              remark: r.data.corrections[index].correction,
            })
          }
        })
        setInstruction(newInstruction)
        setInitialGrades(newUserAnswer)
        if(parseInt(r.data.score)) {
          seInitialValues2({ totalGrades: r.data.score})
        }      
        setUploaded(`${r.data.classlist.name} - ${r.data.classlist.academicYear}_${r.data.student.name}`)  
      }

    });
    
  }, [])

  return {
    isAuto,
    breadcrumbsData,
    tableOption,
    borderStyle,
    instructionStyle,
    initialGrades,
    initialValues1,
    initialValues2,
    styleRemark,
    finalGrades,
    changeRemark,
    onSubmit1,
    onSubmit2,
    instruction,
    createMarkup,
    uploaded,
    isLoading,
  }
}

export default useManageDetail