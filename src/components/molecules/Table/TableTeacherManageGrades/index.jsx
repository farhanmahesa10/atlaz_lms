import React, { useState } from 'react'
import { TableThead } from '../../../atoms'
import { Link } from 'react-router-dom'
import { Search, Launch, ArrowBack, ArrowForward } from '@mui/icons-material';
import { useManageGrades } from "../../../../services";
import "../Table.scss"
import Skeleton from 'react-loading-skeleton';

function TableTeacherManageGrades() {
  const {
    isLoading,
    isLoadingTable,
    dataHeader,
    sortirHeader,
    dataManageGrades,
    handlePageClick,
    formik,
    pagination,
  } = useManageGrades()

  return (
    <>
      {
        !isLoading ?
          (<>
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
                      dataManageGrades ?
                        (
                          dataManageGrades.length > 0 ?
                            dataManageGrades?.map((item, index) => {
                              return <tr key={index}>
                                {
                                  item.classlist && (
                                    <td>{item.classlist?.name} - {item.classlist?.academicYear}</td>
                                  )
                                }
                                {
                                  item.subject && (
                                    <td>{item.subject?.name}</td>
                                  )
                                }
                                {
                                  item.status && (
                                    <td><div className={`font-xs-medium radius-4 px-8 py-2 d-inline nowrap ${item.status}`}>{item.status}</div></td>
                                  )
                                }
                                <td>
                                  <Link to={`information/${item.subject?._id}/${item.classlist?._id}`}><Launch className="text-neutral-300 fs-18 ml-6" /></Link>
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
          </>)
          : <Skeleton height={50} />
      }

    </>
  )
}

export default TableTeacherManageGrades