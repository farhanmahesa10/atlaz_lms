import { Form, Formik } from "formik";
import React from "react";
import { Divider, FormikControl } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";

const ManageAccountOrg = () => {
  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <div className="mt-24 px-24 md-px-48">
        <h5 className="md-h4">Manage Account</h5>
        <div className="w-64">
          <Divider lineColor="bg-primary-500" height="h-2" />
        </div>

        <div className="mt-24">
          <Formik initialValues={{ username: "", fullname: "" }}>
            <Form>
              <div className="row">
                <div className="col-12 border border-secondary-500 radius-14 p-16">
                  <div className="">
                    <h6>General Information</h6>
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
                      control="input"
                      label="Username"
                      disabled
                    />
                  </div>
                  <div className="mt-8">
                    <FormikControl
                      name="fullname"
                      size="xs"
                      control="input"
                      label="Fullname"
                    />
                  </div>

                  <div className="mt-24">
                    <button
                      className="btn btn-outline w-full font-xs"
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="btn mt-8 btn-disable w-full font-xs"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </MainLayout>
  );
};

export default ManageAccountOrg;
