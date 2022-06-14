import React from "react";
import { Divider, FormikControl } from "../../../atoms";
import { Form, Formik } from "formik";
const StudentFormManageAccount = () => {
  return (
    <>
      <div className="col-12 border border-secondary-500 radius-14 p-16">
        <Formik initialValues={{ username: "", fullname: "" }}>
          <Form>
            <div className="">
              <h6 className="md-h5">General Information</h6>
              <p className="font-xs text-neutral-300">
                This data will show in other account as your account.
              </p>
            </div>
            <div className="mt-16">
              <Divider lineColor="bg-secondary-500" height="h-1" />
            </div>
            <div className="mt-8">
              <FormikControl
                name="username"
                size="xs"
                mdSize="sm"
                lgSize="normal"
                control="input"
                label="NISN"
              />
            </div>
            <div className="mt-24">
              <FormikControl
                name="fullname"
                size="xs"
                mdSize="sm"
                lgSize="normal"
                control="input"
                label="Role"
              />
            </div>
            <div className="mt-24">
              <FormikControl
                name="fullname"
                size="xs"
                mdSize="sm"
                lgSize="normal"
                control="input"
                label="Fullname"
              />
            </div>
          </Form>
        </Formik>
      </div>

      <div className="col-12 border border-secondary-500 radius-14 p-16 mt-24">
        <Formik initialValues={{ username: "", fullname: "" }}>
          <Form>
            <div className="">
              <h6 className="md-h5">Personal Information</h6>
              <p className="font-xs text-neutral-300">
                This info not publised for public. The data make your account
                more secure.
              </p>
            </div>
            <div className="mt-16">
              <Divider lineColor="bg-secondary-5 00" height="h-1" />
            </div>
            <div className="mt-8">
              <div className="bg-info-200 py-8 px-24 radius-4">
                <h6>Verify Needed</h6>
                <p className="font-sm text-neutral-300">
                  Bind your email to secure the account. Enter your email and
                  verify in your email.
                </p>
              </div>
            </div>
            <div className="mt-8 d-flex align-items-end">
              <div className="w-full mr-8">
                <FormikControl
                  name="email"
                  size="xs"
                  mdSize="sm"
                  lgSize="normal"
                  control="input"
                  label="Email"
                  placeholder="Enter your active email"
                />
              </div>
              <div>
                <button
                  className="btn  nowrap mt-8 btn-disable w-full font-xs md-font-sm lg-font-normal"
                  type="submit"
                >
                  Verify Email
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default StudentFormManageAccount;
