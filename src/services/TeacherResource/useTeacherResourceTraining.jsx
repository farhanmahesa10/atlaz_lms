import React, { useState } from 'react'
import { useFormik } from 'formik';
import { useEffect } from 'react'
import { defConfig, GET, POST } from "../../config/RestAPI";

function useTeacherResourceTraining() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
    const [keyword, setKeyword] = useState('')

    const [initialValues, setInitialValues] = useState({
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
        setPerPage(parseInt(values.showing))
        initData(page, parseInt(values.showing), keyword)
    }

    const resetFilter = () => {
        console.log('oke')
    }

    const formik = useFormik({
        initialValues: { keyword: "" },
        onSubmit: values => {
            setKeyword(values.keyword)
            initData(page, perPage, values.keyword)
        },
    });

    const handlePageClick = (toPage) => {
        setPage(toPage)
        initData(toPage, perPage, keyword)
    }

    const initData = (dataPage, dataPerPage, dataKeyword) => {
        setIsLoading(true)
        setData([])
        GET(`/resources/training_videos?page=${dataPage}&per_page=${dataPerPage}&keyword=${dataKeyword}`, defConfig())
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
        initData(page, perPage, keyword)
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

export default useTeacherResourceTraining