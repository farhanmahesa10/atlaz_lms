import React, { useState } from "react";
import { BreadCrumb, Divider } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  DoubleArrowRounded,
  ArrowForward,
  ArrowBack,
} from "@mui/icons-material";
import {
  LessonPreviewLoading,
  OutlineListMyBookList,
} from "../../../molecules";
import { useLessonPreviewMyBookList } from "../../../../services";
import { Link } from "react-router-dom";

const LessonPreviewOrg = () => {
  const { breadcrumbsData, params, data, pagination, isLoading } =
    useLessonPreviewMyBookList();
  return (
    <MainLayout navbarBg="bg-white" maxWidth="1440px">
      {isLoading ? (
        <LessonPreviewLoading />
      ) : (
        <>
          <div className="mt-16 d-none d-xl-block mx-48">
            <BreadCrumb data={breadcrumbsData} />
          </div>
          <div className="my-24 mx-24">
            <div className="mt-40 d-flex align-items-center flex-column">
              <h4 className="md-h1 text-center">{data.name}</h4>
              <div className="w-64">
                <Divider lineColor="bg-primary-500" height="h-2" />
              </div>

              <div className="mt-16 md-mt-24">
                {/*  */}
                {data.topic && data.topic.subtopic ? (
                  <>
                    <Link
                      to={`/my-book-list/practice/${params.subjectId}/${params.lessonId}/${data.topic._id}/${data.topic?.subtopic?._id}`}
                      className="btn-primary font-normal d-flex align-items-center"
                    >
                      Go to Topic <ArrowRightAltIcon className="pl-8" />
                    </Link>
                  </>
                ) : (
                  <button className="btn-disable font-normal d-flex align-items-center">
                    Go to Topic <ArrowRightAltIcon className="pl-8" />
                  </button>
                )}
              </div>
              <div className="mt-20 md-mt-32 ">
                <img
                  src={data.imageCover}
                  alt=""
                  className="max-w-888 w-full radius-8"
                />
              </div>
              <div className="mt-24 md-mt-40 d-flex w-full justify-content-between justify-content-md-center">
                <div className="d-flex  md-mr-68 w-148">
                  {!pagination.prev ? (
                    <>
                      <button className="btn btn-disable d-flex justify-content-center align-items-center w-28 h-28 p-0 m-0">
                        <ArrowBack className="fs-20" />
                      </button>
                      <div className="ml-8 d-flex justify-content-between flex-column ">
                        <span className="font-xs text-neutral-300">Back</span>
                        <span className="font-xs text-neutral-300">-</span>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={`/my-book-list/lesson-preview/${params.subjectId}/${pagination.prev._id}`}
                      className="d-flex"
                    >
                      <button className="btn btn-outline d-flex justify-content-center align-items-center w-28 h-28 p-0 m-0">
                        <ArrowBack className="fs-20" />
                      </button>
                      <div className="ml-8 d-flex justify-content-between flex-column ">
                        <span className="font-xs text-neutral-300">Back</span>
                        <span className="font-xs text-neutral-400 text-end">
                          {pagination.prev.name.length > 12
                            ? pagination.prev.name.substring(0, 12) + "..."
                            : pagination.prev.name}
                        </span>
                      </div>
                    </Link>
                  )}
                </div>
                {!pagination.next ? (
                  <>
                    <div className="mr-8 d-flex justify-content-between flex-column ">
                      <span className="font-xs text-neutral-300">Next</span>
                      <span className="font-xs text-neutral-400">-</span>
                    </div>
                    <button className="btn btn-disable d-flex justify-content-center align-items-center w-28 h-28 p-0 m-0">
                      <ArrowForward className="fs-20" />
                    </button>
                  </>
                ) : (
                  <Link
                    to={`/my-book-list/lesson-preview/${params.subjectId}/${pagination.next._id}`}
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
          <OutlineListMyBookList
            subjectId={params.subjectId}
            lessonId={params.lessonId}
          />
        </>
      )}
    </MainLayout>
  );
};

export default LessonPreviewOrg;
