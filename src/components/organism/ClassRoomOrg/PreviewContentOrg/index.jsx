import React, { useEffect, useState } from "react";
import "./PreviewContentOrg.scss";
import MainLayout from "../../../Layout/Mainlayout";
import imgHeader1 from "../../../../assets/images/detail-preview-bg-1.png";
import imgHeader2 from "../../../../assets/images/detail-preview-bg-2.png";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  DoubleArrowRounded,
  ArrowForward,
  ArrowBack,
} from "@mui/icons-material";
import {
  CodeEditor,
  CompleteParagraph,
  EmbedHtml5,
  EmptySpace,
  Essay,
  FillinTheBlank,
  MatchPairs,
  MultipleChoice,
  ShortAnswer,
  SingleChoice,
  TextEditor,
} from "../../../molecules";
import { GET, defConfig } from "../../../../config/RestAPI";

function PreviewContentOrg() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataSubtopic, setDataSubtopic] = useState();
  const [dataContent, setDataContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showContent = (data, index) => {
    switch (data.contentType.name.toLowerCase()) {
      case "complete a paragraph":
        return <CompleteParagraph data={data} />;
      case "fill in the blank":
        return <FillinTheBlank data={data} />;
      case "embed html5":
        return <EmbedHtml5 data={data} />;
      case "essay":
        return <Essay data={data} />;
      case "multiple choice":
        return <MultipleChoice data={data} />;
      case "short answer":
        return <ShortAnswer data={data} />;
      case "single choice":
        return <SingleChoice data={data} />;
      case "text editor":
        return <TextEditor data={data} />;
      case "code editor":
        return <CodeEditor data={data} />;
      case "match pairs":
        return <MatchPairs data={data} />;
      case "empty space":
        return <EmptySpace />;
      default:
        return;
    }
  };

  const initData = () => {
    setIsLoading(true);
    GET(`/content/preview?subTopicId=${id}`, defConfig())
      .then((res) => {
        setDataContent(res.data);
        setIsLoading(false);
        console.log("1 success", res.data);
      })
      .catch((err) => {
        console.log("1", err.response);
      });
    GET(`/subtopic/${id}`, defConfig())
      .then((res) => {
        setDataSubtopic(res.data);
        console.log("2 success", res);
      })
      .catch((err) => {
        console.log("2", err.response);
      });
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <div className="Layout-preview-content">
      <MainLayout
        maxWidth="1440px"
        navbarBg="bg-white"
        navNoMenu
        redirectOnNavClose="/classrrom/start-learning-view/1"
        modalTitle="Leave unsubmited exercise"
        modalMessage="Exercises that have not been submitted will be lost. Please submit the exercise before leaving the page"
        isNeedConfirm
        title={dataSubtopic?.subject.name}
      >
        <section className="sub-topic-detail-preview">
          <img src={imgHeader1} className="image-header1 w-100" alt="" />
          <img src={imgHeader2} className="image-header2 w-100" alt="" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-12">
                <div className="header-preview radius-14 bg-white py-16 px-24 mb-24">
                  <div className="neutral300 mb-8">
                    {dataSubtopic?.topic.name}
                  </div>
                  <h3>{dataSubtopic?.name}</h3>
                </div>

                <div className="preview-content  radius-8 ">
                  <div className="content ">
                    {isLoading ? (
                      ""
                    ) : (
                      <div className="content">
                        {console.log("dataContent", dataContent)}
                        {dataContent.map((data, index) => {
                          return (
                            <div key={index} className="">
                              {showContent(data, index)}
                            </div>
                          );
                        })}
                        {dataContent.length < 0 ? (
                          <p className="text-center">No data available</p>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-12 mt-96">
                <div className="row justify-content-center">
                  <div className="col-4 d-flex align-items-center">
                    <button className="btn-disable cursor-pointer p-7 mr-8">
                      <ArrowBack className="fs-20" />
                    </button>
                    <div className="one-row">
                      <div className="font-xs text-neutral-200">Back</div>
                      <div className="font-xs-medium text-neutral-400">
                        Reading 1
                      </div>
                    </div>
                  </div>
                  <div className="col-4 d-flex align-items-center justify-content-end text-end">
                    <div className="one-row">
                      <div className="font-xs text-neutral-200">Next</div>
                      <div className="font-xs-medium text-neutral-400">
                        Reading 3
                      </div>
                    </div>
                    <button className="btn-secondary cursor-pointer p-7 ml-8">
                      <ArrowForward className="fs-20" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-12">
                <div className="preview-footer  d-flex justify-content-center">
                  <div className="pt-98 text-center">
                    <h5
                      className="text-strong cursor-pointer"
                      onClick={backToTop}
                    >
                      <DoubleArrowRounded className="rotate" />
                      <span className="d-block">Back To Top</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  );
}

export default PreviewContentOrg;
