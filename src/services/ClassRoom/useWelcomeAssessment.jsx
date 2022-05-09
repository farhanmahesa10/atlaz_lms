import React from "react";

const useWelcomeAssessment = () => {
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

  const rulesCondition = [
    "This assessment has 2 parts: Reading and Vocabulary.",
    "Pay attention to your speed in completing the assessment, so you don't run out of time.",
    "Make sure all questions have been answered, if it is empty it will be considered wrong incorrect.",
    "You will not lose points if you answer incorrectly.",
    "This assessment can only be done once, if it has been submitted it cannot be done again.",
    "If something goes wrong on your device, this page can always be accessed again as long as the remaining time is still available.",
  ];
  return { dataOutline, breadcrumbsData, rulesCondition };
};

export default useWelcomeAssessment;
