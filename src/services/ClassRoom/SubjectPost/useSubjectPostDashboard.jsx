import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { defConfig, GET, POST } from "../../../config/RestAPI";
const useSubjectPostDashboard = () => {
  const params = useParams();
  const [sideBarData, setSideBarData] = useState({
    assessmentId: "",
    upcomingData: [
      {
        name: "Unit 1 Unit name",
        category: "assessment",
        date: "11",
        month: "Apr",
        clock: "10:00 AM",
      },
      {
        name: "Unit 2 Unit name",
        category: "assessment",
        date: "12",
        month: "Mar",
        clock: "12:00 PM",
      },
    ],
  });
  const [isLoadingFeed, setIsLoadingFeed] = useState(true);
  const [isLoadingCreateFeed, setIsLoadingCreateFeed] = useState(false);

  const [feeds, setFeeds] = useState([]);
  const [feedShowsCount, setFeedShowsCount] = useState(0);
  const [totalFeedData, settotalFeedData] = useState(0);

  const feedData = useMemo(() => {
    return feeds;
  }, [feeds]);
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setIsLoadingFeed(true);
      addFeed(1, 5, true);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const addFeed = (from, to, firstGet = true, toFirst = false) => {
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
        setFeedShowsCount(feedShowsCount + r.data.length);
        settotalFeedData(r.total);
        setIsLoadingFeed(false);
      })
      .catch((err) => {
        setIsLoadingFeed(false);
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
    handleDeletedFeed,
    addFeed,
    feedShowsCount,
    totalFeedData,
  };
};

export default useSubjectPostDashboard;
