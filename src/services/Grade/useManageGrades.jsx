import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { defConfig, GET, POST } from "../../config/RestAPI";

function useManageGrades() {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingTable, setIsLoadingTable] = useState(true)
  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      link: "/dashboard",
      label: "Dashboard",
    },
    {
      link: "",
      label: "Manage Grades",
    },
  ]);
  const [dataHeader, setDataHeader] = useState([
    {
      title: 'Class',
      rowName: 'classlist',
      width: "35%",
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
      width: "35%",
      placeholder: '',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Status',
      rowName: 'status',
      width: "20%",
      placeholder: '',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Detail',
      rowName: 'score',
      width: "10%",
      placeholder: '',
      search: '',
      sortir: false,
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

  const [dataManageGrades, setDataManageGrades] = useState()

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

  const initData = (dataPage, dataPerPage, dataSortType, dataSortBy, dataRow) => {
    setIsLoadingTable(true)
    setDataManageGrades([])
    GET(`/report/teacher/grade_overview?page=${dataPage}&per_page=${dataPerPage}&sort_type=${dataSortType}&sort_by=${dataSortBy}`, defConfig(dataRow))
      .then(
        (res) => {
          setDataManageGrades(res.data)
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
    breadcrumbsData,
    dataHeader,
    sortirHeader,
    dataManageGrades,
    handlePageClick,
    initData,
    formik,
    onSubmit,
    page,
    perPage,
    sortType,
    sortBy,
    pagination,
  }
}

export default useManageGrades