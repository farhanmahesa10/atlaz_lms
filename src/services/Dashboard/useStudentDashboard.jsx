import { useEffect, useState } from "react";
import { defConfig, GET } from "../../config/RestAPI";

const useStudentDashboard = () => {
  const [dataBookList, setDataBookList] = useState([]);
  const [isLoadingBookList, setIsLoadingBookList] = useState(true);

  const [continueClassData, setContinueClassData] = useState({});
  const [continueClassLoading, setContinueClassLoading] = useState(true);

  const [upcomingData, setUpcomingData] = useState([]);
  const [upcomingLoading, setUpcomingLoading] = useState(true);

  useEffect(() => {
    initBookList();
    initContonueLearning();
    initUpcoming();
  }, []);

  const initBookList = () => {
    setIsLoadingBookList(true);
    GET("/client/dashboard/book_list", defConfig())
      .then((r) => {
        setDataBookList(r.data);
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
    GET(`/client/dashboard/upcoming_event`, defConfig())
      .then((r) => {
        setUpcomingData(r.data);
        setUpcomingLoading(false);
      })
      .catch((err) => {
        setUpcomingLoading(false);
      });
  };
  return {
    dataBookList,
    isLoadingBookList,
    continueClassData,
    continueClassLoading,
    upcomingData,
    upcomingLoading,
  };
};

export default useStudentDashboard;
