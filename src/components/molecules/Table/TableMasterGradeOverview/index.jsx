import React, { useState } from 'react'
import zoey from '../../../../assets/images/zoey.png'
import Skeleton from 'react-loading-skeleton'
import { Field, Form, Formik } from 'formik'
import { FormikControl, TableThead } from '../../../atoms'
import { Link } from 'react-router-dom'
import { Offcanvas } from 'react-bootstrap';
import { useMasterGradeOverview } from "../../../../services";
import { Search, TableChart, Launch, ArrowCircleDown, ArrowBack, ArrowForward } from '@mui/icons-material';
import "../Table.scss"

function TableMasterGradeOverview() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    isLoading,
    dataHeader,
    sortirHeader,
    initialValuesTableOption,
    setTableOption,
    onSubmitTableOption,
    dataGradeOverview,
    handlePageClick,
    resetTableOption,
    onSubmit,
    onSubmitNumberPage,
    pagination,
  } = useMasterGradeOverview()

  return (
    <>
      {
        !isLoading ?
          (<>
            <div className="top-table bg-secondary-300">
              <Formik
                initialValues={{ keyword: '' }}
                onSubmit={onSubmit}
              >
                <Form>
                  <div className='w-312'>
                    <FormikControl size="xs" control="input" name="keyword" placeholder="Search anything here" icon={<Search className="text-neutral-200 fs-16" />} />
                  </div>
                </Form>
              </Formik>
              <button className='btn btn-outline bg-white fs-14 text-neutral-500 d-flex' onClick={handleShow}><TableChart className="text-neutral-500 fs-16 mr-6" /> Table option</button>
            </div>
            {
              (initialValuesTableOption.selectSchool || initialValuesTableOption.selectTeacher || initialValuesTableOption.selectClass || initialValuesTableOption.selectSubject) ?
                <div className="show-datatable">
                  <div className="table-responsive">
                    <table className="table-report">
                      <thead>
                        <tr>
                          {
                            dataHeader.map((item, index) => {
                              if (item.status) {
                                return <th key={index}>
                                  <TableThead
                                    title={item.title}
                                    placeholder={item.placeholder}
                                    sortir={item.sortir}
                                    isSorted={item.isSorted}
                                    isSortedDesc={item.isSortedDesc}
                                    onClick={() => { sortirHeader(index) }}
                                    onInput={(e) => { console.log(e.target.value) }}
                                  />
                                </th>
                              }
                            })
                          }
                        </tr>
                      </thead>
                      <tbody>
                      {
                          dataGradeOverview ?
                            (
                              dataGradeOverview.length > 0 ?
                                dataGradeOverview?.map((item, index) => {
                                  return <tr key={index}>
                                    {
                                      item.school && (
                                        <td width="22%">{item.school?.name}</td>
                                      )
                                    }
                                    {
                                      item.teacher && (
                                        <td width="22%">{item.teacher?.name}</td>
                                      )
                                    }
                                    {
                                      item.classlist && (
                                        <td width="22%">{item.classlist?.name} - {item.classlist?.academicYear}</td>
                                      )
                                    }
                                    {
                                      item.subject && (
                                        <td width="22%">{item.subject?.name}</td>
                                      )
                                    }
                                    <td width="12%">
                                      <div className="d-flex">
                                        {item.score ? item.score.toFixed(1) : 'N/A'} <Link to='detail' onClick={() => setTableOption()}><Launch className="text-neutral-100 fs-18 ml-6" /></Link></div>
                                    </td>

                                  </tr>
                                }) : (<tr>
                                  <td className="datanotfound text-center font-sm text-neutral-200" colSpan="5">
                                    No data available
                                  </td>
                                </tr>)
                            )
                            :
                            (<tr>
                              <td className="datanotfound text-center font-sm text-neutral-200" colSpan={dataHeader.length}>
                                  No data available
                              </td>
                            </tr>)
                        }
                      </tbody>
                    </table>
                  </div>
                  <div className="navigation-table">
                    <div className="font-sm text-neutral-300 d-none d-md-block">
                      {pagination.current_page} of {pagination.total_page}
                    </div>
                    <div className="pagination-table">
                      <div className="font-sm text-neutral-300 your-page d-flex align-items-center">
                        You're in page {pagination.current_page}
                        <Formik
                          initialValues={{ numberpage: pagination.current_page }}
                          onSubmit={onSubmitNumberPage}
                        >
                          <Form>
                            <div className="w-48 ml-16">
                              <FormikControl size="xs" control="input" type="number" name="numberpage" />
                            </div>
                          </Form>
                        </Formik>
                      </div>
                      <div className="divider-nav"></div>
                      <div style={{ marginRight: '24px' }}>
                        {
                          pagination.prev_page ?
                            (<button className="btn-paginate" onClick={() => handlePageClick(pagination.current_page - 1)} ><ArrowBack style={{ fontSize: "16px" }} /></button>)
                            : (<button className="btn-paginate btn-disable" disabled><ArrowBack style={{ fontSize: "16px" }} /></button>)
                        }
                      </div>
                      <div>
                        {
                          pagination.next_page ?
                            (<button className="btn-paginate" onClick={() => handlePageClick(pagination.current_page + 1)}><ArrowForward style={{ fontSize: "16px" }} /></button>)
                            : (<button className="btn-paginate btn-disable" disabled><ArrowForward style={{ fontSize: "16px" }} /></button>)
                        }
                      </div>
                    </div>
                  </div>
                </div>

                :
                <div className="text-center">
                  <img src={zoey} alt="" className="w-174 mb-24" />
                  <div className="font-normal text-neutral-500">
                    Please select "Select Data" button <br />
                    to display the data.
                  </div>
                </div>
            }
          </>)
          : (<Skeleton count={2} height={50} />)
      }

      <Offcanvas
        show={show}
        placement="end"
        onHide={handleClose}
        className="offcanvas-report w-306"
      >
        <Formik initialValues={initialValuesTableOption} onSubmit={onSubmitTableOption} enableReinitialize={true} >
          <Form>
            <div className="report-header d-flex justify-content-between align-items-center p-24 mb-16">
              <h6>Table Option</h6>
              <div className="d-flex">
                <button type='submit' className="btn btn-offcanvas font-sm text-info-500 mr-16">
                  Apply
                </button>
                <button type='reset' className="btn btn-offcanvas font-sm text-neutral-200" onClick={resetTableOption}>
                  Reset
                </button>
              </div>
            </div>
            <div className="report-options ml-24 mr-48 py-16">
              <div className="font-normal text-neutral-300 mb-24">Data select</div>
              <div className="d-flex align-items-center mb-24">
                <Field
                  name="selectSchool"
                  id="selectSchool"
                  type="checkbox"
                  className="mr-10 form-check-input"
                />
                <label htmlFor="selectSchool" className="font-sm cursor-pointer">School name</label>
              </div>
              <div className="d-flex align-items-center mb-24">
                <Field
                  name="selectTeacher"
                  id="selectTeacher"
                  type="checkbox"
                  className="mr-10 form-check-input"
                />
                <label htmlFor="selectTeacher" className="font-sm cursor-pointer">Teacher name</label>
              </div>
              <div className="d-flex align-items-center mb-24">
                <Field
                  name="selectClass"
                  id="selectClass"
                  type="checkbox"
                  className="mr-10 form-check-input"
                />
                <label htmlFor="selectClass" className="font-sm cursor-pointer">Class</label>
              </div>
              <div className="d-flex align-items-center mb-8">
                <Field
                  name="selectSubject"
                  id="selectSubject"
                  type="checkbox"
                  className="mr-10 form-check-input"
                />
                <label htmlFor="selectSubject" className="font-sm cursor-pointer">Subject</label>
              </div>
            </div>
            <div className="report-options ml-24 mr-48 py-16">
              <div className="font-normal text-neutral-300 mb-24">Showing data</div>
              <label className='d-flex align-items-center mb-24'>
                <Field type="radio" name="showing" className="form-check-input" value="10" />
                <div className="ml-6 font-sm cursor-pointer">10 data</div>
              </label>
              <label className='d-flex align-items-center mb-24'>
                <Field type="radio" name="showing" className="form-check-input" value="25" />
                <div className="ml-6 font-sm cursor-pointer">25 data</div>
              </label>
              <label className='d-flex align-items-center mb-24'>
                <Field type="radio" name="showing" className="form-check-input" value="50" />
                <div className="ml-6 font-sm cursor-pointer">50 data</div>
              </label>
              <label className='d-flex align-items-center mb-8'>
                <Field type="radio" name="showing" className="form-check-input" value="100" />
                <div className="ml-6 font-sm cursor-pointer">100 data</div>
              </label>
            </div>
            <div className="report-options ml-24 mr-48 py-16">
              <div className="font-normal text-neutral-300 mb-16">Action</div>
              <button className='btn btn-outline bg-white fs-14 text-neutral-500 d-flex'>
                <ArrowCircleDown className="text-neutral-500 fs-18 mr-6" /> Export table
              </button>
            </div>
          </Form>
        </Formik>
      </Offcanvas>
    </>
  )
}

export default TableMasterGradeOverview