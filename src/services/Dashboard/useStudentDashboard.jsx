import { useEffect, useState } from "react";
import { defConfig, GET } from "../../config/RestAPI";

const useStudentDashboard = () => {
  const [dataBookList, setDataBookList] = useState([]);
  const [isLoadingBookList, setIsLoadingBookList] = useState(true);

  const [continueClassData, setContinueClassData] = useState({});
  const [continueClassLoading, setContinueClassLoading] = useState(true);

  const [upcomingData, setUpcomingData] = useState([]);
  const [upcomingLoading, setUpcomingLoading] = useState(true);

  const [overviewData, setOverviewData] = useState({
    assessment: {
      doneContent: 0,
      progress: 0,
      totalContent: 0,
    },
    assessmentGrading: {
      doneContent: 0,
      progress: 0,
      totalContent: 0,
    },
    ownedBook: {
      doneContent: 0,
      progress: 0,
      totalContent: 0,
    },
  });

  const [overviewLoading, setOverviewLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      initBookList();
      initContonueLearning();
      initUpcoming();
      initOverview();
    }

    return () => {
      mounted = false;
    };
  }, []);

  const initBookList = () => {
    setIsLoadingBookList(true);
    GET("/client/dashboard/book_list", defConfig())
      .then((r) => {
        let newData = [];
        r.data.map((res, ind) => {
          if (ind < 3) {
            newData.push(res);
          }
        });

        setDataBookList(newData);
        setIsLoadingBookList(false);
      })
      .catch((err) => {
        setIsLoadingBookList(false);
      });
  };

  const initContonueLearning = () => {
    setContinueClassLoading(true);
    GET(`/client/dashboard/latest_classlist`, defConfig())
      .then((r) => {
        setContinueClassData(r.data);
        setContinueClassLoading(false);
      })
      .catch((err) => {
        setContinueClassLoading(false);
      });
  };

  const initUpcoming = () => {
    setUpcomingLoading(true);
    GET(`/client/dashboard/get_events`, defConfig())
      .then((r) => {
        setUpcomingData(r.data.splice(0, 5));
        setUpcomingLoading(false);
      })
      .catch((err) => {
        setUpcomingLoading(false);
      });
  };

  const initOverview = async () => {
    // setOverviewLoading(false);
    let data = {};
    await GET("/client/dashboard/progress/my_content", defConfig())
      .then((r) => {
        data = {
          ...overviewData,
          ownedBook: {
            doneContent: r.data.doneContent || 0,
            progress: Math.round(r.data.progress || 0),
            totalContent: r.data.totalContent || 0,
          },
        };
      })
      .catch((err) => {
        console.log(err);
      });
    await GET("/client/dashboard/progress/my_assessment", defConfig())
      .then((r) => {
        data = {
          ...data,
          assessment: {
            doneContent: r.data.doneAssessment || 0, //
            progress: Math.round(r.data.progress.student_work || 0),
            totalContent: r.data.totalAssessment || 0, //1
          },
          assessmentGrading: {
            doneContent: r.data.gradedAssessment || 0, //2
            progress: Math.round(r.data.progress.graded || 0),
            totalContent: r.data.totalAssessment || 0, //1
          },
        };
      })
      .catch((err) => {
        console.log(err);
      });

    setOverviewData(data);
    await setOverviewLoading(false);
  };

  return {
    dataBookList,
    isLoadingBookList,
    continueClassData,
    continueClassLoading,
    upcomingData,
    upcomingLoading,
    overviewData,
    overviewLoading,
  };
};

export default useStudentDashboard;
