import React, { useEffect, useState } from "react";
import "./PreviewContentOrg.scss";
import MainLayout from "../../../Layout/Mainlayout";
import imgHeader1 from "../../../../assets/images/detail-preview-bg-1.png";
import imgHeader2 from "../../../../assets/images/detail-preview-bg-2.png";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
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
  OutlineList,
  ShortAnswer,
  SingleChoice,
  TextEditor,
} from "../../../molecules";
import { GET, defConfig } from "../../../../config/RestAPI";
import { PreviewContentLoading } from "../../../molecules";
import { searchNoData } from "../../../../assets/images";
function PreviewContentOrg() {
  const { id, classId, subjectId, lessonId, topicId } = useParams();

  const [dataSubtopic, setDataSubtopic] = useState();
  const [dataContent, setDataContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [pagination, setPagination] = useState({});

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    backToTop();
  }, [id, classId, subjectId, lessonId, topicId]);

  const showContent = (data) => {
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

  const initData = async () => {
    setIsLoading(true);

    try {
      let content = await GET(
        `/client/activity/get_content_book?subTopicId=${id}`,
        defConfig()
      );

      setDataContent(content.data);
      let subTopic = await GET(`/subtopic/${id}`, defConfig());
      setDataSubtopic(subTopic.data);
      setPagination({ next: content.next, prev: content.prev });
    } catch (err) {}

    setIsLoading(false);
  };

  useEffect(() => {
    initData();
  }, [id, classId, subjectId, lessonId, topicId]);

  useEffect(() => {
    initData();
  }, []);

  return (
    <div className="Layout-preview-content">
      <MainLayout
        navbarBg="bg-white"
        navNoMenu
        redirectOnNavClose={`/classroom/start-learning-view/${classId}/${subjectId}`}
        modalTitle="Leave unsubmited exercise"
        modalMessage="Exercises that have not been submitted will be lost. Please submit the exercise before leaving the page"
        isNeedConfirm
        title={dataSubtopic?.subject.name}
        footerBg="bg-secondary-200"
      >
        <section className="sub-topic-detail-preview ">
          <img src={imgHeader1} className="image-header1 w-100" alt="" />
          <img src={imgHeader2} className="image-header2 w-100" alt="" />
          <div className="container ">
            {isLoading ? (
              <PreviewContentLoading />
            ) : (
              <div className="row justify-content-center mx-12 md-mx-24">
                <div className="col-lg-8 col-12">
                  <div className="header-preview radius-14 bg-white py-16 px-24 mb-24">
                    <div className="neutral300 mb-8">
                      {dataSubtopic?.topic.name}
                    </div>
                    <h3>{dataSubtopic?.name}</h3>
                  </div>

                  <div className="preview-content  radius-8 ">
                    <div className="content ">
                      <div className="content">
                        {dataContent.map((data, index) => {
                          return (
                            <div key={index} className="">
                              {showContent(data)}
                            </div>
                          );
                        })}
                        {dataContent.length < 1 ? (
                          <div className="h-295">
                            <div className="d-flex h-full justify-content-center align-items-center">
                              <div className="text-center">
                                <img
                                  src={searchNoData}
                                  alt=""
                                  className="max-w-143"
                                />
                                <h6 className="mt-24">No Book Cotent Yet</h6>
                                <p className="max-w-297 font-sm">
                                  The author hasn't put content on this page
                                  yet. Please wait to enjoy this page!
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-12 mt-96">
                  <div className="row justify-content-center">
                    <div className="col-4 d-flex align-items-center">
                      {!pagination.prev ? (
                        <>
                          <button className="btn btn-disable d-flex justify-content-center align-items-center w-28 h-28 p-0 m-0">
                            <ArrowBack className="fs-20" />
                          </button>
                          <div className="ml-8 d-flex justify-content-between flex-column ">
                            <span className="font-xs text-neutral-300">
                              Back
                            </span>
                            <span className="font-xs text-neutral-300">-</span>
                          </div>
                        </>
                      ) : (
                        <Link
                          to={`/classroom/content-practice/${classId}/${subjectId}/${lessonId}/${topicId}/${pagination.prev._id}`}
                          className="d-flex"
                        >
                          <button className="btn btn-outline d-flex justify-content-center align-items-center w-28 h-28 p-0 m-0">
                            <ArrowBack className="fs-20" />
                          </button>
                          <div className="ml-8 d-flex justify-content-between flex-column ">
                            <span className="font-xs text-neutral-300">
                              Back
                            </span>
                            <span className="font-xs text-neutral-400 text-end">
                              {pagination.prev.name.length > 12
                                ? pagination.prev.name.substring(0, 12) + "..."
                                : pagination.prev.name}
                            </span>
                          </div>
                        </Link>
                      )}
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-end text-end">
                      {!pagination.next ? (
                        <>
                          <div className="mr-8 d-flex justify-content-between flex-column ">
                            <span className="font-xs text-neutral-300">
                              Next
                            </span>
                            <span className="font-xs text-neutral-400">-</span>
                          </div>
                          <button className="btn btn-disable d-flex justify-content-center align-items-center w-28 h-28 p-0 m-0">
                            <ArrowForward className="fs-20" />
                          </button>
                        </>
                      ) : (
                        <Link
                          to={`/classroom/content-practice/${classId}/${subjectId}/${lessonId}/${topicId}/${pagination.next._id}/`}
                          className="d-flex"
                        >
                          <div className="mr-8 d-flex justify-content-between flex-column ">
                            <span className="font-xs text-neutral-300 text-end">
                              Next
                            </span>
                            <span className="font-xs text-neutral-400">
                              {pagination.next.name.length > 12
                                ? pagination.next.name.substring(0, 12) + "..."
                                : pagination.next.name}
                            </span>
                          </div>
                          <button className="btn btn-outline d-flex justify-content-center align-items-center w-28 h-28 p-0 m-0">
                            <ArrowForward className="fs-20" />
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-12">
                  <div className="preview-footer  d-flex justify-content-center">
                    <div className="pt-98 text-center">
                      {/* <h5
                        className="text-strong cursor-pointer"
                        onClick={backToTop}
                      >
                        <DoubleArrowRounded className="rotate" />
                        <span className="d-block">Back To Top</span>
                      </h5> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </MainLayout>
      <OutlineList
        classId={classId}
        subjectId={subjectId}
        lessonId={lessonId}
        topicId={topicId}
        subtopicId={id}
      />
    </div>
  );
}

export default PreviewContentOrg;
