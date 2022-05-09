import React from "react";

const useLessonPreview = () => {
  const breadcrumbsData = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/",
      label: "Subject",
    },
    {
      link: "/",
      label: "English play 01",
    },
    {
      link: "",
      label: "Unit 1 lalalalalala",
    },
  ];
  const dataOutline = [
    {
      name: "Unit 1 - Meet My New Frieends",
      complete: "10/64 Completed",
      topics: [
        {
          name: "Reading ",
          complete: "64/64 Completed",
          subTopics: [
            {
              name: "Reading 1",
              complete: "64/64 Completed",
            },
            {
              name: "Reading 2",
              complete: "64/64 Completed",
            },
          ],
        },
        {
          name: "Listening ",
          complete: "64/64 Completed",
          subTopics: [
            {
              name: "Listening 1",
              complete: "64/64 Completed",
            },
            {
              name: "Listening 2",
              complete: "64/64 Completed",
            },
          ],
        },
      ],
    },
    {
      name: "Unit 2 - How's Life?",
      complete: "20/64 Completed",
      topics: [
        {
          name: "Reading #2",
          complete: "64/64 Completed",
          subTopics: [
            {
              name: "Reading #1",
              complete: "64/64 Completed #",
            },
            {
              name: "Reading #2",
              complete: "64/64 Completed #",
            },
          ],
        },
        {
          name: "Listening #",
          complete: "64/64 Completed #",
          subTopics: [
            {
              name: "Listening #1",
              complete: "64/64 Completed #",
            },
            {
              name: "Listening #2",
              complete: "64/64 Completed #",
            },
          ],
        },
      ],
    },
  ];
  return { dataOutline, breadcrumbsData };
};

export default useLessonPreview;
