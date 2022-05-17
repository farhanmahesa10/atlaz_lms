import React, { useState } from "react";

const useSubjectPostDashboard = () => {
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

  const [feedData, setFeedData] = useState({
    userId: "",
    posts: [
      {
        isAssessment: true,
        user: {
          name: "Hisyam Halimi",
          photo: "/images/product.png",
        },
        time: "6 April 2022 at 2:37 PM",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet",
        image: "/images/example-img-post/gb.jpeg",
      },
      {
        isAssessment: false,
        user: {
          name: "Uut Budiarto",
          photo: "/images/book.png",
        },
        time: "6 April 2022 at 2:37 PM",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet sunt nostrud amet sunt nostrud amet ",
        image: "/images/example-img-post/gb2.jpeg",
      },
    ],
  });

  const handleCreatePost = (values) => {
    console.log("create post submited", values);
  };

  const handleSubmitComent = (values) => {
    console.log("comment post submited", values);
  };

  return { sideBarData, feedData, handleCreatePost, handleSubmitComent };
};

export default useSubjectPostDashboard;
