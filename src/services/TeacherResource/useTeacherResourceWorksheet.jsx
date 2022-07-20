import React, { useState } from 'react'
import { useFormik } from 'formik';
import { useEffect } from 'react'
import { defConfig, GET, POST } from "../../config/RestAPI";

function useTeacherResourceWorksheet() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [filter, setFilter] = useState(["Junior High School", "Elementary", "Senior High School", "General"])
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
    const [keyword, setKeyword] = useState('')

    const [initialValues, setInitialValues] = useState({
        general: true,
        elementarySchool: true,
        juniorHighSchool: true,
        seniorHighSchool: true,
        showing: "10",
    });

    const [pagination, setPagination] = useState({
        current_page: 0,
        per_page: 10,
        next_page: false,
        prev_page: false,
        total: 0,
        total_page: 0
    })

    const onFilter = (values) => {
        setInitialValues(values)
        let newFilter = []        
        if(values.general) {
            newFilter.push("General")
        }       
        if(values.elementarySchool) {
            newFilter.push("Elementary")
        }       
        if(values.juniorHighSchool) {
            newFilter.push("Junior High School")
        }       
        if(values.seniorHighSchool) {
            newFilter.push("Senior High School")
        }

        if(newFilter.length > 0) {
            setFilter(newFilter)
            setPerPage(parseInt(values.showing))
            initData(page, parseInt(values.showing), keyword, newFilter)
        } else {
            setData([])
            setPagination({
                current_page: 0,
                per_page: 10,
                next_page: false,
                prev_page: false,
                total: 0,
                total_page: 0
            })
        }
    }

    const resetFilter = () => {
        console.log('oke')
    }

    const formik = useFormik({
        initialValues: { keyword: "" },
        onSubmit: values => {
            if(filter.length > 0) {
                setKeyword(values.keyword)
                initData(page, perPage, values.keyword, filter)
            }
        },
    });

    const handlePageClick = (toPage) => {
        setPage(toPage)
        initData(toPage, perPage, keyword, filter)
    }

    const initData = (dataPage, dataPerPage, dataKeyword, dataFilter) => {
        setIsLoading(true)
        setData([])
        GET(`/resources/worksheets?page=${dataPage}&per_page=${dataPerPage}&keyword=${dataKeyword}`, defConfig(dataFilter))
            .then(
                (res) => {
                    setData(res.data)
                    setPagination({
                        current_page: res.pagination.current_page ? res.pagination.current_page : 0,
                        per_page: res.pagination.per_page ? res.pagination.per_page : 10,
                        next_page: res.pagination.next_page ? res.pagination.next_page : false,
                        prev_page: res.pagination.prev_page ? res.pagination.prev_page : false,
                        total: res.pagination.total ? res.pagination.total : 0,
                        total_page: res.pagination.total_page ? res.pagination.total_page : 0
                      })
                    setIsLoading(false)
                }
            )
            .catch(err => {
                setIsLoading(false)
                console.log('error', err.message)
            })
    }

    useEffect(() => {
        initData(page, perPage, keyword, filter)
    }, [])

    return {
        isLoading,
        data,
        initialValues,
        pagination,
        onFilter,
        resetFilter,
        formik,
        handlePageClick,
    }
}

export default useTeacherResourceWorksheet