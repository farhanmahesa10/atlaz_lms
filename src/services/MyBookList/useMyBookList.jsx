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
      let newData = originalData.filter((r) => {
        let newCategory = category;
        if (newCategory === "") {
          newCategory = true;
        } else {
          newCategory = newCategory === r.level;
        }
        return (
          (_.includes(r.name.toLowerCase(), keyword.toLowerCase()) ||
            _.includes(r.author.toLowerCase(), keyword.toLowerCase())) &&
          newCategory
        );
      });
      setData(newData);
    }
  };

  const handleKeywordChange = (keyword) => {
    setKeyword(keyword);

    let newData = originalData.filter((r) => {
      let newCategory = category;
      if (newCategory === "") {
        newCategory = true;
      } else {
        newCategory = newCategory === r.level;
      }
      return (
        (_.includes(r.name.toLowerCase(), keyword.toLowerCase()) ||
          _.includes(r.author.toLowerCase(), keyword.toLowerCase())) &&
        newCategory
      );
    });
    setData(newData);
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
