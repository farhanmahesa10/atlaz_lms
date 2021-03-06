import React, { useState } from "react";
import TeacherTrainingCard from "../Cards/TeacherTrainingCard";
import zoey from '../../../assets/images/zoey.png'
import { Offcanvas } from "react-bootstrap";
import { Field, Form, Formik } from "formik";
import { useTeacherResourceTraining } from "../../../services";
import {
  FilterList,
  ChevronRight,
  ChevronLeft,
} from "@mui/icons-material";
import Skeleton from "react-loading-skeleton";

const TeacherResourceTraining = () => {
  const {
    isLoading,
    data,
    initialValues,
    pagination,
    onFilter,
    resetFilter,
    formik,
    handlePageClick,
  } = useTeacherResourceTraining()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <div className="d-flex justify-content-between align-items-center my-24">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-input">
              <div className="input-area h-40 bg-white md-w-432">
                <input
                  type="text"
                  className="w-full input-control radius-8 py-8 pl-16 "
                  placeholder="Teacher training name"
                  name="keyword"
                  maxLength="18"
                  onChange={formik.handleChange}
                  value={formik.values.keyword}
                />
                <span className="py-8 pl-16 pr-2 h-p-100 d-flex align-items-center ">
                  <button className="btn-primary font-xs" type="submit">
                    Search
                  </button>
                </span>
              </div>
            </div>
          </form>
          <button className='btn btn-outline bg-white fs-14 text-neutral-500 d-flex' onClick={handleShow}>
            <FilterList className="text-neutral-500 fs-16 mr-6" /> Filter
          </button>
        </div>
        {
          !isLoading ? 
          (<>
            <div className="mt-24">
          <p className="font-sm-medium md-font-medium">
            <span className="text-neutral-300 ">Showing </span>
            <span className="text-neutral-500">{pagination.total} result</span>
          </p>
          <div className="row mt-8">
            {
              data && data?.map((item, index) => {
                return <div key={index} className="mb-24 col-6 col-md-4 col-xl-3">
                  <TeacherTrainingCard data={item} />
                </div>
              })
            }
            {
              data.length === 0 && (
                <div className="text-center">
                  <img src={zoey} alt="" className="w-174" />
                  <div className="font-normal text-neutral-500">
                    Data not found.
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="text-center mt-32">
          {
            pagination.prev_page ?
              (<button className="btn-secondary text-primary-500 font-xs py-6 px-8 mx-16" onClick={() => handlePageClick(pagination.current_page - 1)}><ChevronLeft /></button>)
              : (<button className="btn-secondary text-primary-500 font-xs py-6 px-8 mx-16" disabled style={{ opacity: 0.5 }}><ChevronLeft /></button>)
          }
          {
            pagination.next_page ?
              (<button className="btn-secondary text-primary-500 font-xs py-6 px-8 mx-16" onClick={() => handlePageClick(pagination.current_page + 1)}><ChevronRight /></button>)
              : (<button className="btn-secondary text-primary-500 font-xs py-6 px-8 mx-16" disabled style={{ opacity: 0.5 }}><ChevronRight /></button>)
          }
        </div>
          </>)
          : (
            <div className="row">
              <div className="col-6 col-md-4 col-xl-3">
                <Skeleton height={175} />
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <Skeleton height={175} />
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <Skeleton height={175} />
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <Skeleton height={175} />
              </div>
            </div>
          )
        }
      </div>

      <Offcanvas
        show={show}
        placement="end"
        onHide={handleClose}
        className="offcanvas-report w-306"
      >
        <Formik initialValues={initialValues} onSubmit={onFilter} enableReinitialize={true} >
          <Form>
            <div className="report-header d-flex justify-content-between align-items-center p-24 mb-16">
              <h6>Filter</h6>
              <div className="d-flex">
                <button type='submit' className="btn btn-offcanvas font-sm text-info-500 mr-16">
                  Apply
                </button>
                <button type='reset' className="btn btn-offcanvas font-sm text-neutral-200" onClick={resetFilter}>
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
          </Form>
        </Formik>
      </Offcanvas>
    </>
  );
};

export default TeacherResourceTraining;
