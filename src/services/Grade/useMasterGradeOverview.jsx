import React, { useEffect, useState } from "react";
import { defConfig, GET, POST } from "../../config/RestAPI";

function useMasterGradeOverview() {
    const [isLoading, setIsLoading] = useState(true)
    const [dataHeader, setDataHeader] = useState([
        {
            title: 'School Name',
            rowName: 'school',
            placeholder: 'e.g. Atlaz School',
            search: '',
            sortir: true,
            isSorted: false,
            isSortedDesc: false,
            status: true,
        },
        {
            title: 'Teacher Name',
            rowName: 'teacher',
            placeholder: 'e.g. Nick',
            search: '',
            sortir: true,
            isSorted: false,
            isSortedDesc: false,
            status: true,
        },
        {
            title: 'Class',
            rowName: 'classlist',
            placeholder: 'e.g. Atlaz Class 1',
            search: '',
            sortir: true,
            isSorted: false,
            isSortedDesc: false,
            status: true,
        },
        {
            title: 'Subject',
            rowName: 'subject',
            placeholder: 'e.g. English',
            search: '',
            sortir: true,
            isSorted: false,
            isSortedDesc: false,
            status: true,
        },
        {
            title: 'Avg. Grade',
            rowName: 'score',
            placeholder: 'e.g. 100',
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
        selectSchool: true,
        selectTeacher: true,
        selectClass: true,
        selectSubject: true,
        showing: "10",
    })

    const setTableOption = (values) => {
        const dataTables = []
        const newRow = []
        if (initialValuesTableOption.selectSchool) {
            newRow.push('school')
            dataTables.push({
                name: 'school',
                title: 'School name',
                value: true,
                icon: 'School',
                backgroundIcon: '#EAEDFB',
                colorIcon: '#A0ADEC',
                detail: 'Data School name'
            })
        }
        if (initialValuesTableOption.selectTeacher) {
            newRow.push('teacher')
            dataTables.push({
                name: 'teacher',
                title: 'Teacher  name',
                value: true,
                icon: 'SupervisedUserCircle',
                backgroundIcon: '#EAF7FA',
                colorIcon: '#4FAED4',
                detail: 'Data Teacher name'
            })
        }
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
    const csvDataName = ["Grade-Overview"]

    const [showRow, setShowRow] = useState(['school', 'teacher', 'class', 'subject'])
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

    const handlePageClick = (toPage) => {
        setPage(toPage)
        initData(toPage, perPage, sortType, sortBy, showRow)
    };

    const resetTableOption = () => {
        console.log('tes')
    }

    const onSubmit = () => {
        console.log('first')
    }

    const onSubmitTableOption = (values) => {
        let newRow = []
        if (values.selectSchool) {
            newRow.push("school")
        }
        if (values.selectTeacher) {
            newRow.push("teacher")
        }
        if (values.selectSubject) {
            newRow.push("subject")
        }
        if (values.selectClass) {
            newRow.push("class")
        }
        if (newRow.length > 0) {
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
                newRow.push(Object.values(values)[index])
            } else {
                newHeader.push(item)
            }
        })
        setDataHeader(newHeader)
    }

    const initData = (dataPage, dataPerPage, dataSortType, dataSortBy, dataRow) => {
        setIsLoading(true)
        GET(`/report/master/grade_overview?page=${dataPage}&per_page=${dataPerPage}&sort_type=${dataSortType}&sort_by=${dataSortBy}`, defConfig(dataRow))
            .then(
                (res) => {
                    setDataGradeOverview(res.data.results)
                    setPagination({
                        current_page: res.data.pagintion.current_page ? res.data.pagintion.current_page : 0,
                        per_page: res.data.pagintion.per_page ? res.data.pagintion.per_page : 10,
                        next_page: res.data.pagintion.next_page ? res.data.pagintion.next_page : false,
                        prev_page: res.data.pagintion.prev_page ? res.data.pagintion.prev_page : false,
                        total: res.data.pagintion.total ? res.data.pagintion.total : 0,
                        total_page: res.data.pagintion.total_page ? res.data.pagintion.total_page : 0
                    })
                    setIsLoading(false)

                    let newDataExcel = []
                    res.data.results?.map((item, index) => {
                        newDataExcel.push({
                            no: index + 1,
                            school: item.school?.name,
                            teacher: item.teacher?.name,
                            class: `${item.classlist?.name} - ${item.classlist?.academicYear}`,
                            subject: item.subject?.name,
                            average: item.score ? item.score : 'N/A'
                        })
                    })
                    setDataExcel(newDataExcel)
                }
            )
            .catch(err => {
                setIsLoading(false)
                console.log('error', err.message)
            })
    }

    useEffect(() => {
        initData(page, perPage, sortType, sortBy, showRow)
    }, [])

    const onSubmitNumberPage = (values) => {
        console.log(values)
    }

    return {
        isLoading,
        dataHeader,
        sortirHeader,
        initialValuesTableOption,
        setTableOption,
        onSubmitTableOption,
        dataGradeOverview,
        handlePageClick,
        onSubmitNumberPage,
        dataExcel,
        csvDataName,
        resetTableOption,
        onSubmit,
        page,
        perPage,
        sortType,
        sortBy,
        pagination,
    }
}

export default useMasterGradeOverview