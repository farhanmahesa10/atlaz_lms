import React, { useEffect, useState } from 'react'
import { Search } from '@mui/icons-material';
import { Field, Form, Formik } from "formik";
import { GlobalToast, ModalTrigger } from '../../../atoms';
import { useManageDetail } from "../../../../services";

function ManageDetail1() {
    const { 
        borderStyle,
        initialGrades,
        initialValues1,
        styleRemark,
        finalGrades,
        changeRemark,
        onSubmit1,
        isLoading,
     } = useManageDetail()

    return (
        <>
            <GlobalToast />
            <div className="table-responsive radius-8 bg-neutral-50" style={borderStyle}>
                <Formik
                    initialValues={initialValues1}
                    onSubmit={onSubmit1}
                    enableReinitialize={true}
                >
                    {formik => (
                        <Form className="formFormik">
                            <table className="table-manage">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th className="text-start">Answer</th>
                                        <th className="text-start">Answer Key</th>
                                        <th>Question</th>
                                        <th>Remark</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        initialGrades && initialGrades?.map((item, index) => {
                                            return <tr key={index}>
                                                <td width="5%" className="text-center">{index + 1}</td>
                                                <td width="37%">{item.answer}</td>
                                                <td>{item.answerKey}</td>
                                                <td width="10%">
                                                    <ModalTrigger
                                                        target="modalViewQuestion"
                                                        data={{ data: item.modal, nomor: index + 1 }}
                                                        className="d-flex align-items-center justify-content-center text-info-500 font-sm-medium cursor-pointer"
                                                    >
                                                        <div className="mr-8">View</div> <Search style={{ fontSize: '20px' }} />
                                                    </ModalTrigger>
                                                </td>
                                                <td width="11%" className="text-center">
                                                    <Field
                                                        as="select"
                                                        id={`remark[${index}]`} name={`remark[${index}]`}
                                                        className={`select-remark ${styleRemark[index]}`}
                                                        onInput={(e) => {
                                                            formik.setFieldValue(`remark[${index}]`, e.target.value)
                                                            changeRemark(e, index)
                                                        }}
                                                    >
                                                        <option value="Uncheck" className='font-sm text-neutral-200' disabled>Select</option>
                                                        <option value="Correct" className='font-sm-medium text-success-600'>Correct</option>
                                                        <option value="Incorrect" className='font-sm-medium text-danger-500'>Incorrect</option>
                                                    </Field>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className="d-flex justify-content-end px-24 py-16">
                                <div className="d-flex align-items-center radius-8 px-24 py-16" style={borderStyle}>
                                    <div className='mr-24 text-end'>
                                        <div className="font-sm text-neutral-400 mb-4">Final Grades</div>
                                        <div className='h5'>
                                            { console.log('finalGrades', finalGrades)}
                                            {
                                                finalGrades !== null ? finalGrades.toFixed(1) : 'N/A'
                                            }
                                        </div>
                                    </div>
                                    {
                                        finalGrades !== null ? 
                                        (isLoading ? (<button type='submit' className='btn btn-primary font-normal btn-disable' disabled >Submit</button>) :
                                        (<button type='submit' className='btn btn-primary font-normal' >Submit</button>)
                                        )                                        
                                        : (<button type='submit' className='btn btn-primary font-normal btn-disable' disabled >Submit</button>)
                                    }
                                    
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default ManageDetail1