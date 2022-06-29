import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MainLayout from "../../../Layout/Mainlayout";
import { Divider, FormikControl, GlobalToast } from "../../../atoms";
import { Form, Formik } from "formik";
import { useSecurityOrg } from "../../../../services";
import { Link } from "react-router-dom";
import { Can } from "../../../../permission";
const SecurityOrg = () => {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    enableSubmit,
    isLoadingSubmit,
  } = useSecurityOrg();
  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <GlobalToast />
      <div className="mt-24 px-24 md-px-48">
        <h5 className="md-h4">Security</h5>
        <div className="w-64">
          <Divider lineColor="bg-primary-500" height="h-2" />
        </div>
        <div className="row  mt-24">
          <div className="col-12 ">
            <div className="py-8 px-24 bg-warning-100 radius-4">
              <h6>Recommendation</h6>
              <p className="font-sm text-neutral-300">
                Be careful with your password, please don't give your password
                to people who are not responsible.
              </p>
            </div>
          </div>
          <div className="col mt-24">
            <div className="border border-secondary-500 radius-14 px-32 py-24">
              <h5>Password</h5>
              <p className="font-sm text-neutral-300">
                Your access key to login atlaz account.
              </p>
              <div className="mt-16">
                <Divider lineColor="bg-secondary-500" height="h-1" />
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <div className="mt-16">
                    <FormikControl
                      name="currentPassword"
                      size="xs"
                      mdSize="sm"
                      lgSize="normal"
                      control="inputPassword"
                      label="Current Password"
                      withoutLockIcon
                    />
                  </div>
                  <div className="mt-16">
                    <FormikControl
                      name="newPassword"
                      size="xs"
                      mdSize="sm"
                      lgSize="normal"
                      control="inputPassword"
                      label="New Password"
                      withoutLockIcon
                      withTemplateValidation
                    />
                  </div>

                  <div className="mt-24 d-md-flex justify-content-end">
                    <div>
                      <button
                        className="btn btn-outline w-full md-w-104 md-mr-24 font-xs md-font-sm lg-font-normal "
                        type="button"
                      >
                        Cancel
                      </button>
                      <button
                        className={`btn mt-8 ${
                          !enableSubmit ? "btn-disable" : "btn-primary"
                        } w-full md-w-104  font-xs md-font-sm lg-font-normal`}
                        type={!enableSubmit ? "button" : "submit"}
                      >
                        {!isLoadingSubmit ? "Update" : "Loading..."}
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
          <Can allowAccess="public">
            <div className="d-none d-xl-block col-xl-3">
              <div className="h-121 xl-h-72 xl-mt-24 border border-secondary-500  radius-14">
                <div className="h-full d-flex justify-content-between align-items-center px-16">
                  <div>
                    <h6>Change your name?</h6>
                    <p className="font-xs text-neutral-300">
                      Go to manage account.
                    </p>
                  </div>
                  <Link to="/manage-account" className="cursor-pointer">
                    <KeyboardArrowRightIcon />
                  </Link>
                </div>
              </div>

              {/* <div className=" h-121 xl-h-72 mt-16 border border-secondary-500 radius-14">
              <div className="d-flex justify-content-between h-full  align-items-center  px-16">
                <div className="">
                  <h6>See my owned book</h6>
                  <p className="font-xs text-neutral-300">
                    Go to purchased history.
                  </p>
                </div>
                <Link to="/purchased-history" className="cursor-pointer">
                  <KeyboardArrowRightIcon />
                </Link>
              </div>
            </div> */}
            </div>
          </Can>
        </div>
      </div>
    </MainLayout>
  );
};

export default SecurityOrg;
