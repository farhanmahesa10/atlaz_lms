import { Form, Formik } from "formik";
import React from "react";
import { Divider, FormikControl, GlobalToast } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  ProfileSectionLoading,
  PublicFormManageAccount,
  StudentFormManageAccount,
} from "../../../molecules";
import { Can } from "../../../../permission";
import { Link } from "react-router-dom";
import { useManageAccount } from "../../../../services";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const ManageAccountOrg = () => {
  //note : liat di design perbedaan public dan student pada bagian  personal information email
  const {
    initialValuesStudentGeneral,
    data,
    isLoading,
    handleChangeName,
    isLoadingSubmitChangeName,
    validationChangeEmail,
    enableSubmitEmail,
    handleSubmitEmail,
    isLoadingSubmitEmail,
  } = useManageAccount();
  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <GlobalToast />
      <div className="mt-24 px-24 md-px-48">
        <h5 className="md-h4">Manage Account</h5>
        <div className="w-64">
          <Divider lineColor="bg-primary-500" height="h-2" />
        </div>

        <div className="mt-24">
          <div className="row ">
            <div className="col-12 col-xl-9 order-2 order-xl-1 mt-24 xl-mt-0">
              <div className="row mx-2 xl-mx-0">
                <Can allowAccess="student,teacher">
                  <StudentFormManageAccount
                    initialGeneral={initialValuesStudentGeneral}
                    data={data}
                    isLoading={isLoading}
                  />
                </Can>
                <Can allowAccess="public">
                  <PublicFormManageAccount
                    data={data}
                    isLoading={isLoading}
                    isLoadingSubmit={isLoadingSubmitChangeName}
                    onSubmit={handleChangeName}
                  />
                </Can>

                <div className="col-12 border border-secondary-500 radius-14 p-16 mt-24">
                  <Formik
                    initialValues={{ email: data?.email ? data.email : "" }}
                    enableReinitialize={true}
                    validationSchema={validationChangeEmail}
                    onSubmit={handleSubmitEmail}
                  >
                    <Form>
                      <div className="">
                        <h6 className="md-h5">Personal Information</h6>
                        <p className="font-xs text-neutral-300">
                          This info not publised for public. The data make your
                          account more secure.
                        </p>
                      </div>
                      <div className="mt-16">
                        <Divider lineColor="bg-secondary-5 00" height="h-1" />
                      </div>

                      {!data?.email ? (
                        <>
                          <div className="mt-8">
                            <div className="bg-info-200 py-8 px-24 radius-4">
                              <h6>Verify Needed</h6>
                              <p className="font-sm text-neutral-300">
                                Bind your email to secure the account. Enter
                                your email and verify in your email.
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
                                className={`btn  nowrap mt-8 ${
                                  enableSubmitEmail
                                    ? "btn-primary"
                                    : " btn-disable"
                                } w-full font-xs md-font-sm lg-font-normal`}
                                type={enableSubmitEmail ? "submit" : "button"}
                              >
                                {isLoadingSubmitEmail
                                  ? "Loading..."
                                  : "Verify Email"}
                              </button>
                            </div>
                          </div>
                        </>
                      ) : (
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
                              readOnly
                              icon2={
                                <CheckCircleOutlineIcon className="text-neutral-200" />
                              }
                            />
                          </div>
                        </div>
                      )}
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>

            {isLoading ? (
              <ProfileSectionLoading />
            ) : (
              <div className="order-1 order-xl-2 col-xl-3 d-none d-md-block">
                <div className="row">
                  <div className="col-6 col-xl-12">
                    <div className="h-260 border border-secondary-500 radius-14 position-relative ">
                      <img
                        src={"/images/profile/sampul.png"}
                        alt=""
                        className="radius-t-14 w-full h-104"
                      />
                      <div className="position-absolute top-0 h-full w-full">
                        <div className="text-center h-full  ">
                          <img
                            src={data.avatar}
                            alt=""
                            className="w-104 h-104 radius-p-100 mt-48  radius-p-100"
                          />
                          <div className="mt-16">
                            <h5>{data.name}</h5>
                            <p className="font-sm text-neutral-300 mt-8">
                              {data.role.title} Account
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-12">
                    <div className="h-121 xl-h-72 xl-mt-24 border border-secondary-500  radius-14">
                      <div className="h-full d-flex justify-content-between align-items-center px-16">
                        <div>
                          <h6>Change password?</h6>
                          <p className="font-xs text-neutral-300">
                            Go to security and password.
                          </p>
                        </div>
                        <Link to="/security" className="cursor-pointer">
                          <KeyboardArrowRightIcon />
                        </Link>
                      </div>
                    </div>

                    {/*
                    sementara dihilangkan dulu
                    <div className=" h-121 xl-h-72 mt-16 border border-secondary-500 radius-14">
                      <div className="d-flex justify-content-between h-full  align-items-center  px-16">
                        <div className="">
                          <h6>See my owned book</h6>
                          <p className="font-xs text-neutral-300">
                            Go to purchased history.
                          </p>
                        </div>
                        <span className="cursor-pointer">
                          <KeyboardArrowRightIcon />
                        </span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ManageAccountOrg;
