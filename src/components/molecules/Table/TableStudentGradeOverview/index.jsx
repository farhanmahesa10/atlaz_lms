import React, { useState } from 'react'
import zoey from '../../../../assets/images/zoey.png'
import { Field, Form, Formik } from 'formik'
import { FormikControl, TableThead } from '../../../atoms'
import { Link } from 'react-router-dom'
import { Offcanvas } from 'react-bootstrap';
import { useExportExcel, useStudentGradeOverview } from "../../../../services";
import { Search, TableChart, Launch, ArrowCircleDown, ArrowBack, ArrowForward } from '@mui/icons-material';
import "../Table.scss"

function TableStudentGradeOverview() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    isLoading,
    isLoadingTable,
    dataHeader,
    sortirHeader,
    initialValuesTableOption,
    setTableOption,
    onSubmitTableOption,
    dataGradeOverview,
    handlePageClick,
    formik,
    onSubmit,
    pagination,
    dataExcel,
    csvDataName,
  } = useStudentGradeOverview()
  const { exportToExcel } = useExportExcel()

  return (
    <>
      <div className="top-table bg-secondary-300">
        {/* <Formik
          initialValues={{ keyword: '' }}
          onSubmit={onSubmit}
        >
          <Form>
            <div className='w-312'>
              <FormikControl size="xs" control="input" name="keyword" placeholder="Search anything here" icon={<Search className="text-neutral-200 fs-16" />} />
            </div>
          </Form>
        </Formik> */}
        <button className='btn btn-outline bg-white fs-14 text-neutral-500 d-flex ms-auto' onClick={handleShow}><TableChart className="text-neutral-500 fs-16 mr-6" /> Table option</button>
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
                          return <th key={index} width={item.width}>
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
                              <td>{item.classlist.name} - {item.classlist.academicYear}</td>
                              <td width="45%">{item.subject.name}</td>
                              <td width="14%">
                                <div className="d-flex">
                                  {item.score ? item.score.toFixed(1) : 'N/A'} <Link to={`score/${item.subject._id}/${item.classlist._id}`} onClick={() => setTableOption()}><Launch className="text-neutral-100 fs-18 ml-6" /></Link></div>
                              </td>
                            </tr>
                          }) : (<tr>
                            <td className="datanotfound text-center font-sm text-neutral-200" colSpan="5">
                            {
                                      isLoadingTable ? (<>Loading data...</>) : (<>No data available</>)
                                    }
                            </td>
                          </tr>)
                      )
                      :
                      (<tr>
                        <td className="datanotfound text-center font-sm text-neutral-200" colSpan="5">
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
                        You're in page
                        <form onSubmit={formik.handleSubmit}>
                          <div className="w-48 ml-16">
                            <div className="form-input text-start">
                              <div className="input-area h-32 font-xs bg-white">
                                <input type="number" id="topage" name="topage"
                                  className="w-full input-control radius-8 py-8 pl-16 pr-16 font-xs"
                                  onChange={formik.handleChange}
                                  value={formik.values.topage}
                                />
                              </div>
                            </div>
                          </div>
                        </form>
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
                <button type='reset' className="btn btn-offcanvas font-sm text-neutral-200">
                  Reset
                </button>
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
              <button className='btn btn-outline bg-white fs-14 text-neutral-500 d-flex' onClick={() => exportToExcel([dataExcel], csvDataName, "Grade-Oveview")}>
                <ArrowCircleDown className="text-neutral-500 fs-18 mr-6" /> Export table
              </button>
            </div>
          </Form>
        </Formik>
      </Offcanvas>
    </>
  )
}

export default TableStudentGradeOverview