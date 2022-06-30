import React, { useEffect, useState } from "react";
import { defConfig, GET, POST } from "../../config/RestAPI";

function useStudentGradeOverview() {
  const [isLoading, setIsLoading] = useState(true)
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
      title: 'Avg. Grade',
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

  const [initialValuesTableOption, setInitialValuesTableOption] = useState({
    selectClass: true,
    selectSubject: true,
    showing: "10",
  })

  const setTableOption = (values) => {
    const dataTables = []
    if (initialValuesTableOption.selectClass) {
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
    localStorage.setItem("GRADE_TABLE_OPTION", JSON.stringify(initialValuesTableOption))
    localStorage.setItem("GRADE_DETAIL_TABLE_OPTION", JSON.stringify(dataTables))
  }

  const [dataGradeOverview, setDataGradeOverview] = useState()
  const [dataGradeOverviewAll, setDataGradeOverviewAll] = useState()

  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePageClick = (event) => {
      setCurrentPage(event)
      const newOffset = (event * itemsPerPage) % dataGradeOverviewAll.length;
      setItemOffset(newOffset);
      const endOffset = newOffset + itemsPerPage;
      setDataGradeOverview(dataGradeOverviewAll.slice(newOffset, endOffset))
      setPageCount(Math.ceil(dataGradeOverviewAll.length / itemsPerPage));
  };

  useEffect(() => {
    setIsLoading(true)
    GET(`/report/student/grade_overview`, defConfig())
    .then(
      (res) => {
        const endOffset = itemOffset + itemsPerPage;
        setDataGradeOverview(res.data.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(res.data.length / itemsPerPage));
        setDataGradeOverviewAll(res.data)
        setIsLoading(false)
      }
    )
    .catch(err => {
      setIsLoading(false)
      console.log('error', err)
    })
  }, [])

  const onSubmitTableOption = (values) => {
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

  return {
    isLoading,
    dataHeader,
    sortirHeader,
    initialValuesTableOption,
    setTableOption,
    onSubmitTableOption,
    dataGradeOverview,
    currentPage,
    pageCount,
    itemOffset,
    handlePageClick,
  }
}

export default useStudentGradeOverview