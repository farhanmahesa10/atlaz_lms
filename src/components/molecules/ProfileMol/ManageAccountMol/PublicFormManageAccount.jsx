import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Divider, FormikControl, GlobalToast } from "../../../atoms";
import PublicManageAccountLoading from "../../SkeletonLoading/ProfileLoading/PublicManageAccountLoading";

const PublicFormManageAccount = (props) => {
  const { data, isLoading, onSubmit, isLoadingSubmit } = props;
  const [canSubmit, setCanSubmit] = useState(false);
  if (isLoading) {
    return <PublicManageAccountLoading />;
  }
  return (
    <>
      {/* <GlobalToast /> */}
      <div className="col-12 border border-secondary-500 radius-14 p-16">
        <Formik
          initialValues={{ username: data.username, name: data.name }}
          enableReinitialize={true}
          onSubmit={(values, formik) => {
            onSubmit(values, formik, canSubmit);
            setCanSubmit(false);
          }}
        >
          {(formik) => (
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
                  label="Username"
                  disabled
                />
              </div>
              <div className="mt-24">
                <FormikControl
                  name="name"
                  size="xs"
                  mdSize="sm"
                  lgSize="normal"
                  control="input"
                  label="Fullname"
                  onInput={(e) => {
                    if (e.target.value !== data.name) {
                      setCanSubmit(true);
                    } else {
                      setCanSubmit(false);
                    }
                  }}
                />
              </div>

              <div className="mt-24 d-md-flex justify-content-end">
                <div>
                  <button
                    className="btn btn-outline w-full md-w-104 md-mr-24 font-xs md-font-sm lg-font-normal "
                    type="button"
                    onClick={() => formik.resetForm()}
                  >
                    Cancel
                  </button>
                  <button
                    className={`btn mt-8 ${
                      canSubmit ? "btn-primary" : "btn-disable"
                    } w-full md-w-104  font-xs md-font-sm lg-font-normal`}
                    type={canSubmit ? "submit" : "button"}
                  >
                    {!isLoadingSubmit ? "Update" : "Loading..."}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default PublicFormManageAccount;
