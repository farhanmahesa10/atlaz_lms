import React, { useEffect, useState } from "react";
import { defConfig, GET } from "../../config/RestAPI";
import _ from "lodash";
import { TextsmsSharp } from "@mui/icons-material";
const useMyBookList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    GET("/booklist", defConfig())
      .then((r) => {
        console.log(r);
        setData(r.data);
        setOriginalData(r.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setCategory(category);
    if (category === "") {
      setData(originalData);
    } else {
      let newData = originalData.filter((r) => r.level === category);
      setData(newData);
    }
  };

  const handleKeywordChange = (keyword) => {
    setKeyword(keyword);
    // console.log(category);
    // let a = "Belajar Bahasa India 123472".toLowerCase().search(/bahasa/g);
    // console.log(a);
    var test = originalData.filter((r) => {
      let tes =
        r.name
          .toLowerCase()
          .search(new RegExp("/" + keyword.toLowerCase() + "/", "g")) >= 0;
      console.log(tes);
      return tes;
    });
    console.log(test);
  };

  return {
    data,
    isLoading,
    category,
    keyword,
    handleCategoryChange,
    handleKeywordChange,
  };
};

export default useMyBookList;
