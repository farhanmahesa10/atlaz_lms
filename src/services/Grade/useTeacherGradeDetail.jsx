import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defConfig, GET, POST } from "../../config/RestAPI";

function useTeacherGradeDetail() {
    const [isLoading, setIsLoading] = useState(true)
    const { idClass, idSubject } = useParams()
    const [dataGradeDetail, setDataGradeDetail] = useState()
    const [dataGradeDetailAll, setDataGradeDetailAll] = useState()
    const [tableOption, setTableOption] = useState()

    const [dataHeader, setDataHeader] = useState([
        {
            title: 'Class',
            placeholder: '',
            search: '',
            sortir: false,
            isSorted: false,
            isSortedDesc: false,
            status: false,
        },
        {
            title: 'Subject',
            placeholder: '',
            search: '',
            sortir: false,
            isSorted: false,
            isSortedDesc: false,
            status: false,
        },
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
        selectClass: false,
        selectSubject: false,
        selectStudent: true,
        subjectProgress: true,
        showing: "10",
    })

    const resetTableOption = () => {
        console.log('tes')
    }

    const onSubmit = () => {
        console.log('first')
    }

    const onSubmitTableOption = (values) => {
        console.log('showing')
    }

    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const handlePageClick = (event) => {
        setCurrentPage(event)
        const newOffset = (event * itemsPerPage) % dataGradeDetailAll.length;
        setItemOffset(newOffset);
        const endOffset = newOffset + itemsPerPage;
        setDataGradeDetail(dataGradeDetailAll.slice(newOffset, endOffset))
        setPageCount(Math.ceil(dataGradeDetailAll.length / itemsPerPage));
    };

    useEffect(() => {
        setIsLoading(true)
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
        if(idClass && idSubject) {
            endpoint = `/report/teacher/student_details?subjectId=${idSubject}&classlistId=${idClass}`
        } else if(idClass && !idSubject) {
            endpoint = `/report/teacher/student_details?classlistId=${idClass}`
        } else if(!idClass && idSubject) {
            endpoint = `/report/teacher/student_details?subjectId=${idSubject}`
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

                const endOffset = itemOffset + itemsPerPage;
                setDataGradeDetail(res.data.results.slice(itemOffset, endOffset))
                setPageCount(Math.ceil(res.data.results.length / itemsPerPage));
                setDataGradeDetailAll(res.data.results)
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                console.log('error', err)
            })
    }, [])

    const onSubmitNumberPage = (values) => {
        console.log(values)
    }

    return {
        isLoading,
        tableOption,
        dataHeader,
        sortirHeader,
        initialValuesTableOption,
        resetTableOption,
        onSubmit,
        onSubmitTableOption,
        dataGradeDetail,
        currentPage,
        pageCount,
        itemOffset,
        handlePageClick,
        onSubmitNumberPage,
    }
}

export default useTeacherGradeDetail