import { Form, Formik } from "formik";
import React from "react";
import { Divider, FormikControl, SelectCheckbox } from "../../../atoms";
import SearchIcon from "@mui/icons-material/Search";
import { Dropdown, DropdownButton } from "react-bootstrap";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const HeadSchoolAdminDashboard = () => {
  return (
    <>
      <div className="w-full">
        <h4>SMA 70 Jakarta</h4>
        <div className="w-64 mb-24">
          <Divider lineColor={"bg-primary-500"} height="h-2" />
        </div>
        <div className="bg-secondary-300 px-24 py-16 radius-8">
          <Formik initialValues={{ keyword: "", view: [] }} onSubmit={() => {}}>
            {(formik) => (
              <Form>
                <div className="d-sm-flex justify-content-between">
                  <div className="w-full max-w-312">
                    <FormikControl
                      control="input"
                      name="keyword"
                      icon={<SearchIcon className="text-neutral-200 fs-16" />}
                      placeholder="Search anything here"
                      size="xs"
                    />
                  </div>
                  <div className="mt-8 sm-mt-0">
                    <Dropdown className="w-full">
                      <Dropdown.Toggle className="bg-white">
                        <div className="d-flex align-items-center">
                          <span className="font-sm mr-8">View Option</span>{" "}
                          <ExpandMoreIcon className="fs-16" />
                        </div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <div className="py-4 hover-bg-secondary-200 px-16 ">
                          <FormikControl
                            control="checkbox"
                            name="view[0]"
                            value="Role"
                            label="Role"
                          />
                        </div>
                        <div className="py-4 hover-bg-secondary-200 px-16 ">
                          <FormikControl
                            control="checkbox"
                            name="view[1]"
                            value="Role"
                            label="Class"
                          />
                        </div>
                        <div className="nowrap py-4 hover-bg-secondary-200 px-16 ">
                          <FormikControl
                            control="checkbox"
                            name="view[2]"
                            value="Academic Year"
                            label="Academic Year"
                          />
                        </div>
                        <div className="nowrap py-4 hover-bg-secondary-200 px-16 ">
                          <FormikControl
                            control="checkbox"
                            name="view[3]"
                            value="Subject"
                            label="Subject"
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default HeadSchoolAdminDashboard;
