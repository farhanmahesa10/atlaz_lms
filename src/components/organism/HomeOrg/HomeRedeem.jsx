import React from "react";
import LineIcon from "../../SVG/LineIcon";
import FormikControl from "../../atoms/Formik/FormikControl";
import { Form, Formik } from "formik";
const HomeRedeem = () => {
  const initialValues = {
    code: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="">
      <div className="row gx-0 justify-content-center">
        <div style={{ maxWidth: "1440px" }}>
          <div className="row">
            <div className="col-12 ">
              <div className=" px-32  md-px-56">
                <div
                  className="  py-52 radius-16 row align-items-center md-px-76"
                  style={{
                    backgroundImage: "url('/images/bg_reedem.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="  col-12 px-24  md-px-0">
                    <div className="d-xl-flex justify-content-between align-items-center">
                      <div className="mb-24 xl-w-494 ">
                        <h5 className="text-white">Redeem Your E-book Code</h5>
                        <div className="pb-8" style={{ marginTop: "-12px" }}>
                          <LineIcon />
                        </div>
                        <p className="text-neutral-100 font-sm xl-font-normal">
                          Find the redeem code in first page of book you have
                          purchased. Enjoy the feature of learn anytime with
                          #YourLearningPal
                        </p>
                      </div>
                      <div className="xl-w-494 ">
                        <Formik
                          initialValues={initialValues}
                          onSubmit={onSubmit}
                          validateOnBlur={false}
                          enableReinitialize={true}
                        >
                          <Form>
                            <FormikControl
                              control="input"
                              type="text"
                              placeholder="Enter 12 digit of code "
                              name="code"
                              coverClassName="h-36 md-h-44"
                              inputClassName="font-xs md-font-normal"
                              icon2={
                                <div className="py-4">
                                  <button
                                    className="btn-primary font-xs md-font-normal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                  >
                                    Redeem
                                  </button>
                                </div>
                              }
                              icon2ClassName="pr-4"
                            />
                          </Form>
                        </Formik>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRedeem;
