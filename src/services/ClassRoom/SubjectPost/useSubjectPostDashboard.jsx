import React, { useEffect, useState } from "react";
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

  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    addFeed(1, 5);
  }, []);

  const addFeed = (page, perPage) => {
    setIsLoadingFeed(true);
    GET(
      `/client/feed?classlistId=${params.classId}&subjectId=${params.subjectId}&page=${page}&perPage=${perPage}`,
      defConfig()
    )
      .then((r) => {
        let result = [];
        feedData.map((f) => result.push(f));
        r.data.map((c) => result.push(c));

        setFeedData(r.data);
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
        let result = [];
        feedData.map((f) => result.push(f));
        result.unshift(r.data);
        setFeedData(result);
        setIsLoadingCreateFeed(false);
        resetForm();
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingCreateFeed(false);
        resetForm();
      });
    // console.log("create post submited", values);
  };

  const handleSubmitComent = (values) => {
    console.log("comment post submited", values);
  };

  return {
    sideBarData,
    feedData,
    handleCreatePost,
    handleSubmitComent,
    isLoadingFeed,
    isLoadingCreateFeed,
  };
};

export default useSubjectPostDashboard;
