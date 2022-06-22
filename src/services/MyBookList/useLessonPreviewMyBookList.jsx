import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defConfig, GET } from "../../config/RestAPI";

const useLessonPreviewMyBookList = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [pagination, setPagination] = useState({ next: null, prev: null });

  const [breadcrumbsData, setBreadcrumbsData] = useState([]);

  useEffect(() => {
    initData();
  }, [params]);

  const initData = () => {
    setIsLoading(true);
    GET(`/client/classrooms/book/lesson/${params.lessonId}`, defConfig()).then(
      (r) => {
        setPagination({ next: r.next, prev: r.prev });
        setData(r.data);
        setBreadcrumbsData([
          {
            link: "/my-book-list",
            label: "My Book List",
          },

          {
            link: ``,
            label: r.data.name,
          },
        ]);
        setIsLoading(false);
      }
    );
  };

  return { breadcrumbsData, params, data, pagination, isLoading };
};

export default useLessonPreviewMyBookList;
