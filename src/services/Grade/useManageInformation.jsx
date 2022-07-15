import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { useParams } from "react-router-dom";
import { defConfig, GET, POST } from "../../config/RestAPI";

function useManageInformation() {
  const { idClass, idSubject } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingTable, setIsLoadingTable] = useState(true)
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
      link: "",
      label: "Grades Information",
    },
  ]);
  const [tableOption, setTableOption] = useState([
    {
      name: 'class',
      title: 'Class',
      value: true,
      icon: 'EventSeat',
      backgroundIcon: '#FAEBF2',
      colorIcon: '#ECB1CF',
      detail: ''
    },
    {
      name: 'subject',
      title: 'Subject',
      value: true,
      icon: 'MenuBook',
      backgroundIcon: '#FFF8E6',
      colorIcon: '#FDC228',
      detail: ''
    },
    {
      name: 'assessment',
      title: 'Total Assssment',
      value: true,
      icon: 'Assessment',
      backgroundIcon: '#FFEFE6',
      colorIcon: '#FD7528',
      detail: ''
    }
  ])
  const [dataHeader, setDataHeader] = useState([
    {
      title: 'Student Name',
      rowName: 'student',
      width: "28%",
      placeholder: '',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Lesson',
      rowName: 'lesson',
      width: "26%",
      placeholder: '',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Assessment',
      rowName: 'assessment',
      width: "26%",
      placeholder: '',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Grade',
      rowName: 'score',
      width: "10%",
      placeholder: '',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Detail',
      rowName: '',
      width: "10%",
      placeholder: '',
      search: '',
      sortir: false,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
  ])

  const sortirHeader = (index) => {
    let newHeader = []
    dataHeader.map((item, key1) => {
      if (key1 === index) {
        if (!item.isSorted && !item.isSortedDesc) {
          let data = {
            ...item,
            isSorted: true,
            isSortedDesc: true
          }
          newHeader.push(data)
          setSortType('ASC')
          setSortBy(item.rowName)
          initData(page, perPage, 'ASC', item.rowName, graded)
        }
        if (item.isSorted && item.isSortedDesc) {
          let data = {
            ...item,
            isSorted: true,
            isSortedDesc: false
          }
          newHeader.push(data)
          setSortType('DESC')
          setSortBy(item.rowName)
          initData(page, perPage, 'DESC', item.rowName, graded)
        }
        if (item.isSorted && !item.isSortedDesc) {
          let data = {
            ...item,
            isSorted: false,
            isSortedDesc: false
          }
          newHeader.push(data)
          setSortType('DESC')
          setSortBy('score')
          initData(page, perPage, 'DESC', 'score', graded)
        }
      } else {
        let data = {
          ...item,
          isSorted: false,
          isSortedDesc: false
        }
        newHeader.push(data)
      }
    })
    setDataHeader(newHeader)
  }

  const [initialValuesTableOption, setInitialValuesTableOption] = useState({
    assessmentStatus: "All",
    showing: "10",
  })

  const [dataGradesInformation, setDataGradesInformation] = useState()
  const [dataExcel, setDataExcel] = useState()
  const csvDataName = ["data"]

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [sortType, setSortType] = useState('DESC')
  const [sortBy, setSortBy] = useState('score')
  const [graded, setGraded] = useState('')

  const [pagination, setPagination] = useState({
    current_page: 0,
    per_page: 10,
    next_page: false,
    prev_page: false,
    total: 0,
    total_page: 0
  })

  const formik = useFormik({
    initialValues: { topage: 0 },
    onSubmit: values => {
      if (parseInt(values.topage) > 0 && parseInt(values.topage) <= pagination.total_page) {
        setPage(parseInt(values.topage))
        initData(parseInt(values.topage), perPage, sortType, sortBy, graded)
      }
    },
  });

  const handlePageClick = (toPage) => {
    setPage(toPage)
    formik.setFieldValue("topage", toPage)
    initData(toPage, perPage, sortType, sortBy, graded)
  };

  const onSubmit = () => {
    console.log('first')
  }

  const onSubmitTableOption = (values) => {
    setPerPage(parseInt(values.showing))
    setGraded(values.assessmentStatus)
    initData(page, parseInt(values.showing), sortType, sortBy, values.assessmentStatus)

    setInitialValuesTableOption(values)
  }

  const initData = (dataPage, dataPerPage, dataSortType, dataSortBy, graded) => {
    setIsLoadingTable(true)
    setDataGradesInformation([])
    GET(`report/teacher/student_list_overview?page=${dataPage}&per_page=${dataPerPage}&sort_type=${dataSortType}&sort_by=${dataSortBy}&classlistId=${idClass}&subjectId=${idSubject}&status=${graded}`, defConfig())
    .then(
      (res) => {
        console.log(res)
        let newTableOption = []
        tableOption.map((item, index) => {
          if (index === 0) {
            newTableOption.push({
              ...item,
              detail: `${res.data.classlist.name} - ${res.data.classlist.academicYear}`
            })
          } else if (index === 1) {
            newTableOption.push({
              ...item,
              detail: res.data.subject.name
            })
          } else if (index === 2) {
            newTableOption.push({
              ...item,
              detail: res.data.totalAssessment
            })
          } else {
            newTableOption.push(item)
          }
        })
        setTableOption(newTableOption)

        setDataGradesInformation(res.data.results)
        formik.setFieldValue("topage", parseInt(res.data.pagintion.current_page) ? res.data.pagintion.current_page : 0)
        setPagination({
            current_page: parseInt(res.data.pagintion.current_page) ? res.data.pagintion.current_page : 0,
            per_page: parseInt(res.data.pagintion.per_page) ? res.data.pagintion.per_page : 10,
            next_page: res.data.pagintion.next_page ? res.data.pagintion.next_page : false,
            prev_page: res.data.pagintion.prev_page ? res.data.pagintion.prev_page : false,
            total: parseInt(res.data.pagintion.total) ? res.data.pagintion.total : 0,
            total_page: parseInt(res.data.pagintion.total_page) ? res.data.pagintion.total_page : 0
        })
        setIsLoading(false)
        setIsLoadingTable(false)

        let newDataExcel = []
        res.data.results?.map((item, index) => {
          newDataExcel.push({
            no: index+1,
            student: item.student ? item.student?.name : '',
            lesson: item.lesson ? item.lesson?.name : '',
            assessment: item.subtopic ? item.subtopic?.name : '',
            grade: parseFloat(item.score) ? parseFloat(item.score).toFixed(1) : 'N/A'
          })  
        })
        setDataExcel(newDataExcel)
      }
    )
    .catch(err => {
      setIsLoading(false)
      setIsLoadingTable(false)
      console.log('error', err.message)
    })    
  }

  useEffect(() => {
    setIsLoading(true)
    setIsLoadingTable(true)
    initData(page, perPage, sortType, sortBy, graded)
  }, [])

  const onSubmitNumberPage = (values) => {
    console.log(values)
  }

  return {
    isLoading,
    breadcrumbsData,
    dataGradesInformation,
    tableOption,
    dataHeader,
    sortirHeader,
    initialValuesTableOption,
    onSubmitTableOption,
    handlePageClick,
    formik,
    dataExcel,
    csvDataName,
    onSubmit,
    page,
    perPage,
    sortType,
    sortBy,
    pagination,
  }
}

export default useManageInformation