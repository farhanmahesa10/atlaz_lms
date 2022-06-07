import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { FormikControl } from "../../../atoms";
import "./SchoolAdminTable.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import moment from "moment";

const TableSchoolAdminDashboard = (props) => {
  const { initialValues, tableHeader, tableBody } = props;
  const [lastKeydownTime, setLastKeydownTime] = useState(null);
  const handleKeyUpChange = () => {
    setLastKeydownTime(moment());
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            <div
              className=" radius-8 custom-scroll"
              style={{ overflowX: "scroll", overflowY: "hidden" }}
            >
              <table className="table w-full" style={{ width: "1595px" }}>
                <thead className=" bg-secondary-200 ">
                  <tr className="font-sm-bold text-start ">
                    {tableHeader.map((r, i) => {
                      return (
                        <th key={"header-" + i} className=" pr-16 pl-32 pt-16 ">
                          <span> {r.label}</span>
                        </th>
                      );
                    })}
                  </tr>
                  <tr>
                    {tableHeader.map((r, i) => {
                      return (
                        <th key={"search-" + i}>
                          <div className="d-flex pb-16 pr-16 pl-32 pt-16 ">
                            <FormikControl
                              control="input"
                              name={r.name}
                              key={"search-" + i}
                              size="xs"
                              placeholder={r.placeholder}
                              onKeyUp={handleKeyUpChange}
                            />
                            <div className="w-32"></div>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {tableBody.map((r, i) => {
                    return (
                      <tr
                        key={"body-" + i}
                        className={`font-sm  ${
                          i < tableBody.length - 1 && " border-bottom  "
                        }`}
                      >
                        <td className="py-16 pr-16 pl-32">{r.nisn}</td>
                        <td>{r.name}</td>
                        <td>{r.role}</td>
                        <td>{r.class}</td>
                        <td>{r.academicYear}</td>
                        <td>{r.subject}</td>
                        <td>{r.subjectExpDate}</td>
                        <td>{r.lastUpdate}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Form>
        )}
      </Formik>
      <div className="px-16 py-12 bg-secondary-200 radius-b-8">
        <div className="d-flex justify-content-between">
          <p className="font-sm-medium text-neutral-300">1 of 1</p>
          <div className="d-flex align-items-center">
            <p className="font-sm text-neutral-300 mr-16">You’re in page</p>
            <div className="form-input mr-32">
              <div className="input-area">
                <input
                  type="text"
                  className="w-48 h-24   radius-4 text-center input-control"
                  maxLength={3}
                  defaultValue="1"
                />
              </div>
            </div>
            <div className="pl-32 d-flex border-start border-secondary-500">
              <button
                className="border radius-8  mr-24 h-28 w-28 text-neutral-200 d-flex justify-content-center align-items-center bg-white"
                style={{ boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.05" }}
              >
                <ArrowBackIcon className="fs-16" />
              </button>
              <button
                className="border radius-8  h-28 w-28 d-flex justify-content-center align-items-center bg-white"
                style={{ boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.05" }}
              >
                <ArrowForwardIcon className="fs-16" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableSchoolAdminDashboard;
