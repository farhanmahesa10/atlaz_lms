import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { defConfig, GET, POST } from "../../../config/RestAPI";
const useSubjectPostDashboard = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [sideBarData, setSideBarData] = useState({
    upcomingData: [],
  });
  const [isLoadingFeed, setIsLoadingFeed] = useState(true);
  const [isLoadingCreateFeed, setIsLoadingCreateFeed] = useState(false);
  const [isLoadingLoadMore, setIsLoadingLoadMore] = useState(false);

  const [feeds, setFeeds] = useState([]);
  const [feedShowsCount, setFeedShowsCount] = useState(1);
  const [totalFeedData, settotalFeedData] = useState(0);

  const [isUpcomingLoading, setIsUpcomingLoading] = useState(true);

  const feedData = useMemo(() => {
    return feeds;
  }, [feeds]);
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setIsLoadingFeed(true);
      addFeed(1, 5, true);
      addUpcomingData();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const addUpcomingData = () => {
    GET(
      `/client/classrooms/my_school_assessment/get_event?subject=${params.subjectId}&classlist=${params.classId}&show=2`,
      defConfig()
    ).then((r) => {
      let tempSidebarData = { ...sideBarData };
      let newSidebarData = { ...tempSidebarData, upcomingData: r.data };
      setSideBarData(newSidebarData);
      setIsUpcomingLoading(false);
    })
    .catch((err) => {
      setIsUpcomingLoading(false);
    });
  };

  const addFeed = (from, to, firstGet = true, toFirst = false) => {
    setIsLoadingLoadMore(true);
    GET(
      `/client/feed?classlistId=${params.classId}&subjectId=${params.subjectId}&from=${from}&to=${to}`,
      defConfig()
    )
      .then((r) => {
        if (firstGet) {
          setFeeds(r.data);
        } else {
          const tempFeeds = [...feeds];
          const resultReversed = [...r.data].reverse();
          if (toFirst) {
            resultReversed.map((r) => {
              tempFeeds.unshift(r);
            });
            setFeeds(tempFeeds);
          } else {
            r.data.map((r) => {
              tempFeeds.push(r);
            });
            setFeeds(tempFeeds);
          }
        }
        setFeedShowsCount(feedShowsCount + r.data.length - 1);
        settotalFeedData(r.total);
        setIsLoadingFeed(false);
        setIsLoadingLoadMore(false);
      })
      .catch((err) => {
        setIsLoadingFeed(false);
        setIsLoadingLoadMore(false);
      });
  };

  const handleCreatePost = (values, resetForm) => {
    setIsLoadingCreateFeed(true);
    values = {
      ...values,
      classlist: params.classId,
      subject: params.subjectId,
    };
    POST("/client/feed", values, defConfig())
      .then((r) => {
        addFeed(1, 1, false, true);
        setIsLoadingCreateFeed(false);
        resetForm();
      })
      .catch((err) => {
        setIsLoadingCreateFeed(false);
        resetForm();
      });
    // console.log("create post submited", values);
  };

  const handleDeletedFeed = (data) => {
    const tempFeeds = [...feeds];
    const result = tempFeeds.filter((r) => r._id !== data.id);
    setFeeds(result);
  };

  return {
    sideBarData,
    feedData,
    handleCreatePost,
    isLoadingFeed,
    isLoadingCreateFeed,
    isLoadingLoadMore,
    handleDeletedFeed,
    addFeed,
    feedShowsCount,
    totalFeedData,
    params,
    isUpcomingLoading,
  };
};

export default useSubjectPostDashboard;
