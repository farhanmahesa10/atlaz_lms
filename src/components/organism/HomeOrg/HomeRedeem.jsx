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
    <>
      <div className=" sm-px-48  px-12 ">
        <div className=" mt-104 ">
          <div
            className=" h-268 radius-16 row align-items-center px-24 md-px-76"
            style={{
              backgroundImage: "url('/images/bg_reedem.png')",
              backgroundSize: "cover",
            }}
          >
            <div className="  col-12 col-lg-5  ">
              <h3 className="text-white">Redeem Your E-book Code</h3>
              <div className="pb-12" style={{ marginTop: "-12px" }}>
                <LineIcon />
              </div>
              <p className="text-white">
                Find the redeem code in first page of book you have purchased.
                Enjoy the feature of learn anytime with #YouLearningPal.
              </p>
            </div>
            <div className="col-lg-2 d-none d-lg-block"></div>
            <div className="  col-12 col-lg-5 ">
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
                    placeholder="Input activation code here "
                    name="code"
                    icon2={
                      <div className="p-4">
                        <button
                          className="btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Redeem
                        </button>
                      </div>
                    }
                  />
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRedeem;
