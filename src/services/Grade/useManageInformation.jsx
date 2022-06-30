import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defConfig, GET, POST } from "../../config/RestAPI";

function useManageInformation() {
  const { idClass, idSubject } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [dataGradesInformation, setDataGradesInformation] = useState() 
  const [dataGradesInformationAll, setDataGradesInformationAll] = useState()
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
      placeholder: '',
      search: '',
      sortir: false,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Lesson',
      placeholder: '',
      search: '',
      sortir: false,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Assessment',
      placeholder: '',
      search: '',
      sortir: false,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Grade',
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
    assessmentStatus: "All",
    showing: "10",
  })  

  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePageClick = (event) => {
      setCurrentPage(event)
      const newOffset = (event * itemsPerPage) % dataGradesInformationAll.length;
      setItemOffset(newOffset);
      const endOffset = newOffset + itemsPerPage;
      setDataGradesInformation(dataGradesInformationAll.slice(newOffset, endOffset))
      setPageCount(Math.ceil(dataGradesInformationAll.length / itemsPerPage));
  };

  useEffect(() => {
    setIsLoading(true)
    GET(`/report/teacher/student_list_overview?subjectId=${idSubject}&classlistId=${idClass}`, defConfig())
    .then(res => {
      let newTableOption = []
      tableOption.map((item, index) => {
        if(index === 0) {
          newTableOption.push({
            ...item,
            detail: `${res.data.classlist.name} - ${res.data.classlist.academicYear}`
          })
        } else if(index === 1){
          newTableOption.push({
            ...item,
            detail: res.data.subject.name
          })
        } else if(index === 2){
          newTableOption.push({
            ...item,
            detail: res.data.totalAssessment
          })
        } else {
          newTableOption.push(item)
        }
      })
      setTableOption(newTableOption)

      const endOffset = itemOffset + itemsPerPage;
      setDataGradesInformation(res.data.results.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(res.data.results.length / itemsPerPage));
      setDataGradesInformationAll(res.data.results)
      setIsLoading(false)
    })
    .catch(err => {
      setIsLoading(false)
      console.log('error', err)
    })
  }, [])

  const onSubmitTableOption = (values) => {
    setInitialValuesTableOption(values)
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
    currentPage,
    pageCount,
    itemOffset,
    handlePageClick,
  }
}

export default useManageInformation