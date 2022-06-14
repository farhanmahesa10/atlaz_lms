import { Form, Formik } from "formik";
import React from "react";
import { Divider, FormikControl } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  PublicFormManageAccount,
  StudentFormManageAccount,
} from "../../../molecules";
import { Can } from "../../../../permission";
const ManageAccountOrg = () => {
  //note : liat di design perbedaan public dan student pada bagian  personal information email

  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
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
                  <StudentFormManageAccount />
                </Can>
                <Can allowAccess="public">
                  <PublicFormManageAccount />
                </Can>
              </div>
            </div>

            <div className="order-1 order-xl-2 col-xl-3">
              <div className="row">
                <div className="col-6 col-xl-12">
                  <div className="h-260 border border-secondary-500 radius-14 position-relative ">
                    <img
                      src="/images/profile/sampul.png"
                      alt=""
                      className="radius-t-14 w-full h-104"
                    />
                    <div className="position-absolute top-0 h-full w-full">
                      <div className="text-center h-full  ">
                        <img
                          src="/images/profile.png"
                          alt=""
                          className="w-104 h-104 radius-p-100 mt-48  radius-p-100"
                        />
                        <div className="mt-16">
                          <h5>Graditya Indra Setiawan</h5>
                          <p className="font-sm text-neutral-300 mt-8">
                            Public Account
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
                      <span className="cursor-pointer">
                        <KeyboardArrowRightIcon />
                      </span>
                    </div>
                  </div>

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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ManageAccountOrg;
