import { Form, Formik } from "formik";
import React from "react";
import { FormikControl, SelectCheckbox } from "../../../atoms";
import SearchIcon from "@mui/icons-material/Search";
import { Dropdown, DropdownButton } from "react-bootstrap";
const HeadSchoolAdminDashboard = () => {
  return (
    <>
      <div className="w-full">
        <div className="bg-secondary-300 px-24 py-16">
          <Formik initialValues={{ keyword: "", view: [] }} onSubmit={() => {}}>
            {(formik) => (
              <Form>
                <div className="d-flex justify-content-between">
                  <div className="w-312">
                    <FormikControl
                      control="input"
                      name="keyword"
                      icon={<SearchIcon className="text-neutral-200 fs-16" />}
                      placeholder="Search anything here"
                      size="xs"
                    />
                  </div>
                  <div>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown button
                      </button>
                      <ul
                        className="dropdown-menu p-8 w-full"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li className="w-full p-8  ">
                          <FormikControl
                            control="checkbox"
                            name="view"
                            value="role"
                            label="role"
                          />
                        </li>
                        <li className="w-full p-8  ">
                          <FormikControl
                            control="checkbox"
                            name="view"
                            value="role"
                            label="role"
                          />
                        </li>
                      </ul>
                    </div>
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
