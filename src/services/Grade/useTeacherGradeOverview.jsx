import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { defConfig, GET, POST } from "../../config/RestAPI";

function useTeacherGradeOverview() {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingTable, setIsLoadingTable] = useState(true)
  const [dataHeader, setDataHeader] = useState([
    {
      title: 'Class',
      rowName: 'classlist',
      width: "43%",
      placeholder: '',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Subject',
      rowName: 'subject',
      width: "43%",
      placeholder: '',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Avg. Grade',
      rowName: 'score',
      width: "14%",
      placeholder: '',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    }
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
          initData(page, perPage, 'ASC', item.rowName, showRow)
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
          initData(page, perPage, 'DESC', item.rowName, showRow)
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
          initData(page, perPage, 'DESC', 'score', showRow)
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
    selectClass: true,
    selectSubject: true,
    showing: "10",
  })

  const setTableOption = (values) => {
    const dataTables = []
    const newRow = []
    if (initialValuesTableOption.selectClass) {
      newRow.push('class')
      dataTables.push({
        name: 'class',
        title: 'Class',
        value: true,
        icon: 'EventSeat',
        backgroundIcon: '#FAEBF2',
        colorIcon: '#ECB1CF',
        detail: 'Data Class'
      })
    }
    if (initialValuesTableOption.selectSubject) {
      newRow.push('subject')
      dataTables.push({
        name: 'subject',
        title: 'Subject',
        value: true,
        icon: 'MenuBook',
        backgroundIcon: '#FFF8E6',
        colorIcon: '#FDC228',
        detail: 'Data Subject'
      })
    }
    setShowRow(newRow)
    initData(page, perPage, sortType, sortBy, newRow)
    localStorage.setItem("GRADE_TABLE_OPTION", JSON.stringify(initialValuesTableOption))
    localStorage.setItem("GRADE_DETAIL_TABLE_OPTION", JSON.stringify(dataTables))
  }

  const [dataGradeOverview, setDataGradeOverview] = useState()
  const [dataExcel, setDataExcel] = useState()
  const csvDataName = ["data"]

  const [showRow, setShowRow] = useState(['subject', 'class'])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [sortType, setSortType] = useState('DESC')
  const [sortBy, setSortBy] = useState('score')

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
        initData(parseInt(values.topage), perPage, sortType, sortBy, showRow)
      }
    },
  });

  const handlePageClick = (toPage) => {
    setPage(toPage)
    formik.setFieldValue("topage", toPage)
    initData(toPage, perPage, sortType, sortBy, showRow)
  };

  const onSubmit = () => {
      console.log('first')
  }

  const onSubmitTableOption = (values) => {    
    let newRow = []
    if(values.selectSubject) {
      newRow.push("subject")
    }
    if(values.selectClass) {
      newRow.push("class")
    }
    if(newRow.length > 0) {
      setShowRow(newRow)
      setPerPage(parseInt(values.showing))
      initData(page, parseInt(values.showing), sortType, sortBy, newRow)
    }
    
    setInitialValuesTableOption(values)
    let newHeader = []
    dataHeader.map((item, index) => {
      if (index < 4) {
        let data = {
          ...item,
          status: Object.values(values)[index]
        }
        newHeader.push(data)
      } else {
        newHeader.push(item)
      }
    })
    setDataHeader(newHeader)
  }

  const initData = (dataPage, dataPerPage, dataSortType, dataSortBy, dataRow) => {
    setIsLoadingTable(true)
    setDataGradeOverview([])
    GET(`/report/teacher/grade_overview?page=${dataPage}&per_page=${dataPerPage}&sort_type=${dataSortType}&sort_by=${dataSortBy}`, defConfig(dataRow))
    .then(
      (res) => {
        console.log('tes', res.data)
        setDataGradeOverview(res.data)
        formik.setFieldValue("topage", res.pagintion.current_page ? res.pagintion.current_page : 0)
        setPagination({
            current_page: res.pagintion.current_page ? res.pagintion.current_page : 0,
            per_page: res.pagintion.per_page ? res.pagintion.per_page : 10,
            next_page: res.pagintion.next_page ? res.pagintion.next_page : false,
            prev_page: res.pagintion.prev_page ? res.pagintion.prev_page : false,
            total: res.pagintion.total ? res.pagintion.total : 0,
            total_page: res.pagintion.total_page ? res.pagintion.total_page : 0
        })
        setIsLoading(false)
        setIsLoadingTable(false)

        let newDataExcel = []
        res.data?.map((item, index) => {
          if(item.classlist && item.subject) {
            newDataExcel.push({
              no: index+1,
              class: item.classlist ? `${item.classlist?.name} - ${item.classlist?.academicYear}` : '',
              subject: item.subject ? item.subject?.name : '',
              average: item.score ? item.score.toFixed(1) : 'N/A'
            })
          } else if(item.classlist && !item.subject) {
            newDataExcel.push({
              no: index+1,
              class: item.classlist ? `${item.classlist?.name} - ${item.classlist?.academicYear}` : '',
              average: item.score ? item.score.toFixed(1) : 'N/A'
            })
          } else if(!item.classlist && item.subject) {
            newDataExcel.push({
              no: index+1,
              subject: item.subject ? item.subject?.name : '',
              average: item.score ? item.score.toFixed(1) : 'N/A'
            })            
          }
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
    initData(page, perPage, sortType, sortBy, showRow)
  }, [])

  return {
    isLoading,
    isLoadingTable,
    dataHeader,
    sortirHeader,
    initialValuesTableOption,
    setTableOption,
    onSubmitTableOption,
    dataGradeOverview,
    handlePageClick,
    initData,
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

export default useTeacherGradeOverview