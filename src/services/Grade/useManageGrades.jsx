import React, { useEffect, useState } from "react";
import { defConfig, GET, POST } from "../../config/RestAPI";

function useManageGrades() {
  const [isLoading, setIsLoading] = useState(true)
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
      placeholder: '',
      search: '',
      sortir: false,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Subject',
      placeholder: '',
      search: '',
      sortir: false,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Status',
      placeholder: '',
      search: '',
      sortir: false,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Detail',
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
        }
        if (item.isSorted && item.isSortedDesc) {
          let data = {
            ...item,
            isSorted: true,
            isSortedDesc: false
          }
          newHeader.push(data)
        }
        if (item.isSorted && !item.isSortedDesc) {
          let data = {
            ...item,
            isSorted: false,
            isSortedDesc: false
          }
          newHeader.push(data)
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
  const [dataManageGradesAll, setDataManageGradesAll] = useState()

  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePageClick = (event) => {
      setCurrentPage(event)
      const newOffset = (event * itemsPerPage) % dataManageGradesAll.length;
      setItemOffset(newOffset);
      const endOffset = newOffset + itemsPerPage;
      setDataManageGrades(dataManageGradesAll.slice(newOffset, endOffset))
      setPageCount(Math.ceil(dataManageGradesAll.length / itemsPerPage));
  };

  useEffect(() => {
    setIsLoading(true)
    GET(`/report/teacher/grade_overview`, defConfig(['class', 'subject']))
    .then(
      (res) => {
        const endOffset = itemOffset + itemsPerPage;
        setDataManageGrades(res.data.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(res.data.length / itemsPerPage));
        setDataManageGradesAll(res.data)
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
    dataHeader,
    sortirHeader,
    dataManageGrades,
    currentPage,
    pageCount,
    itemOffset,
    handlePageClick,
  }
}

export default useManageGrades