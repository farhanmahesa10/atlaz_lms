import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { FormikControl } from "../../atoms";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Pagination = (props) => {
  const { totalItem, perPage, currentPage } = props;

  const [prevPage, setPrevPage] = useState(false);
  const [nextPage, setNextPage] = useState(false);

  useEffect(() => {
    if (currentPage <= 1) {
      setPrevPage(false);
    } else {
      setPrevPage(true);
    }

    if (currentPage >= Math.ceil(totalItem / perPage)) {
      setNextPage(false);
    } else {
      setNextPage(true);
    }
  }, [totalItem, perPage, currentPage]);

  const onSubmit = (values) => {
    if (
      values.currentPage > 0 &&
      values.currentPage <= Math.ceil(totalItem / perPage)
    ) {
      props.onSubmit(values.currentPage);
    }
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        currentPage,
      }}
      enableReinitialize={true}
    >
      {(formik) => (
        <Form>
          <div className="d-flex justify-content-between align-items-center bg-secondary-100 px-16 py-8 radius-4">
            <div className="text-neutral-300 fs-12">1-5 of 40</div>
            <div className="d-flex gap-10  align-items-center">
              <span className="text-neutral-300 fs-12">You’re in page</span>
              <Field name="currentPage">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <div className="form-input">
                    <div className="input-area">
                      <input
                        type="number"
                        className="w-24 text-center input-control radius-4 h-22 font-xs input-control"
                        {...field}
                      />
                    </div>
                  </div>
                )}
              </Field>

              <div className="border-end mx-8">&nbsp;</div>
              <button
                type="button"
                className={`cursor-pointer ${
                  !prevPage
                    ? "border-secondary-100 text-neutral-200 bg-white"
                    : "bg-white"
                } hover-bg-primary-100 radius-4 border d-flex align-items-center w-24 h-24`}
                onClick={() => {
                  if (prevPage) {
                    let minPage = parseInt(formik.values.currentPage) - 1;
                    formik.setFieldValue("currentPage", minPage);
                    onSubmit({ currentPage: minPage });
                  }
                }}
              >
                <ArrowBackIcon style={{ fontSize: "12px" }} />
              </button>
              <button
                type="button"
                className={`cursor-pointer ${
                  !nextPage
                    ? "border-secondary-100 text-neutral-200 bg-white"
                    : "bg-white"
                } hover-bg-primary-100 radius-4 border  d-flex align-items-center  w-24 h-24`}
                onClick={() => {
                  if (nextPage) {
                    let plusPage = parseInt(formik.values.currentPage) + 1;
                    formik.setFieldValue("currentPage", plusPage);
                    onSubmit({ currentPage: plusPage });
                  }
                }}
              >
                <ArrowForwardIcon style={{ fontSize: "12px" }} />
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Pagination;
