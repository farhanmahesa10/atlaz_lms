import React, { useState } from "react";
import FooterContent from "../FooterContent";
import { Field, Form, Formik } from "formik";
import { CheckCircleOutlineOutlined, HighlightOff, CircleOutlined } from "@mui/icons-material";

const MatchPairs = (props) => {
  const data = props.data;
  const [buttonToggleFooter, setButtonToggleFooter] = useState(false);

  const [leftSide, setLeftSide] = useState(true);
  const [rightSide, setRightSide] = useState(false);
  const [nextColor, setNextColor] = useState("");
  const [nextAbjad, setNextAbjad] = useState("");
  const [dataClicked, setDataClicked] = useState(0);

  const [leftClickedData, setLeftClickedData] = useState([]);
  const [rightClickedData, setRightClickedData] = useState([]);

  const [nextIndex, setNextIndex] = useState(null);

  const [isAlreadySubmit, setIsAlreadySubmit] = useState(false);

  const maxData = data.options.length * 2;

  const handleLeftClicked = (e, r, i) => {
    let isDataClicked = checkIsbuttonClicked(r.abjad);

    if (leftSide && maxData > dataClicked && isDataClicked === undefined) {
      let leftCLicked = leftClickedData;
      leftCLicked.push(r.abjad);
      setLeftSide(false);
      setRightSide(true);
      setNextColor(r.color);
      setDataClicked(dataClicked + 1);
      setLeftClickedData(leftCLicked);
      setNextAbjad(r.abjad);
      setNextIndex(i);
      e.currentTarget.style.backgroundColor = r.color;
    }
  };

  const handleRightClicked = (e, dataDup, formik, i, idAbjad) => {
    let isDataClicked = checkIsbuttonClickedRight(dataDup.abjad);
    if (rightSide && maxData > dataClicked && isDataClicked === undefined) {
      let rightCLicked = rightClickedData;
      rightCLicked.push(dataDup.abjad);
      setLeftSide(true);
      setRightSide(false);
      setDataClicked(dataClicked + 1);
      setRightClickedData(rightCLicked);

      document.querySelector(idAbjad).innerHTML = nextAbjad;

      e.currentTarget.style.backgroundColor = nextColor;
      let name = `[${nextIndex}].userAnswer`;

      formik.setFieldValue(name, dataDup.abjad);
    }
  };

  const checkIsbuttonClicked = (value) => {
    return leftClickedData.find((res) => res === value);
  };

  const checkIsbuttonClickedRight = (value) => {
    return rightClickedData.find((res) => res === value);
  };

  const initAnswer = () => {
    return data.options.map((r) => {
      return { ...r, userAnswer: "" };
    });
  };

  const getClassAnswered = (formik, name) => {
    let formikValue = formik.getFieldProps(name).value;

    if (formikValue.abjad === formikValue.userAnswer && buttonToggleFooter) {
      return true;
    } else if (
      formikValue.abjad !== formikValue.userAnswer &&
      buttonToggleFooter
    ) {
      return false;
    } else {
      return "none";
    }
  };

  const getClassAnsweredRight = (dataDup, formik) => {
    let indexKeyOption = null;
    data.options.map((r, i) => {
      if (dataDup.abjad === r.abjad) indexKeyOption = i;
    });
    let formikValue = formik.getFieldProps(`[${indexKeyOption}]`).value;
    if (formikValue.abjad === formikValue.userAnswer && buttonToggleFooter) {
      return true;
    } else if (
      formikValue.abjad !== formikValue.userAnswer &&
      buttonToggleFooter
    ) {
      return false;
    } else {
      return "none";
    }
  };

  const resetForm = () => {
    let circleIcon = (
      <CircleOutlined
        style={{
          fontSize: "18px",
        }}
      />
    );
    let buttonFill = document.querySelectorAll(`.button-fill-${data._id} `);
    buttonFill.forEach((el) => {
      el.style.backgroundColor = "#D4D7DB";
    });

    setLeftSide(true);
    setRightSide(false);
    setNextColor("");
    setNextAbjad("");
    setDataClicked(0);
    setLeftClickedData([]);
    setRightClickedData([]);
    setNextIndex(null);
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    setButtonToggleFooter(true);
  };
  return (
    <div className="col-12 card-container ">
      <div className="card-content">
        {data.instruction ? (
            <h5 className="mb-16">{data.instruction}</h5>
        ) : (
          ""
        )}
        <Formik
          initialValues={initAnswer()}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {(formik) => {
            return (
              <Form className="formFormik ">
                <div className="row mb-16">
                  <div className="col-12">
                    {data.options.map((r, i) => {
                      return (
                        <div className="row  align-items-center" key={i}>
                          {/* left side */}
                          <div className={` col-6 pl-12 `}>
                            {r.question.includes("data:image/") ? (
                              <div className="d-flex align-items-center mb-16">
                                <div
                                  style={{ width: "252px", height: "252px" }}
                                  className={` d-flex align-items-center  position-relative radius-14  ${
                                    getClassAnswered(formik, `[${i}]`) ===
                                    "none"
                                      ? ""
                                      : getClassAnswered(formik, `[${i}]`) ===
                                        true
                                      ? "border-dashed-success"
                                      : "border-dashed-danger"
                                  }`}
                                >
                                  <div
                                    className="position-absolute text-center "
                                    style={{
                                      left: "0",
                                      right: "0",
                                      bottom: "5px",
                                    }}
                                  >
                                    {getClassAnswered(formik, `[${i}]`) ===
                                    true ? (
                                      <CheckCircleOutlineOutlined className="text-success" />
                                    ) : (
                                      ""
                                    )}
                                    {getClassAnswered(formik, `[${i}]`) ===
                                    false ? (
                                      <HighlightOff className="text-danger" />
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <img
                                    src={r.question}
                                    width="100%"
                                    height="100%"
                                    style={{ objectFit: "cover" }}
                                    className="radius-14"
                                  />
                                </div>
                                <div
                                  className={` ${
                                    !buttonToggleFooter ? "d-none" : ""
                                  }  radius-4 ml-16 d-flex justify-content-center align-items-center
                                   `}
                                  style={{
                                    height: "36px",
                                    backgroundColor: r.color,
                                    width: "52px",
                                  }}
                                >
                                  {r.abjad}
                                </div>

                                <div
                                  className={` ${
                                    buttonToggleFooter ? "d-none" : ""
                                  }  button-fill-${
                                    data._id
                                  }  radius-4 ml-16 d-flex justify-content-center align-items-center ${
                                    leftSide &&
                                    checkIsbuttonClicked(r.abjad) !== r.abjad
                                      ? "cursor-pointer"
                                      : ""
                                  }`}
                                  style={{
                                    height: "36px",
                                    width: "52px",
                                    backgroundColor: "#D4D7DB",
                                  }}
                                  onClick={(e) => {
                                    handleLeftClicked(e, r, i);
                                  }}
                                >
                                  {checkIsbuttonClicked(r.abjad) !== r.abjad ? (
                                    <CircleOutlined
                                      style={{
                                        fontSize: "18px",
                                      }}
                                    />
                                  ) : (
                                    r.abjad
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div
                                className="d-flex align-items-center mb-16 "
                                style={{ maxWidth: "320px" }}
                              >
                                <div
                                  className={`d-flex  align-items-center radius-tl-4 radius-bl-4 pl-16 justify-content-between w-full
                                   ${
                                     getClassAnswered(formik, `[${i}]`) ===
                                     "none"
                                       ? ""
                                       : getClassAnswered(formik, `[${i}]`) ===
                                         true
                                       ? "border border-success"
                                       : "border border-danger"
                                   }`}
                                  style={{
                                    height: "36px",
                                    border: "1px solid #d4d7db",
                                  }}
                                >
                                  <span>{r.question}</span>
                                  <span className="mr-16 text-danger">
                                  </span>
                                </div>
                                <div
                                  className={` ${
                                    !buttonToggleFooter ? "d-none" : ""
                                  }   d-flex align-items-center radius-tr-4 radius-br-4 justify-content-center
                                   `}
                                  style={{
                                    height: "36px",
                                    backgroundColor: r.color,
                                    width: "60px",
                                  }}
                                >
                                  {r.abjad}
                                </div>

                                <div
                                  className={` ${
                                    buttonToggleFooter ? "d-none" : ""
                                  }  button-fill-${
                                    data._id
                                  }  d-flex align-items-center radius-tr-4 radius-br-4 justify-content-center ${
                                    leftSide &&
                                    checkIsbuttonClicked(r.abjad) !== r.abjad
                                      ? "cursor-pointer"
                                      : ""
                                  }`}
                                  style={{
                                    height: "36px",
                                    backgroundColor: "#D4D7DB",
                                    width: "60px",
                                  }}
                                  onClick={(e) => {
                                    handleLeftClicked(e, r, i);
                                  }}
                                >
                                  {checkIsbuttonClicked(r.abjad) !== r.abjad ? (
                                    <CircleOutlined
                                      style={{
                                        fontSize: "18px",
                                      }}
                                    />
                                  ) : (
                                    r.abjad
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                          <div className={`col-6 d-flex justify-content-end `}>
                            {data.options_dup[i].answer.includes(
                              "data:image/"
                            ) ? (
                              <div className="d-flex align-items-center mb-16 ">
                                <div
                                  className={` ${
                                    !buttonToggleFooter ? "d-none" : ""
                                  }  radius-4  d-flex justify-content-center align-items-center `}
                                  style={{
                                    height: "36px",
                                    width: "52px",
                                    backgroundColor: data.options_dup[i].color,
                                  }}
                                >
                                  {/* sini */}
                                  <span>{data.options_dup[i].abjad}</span>
                                </div>

                                <div
                                  className={`${
                                    buttonToggleFooter ? "d-none" : ""
                                  }  button-fill-${
                                    data._id
                                  }    radius-4  d-flex justify-content-center align-items-center ${
                                    rightSide &&
                                    checkIsbuttonClickedRight(
                                      data.options_dup[i].abjad
                                    ) !== data.options_dup[i].abjad
                                      ? "cursor-pointer"
                                      : ""
                                  }`}
                                  style={{
                                    height: "36px",
                                    width: "52px",
                                    backgroundColor: "#D4D7DB",
                                  }}
                                  onClick={(e) => {
                                    handleRightClicked(
                                      e,
                                      data.options_dup[i],
                                      formik,
                                      i,
                                      `#circle-right-image-${data._id}-${i}`
                                    );
                                  }}
                                >
                                  <div
                                    className={
                                      checkIsbuttonClickedRight(
                                        data.options_dup[i].abjad
                                      ) === data.options_dup[i].abjad
                                        ? "d-none"
                                        : ""
                                    }
                                  >
                                    <CircleOutlined
                                      style={{
                                        fontSize: "18px",
                                      }}
                                    />
                                  </div>
                                  <span
                                    id={`circle-right-image-${data._id}-${i}`}
                                    className={
                                      checkIsbuttonClickedRight(
                                        data.options_dup[i].abjad
                                      ) !== data.options_dup[i].abjad
                                        ? "d-none"
                                        : ""
                                    }
                                  ></span>
                                </div>

                                <div
                                  style={{ width: "252px", height: "252px" }}
                                  className={`ml-16 d-flex align-items-center  position-relative radius-14  ${
                                    getClassAnsweredRight(
                                      data.options_dup[i],
                                      formik
                                    ) === "none"
                                      ? ""
                                      : getClassAnsweredRight(
                                          data.options_dup[i],
                                          formik
                                        ) === true
                                      ? "border-dashed-success"
                                      : "border-dashed-danger"
                                  }`}
                                >
                                  <div
                                    className="position-absolute text-center "
                                    style={{
                                      left: "0",
                                      right: "0",
                                      bottom: "5px",
                                    }}
                                  >
                                    {getClassAnsweredRight(
                                      data.options_dup[i],
                                      formik
                                    ) === true ? (
                                      <CheckCircleOutlineOutlined className="text-success" />
                                    ) : (
                                      ""
                                    )}
                                    {getClassAnsweredRight(
                                      data.options_dup[i],
                                      formik
                                    ) === false ? (
                                      <HighlightOff className="text-danger" />
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <img
                                    src={data.options_dup[i].answer}
                                    width="100%"
                                    height="100%"
                                    style={{
                                      objectFit: "cover",
                                      borderRadius: "14px",
                                    }}
                                  />
                                </div>
                              </div>
                            ) : (
                              <div
                                className="d-flex align-items-center mb-16 w-full "
                                style={{ maxWidth: "320px" }}
                              >
                                <div
                                  className={` ${
                                    !buttonToggleFooter ? "d-none" : ""
                                  } d-flex align-items-center justify-content-center radius-tl-4 radius-bl-4`}
                                  style={{
                                    height: "36px",
                                    width: "52px",
                                    backgroundColor: data.options_dup[i].color,
                                  }}
                                >
                                  <span>{data.options_dup[i].abjad}</span>
                                </div>

                                <div
                                  className={`${
                                    buttonToggleFooter ? "d-none" : ""
                                  }  button-fill-${
                                    data._id
                                  }  d-flex align-items-center justify-content-center radius-tl-4 radius-bl-4 ${
                                    rightSide &&
                                    checkIsbuttonClickedRight(
                                      data.options_dup[i].abjad
                                    ) !== data.options_dup[i].abjad
                                      ? "cursor-pointer"
                                      : ""
                                  }`}
                                  style={{
                                    height: "36px",
                                    width: "60px",
                                    backgroundColor: "#D4D7DB",
                                  }}
                                  onClick={(e) => {
                                    handleRightClicked(
                                      e,
                                      data.options_dup[i],
                                      formik,
                                      i,
                                      `#circle-right-input-${data._id}-${i}`
                                    );
                                  }}
                                >
                                  <div
                                    className={
                                      checkIsbuttonClickedRight(
                                        data.options_dup[i].abjad
                                      ) === data.options_dup[i].abjad
                                        ? "d-none"
                                        : ""
                                    }
                                  >
                                    <CircleOutlined
                                      style={{
                                        fontSize: "18px",
                                      }}
                                    />
                                  </div>
                                  <span
                                    id={`circle-right-input-${data._id}-${i}`}
                                    className={
                                      checkIsbuttonClickedRight(
                                        data.options_dup[i].abjad
                                      ) !== data.options_dup[i].abjad
                                        ? "d-none"
                                        : ""
                                    }
                                  ></span>
                                </div>
                                <div
                                  className={`d-flex  align-items-center radius-tl-4 radius-bl-4 pl-16 justify-content-between w-full
                                   ${
                                     getClassAnsweredRight(
                                       data.options_dup[i],
                                       formik
                                     ) === "none"
                                       ? ""
                                       : getClassAnsweredRight(
                                           data.options_dup[i],
                                           formik
                                         ) === true
                                       ? "border border-success"
                                       : "border border-danger"
                                   }`}
                                  style={{
                                    height: "36px",
                                    border: "1px solid #d4d7db",
                                  }}
                                >
                                  <span>{data.options_dup[i].answer}</span>
                                  <span className="mr-16 text-danger">
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <FooterContent
                  formik={formik}
                  isSubmitting={formik.isSubmitting}
                  data={data}
                  buttonToggle={buttonToggleFooter}
                  explanation={data.correctionText}
                  onRetry={() => {
                    setButtonToggleFooter(false);
                    formik.resetForm();
                    resetForm();
                  }}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default MatchPairs;
