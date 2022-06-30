import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { FormikControl, TableThead } from '../../../atoms'
import { Link } from 'react-router-dom'
import { Offcanvas } from 'react-bootstrap';
import { Search, TableChart, Launch, ArrowCircleDown, ArrowBack, ArrowForward, School } from '@mui/icons-material';
import "../Table.scss"
import GradeCard from '../../Cards/GradeCard';

function TableMasterGradeDetail() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [tableOption, setTableOption] = useState()

  const [dataHeader, setDataHeader] = useState([
    {
      title: 'School Name',
      placeholder: 'e.g. Atlaz School',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: false,
    },
    {
      title: 'Teacher Name',
      placeholder: 'e.g. Nick',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: false,
    },
    {
      title: 'Class',
      placeholder: 'e.g. Atlaz Class 1',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: false,
    },
    {
      title: 'Subject',
      placeholder: 'e.g. English',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: false,
    },
    {
      title: 'Student Name',
      placeholder: 'e.g. Nick',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Subject Progress',
      placeholder: 'e.g. 100',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Avg. Grade',
      placeholder: 'e.g. 100',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    }
  ])

  const sortirHeader = (index) => {
    let newHeader = []
    dataHeader.map((item, key1) => {
      if (key1 === index) {
        if (!item.isSorted && !item.isSortedDesc) {
          let data = {
            ...item,
            isSorted: true,
            isSortedDesc: true
          }
          newHeader.push(data)
        }
        if (item.isSorted && item.isSortedDesc) {
          let data = {
            ...item,
            isSorted: true,
            isSortedDesc: false
          }
          newHeader.push(data)
        }
        if (item.isSorted && !item.isSortedDesc) {
          let data = {
            ...item,
            isSorted: false,
            isSortedDesc: false
          }
          newHeader.push(data)
        }
      } else {
        let data = {
          ...item,
          isSorted: false,
          isSortedDesc: false
        }
        newHeader.push(data)
      }
    })
    setDataHeader(newHeader)
  }

  const [initialValuesTableOption, setInitialValuesTableOption] = useState({
    selectSchool: false,
    selectTeacher: false,
    selectClass: false,
    selectSubject: false,
    selectStudent: true,
    subjectProgress: true,
    showing: "10",
  })

  const resetTableOption = () => {
    console.log('tes')
  }

  const onSubmit = () => {
    console.log('first')
  }

  const onSubmitTableOption = (values) => {
    console.log('showing')
  }

  useEffect(() => {
    setTableOption(JSON.parse(localStorage.getItem('GRADE_DETAIL_TABLE_OPTION')))

    const options = JSON.parse(localStorage.getItem('GRADE_TABLE_OPTION'))
    setInitialValuesTableOption({
      ...initialValuesTableOption,
      selectSchool: options.selectSchool,
      selectTeacher: options.selectTeacher,
      selectClass: options.selectClass,
      selectSubject: options.selectSubject,
    })

    let newHeader = []
    dataHeader.map((item, index) => {
      if(index < 4) {
        let data = {
          ...item,
          status: !Object.values(options)[index]
        }
        newHeader.push(data)
      } else {
        newHeader.push(item)
      }
    })
    setDataHeader(newHeader)
  }, [])

  return (
    <>
      <div className="cards-grade-all mb-24">
        <div className="row">
          <GradeCard tableOption={tableOption} />
          {/* {
            tableOption && tableOption?.map(item => {
              return (
                <div className={`col-md-${12/tableOption.length}`}>
                  <div className="card-grade">
                    {
                      (item.name === 'school') ?
                      <div className="icon school"><School style={{fontSize: '26px'}} /></div>
                      :
                      item.name === 'teacher' ?
                      <div className="icon teacher"><SupervisedUserCircle style={{fontSize: '26px'}} /></div>
                      :
                      item.name === 'class' ?
                      <div className="icon class"><ChairAlt style={{fontSize: '26px'}} /></div>
                      :
                      item.name === 'subject' ?
                      <div className="icon subject"><MenuBook style={{fontSize: '26px'}} /></div>
                      : ''
                    }                    
                    <div className="detail">
                      <div className="name font-sm">{item.title}</div>
                      <div className="desc font-normal">SD 01 Jakarta Barat</div>
                    </div>
                  </div>
                </div>
              )
            })
          } */}
        </div>
      </div>
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
              <tr>
                <td>Student Name here</td>
                <td width="14%">
                  <div className="font-xs-medium radius-4 px-8 py-2 d-inline nowrap completed">500 / 500 Completed</div>
                </td>
                <td width="12%">
                  <div className="d-flex justify-content-center">
                    80 <Link to="score/1"><Launch className="text-neutral-100 fs-18 ml-6" /></Link></div>
                </td>
              </tr>
              <tr>
                <td>Student Name here</td>
                <td>
                  <div className="font-xs-medium radius-4 px-8 py-2 d-inline nowrap ongoing">222 / 500 Completed</div>
                </td>
                <td>
                  <div className="d-flex justify-content-center">
                    80 <Link to="score/2"><Launch className="text-neutral-100 fs-18 ml-6" /></Link></div>
                </td>
              </tr>
              <tr>
                <td>Student Name here</td>
                <td>
                  <div className="font-xs-medium radius-4 px-8 py-2 d-inline nowrap incompleted">0 / 500 Completed</div>
                </td>
                <td>
                  <div className="d-flex justify-content-center">
                    80 <Link to="score/3"><Launch className="text-neutral-100 fs-18 ml-6" /></Link></div>
                </td>
              </tr>
              <tr>
                <td className="datanotfound text-center font-sm text-neutral-200" colSpan="5">
                  No data available
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="navigation-table">
          <div className="font-sm text-neutral-300 d-none d-md-block">
            {/* Page {' '} {pageIndex + 1} of {pageOptions.length}{' '} */}
            ... of ...
          </div>
          <div className="pagination-table">
            <div className="font-sm text-neutral-300 your-page">
              You're in page {' '}
              <input type="number" value={1} className="numberpage" />
            </div>
            <div className="divider-nav"></div>
            <div style={{ marginRight: '24px' }}>
              {/* <Buttons control="button" btnWrapper isShadow btnExSmall btnIcon onClick={() => previousPage()} btnDisable={!canPreviousPage} name={<ArrowBack style={{ fontSize: "20px" }} />} /> */}
              <button className="btn-paginate"><ArrowBack style={{ fontSize: "16px" }} /></button>
            </div>
            <div>
              {/* <Buttons control="button" btnWrapper isShadow btnExSmall btnIcon onClick={() => nextPage()} btnDisable={!canNextPage} name={<ArrowForward style={{ fontSize: "20px" }} />} /> */}
              <button className="btn-paginate"><ArrowForward style={{ fontSize: "16px" }} /></button>
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

export default TableMasterGradeDetail