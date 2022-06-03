import React, { useEffect, useRef, useState } from "react";
import FooterContent from "../FooterContent";
import { Field, Form, Formik } from "formik";
import {
  CheckCircleOutlineOutlined,
  HighlightOff,
  CircleOutlined,
} from "@mui/icons-material";
import { defConfig, POST } from "../../../../config/RestAPI";
import Skeleton from "react-loading-skeleton";

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
  const [firstInitAnswer, setFirstInitAnswer] = useState(false);
  const [initAnswer, setInitAnswer] = useState(null);
  const submitRef = useRef();
  const maxData = data.options.length * 2;

  useEffect(() => {
    patternAnswer();
  }, []);
  useEffect(() => {
    if (initAnswer && !firstInitAnswer && data.userAnswers) {
      submitRef.current.click();
      setFirstInitAnswer(true);
    }
  }, [initAnswer]);
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

  const patternAnswer = () => {
    if (data.userAnswers) {
      setInitAnswer(data.userAnswers);
    } else {
      let init = data.options.map((r) => {
        return { ...r, userAnswer: "" };
      });
      setInitAnswer(init);
    }
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
    setSubmitting(true);
    // setButtonToggleFooter(true);
    let req = {
      contentId: data._id,
      contentType: data.contentType.name,
      userAnswers: values,
    };

    POST(`/client/activity/set_practice_student`, req, defConfig())
      .then((r, i) => {
        setSubmitting(false);
        setButtonToggleFooter(true);
      })
      .catch((err) => {
        setSubmitting(false);
        setButtonToggleFooter(true);
      });
  };

  if (!initAnswer) {
    // handle deleyed formik
    return (
      <div className="p-16">
        <Skeleton width={"100%"} height="200px" />
      </div>
    );
  }

  return (
    <div className="col-12 card-container ">
      <div className="card-content">
        {data.instruction ? <h5 className="mb-16">{data.instruction}</h5> : ""}
        <Formik
          initialValues={initAnswer}
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
                                  style={{ maxWidth: "252px" }}
                                  className={` d-flex align-items-center   position-relative radius-14  ${
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
                                    // height="100%"
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
                                    border: `1px solid ${r.color}`,
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
                                    minHeight: "36px",
                                    border: "1px solid #d4d7db",
                                  }}
                                >
                                  <span>{r.question}</span>
                                  <span className="mr-16 text-danger"></span>
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
                                    border: `1px solid ${r.color}`,
                                  }}
                                >
                                  {r.abjad}
                                </div>

                                <div
                                  className={` ${
                                    buttonToggleFooter ? "d-none" : ""
                                  }  button-fill-${
                                    data._id
                                  }  d-flex align-items-center radius-tr-4 radius-br-4 justify-content-center border border-neutral-100 ${
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
                          {/* right side */}
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
                                    border: `1px solid ${data.options_dup[i].color}`,
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
                                        : "d-flex align-items-center"
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
                                        : "d-flex align-items-center"
                                    }
                                  ></span>
                                </div>

                                <div
                                  style={{ maxWidth: "252px" }}
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
                                    // height="100%"
                                    style={{
                                      // objectFit: "cover",
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
                                    width: "60px",
                                    backgroundColor: data.options_dup[i].color,
                                    border: `1px solid ${data.options_dup[i].color}`,
                                  }}
                                >
                                  <span>{data.options_dup[i].abjad}</span>
                                </div>

                                <div
                                  className={`${
                                    buttonToggleFooter ? "d-none" : ""
                                  }  button-fill-${
                                    data._id
                                  }  d-flex align-items-center justify-content-center border border-neutral-100 radius-tl-4 radius-bl-4 ${
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
                                        : "d-flex align-items-center"
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
                                  className={`d-flex  align-items-center radius-tr-4 radius-br-4 pl-16 justify-content-between w-full
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
                                    minHeight: "36px",
                                    border: "1px solid #d4d7db",
                                  }}
                                >
                                  <span>{data.options_dup[i].answer}</span>
                                  <span className="mr-16 text-danger"></span>
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
                  submitRef={submitRef}
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
