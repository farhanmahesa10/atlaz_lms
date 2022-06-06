import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defConfig, GET } from "../../config/RestAPI";

const useWelcomeAssessment = () => {
  const params = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      link: "/classroom",
      label: "Classroom",
    },
    {
      link: `/classroom/class/${params.classId}`,
      label: "Class",
    },
    {
      link: `/classroom/assessment/${params.classId}/${params.subjectId}/dashboard`,
      label: "Subject",
    },
  ]);

  const [modalText, setModalText] = useState({});

  const handleBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case "on going":
        return "border-info-500 text-info-500 border-info-500";
      case "not started":
        return "text-neutral-300 bg-neutral-100 border-neutral-300";
      case "submited":
        return "text-success-600 border-success-600 border-success-600";
      case "absent":
        return "text-red-500 border-red-500 border-danger-500";
      default:
        break;
    }
  };

  useEffect(() => {
    initData();
  }, [params]);

  const handleModalText = (status) => {
    switch (status.toLowerCase()) {
      case "not started":
        setModalText({
          title: "This Assessment is Not Started Yet",
          message:
            "Please check the schedule for this assessment, and please come back again on a predetermined schedule.",
        });
        break;
      case "submited":
        setModalText({
          title: "Assessment have submitted",
          message:
            "You have submitted this assessment and cannot re-enter because its only done once. To check the this assessment grade, please go to the grading page.",
        });
        break;
      case "absent":
        setModalText({
          title: "Assessment has missed",
          message:
            "Sorry, you have missed this assessment and cannot repeat the process. Contact your teacher for re-enter.",
        });
        break;
      default:
        break;
    }
  };

  const handleDuration = (start, end) => {
    if (start && end) {
      let startMoment = moment(start);
      let endMoment = moment(end);
      let duration = moment.duration(endMoment.diff(startMoment));
      let day = duration._data.days;
      let hour = duration._data.hours;
      let minute = duration._data.minutes;
      if (startMoment < endMoment) {
        let result = `${day > 0 ? day : "0"}d ${hour > 0 ? hour : "0"}hr ${
          minute > 0 ? minute : "0"
        }min`;
        return result;
        // console.log(result);
      } else {
        let result = `0d 0hr 0min`;
        return result;
      }
    }
  };

  const initData = () => {
    setIsLoading(true);
    GET(
      `/client/classrooms/student_assessment/timeline/${params.id}`,
      defConfig()
    )
      .then((r) => {
        setData(r.data);
        setIsLoading(false);
        let newBread = [
          {
            link: "/classroom",
            label: "Classroom",
          },
          {
            link: `/classroom/class/${params.classId}`,
            label: "Class",
          },
          {
            link: `/classroom/assessment/${params.classId}/${params.subjectId}/dashboard`,
            label: "Subject",
          },
        ];
        newBread.push({
          link: "",
          label: r.data.subtopic.name,
        });
        handleModalText(r.data.status);
        setBreadcrumbsData(newBread);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };
  return {
    breadcrumbsData,
    params,
    data,
    isLoading,
    handleDuration,
    modalText,
    handleBadgeColor,
  };
};

export default useWelcomeAssessment;
