import React, { useEffect, useState } from "react";
import { defConfig, GET, POST } from "../../config/RestAPI";

function useTeacherGradeOverview() {
  const [isLoading, setIsLoading] = useState(true)
  const [showRow, setShowRow] = useState(['subject', 'class'])
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
    initData()
    localStorage.setItem("GRADE_TABLE_OPTION", JSON.stringify(initialValuesTableOption))
    localStorage.setItem("GRADE_DETAIL_TABLE_OPTION", JSON.stringify(dataTables))
  }

  const [dataGradeOverview, setDataGradeOverview] = useState()
  const [dataGradeOverviewAll, setDataGradeOverviewAll] = useState()
  const [dataExcel, setDataExcel] = useState()
  const csvDataName = ["data"]

  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
      setCurrentPage(event)
      const newOffset = (event * parseInt(initialValuesTableOption.showing)) % dataGradeOverviewAll.length;
      setItemOffset(newOffset);
      const endOffset = newOffset + parseInt(initialValuesTableOption.showing);
      setDataGradeOverview(dataGradeOverviewAll.slice(newOffset, endOffset))
      setPageCount(Math.ceil(dataGradeOverviewAll.length / parseInt(initialValuesTableOption.showing)));
  };

  const initData = (row) => {
    setIsLoading(true)
    GET(`/report/teacher/grade_overview`, defConfig(row))
    .then(
      (res) => {
        const endOffset = itemOffset + parseInt(initialValuesTableOption.showing);
        setDataGradeOverview(res.data.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(res.data.length / parseInt(initialValuesTableOption.showing)));
        setDataGradeOverviewAll(res.data)
        setIsLoading(false)

        let newDataExcel = []
        res.data?.map((item, index) => {
          if(item.classlist && item.subject) {
            newDataExcel.push({
              no: index+1,
              class: item.classlist ? `${item.classlist?.name} - ${item.classlist?.academicYear}` : '',
              subject: item.subject ? item.subject?.name : '',
              average: item.score ? item.score.toFixed(2) : 'N/A'
            })
          } else if(item.classlist && !item.subject) {
            newDataExcel.push({
              no: index+1,
              class: item.classlist ? `${item.classlist?.name} - ${item.classlist?.academicYear}` : '',
              average: item.score ? item.score.toFixed(2) : 'N/A'
            })
          } else if(!item.classlist && item.subject) {
            newDataExcel.push({
              no: index+1,
              subject: item.subject ? item.subject?.name : '',
              average: item.score ? item.score.toFixed(2) : 'N/A'
            })            
          }
        })
        setDataExcel(newDataExcel)
      }
    )
    .catch(err => {
      setIsLoading(false)
      console.log('error', err)
    })    
  }

  useEffect(() => {
    initData(showRow)
  }, [])

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
      initData(newRow)
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
    initData,
    dataExcel,
    csvDataName,
  }
}

export default useTeacherGradeOverview