import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { FormikControl, TableThead } from '../../../atoms'
import { Link } from 'react-router-dom'
import { Search, Launch, ArrowBack, ArrowForward } from '@mui/icons-material';
import { useManageGrades } from "../../../../services";
import "../Table.scss"

function TableTeacherManageGrades() {
  const {
    isLoading,
    dataHeader,
    sortirHeader,
    dataManageGrades,
    currentPage,
    pageCount,
    handlePageClick,
  } = useManageGrades()

  const onSubmit = () => {
    console.log('first')
  }

  return (
    <>
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
                dataManageGrades ?
                  (
                    dataManageGrades.length > 0 ?
                      dataManageGrades?.map((item, index) => {
                        return <tr key={index}>
                          <td>{item.classlist.name} - {item.classlist.academicYear}</td>
                          <td>{item.subject.name}</td>
                          {/* <td width="15%"><div className={`font-xs-medium radius-4 px-8 py-2 d-inline nowrap ${item.status}`}>{item.status}</div></td> */}
                          <td width="8%">
                            <Link to={`information/${item.subject._id}/${item.classlist._id}`}><Launch className="text-neutral-300 fs-18 ml-6" /></Link>
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
    </>
  )
}

export default TableTeacherManageGrades