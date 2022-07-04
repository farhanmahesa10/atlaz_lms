import React from "react";
import LineIcon from "../../SVG/LineIcon";

import { ModalRedeemStudent } from "../../molecules";
import { GlobalToast, ModalTrigger } from "../../atoms";
import { useGlobalFunction } from "../../../services";
import { useFormik } from "formik";
import { defConfig, POST } from "../../../config/RestAPI";
import { useNavigate } from "react-router-dom";

const HomeRedeem = () => {
  const { getUserInfo, setFlashMessage } = useGlobalFunction();
  const navigate = useNavigate();
  const user = getUserInfo();
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: async (values) => {
      if (user) {
        if (user.roleData.name.toLowerCase() !== "public") {
          return;
        } else {
          values = values.code.split(" - ").join("");
          try {
            const result = await POST(
              "/client/dashboard/claim_coupon",
              { codeCoupon: values },
              defConfig()
            );
            setFlashMessage("Redeem Successful", result?.message, true);
            navigate("/my-book-list");
          } catch (err) {
            setFlashMessage(
              "Redeem Not Success",
              err.response.data?.message,
              false
            );
          }
        }
      }
      return;
    },
  });
  return (
    <>
      <GlobalToast />
      <ModalRedeemStudent id="modalRedeemStudent" />
      <div className="row gx-0 justify-content-center mt-64 md-mt-128 xl-mt-164">
        <div style={{ maxWidth: "1440px" }}>
          <div className="row gx-0">
            <div className="col-12 ">
              <div className=" px-32  md-px-56">
                <div
                  className="  py-52 radius-16 row align-items-center md-px-76"
                  style={{
                    backgroundImage: "url('/images/bg_reedem.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="  col-12 px-24   md-px-0">
                    <div className="d-xl-flex justify-content-between align-items-center">
                      <div className="mb-24 xl-mb-0  xl-w-494  ">
                        <p className="text-white h5 md-h4 xl-h3">
                          Redeem Your E-book Code
                        </p>
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
                        <form onSubmit={formik.handleSubmit}>
                          <div className="form-input">
                            <div className="input-area h-36 md-h-44 h-40 bg-white  ">
                              <input
                                type="text"
                                className="w-full input-control radius-8 py-8 pl-16 "
                                placeholder="Enter 12 digit of code "
                                name="code"
                                maxLength="18"
                                onKeyUp={(e) => {
                                  if (e.key.toLowerCase() !== "backspace") {
                                    let result = "";
                                    let spliting = e.target.value.split("");
                                    let removeMin = spliting.filter(
                                      (r) => r !== "-" && r !== " "
                                    );
                                    removeMin.map((r, i) => {
                                      result += r;
                                      var a = i + 1;
                                      if (a > 0 && a % 4 === 0 && a !== 12) {
                                        result += " - ";
                                      }
                                    });
                                    e.target.value = result.toUpperCase();
                                  }
                                  formik.setFieldValue("code", e.target.value);
                                }}
                                // value={formik.values.code}
                              />
                              <span className=" pl-16  h-p-100 d-flex align-items-center pr-4">
                                <div className="py-4">
                                  {user?.roleData?.name.toLowerCase() !==
                                  "public" ? (
                                    <ModalTrigger target="modalRedeemStudent">
                                      <button
                                        type="button"
                                        className="btn-primary font-xs md-font-normal"
                                      >
                                        Redeem
                                      </button>
                                    </ModalTrigger>
                                  ) : (
                                    <button
                                      className="btn-primary font-xs md-font-normal"
                                      type="submit"
                                    >
                                      Redeem
                                    </button>
                                  )}
                                </div>
                              </span>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRedeem;
