import React, { useState } from 'react'
import zoey from '../../../../assets/images/zoey.png'
import { Field, Form, Formik } from 'formik'
import { FormikControl, TableThead } from '../../../atoms'
import { Link } from 'react-router-dom'
import { Offcanvas } from 'react-bootstrap';
import { Search, TableChart, Launch, ArrowCircleDown, ArrowBack, ArrowForward } from '@mui/icons-material';
import "../Table.scss"

function TableMasterGradeOverview() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dataHeader, setDataHeader] = useState([
    {
      title: 'School Name',
      placeholder: 'e.g. Atlaz School',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Teacher Name',
      placeholder: 'e.g. Nick',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Class',
      placeholder: 'e.g. Atlaz Class 1',
      search: '',
      sortir: true,
      isSorted: false,
      isSortedDesc: false,
      status: true,
    },
    {
      title: 'Subject',
      placeholder: 'e.g. English',
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
    selectSchool: true,
    selectTeacher: true,
    selectClass: true,
    selectSubject: true,
    showing: "10",
  })

  const setTableOption = (values) => {
    const dataTables = []
    if(initialValuesTableOption.selectSchool) {
      dataTables.push({
        name: 'school',
        title: 'School name',
        value: true,
        icon: 'School',
        backgroundIcon: '#EAEDFB',
        colorIcon: '#A0ADEC',
        detail: 'Data School name'
      })
    }
    if(initialValuesTableOption.selectTeacher) {
      dataTables.push({
        name: 'teacher',
        title: 'Teacher  name',
        value: true,
        icon: 'SupervisedUserCircle',
        backgroundIcon: '#EAF7FA',
        colorIcon: '#4FAED4',
        detail: 'Data Teacher name'
      })
    }
    if(initialValuesTableOption.selectClass) {
      dataTables.push({
        name: 'class',
        title: 'Class',
        value: true,
        icon: 'EventSeat',
        backgroundIcon: '#FAEBF2',
        colorIcon: '#ECB1CF',
        detail: 'Data Class'
      })
    }
    if(initialValuesTableOption.selectSubject) {
      dataTables.push({
        name: 'subject',
        title: 'Subject',
        value: true,
        icon: 'MenuBook',
        backgroundIcon: '#FFF8E6',
        colorIcon: '#FDC228',
        detail: 'Data Subject'
      })
    }
    localStorage.setItem("GRADE_TABLE_OPTION", JSON.stringify(initialValuesTableOption))
    localStorage.setItem("GRADE_DETAIL_TABLE_OPTION", JSON.stringify(dataTables))
  }

  const resetTableOption = () => { 
    console.log('tes')
  }

  const onSubmit = () => {
    console.log('first')
  }

  const onSubmitTableOption = (values) => {
    setInitialValuesTableOption(values)
    let newHeader = []
    dataHeader.map((item, index) => {
      if(index < 4) {
        let data = {
          ...item,
          status: Object.values(values)[index]
        }
        newHeader.push(data)
      } else {
        newHeader.push(item)
      }
    })
    setDataHeader(newHeader)
  }

  return (
    <>
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
                      if(item.status) {
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
                  <td>SD 01 Jakarta Barat</td>
                  <td>Muhammad Hisyam Halimy</td>
                  <td>Kelas 1 A - 2022/2023</td>
                  <td>English Play 01</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      80 <Link to="detail/1" onClick={() => setTableOption()}><Launch className="text-neutral-100 fs-18 ml-6" /></Link></div>
                  </td>
                </tr>
                <tr>
                  <td>SD 01 Jakarta Barat</td>
                  <td>Muhammad Hisyam Halimy</td>
                  <td>Kelas 1 A - 2022/2023</td>
                  <td>English Play 01</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      80 <Link to="detail/2" onClick={() => setTableOption()}><Launch className="text-neutral-100 fs-18 ml-6" /></Link></div>
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