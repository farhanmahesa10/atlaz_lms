import React, { useEffect, useState } from 'react'
import { Audio, GlobalToast } from '../../../atoms';
import { AttachFile, Download } from '@mui/icons-material';
import { Form, Formik } from "formik";
import { FormikControl } from '../../../atoms';
import { useManageDetail } from "../../../../services";

function ManageDetail2() {
    const {
        borderStyle,
        instructionStyle,
        initialGrades,
        initialValues2,
        onSubmit2,
        instruction,
        createMarkup,
        uploaded,
        isLoading,
    } = useManageDetail()
    
    return (
        <>
            <GlobalToast />
            {
                instruction && (
                    <>
                        <div className="radius-8 bg-neutral-50 px-24 py-16 mb-24 max-h-336" style={instructionStyle}>
                            <div className="h5 mb-24 text-neutral-300">
                                Instruction
                            </div>
                            {
                                instruction?.map((item, index) => {
                                    return <div key={index} className="font-medium mb-24" dangerouslySetInnerHTML={createMarkup(item.contents)}></div>
                                })
                            }                            
                        </div> 
                    </>
                )
            }

            <div className="radius-8 bg-neutral-50 px-24 py-16" style={borderStyle}>
                <Formik
                    initialValues={initialValues2}
                    onSubmit={onSubmit2}
                    enableReinitialize={true}
                >
                    <Form className="formFormik">
                        <div className="h5 mb-24 text-neutral-300">
                            Student Answer
                        </div>
                        <div className="row d-flex justify-content-end">
                            {
                                initialGrades && initialGrades.map((item, index) => {
                                    if(item.isAudio) {
                                        return <div className="col-md-12">
                                            <div className="d-flex align-items-center justify-content-center mb-24">
                                                <Audio src={item.answer} />
                                                <a href={item.answer} className="ms-auto ml-24">
                                                    <div className="d-flex align-items-center justify-content-center w-40 h-40 radius-8 bg-secondary-500 text-neutral-500">
                                                        <Download />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    } else {
                                        return <div className="col-md-9">
                                        <div className="d-flex align-items-center radius-8 p-24 " style={borderStyle}>
                                            <div className="d-flex align-items-center justify-content-center w-48 h-48 radius-8 mr-16" style={{ backgroundColor: '#EAEDFB', color: '#A0ADEC' }}><AttachFile /></div>
                                            <div>
                                                <div className="font-sm text-neutral-300 mb-4">Uploaded file</div>
                                                <div className="font-medium">
                                                    {
                                                        item.answer !== '' ?
                                                        (<div>{uploaded}</div>) :
                                                        (<div className="text-warning-400">No File Submited</div>)
                                                    }
                                                    
                                                </div>
                                            </div>
                                            <a href="#" className="ms-auto">
                                                <div className="d-flex align-items-center justify-content-center w-40 h-40 radius-8 bg-secondary-500 text-neutral-500">
                                                    <Download />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    }
                                })
                            }                           
                            
                            <div className="col-md-3">
                                <div className="d-flex align-items-end radius-8 px-24 py-16" style={borderStyle}>
                                    <div className='mr-24'>
                                        <div className="font-sm text-neutral-300 mb-4 w-120">Final Grades</div>
                                        <div>
                                            <FormikControl control="input" type="number" name="totalGrades" placeholder="Input grades" />
                                        </div>
                                    </div>
                                    {
                                        isLoading ? (<button type='submit' className='btn btn-primary font-normal btn-disable' disabled >Submit</button>) :
                                        (<button type='submit' className='btn btn-primary font-normal' >Submit</button>)
                                    }
                                </div>

                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default ManageDetail2