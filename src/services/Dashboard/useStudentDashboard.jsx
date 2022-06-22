import { useEffect, useState } from "react";
import { defConfig, GET } from "../../config/RestAPI";

const useStudentDashboard = () => {
  const [dataBookList, setDataBookList] = useState([]);
  const [isLoadingBookList, setIsLoadingBookList] = useState(true);
  useEffect(() => {
    initBookList();
    initContonueLearning();
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
    GET(`/client/dashboard/recent?latest=classlist`, defConfig())
      .then((r) => {
        console.log("tuhu", r);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return { dataBookList, isLoadingBookList };
};

export default useStudentDashboard;
