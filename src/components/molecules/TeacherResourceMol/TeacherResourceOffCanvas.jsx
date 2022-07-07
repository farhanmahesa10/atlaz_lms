import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Divider, FormikControl } from "../../atoms";
import FilterListIcon from "@mui/icons-material/FilterList";
const TeacherResourceOffCanvas = (props) => {
  const [showCanvas, setShowCanvas] = useState(0);

  const handleClose = () => setShowCanvas(false);
  const handleShow = () => setShowCanvas(true);

  const initialValues = {
    general: true,
    elementarySchool: true,
    juniorHighSchool: true,
    seniorHighSchool: true,
    showing: "10",
  };
  return (
    <>
      <button
        className="btn-outline font-normal w-full md-w-auto d-flex align-items-center justify-content-center "
        onClick={() => setShowCanvas(true)}
      >
        <FilterListIcon className="fs-20 mr-16" />
        Filter
      </button>
      <Offcanvas
        show={showCanvas}
        onHide={handleClose}
        {...props}
        placement={"end"}
        className="md-radius-tl-8 md-radius-bl-8 w-full md-w-306 p-0"
      >
        <Offcanvas.Body className="p-0 m-0">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(formik) => (
              <Form>
                <div
                  className="d-flex justify-content-between p-24  border-secondary-500"
                  style={{ borderBottom: "2px solid" }}
                >
                  <div>
                    <h6>Filter</h6>
                  </div>
                  <div className="d-flex">
                    <p
                      className="font-sm-medium text-info-500 mr-16 cursor-pointer hover-text-info-400"
                      onClick={() => formik.submitForm()}
                    >
                      Apply
                    </p>
                    <p className="font-sm-medium text-neutral-200 hover-text-neutral-100 cursor-pointer">
                      Reset
                    </p>
                  </div>
                </div>
                <div className="mt-32">
                  <div className="px-24 ">
                    <p className="text-neutral-300">Data select</p>

                    <div className="p-8 mt-16">
                      <div>
                        <FormikControl
                          control="checkbox"
                          name="general"
                          value="General"
                          label="General"
                          labelClassName="font-sm-medium text-neutral-500 pt-4"
                          defaultChecked={true}
                        />
                      </div>
                    </div>
                    <div className="p-8 mt-8">
                      <div>
                        <FormikControl
                          control="checkbox"
                          name="elementarySchool"
                          value="Elementary School"
                          label="Elementary School"
                          labelClassName="font-sm-medium text-neutral-500 pt-4"
                        />
                      </div>
                    </div>
                    <div className="p-8 mt-8">
                      <div>
                        <FormikControl
                          control="checkbox"
                          name="juniorHighSchool"
                          value="Junior High School"
                          label="Junior High School"
                          labelClassName="font-sm-medium text-neutral-500 pt-4"
                        />
                      </div>
                    </div>
                    <div className="p-8 mt-8">
                      <div>
                        <FormikControl
                          control="checkbox"
                          name="seniorHighSchool"
                          value="Senior High School"
                          label="Senior High School"
                          labelClassName="font-sm-medium text-neutral-500 pt-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16">
                  <Divider height="h-2" />
                </div>
                <div className="mt-16 pb-24">
                  <div className="px-24 pb-24">
                    <p className="text-neutral-300">Data select</p>

                    <div className="p-8 mt-16">
                      <div className="d-flex align-items-center">
                        <Field
                          type="radio"
                          name="showing"
                          className="form-check-input"
                          value="10"
                          checked
                          id="10"
                        />
                        <label
                          htmlFor="10"
                          className="ml-6 font-sm cursor-pointer mt-6"
                        >
                          10 data
                        </label>
                      </div>
                    </div>
                    <div className="p-8 mt-8">
                      <div className="d-flex align-items-center ">
                        <Field
                          type="radio"
                          name="showing"
                          className="form-check-input"
                          value="25"
                          id="25"
                        />
                        <label
                          htmlFor="25"
                          className="ml-6 font-sm cursor-pointer mt-6"
                        >
                          25 data
                        </label>
                      </div>
                    </div>
                    <div className="p-8 mt-8">
                      <div className="d-flex align-items-center ">
                        <Field
                          type="radio"
                          name="showing"
                          className="form-check-input"
                          value="50"
                          id="50"
                        />
                        <label
                          htmlFor="50"
                          className="ml-6 font-sm cursor-pointer mt-6"
                        >
                          50 data
                        </label>
                      </div>
                    </div>
                    <div className="p-8 mt-8">
                      <div className="d-flex align-items-center ">
                        <Field
                          type="radio"
                          name="showing"
                          className="form-check-input"
                          value="100"
                          id="100"
                        />
                        <label
                          htmlFor="100"
                          className="ml-6 font-sm cursor-pointer mt-6"
                        >
                          100 data
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default TeacherResourceOffCanvas;
