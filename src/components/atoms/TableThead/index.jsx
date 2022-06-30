import React from 'react'
import FormikControl from '../Formik/FormikControl'
import { Form, Formik } from 'formik'
import { Sort } from '@mui/icons-material';

function TableThead(props) {
    const { title, placeholder, sortir, isSorted, isSortedDesc, onSubmit, onClick, onInput } = props

    return (
        <>
            <div className="sortir mb-16" onClick={onClick} >
                {title}
                {   
                    placeholder !== '' &&
                    (sortir && 
                    (isSorted) ? 
                    (isSortedDesc ? <Sort style={{ transform: 'rotate(180deg)', fontSize: '14px' }} /> : 
                    <Sort style={{ fontSize: '14px' }} />)
                    : <Sort style={{ opacity: '0.3', fontSize: '14px' }} />)
                }
            </div>
            {
                placeholder !== '' && sortir &&
                <Formik
                    initialValues={{ keyword: ''}}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <FormikControl size="xs" control="input" name="keyword" placeholder={placeholder} onInput={onInput} />
                    </Form>
                </Formik>
            }
        </>
    )
}

export default TableThead