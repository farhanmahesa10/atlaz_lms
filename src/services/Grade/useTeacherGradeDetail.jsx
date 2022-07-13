import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { useParams } from "react-router-dom";
import { defConfig, GET, POST } from "../../config/RestAPI";

function useTeacherGradeDetail() {
    const { idClass, idSubject } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingTable, setIsLoadingTable] = useState(true)

    const [dataHeader, setDataHeader] = useState([
        {
            title: 'Class',
            rowName: 'classlist',
            width: '27%',
            placeholder: '',
            search: '',
            sortir: true,
            isSorted: false,
            isSortedDesc: false,
            status: false,
        },
        {
            title: 'Subject',
            rowName: 'subject',
            width: '27%',
            placeholder: '',
            search: '',
            sortir: true,
            isSorted: false,
            isSortedDesc: false,
            status: false,
        },
        {
            title: 'Student Name',
            rowName: 'student',
            width: '37%',
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
            width: '19%',
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
        selectClass: false,
        selectSubject: false,
        selectStudent: true,
        subjectProgress: true,
        showing: "10",
    })

    const [tableOption, setTableOption] = useState()
    const [dataGradeDetail, setDataGradeDetail] = useState()
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
        setPerPage(parseInt(values.showing))
        initData(page, parseInt(values.showing), sortType, sortBy, showRow)
    }

    const initData = (dataPage, dataPerPage, dataSortType, dataSortBy, dataRow) => {
        setIsLoadingTable(true)
        setDataGradeDetail([])
        const getTableOptions = JSON.parse(localStorage.getItem('GRADE_DETAIL_TABLE_OPTION'))
        setTableOption(getTableOptions)
        const options = JSON.parse(localStorage.getItem('GRADE_TABLE_OPTION'))
        setInitialValuesTableOption({
            ...initialValuesTableOption,
            selectClass: options.selectClass,
            selectSubject: options.selectSubject,
        })
        let newHeader = []
        dataHeader.map((item, index) => {
            if (index < 2) {
                let data = {
                    ...item,
                    status: !Object.values(options)[index]
                }
                newHeader.push(data)
            } else {
                newHeader.push(item)
            }
        })
        setDataHeader(newHeader)

        let endpoint = ''
        if (idClass && idSubject) {
            endpoint = `/report/teacher/student_details?page=${dataPage}&per_page=${dataPerPage}&sort_type=${dataSortType}&sort_by=${dataSortBy}&classlistId=${idClass}&subjectId=${idSubject}`
        } else if (idClass && !idSubject) {
            endpoint = `/report/teacher/student_details?page=${dataPage}&per_page=${dataPerPage}&sort_type=${dataSortType}&sort_by=${dataSortBy}&classlistId=${idClass}`
        } else if (!idClass && idSubject) {
            endpoint = `/report/teacher/student_details?page=${dataPage}&per_page=${dataPerPage}&sort_type=${dataSortType}&sort_by=${dataSortBy}&subjectId=${idSubject}`
        }
        GET(endpoint, defConfig())
            .then(res => {
                let newTableOption = []
                getTableOptions.map(item => {
                    if (item.name === 'class' && res.data.classlist) {
                        newTableOption.push({
                            ...item,
                            detail: `${res.data.classlist.name} - ${res.data.classlist.academicYear}`
                        })
                    } else if (item.name === 'subject' && res.data.subject) {
                        newTableOption.push({
                            ...item,
                            detail: res.data.subject.name
                        })
                    } else {
                        newTableOption.push(item)
                    }
                })
                setTableOption(newTableOption)

                setDataGradeDetail(res.data.results)
                formik.setFieldValue("topage", res.data.pagintion.current_page ? res.data.pagintion.current_page : 0)
                setPagination({
                    current_page: res.data.pagintion.current_page ? res.data.pagintion.current_page : 0,
                    per_page: res.data.pagintion.per_page ? res.data.pagintion.per_page : 10,
                    next_page: res.data.pagintion.next_page ? res.data.pagintion.next_page : false,
                    prev_page: res.data.pagintion.prev_page ? res.data.pagintion.prev_page : false,
                    total: res.data.pagintion.total ? res.data.pagintion.total : 0,
                    total_page: res.data.pagintion.total_page ? res.data.pagintion.total_page : 0
                })
                setIsLoading(false)
                setIsLoadingTable(false)

                let newDataExcel = []
                res.data.results?.map((item, index) => {
                    if (item.classlist && item.subject) {
                        newDataExcel.push({
                            no: index + 1,
                            class: item.classlist ? `${item.classlist?.name} - ${item.classlist?.academicYear}` : '',
                            subject: item.subject ? item.subject?.name : '',
                            student: item.student ? item.student?.name : '',
                            average: item.score ? item.score.toFixed(1) : 'N/A'
                        })
                    } else if (item.classlist && !item.subject) {
                        newDataExcel.push({
                            no: index + 1,
                            class: item.classlist ? `${item.classlist?.name} - ${item.classlist?.academicYear}` : '',
                            student: item.student ? item.student?.name : '',
                            average: item.score ? item.score.toFixed(1) : 'N/A'
                        })
                    } else if (!item.classlist && item.subject) {
                        newDataExcel.push({
                            no: index + 1,
                            subject: item.subject ? item.subject?.name : '',
                            student: item.student ? item.student?.name : '',
                            average: item.score ? item.score.toFixed(1) : 'N/A'
                        })
                    } else if (!item.classlist && !item.subject) {
                        newDataExcel.push({
                            no: index + 1,
                            student: item.student ? item.student?.name : '',
                            average: item.score ? item.score.toFixed(1) : 'N/A'
                        })
                    }
                })
                setDataExcel(newDataExcel)
            })
            .catch(err => {
                setIsLoading(false)
                setIsLoadingTable(false)
                console.log('error', err)
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
        tableOption,
        setTableOption,
        onSubmitTableOption,
        dataGradeDetail,
        handlePageClick,
        initData,
        dataExcel,
        csvDataName,
        formik,
        onSubmit,
        page,
        perPage,
        sortType,
        sortBy,
        pagination,
    }
}

export default useTeacherGradeDetail