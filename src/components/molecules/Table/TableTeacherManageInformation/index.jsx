import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { FormikControl, TableThead } from '../../../atoms'
import { Link } from 'react-router-dom'
import { Offcanvas } from 'react-bootstrap';
import { useManageInformation } from "../../../../services";
import { Search, TableChart, ArrowCircleDown, ArrowBack, ArrowForward, FindInPage } from '@mui/icons-material';
import "../Table.scss"
import GradeCard from '../../Cards/GradeCard';
import moment from 'moment';

function TableTeacherManageInformation() {
  const {
    isLoading,
    dataGradesInformation,
    tableOption,
    dataHeader,
    sortirHeader,
    initialValuesTableOption,
    onSubmitTableOption,
    currentPage,
    pageCount,
    handlePageClick,
  } = useManageInformation()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const resetTableOption = () => {
    console.log('tes')
  }

  const onSubmit = () => {
    console.log('first')
  }

  useEffect(() => {
    console.log('table')
  }, [])

  return (
    <>
      <div className="cards-grade-all mb-24">
        <div className="row">
          <GradeCard tableOption={tableOption} />
        </div>
      </div>
      {/* <div className="top-table bg-secondary-300">
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
      </div> */}
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
                dataGradesInformation ?
                  (
                    dataGradesInformation.length > 0 ?
                      dataGradesInformation?.map(item => {
                        return <tr>
                          <td>{item.student.name}</td>
                          <td>{item.lesson.name}</td>
                          <td>
                            {item.subtopic.name} <br />
                            {moment(item.timeline.startDateTime).format('Y-MM-DD LT')}
                          </td>
                          <td width="10%">{item.score}</td>
                          <td width="10%">
                            <Link to={`detail/${item._id}`}><FindInPage className="text-neutral-300 fs-18" /></Link>
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
                    <td className="datanotfound text-center font-sm text-neutral-200" colSpan="5">
                      {
                        isLoading ? (<>Loading data...</>)
                        : (<>No data available</>)
                      }
                    </td>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
        <div className="navigation-table">
          <div className="font-sm text-neutral-300 d-none d-md-block">
            { pageCount !== 0 ? currentPage + 1 : pageCount } of {pageCount}
          </div>
          <div className="pagination-table">
            {/* <div className="font-sm text-neutral-300 your-page">
              You're in page {' '}
              <input type="number" value={1} className="numberpage" />
            </div>
            <div className="divider-nav"></div> */}
            <div style={{ marginRight: '24px' }}>
              {
                currentPage > 0 ?
                  (<button className="btn-paginate" onClick={() => handlePageClick(currentPage - 1)} ><ArrowBack style={{ fontSize: "16px" }} /></button>)
                  : (<button className="btn-paginate btn-disable" disabled><ArrowBack style={{ fontSize: "16px" }} /></button>)
              }
            </div>
            <div>
              {
                currentPage < pageCount - 1 ?
                  (<button className="btn-paginate" onClick={() => handlePageClick(currentPage + 1)}><ArrowForward style={{ fontSize: "16px" }} /></button>)
                  : (<button className="btn-paginate btn-disable" disabled><ArrowForward style={{ fontSize: "16px" }} /></button>)
              }
            </div>
          </div>
        </div>
      </div>



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
              <div className="font-normal text-neutral-300 mb-24">Assessment status</div>
              <label className='d-flex align-items-center mb-24'>
                <Field type="radio" name="assessmentStatus" className="form-check-input" value="All" />
                <div className="ml-6 font-sm cursor-pointer">All</div>
              </label>
              <label className='d-flex align-items-center mb-24'>
                <Field type="radio" name="assessmentStatus" className="form-check-input" value="Ungraded" />
                <div className="ml-6 font-sm cursor-pointer">Ungraded</div>
              </label>
              <label className='d-flex align-items-center mb-24'>
                <Field type="radio" name="assessmentStatus" className="form-check-input" value="Graded" />
                <div className="ml-6 font-sm cursor-pointer">Graded</div>
              </label>
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

export default TableTeacherManageInformation